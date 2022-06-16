import { Log, UserManager } from 'oidc-client';

Log.logger = console;

const clientRoot = 'http://localhost:4200/';

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
  authority: 'https://localhost:6201/',
  client_id: 'WebAppYourName_App',
  redirect_uri: `http://localhost:4200/signin-callback.html`, //
  // silent_redirect_uri: `${clientRoot}/silent-callback.html`,
  post_logout_redirect_uri: `http://localhost:4200`,
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
  console.log(authorizationInfoJson);
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

export const getUser = async () => {
  const authorizationInfo = await userManager.getUser();
  if (authorizationInfo) {
    sessionStorage.setItem(AuthorizationInfoStorageKey, JSON.stringify(authorizationInfo));
    return authorizationInfo;
  }
  return await login();
};

userManager.events.addAccessTokenExpiring(async () => {
  console.log('addAccessTokenExpiring');
  await renewToken();
});

userManager.events.addAccessTokenExpired(async () => {
  console.log('addAccessTokenExpired');
  await renewToken();
});
