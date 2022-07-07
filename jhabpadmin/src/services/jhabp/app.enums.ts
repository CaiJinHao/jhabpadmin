import { request } from 'umi';

export const getYesOrNo = async () => {
  return await request(`${Identity_API}api/v1/AppEnums/YesOrNo`);
};

export const getProvider = async () => {
  return await request(`${Identity_API}api/v1/AppEnums/Provider`);
};

export enum ViewOperator {
  Add = 1,
  Edit = 2,
  Detail = 3,
}
