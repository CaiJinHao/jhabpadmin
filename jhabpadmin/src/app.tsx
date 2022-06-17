import { SettingDrawer } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { getLocale, addLocale, setLocale, history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import defaultSettings from '../config/defaultSettings';
import type { RequestInterceptor, RequestOptionsInit, ResponseError } from 'umi-request';
import { getApplicationConfiguration } from './services/jhabp/abp.service';
import Cookies from 'universal-cookie';
import type { InitialStateType } from './model';
import type { ApplicationConfigurationDto } from '@/lib/abp/asp-net-core/mvc/application-configurations/models';
import { message } from 'antd';
import * as jhpermissions from '@/services/jhabp/identity/JhPermissions/jhpermissions.service';
import * as identityuserService from '@/services/jhabp/identity/IdentityUser/identityuser.service';

import { getUser, login, getToken } from '@/services/jhabp/auth.service';
const isDev = process.env.NODE_ENV === 'development';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<InitialStateType> {
  /**
 语言的设置，取决于浏览器设置=>语言=》第一顺序位=》中文(简体)
 Accept-Language: zh-CN,zh;q=0.9
 */
  /* TODO:添加后端本地化文本 ，本地化文本对应需要和后台对应*/
  const appendLocalization = async (
    currentLocale: string,
    applicationConfiguration: ApplicationConfigurationDto,
  ) => {
    console.log(applicationConfiguration.localization);
    for (const key in new Object(applicationConfiguration.localization.values)) {
      addLocale(currentLocale, applicationConfiguration.localization.values[key], {
        momentLocale: currentLocale.toLowerCase(),
        antd: currentLocale.replace('-', ''),
      });
    }
  };

  const setMyLocale = () => {
    const _currentLocale = getLocale() as string;
    //设置匹配不上的区域语言
    switch (_currentLocale) {
      case 'zh':
      case 'zh-CN':
        {
          setLocale('zh-CN', false);
        }
        break;
      case 'zh-TW':
      case 'zh-HK':
        {
          setLocale('zh-CN', false);
        }
        break;
    }
    return _currentLocale;
  };
  const applicationConfiguration = await getApplicationConfiguration();
  const currentLocale = setMyLocale();
  await appendLocalization(currentLocale, applicationConfiguration);

  const fetchUserInfo = async () => {
    const authorizationInfo = await getUser();
    if (authorizationInfo) {
      const userInfo = await identityuserService.GetCurrent();
      userInfo.avatar =
        'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';
      return userInfo;
    } else {
      await login();
      return undefined;
    }
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== LOGIN_PATH) {
    const currentUser = await fetchUserInfo();
    const permissions = await jhpermissions.GetCurrentGranted();
    return {
      applicationConfiguration,
      fetchUserInfo,
      currentUser,
      permissions,
      settings: defaultSettings,
    };
  }
  return {
    applicationConfiguration,
    fetchUserInfo,
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    locale: 'zh-CN',
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      console.log('onPageChange');
      // const { location } = history;
      // console.log(location);
      // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== LOGIN_PATH) {
      // history.push(LOGIN_PATH);
      // }
    },
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs" key="docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    // menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children: any, props: any) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings: any) => {
                setInitialState((preInitialState: any) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/** ProTable 分页处理 */
const proTableRequestInterceptor: RequestInterceptor = (
  url: string,
  options: RequestOptionsInit,
) => {
  //@ts-ignore
  const { current, pageSize } = options.params;
  if (current) {
    const skipCount = (current - 1) * pageSize;
    Object.assign(options.params, { maxResultCount: pageSize, skipCount });
    //@ts-ignore
    delete options.params.current;
    //@ts-ignore
    delete options.params.pageSize;
  }
  const authorizationInfo = getToken();
  if (authorizationInfo) {
    return {
      url: url,
      options: {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `${authorizationInfo.token_type} ${authorizationInfo.access_token}`,
        },
      },
    };
  }

  return {
    url: url,
    options: {
      ...options,
    },
  };
};

const xsrfAppendRequestInterceptor: RequestInterceptor = (
  url: string,
  options: RequestOptionsInit,
) => {
  const cookie = new Cookies();
  return {
    url,
    options: {
      ...options,
      errorHandler: (error: ResponseError<API.RemoteServiceErrorResponse>) => {
        if (error.response) {
          //http状态判断
          console.log(error.response);
          console.log(error.data);
          if (error.data.error) {
            message.error(error.data.error.message, 6);
          } else {
            message.error(error.response.statusText, 6);
          }
        } else {
          console.log('error not response');
        }
      },
      headers: {
        ...options.headers,
        // RequestVerificationToken: cookie.get('XSRF-TOKEN'),
      },
    },
  };
};

const requestMiddleware = async (ctx: any, next: () => void) => {
  const { req } = ctx;
  console.log(req);
  // if (!(req.url.indexOf('/Swashbuckle/SetCsrfCookie') > -1)) {
  //   console.log('zl');
  //   if (req.url.indexOf(EquipmentManagement_API) > -1) {
  //     await setCsrfCookieByHostApi();
  //   } else {
  //     await setCsrfCookieByIdentityApi();
  //   }
  // }
  await next();
  const { res } = ctx;
  console.log(res);
};

//先走拦截器、后走中间件
export const request: RequestConfig = {
  requestInterceptors: [proTableRequestInterceptor], //xsrfAppendRequestInterceptor
  // middlewares: [requestMiddleware],
};
