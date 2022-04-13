import { request } from 'umi';

export const currentUser = async (): Promise<API.IdentityUser> => {
  return await request<API.IdentityUser>(`/identityapi/v1/IdentityUser/info`, {
    method: 'GET',
  });
};
