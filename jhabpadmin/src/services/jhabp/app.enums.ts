import { request } from 'umi';

export const get = async () => {
  return await request(`${Identity_API}/api/v1/AppEnums/YesOrNo`);
};
