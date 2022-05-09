import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { SettingDrawer } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { currentUser as queryCurrentUser } from '@/services/jhabp/identity/identityuser.service';
import { currentUserNavMenus as queryCurrentUserNavMenus } from '@/services/jhabp/menu/menu.role.map.service';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import defaultSettings from '../config/defaultSettings';
import { RequestConfig } from 'umi';

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
    try {
      const user = await queryCurrentUser();
      return user;
    } catch (error) {
      // history.push(LOGIN_PATH);
      window.location.href = Authorize_Login_Path;
    }
    return undefined;
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
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== LOGIN_PATH) {
        // history.push(LOGIN_PATH);
        window.location.href = Authorize_Login_Path;
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
  console.log(options);

  return {
    url: url,
    options: {
      ...options,
      headers: {
        Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ1OUYzMzFCNTk2Qjk3ODAxQzE4NENEODQ3RjY4MzlBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTIwNzczNDYsImV4cCI6MTY4MzYxMzM0NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NjIwMSIsImF1ZCI6IldlYkFwcFlvdXJOYW1lIiwiY2xpZW50X2lkIjoiV2ViQXBwWW91ck5hbWVfQXBwIiwic3ViIjoiM2EwM2IwMmQtNzAwMC0wYmFkLTMwOTktNTM2NGI1MDZhM2I1IiwiYXV0aF90aW1lIjoxNjUyMDc3MzQ2LCJpZHAiOiJsb2NhbCIsInJvbGUiOiJhZG1pbiIsInBob25lX251bWJlcl92ZXJpZmllZCI6IkZhbHNlIiwiZW1haWwiOiI1MzEwMDM1MzlAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJGYWxzZSIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1MjA3NzM0Niwic2NvcGUiOlsiYWRkcmVzcyIsImVtYWlsIiwib3BlbmlkIiwicGhvbmUiLCJwcm9maWxlIiwicm9sZSIsIldlYkFwcFlvdXJOYW1lIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.VoqEpu7J2bGRdAvlybm5jfK0CRopUAutKApjTukj18nxOd3xNMvmKEOodEa9aNo4CWIZFJGbXr3Kdz3-rS1NjBvn0u7OTZld5DUvs767GEVaOtQu5_2FIDiLSS6It1KICSUlmpu4ktsmrbzr6hpZkqMcpOEqJ0A3E2iwAVlo7aw7t-XYnDVDNXxlklsxDn-CGfmV1M9hjRba7pDt656FQsNKRjaZCBEZiCqxiwV2mpooO9CApi_FykmhPAVOnKsC-zl9OyY39Z31v59UGwXh3vZTRBiDz0CtY5wCLAt1aFH8XraRYrqFqnf7nAx8eJvif6TBEDklOxxar95cAaQF0A`,
      },
    },
  };
};

export const request: RequestConfig = {
  requestInterceptors: [proTableRequestInterceptor],
};
