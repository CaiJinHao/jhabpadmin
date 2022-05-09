import { Log, UserManager } from 'oidc-client';

Log.logger = console;

const clientRoot = 'http://localhost:4200/';
const settings = {
  authority: 'https://localhost:6201/',
  client_id: 'WebAppYourName_Antd',
  redirect_uri: `http://localhost:4200/signin-callback.html`, ///signin-callback.html
  // silent_redirect_uri: `${clientRoot}/silent-callback.html`,
  post_logout_redirect_uri: `https://localhost:6201/signout-callback-oidc`,
  response_type: 'id_token token',
  scope: 'email openid profile role phone address WebAppYourName offline_access',
};

const userManager = new UserManager(settings);
export const getUser = async () => {
  return await userManager.getUser();
};
export const login = async () => {
  return await userManager.signinRedirect();
};
export const logout = async () => {
  return await userManager.signoutRedirect();
};
export const renewToken = async () => {
  return await userManager.signinSilent();
};
