import { request } from 'umi';
export const GetPermissionGrantedByRole = async (
  input: API.JhIdentity.PermissionGrantedRetrieveInputDto,
): Promise<API.ListResultDto<string>> => {
  return await request<API.ListResultDto<string>>(
    `${Identity_API}api/v1/JhPermissions/GrantedByRole`,
    {
      method: 'Get',
      params: input,
    },
  );
};
export const Update = async (
  inputDto: API.JhIdentity.PermissionGrantedCreateInputDto,
): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/JhPermissions/GrantedByRole`, {
    method: 'Put',
    data: inputDto,
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
export const GetCurrentGranted = async (): Promise<API.ListResultDto<API.JhIdentity.PermissionGrantedDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.PermissionGrantedDto>>(`${Identity_API}api/v1/JhPermissions/CurrentGranted`, {
    method: 'Get',
  });
};
