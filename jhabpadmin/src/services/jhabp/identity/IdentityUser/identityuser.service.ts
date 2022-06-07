import { request } from 'umi';
export const Create = async (
  input: API.JhIdentity.IdentityUserCreateInputDto,
): Promise<API.JhIdentity.IdentityUserDto> => {
  if (!input.extraProperties) {
    input.extraProperties = {};
  }
  return await request<API.JhIdentity.IdentityUserDto>(`${Identity_API}api/v1/IdentityUser`, {
    method: 'Post',
    data: input,
  });
};
export const DeleteById = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/IdentityUser/${id}`, {
    method: 'Delete',
  });
};
export const DeleteByKeys = async (keys: string[]): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/IdentityUser/keys`, {
    method: 'Delete',
    data: keys,
  });
};
export const Update = async (
  id: string,
  input: API.JhIdentity.IdentityUserUpdateInputDto,
): Promise<API.JhIdentity.IdentityUserDto> => {
  return await request<API.JhIdentity.IdentityUserDto>(`${Identity_API}api/v1/IdentityUser/${id}`, {
    method: 'Put',
    data: input,
  });
};
export const UpdatePortion = async (
  id: string,
  inputDto: API.JhIdentity.IdentityUserUpdateInputDto,
): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/IdentityUser/Patch/${id}`, {
    method: 'Put',
    data: inputDto,
  });
};
export const UpdateLockoutEnabled = async (id: string, lockoutEnabled: boolean): Promise<void> => {
  return await request<void>(
    `${Identity_API}api/v1/IdentityUser/${id}/lockoutEnabled/${lockoutEnabled}`,
    {
      method: 'Put',
    },
  );
};
export const Recover = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/IdentityUser/${id}/Recover`, {
    method: 'Put',
  });
};
export const Get = async (id: string): Promise<API.JhIdentity.IdentityUserDto> => {
  return await request<API.JhIdentity.IdentityUserDto>(`${Identity_API}api/v1/IdentityUser/${id}`, {
    method: 'Get',
  });
};
export const GetRoles = async (
  id: string,
): Promise<API.ListResultDto<API.JhIdentity.IdentityRoleDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.IdentityRoleDto>>(
    `${Identity_API}api/v1/IdentityUser/${id}/roles`,
    {
      method: 'Get',
    },
  );
};
export const GetList = async (
  input: API.JhIdentity.IdentityUserRetrieveInputDto,
): Promise<API.PagedResultDto<API.JhIdentity.IdentityUserDto>> => {
  return await request<API.PagedResultDto<API.JhIdentity.IdentityUserDto>>(
    `${Identity_API}api/v1/IdentityUser`,
    {
      method: 'Get',
      params: input,
    },
  );
};
export const GetEntitys = async (
  inputDto: API.JhIdentity.IdentityUserRetrieveInputDto,
): Promise<API.ListResultDto<API.JhIdentity.IdentityUserDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.IdentityUserDto>>(
    `${Identity_API}api/v1/IdentityUser/all`,
    {
      method: 'Get',
      params: inputDto,
    },
  );
};
export const GetCurrent = async (): Promise<API.JhIdentity.IdentityUserDto> => {
  return await request<API.JhIdentity.IdentityUserDto>(`${Identity_API}api/v1/IdentityUser/info`, {
    method: 'Get',
  });
};
export const GetOrganizations = async (
  id: string,
): Promise<API.ListResultDto<API.JhIdentity.IdentityUserDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.IdentityUserDto>>(
    `${Identity_API}api/v1/IdentityUser/${id}/organizationunits`,
    {
      method: 'Get',
    },
  );
};
export const GetOptions = async (): Promise<API.ListResultDto<API.OptionDto<string>>> => {
  return await request<API.ListResultDto<API.OptionDto<string>>>(
    `${Identity_API}api/v1/IdentityUser/options`,
    {
      method: 'Get',
    },
  );
};
export const GetSuperiorUser = async (userId: string): Promise<API.JhIdentity.IdentityUserDto> => {
  return await request<API.JhIdentity.IdentityUserDto>(
    `${Identity_API}api/v1/IdentityUser/${userId}/SuperiorUser`,
    {
      method: 'Get',
    },
  );
};
export const ChangePassword = async (
  input: API.JhIdentity.ChangePasswordInputDto,
): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/IdentityUser/change-password`, {
    method: 'Post',
    data: input,
  });
};
