import { request } from 'umi';

export const currentUser = async (): Promise<API.IdentityUser> => {
  const userInfo = await request<API.IdentityUser>(`/identityapi/v1/IdentityUser/info`, {
    method: 'GET',
  });
  userInfo.avatar =
    'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';
  console.log(userInfo);
  return userInfo;
};
