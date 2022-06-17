import { Log, UserManager } from 'oidc-client';

Log.logger = console;

const clientRoot = window.origin;

// const userManager = new UserManager({
//   authority: 'https://localhost:6201/',
//   client_id: 'WebAppYourName_Antd',
//   redirect_uri: `http://localhost:4200/signin-callback.html`, ///signin-callback.html
//   // silent_redirect_uri: `${clientRoot}/silent-callback.html`,
//   post_logout_redirect_uri: `https://localhost:6201/signout-callback-oidc`,
//   response_type: 'code',
//   scope: 'email openid profile role phone address WebAppYourName offline_access',
//   accessTokenExpiringNotificationTime: 300,
// });
const userManager = new UserManager({
  authority: Identity_API,
  client_id: 'WebAppYourName_App',
  redirect_uri: clientRoot, //
  // silent_redirect_uri: `${clientRoot}/silent-callback.html`,
  post_logout_redirect_uri: clientRoot,
  response_type: 'code',
  scope: 'email openid profile role phone address WebAppYourName offline_access',
  accessTokenExpiringNotificationTime: 300,
});

export const renewToken = async () => {
  const authorizationInfo = await userManager.signinSilent();
  if (authorizationInfo) {
    console.log('renewToken');
    console.log(authorizationInfo);
    sessionStorage.setItem(AuthorizationInfoStorageKey, JSON.stringify(authorizationInfo));
    return authorizationInfo;
  }
  return undefined;
};

export const getToken = () => {
  const authorizationInfoJson = sessionStorage.getItem(AuthorizationInfoStorageKey);
  if (authorizationInfoJson) {
    const authorizationInfo = JSON.parse(authorizationInfoJson);
    return authorizationInfo;
  } else {
    return undefined;
  }
};

export const login = async () => {
  return await userManager.signinRedirect();
};

export const logout = async () => {
  return await userManager.signoutRedirect();
};

// export const getUser = async () => {
//   const authorizationInfo = await userManager.getUser();
//   if (authorizationInfo) {
//     sessionStorage.setItem(AuthorizationInfoStorageKey, JSON.stringify(authorizationInfo));
//     return authorizationInfo;
//   }
//   return await login();
// };

/**使用登录回调的方式获取token */
export const getUser = async () => {
  try {
    const authorizationInfo = await userManager.signinCallback();
    if (authorizationInfo) {
      sessionStorage.setItem(AuthorizationInfoStorageKey, JSON.stringify(authorizationInfo));
      return authorizationInfo;
    }
  } catch (error) {
    console.log(error);
    return await login();
  }
};

userManager.events.addAccessTokenExpiring(async () => {
  console.log('addAccessTokenExpiring');
  await renewToken();
});

userManager.events.addAccessTokenExpired(async () => {
  console.log('addAccessTokenExpired');
  await renewToken();
});
