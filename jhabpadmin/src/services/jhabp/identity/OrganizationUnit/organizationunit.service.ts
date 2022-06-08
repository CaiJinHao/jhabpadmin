import { request } from 'umi';
export const Create = async (
  input: API.JhIdentity.OrganizationUnitCreateInputDto,
): Promise<API.JhIdentity.OrganizationUnitDto> => {
  if (!input.extraProperties) {
    input.extraProperties = {};
  }
  return await request<API.JhIdentity.OrganizationUnitDto>(
    `${Identity_API}api/v1/OrganizationUnit`,
    {
      method: 'Post',
      data: input,
    },
  );
};
export const DeleteById = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit/${id}`, {
    method: 'Delete',
  });
};
export const DeleteByKeys = async (keys: string[]): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit/keys`, {
    method: 'Delete',
    data: keys,
  });
};
export const Update = async (
  id: string,
  input: API.JhIdentity.OrganizationUnitUpdateInputDto,
): Promise<API.JhIdentity.OrganizationUnitDto> => {
  return await request<API.JhIdentity.OrganizationUnitDto>(
    `${Identity_API}api/v1/OrganizationUnit/${id}`,
    {
      method: 'Put',
      data: input,
    },
  );
};
export const UpdatePortion = async (
  id: string,
  inputDto: API.JhIdentity.OrganizationUnitUpdateInputDto,
): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit/Patch/${id}`, {
    method: 'Put',
    data: inputDto,
  });
};
export const Recover = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit/${id}/Recover`, {
    method: 'Put',
  });
};
export const GetList = async (
  input: API.JhIdentity.OrganizationUnitRetrieveInputDto,
): Promise<API.PagedResultDto<API.JhIdentity.OrganizationUnitDto>> => {
  return await request<API.PagedResultDto<API.JhIdentity.OrganizationUnitDto>>(
    `${Identity_API}api/v1/OrganizationUnit`,
    {
      method: 'Get',
      params: input,
    },
  );
};
export const GetEntitys = async (
  inputDto: API.JhIdentity.OrganizationUnitRetrieveInputDto,
): Promise<API.ListResultDto<API.JhIdentity.OrganizationUnitDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.OrganizationUnitDto>>(
    `${Identity_API}api/v1/OrganizationUnit/all`,
    {
      method: 'Get',
      params: inputDto,
    },
  );
};
export const Get = async (id: string): Promise<API.JhIdentity.OrganizationUnitDto> => {
  return await request<API.JhIdentity.OrganizationUnitDto>(
    `${Identity_API}api/v1/OrganizationUnit/${id}`,
    {
      method: 'Get',
    },
  );
};
export const GetRoles = async (
  id: string,
): Promise<API.ListResultDto<API.JhIdentity.IdentityRoleDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.IdentityRoleDto>>(
    `${Identity_API}api/v1/OrganizationUnit/${id}/roles`,
    {
      method: 'Get',
    },
  );
};
export const GetOrganizationTree = async (): Promise<API.ListResultDto<API.TreeAntdDto>> => {
  return await request<API.ListResultDto<API.TreeAntdDto>>(
    `${Identity_API}api/v1/OrganizationUnit/Trees`,
    {
      method: 'Get',
    },
  );
};

export const GetOptions = async (
  name: string,
): Promise<API.ListResultDto<API.OptionDto<string>>> => {
  return await request<API.ListResultDto<API.OptionDto<string>>>(
    `${Identity_API}api/v1/OrganizationUnit/options`,
    {
      method: 'Get',
      params: { name },
    },
  );
};
export const GetMembers = async (
  id: string,
): Promise<API.ListResultDto<API.JhIdentity.IdentityUserDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.IdentityUserDto>>(
    `${Identity_API}api/v1/OrganizationUnit/${id}/Members`,
    {
      method: 'Get',
    },
  );
};
export const CreateByRole = async (roleId: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit/Role/${roleId}`, {
    method: 'Get',
  });
};
export const GetRoleOptions = async (
  orgIds: string[],
): Promise<API.ListResultDto<API.OptionDto<string>>> => {
  return await request<API.ListResultDto<API.OptionDto<string>>>(
    `${Identity_API}api/v1/OrganizationUnit/RoleOptions`,
    {
      method: 'Get',
      params: { orgIds },
    },
  );
};
