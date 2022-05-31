import { request } from 'umi';

export const Create = async (
  input: API.JhIdentity.IdentityRoleCreateDto,
): Promise<API.JhIdentity.IdentityRoleDto> => {
  if (!input.extraProperties) {
    input.extraProperties = {};
  }
  return await request<API.JhIdentity.IdentityRoleDto>(
    `${Identity_API}api/v1/IdentityRole/roles/`,
    {
      method: 'Post',
      data: input,
    },
  );
};
export const DeleteById = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/IdentityRole/${id}`, {
    method: 'Delete',
  });
};
export const DeleteByKeys = async (keys: string[]): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/IdentityRole/keys`, {
    method: 'Delete',
    data: keys,
  });
};
export const Update = async (
  id: string,
  input: API.JhIdentity.IdentityRoleUpdateInputDto,
): Promise<API.JhIdentity.IdentityRoleDto> => {
  return await request<API.JhIdentity.IdentityRoleDto>(`${Identity_API}/api/identity/roles/${id}`, {
    method: 'Put',
    data: input,
  });
};
export const GetList = async (
  input: API.JhIdentity.IdentityRoleRetrieveInputDto,
): Promise<API.PagedResultDto<API.JhIdentity.IdentityRoleDto>> => {
  return await request<API.PagedResultDto<API.JhIdentity.IdentityRoleDto>>(
    `${Identity_API}api/v1/IdentityRole`,
    {
      method: 'Get',
      params: input,
    },
  );
};
export const GetEntitys = async (
  inputDto: API.JhIdentity.IdentityRoleRetrieveInputDto,
): Promise<API.ListResultDto<API.JhIdentity.IdentityRoleDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.IdentityRoleDto>>(
    `${Identity_API}api/v1/IdentityRole/all`,
    {
      method: 'Get',
      params: inputDto,
    },
  );
};
export const Get = async (id: string): Promise<API.JhIdentity.IdentityRoleDto> => {
  return await request<API.JhIdentity.IdentityRoleDto>(`${Identity_API}api/v1/IdentityRole`, {
    method: 'Get',
    params: { id },
  });
};
export const GetTree = async (name: string): Promise<any> => {
  return await request<any>(`${Identity_API}api/v1/IdentityRole/tree`, {
    method: 'Get',
    params: { name },
  });
};
export const GetOptions = async (name: string): Promise<any> => {
  return await request<any>(`${Identity_API}api/v1/IdentityRole/options`, {
    method: 'Get',
    params: { name },
  });
};
export const GetAdminRoleId = async (): Promise<string> => {
  return await request<string>(`${Identity_API}api/v1/IdentityRole`, {
    method: 'Get',
  });
};
