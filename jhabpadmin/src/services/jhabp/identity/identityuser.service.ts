import { request } from 'umi';

export const currentUser = async (): Promise<API.IdentityUser> => {
  const userInfo = await request<API.IdentityUser>(`${Identity_API}/api/v1/IdentityUser/info`, {
    method: 'GET',
  });
  userInfo.avatar =
    'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';
  return userInfo;
};
