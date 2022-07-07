import { request } from 'umi';
export const Create = async (
  input: API.JhIdentity.TenantCreateDto,
): Promise<API.JhIdentity.TenantDto> => {
  if (!input.extraProperties) {
    input.extraProperties = {};
  }
  return await request<API.JhIdentity.TenantDto>(`${Identity_API}api/multi-tenancy/tenants`, {
    method: 'Post',
    data: input,
  });
};
export const DeleteById = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/multi-tenancy/tenants/${id}`, {
    method: 'Delete',
  });
};
export const DeleteByKeys = async (keys: string[]): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/Tenant/keys`, {
    method: 'Delete',
    data: keys,
  });
};
export const Recover = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/Tenant/${id}/Recover`, {
    method: 'Put',
  });
};
export const Update = async (
  id: string,
  input: API.JhIdentity.TenantUpdateDto,
): Promise<API.JhIdentity.TenantDto> => {
  return await request<API.JhIdentity.TenantDto>(`${Identity_API}api/multi-tenancy/tenants/${id}`, {
    method: 'Put',
    data: input,
  });
};
export const GetList = async (
  input: API.JhIdentity.TenantRetrieveInputDto,
): Promise<API.PagedResultDto<API.JhIdentity.TenantDto>> => {
  return await request<API.PagedResultDto<API.JhIdentity.TenantDto>>(
    `${Identity_API}api/v1/Tenant`,
    {
      method: 'Get',
      params: input,
    },
  );
};
export const Get = async (id: string): Promise<API.JhIdentity.TenantDto> => {
  return await request<API.JhIdentity.TenantDto>(`${Identity_API}api/multi-tenancy/tenants/${id}`, {
    method: 'Get',
  });
};
export const GetEntitys = async (
  inputDto: API.JhIdentity.TenantRetrieveInputDto,
): Promise<API.ListResultDto<API.JhIdentity.TenantDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.TenantDto>>(
    `${Identity_API}api/v1/Tenant/all`,
    {
      method: 'Get',
      params: inputDto,
    },
  );
};
export const UpdatePortion = async (
  id: string,
  inputDto: API.JhIdentity.TenantUpdateDto,
): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/Tenant/Patch/${id}`, {
    method: 'Put',
    data: inputDto,
  });
};
