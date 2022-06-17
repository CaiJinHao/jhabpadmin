import { request } from 'umi';

/**统一身份登录 */
export const login = async (input: API.LoginInput): Promise<API.LoginResponse> => {
  return await request<API.LoginResponse>(`${Identity_API}api/account/login`, {
    method: 'POST',
    data: input,
  });
};

/**统一身份登出*/
export const logout = async () => {
  return await request(`${Identity_API}api/account/logout`, {
    method: 'GET',
  });
};
