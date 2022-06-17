import { Log, UserManager } from 'oidc-client';
import { environment } from '@/environments/environment';

// Log.logger = console;

const userManager = new UserManager({
  authority: environment.oAuthConfig.authority,
  client_id: environment.oAuthConfig.clientId,
  redirect_uri: environment.oAuthConfig.redirectUri,
  silent_redirect_uri: environment.oAuthConfig.redirectUri,
  post_logout_redirect_uri: environment.oAuthConfig.postLogoutRedirectUri,
  response_type: environment.oAuthConfig.responseType,
  scope: environment.oAuthConfig.scope,
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
  await userManager.signinRedirect();
  return undefined;
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

/**使用登录回调的方式获取授权信息 */
export const getUser = async () => {
  try {
    //可以先使用正常的获取，在使用回调获取
    const authorizationInfo = await userManager.signinRedirectCallback();
    if (authorizationInfo) {
      sessionStorage.setItem(AuthorizationInfoStorageKey, JSON.stringify(authorizationInfo));
      return authorizationInfo;
    }
    return undefined;
  } catch (error) {
    // return await login();
    return undefined;
  }
};

export const removeUser = async () => {
  await userManager.removeUser();
};

export const clearState = async () => {
  await userManager.clearStaleState();
};

userManager.events.addAccessTokenExpiring(async () => {
  Log.info('addAccessTokenExpiring');
  await renewToken();
});

userManager.events.addAccessTokenExpired(async () => {
  Log.info('addAccessTokenExpired');
  await renewToken();
});

userManager.events.addSilentRenewError(function (e) {
  Log.info('silent renew error', e.message);
});

userManager.events.addUserLoaded(function (user) {
  Log.info('user loaded', user);
});

userManager.events.addUserUnloaded(function () {
  Log.info('user unloaded');
});

userManager.events.addUserSignedIn(function () {
  Log.info('user logged in to the token server');
});
userManager.events.addUserSignedOut(function () {
  Log.info('user logged out of the token server');
});
