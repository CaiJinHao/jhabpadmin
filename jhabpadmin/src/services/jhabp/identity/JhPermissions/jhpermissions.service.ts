import { request } from 'umi';
export const GetPermissionGrantedByName = async (
  input: API.JhIdentity.PermissionGrantedByNameRetrieveInputDto,
): Promise<API.JhIdentity.PermissionGrantedDto> => {
  return await request<API.JhIdentity.PermissionGrantedDto>(`${Identity_API}api/v1/JhPermissions`, {
    method: 'Post',
    data: input,
  });
};
export const GetTrees = async (
  inputDto?: API.JhIdentity.PermissionTreesRetrieveInputDto,
): Promise<API.ListResultDto<API.TreeAntdDto>> => {
  return await request<API.ListResultDto<API.TreeAntdDto>>(
    `${Identity_API}api/v1/JhPermissions/Tree`,
    {
      method: 'Get',
      params: inputDto,
    },
  );
};
export const Update = async (
  inputDto: API.JhIdentity.PermissionGrantedCreateInputDto,
): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/JhPermissions`, {
    method: 'Post',
    data: inputDto,
  });
};
