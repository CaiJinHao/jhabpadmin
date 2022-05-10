import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { SettingDrawer } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { currentUserNavMenus as queryCurrentUserNavMenus } from '@/services/jhabp/menu/menu.role.map.service';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import defaultSettings from '../config/defaultSettings';
import { RequestConfig } from 'umi';
import { currentUser as queryCurrentUser } from '@/services/jhabp/identity/identityuser.service';
import { getUser, login, getToken } from '@/services/jhabp/auth.service';

const isDev = process.env.NODE_ENV === 'development';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    //同源方式
    try {
      return await queryCurrentUser();
    } catch (error) {
      console.log(error);
      window.location.href = Authorize_Login_Path;
      return undefined;
    }
    //非同源方式、需要携带accesstoken
    // const authorizationInfo = await getUser();
    // if (authorizationInfo) {
    //   return await queryCurrentUser();
    // } else {
    //   await login();
    //   return;
    // }
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== LOGIN_PATH) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      console.log(location);
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== LOGIN_PATH) {
        // history.push(LOGIN_PATH);
        // window.location.href = Authorize_Login_Path;
      }
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
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
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
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    menu: {
      locale: false,
      request: async () => {
        return await queryCurrentUserNavMenus();
      },
    },
    ...initialState?.settings,
  };
};

/** ProTable 分页处理 */
const proTableRequestInterceptor = (url: any, options: any) => {
  //@ts-ignore
  const { current, pageSize } = options.params;
  if (current) {
    const skipCount = (current - 1) * pageSize;
    Object.assign(options.params, { maxResultCount: pageSize, skipCount });
    delete options.params.current;
    delete options.params.pageSize;
  }
  // const authorizationInfo = getToken();
  return {
    url: url,
    options: {
      ...options,
      // headers: {
      //   Authorization: `${authorizationInfo.token_type} ${authorizationInfo.access_token}`,
      // },
    },
  };
};

export const request: RequestConfig = {
  requestInterceptors: [proTableRequestInterceptor],
};
