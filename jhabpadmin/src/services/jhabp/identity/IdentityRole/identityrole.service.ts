import { request } from 'umi';
export const CreateByRoles = async (
  input: API.JhIdentity.IdentityRoleCreateDto,
): Promise<API.JhIdentity.IdentityRoleDto> => {
  if (!input.extraProperties) {
    input.extraProperties = {};
  }
  return await request<API.JhIdentity.IdentityRoleDto>(`${Identity_API}api/v1/IdentityRole/roles`, {
    method: 'Post',
    data: input,
  });
};
export const Create = async (
  input: API.JhIdentity.IdentityRoleCreateInputDto,
): Promise<API.JhIdentity.IdentityRoleDto> => {
  if (!input.extraProperties) {
    input.extraProperties = {};
  }
  return await request<API.JhIdentity.IdentityRoleDto>(`${Identity_API}api/v1/IdentityRole`, {
    method: 'Post',
    data: input,
  });
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
  return await request<API.JhIdentity.IdentityRoleDto>(`${Identity_API}api/v1/IdentityRole/${id}`, {
    method: 'Put',
    data: input,
  });
};
export const UpdateByRoles = async (
  id: string,
  input: API.JhIdentity.IdentityRoleUpdateInputDto,
): Promise<API.JhIdentity.IdentityRoleDto> => {
  return await request<API.JhIdentity.IdentityRoleDto>(`${Identity_API}api/identity/roles/${id}`, {
    method: 'Put',
    data: input,
  });
};
export const UpdatePortion = async (
  id: string,
  inputDto: API.JhIdentity.IdentityRoleUpdateInputDto,
): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/IdentityRole/Patch/${id}`, {
    method: 'Put',
    data: inputDto,
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
  return await request<API.JhIdentity.IdentityRoleDto>(`${Identity_API}api/v1/IdentityRole/${id}`, {
    method: 'Get',
  });
};
export const GetOptions = async (
  name: string,
): Promise<API.ListResultDto<API.OptionDto<string>>> => {
  return await request<API.ListResultDto<API.OptionDto<string>>>(
    `${Identity_API}api/v1/IdentityRole/options`,
    {
      method: 'Get',
      params: { name },
    },
  );
};
export const GetAdminRoleId = async (): Promise<string> => {
  return await request<string>(`${Identity_API}api/v1/IdentityRole/AdminRoleId`, {
    method: 'Get',
  });
};
export const GetTrees = async (): Promise<API.ListResultDto<API.TreeAntdDto>> => {
  return await request<API.ListResultDto<API.TreeAntdDto>>(
    `${Identity_API}api/v1/IdentityRole/Trees`,
    {
      method: 'Get',
    },
  );
};
