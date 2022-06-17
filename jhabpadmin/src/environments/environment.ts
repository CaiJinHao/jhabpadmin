const baseUrl = window.origin;
const identityApi = 'https://localhost:6201/';

//@ts-ignore
window.Identity_API = identityApi; //'/identity/';
//@ts-ignore
window.LOGIN_PATH = '/user/login'; //原生登录地址
//授权用户信息
//@ts-ignore
window.AuthorizationInfoStorageKey = 'AUTHORIZATIONINFO';

export const environment = {
  oAuthConfig: {
    authority: identityApi,
    redirectUri: baseUrl,
    postLogoutRedirectUri: baseUrl,
    clientId: 'WebAppYourName_App',
    responseType: 'code',
    scope: 'offline_access WebAppYourName', //'email openid profile role phone address WebAppYourName offline_access'
    requireHttps: true,
  },
};
