import { request } from 'umi';
export const CreateAsyncOrganizationUnit = async (input: API.JhIdentity.OrganizationUnitCreateInputDto): Promise<API.JhIdentity.OrganizationUnitDto> => {
  return await request<API.JhIdentity.OrganizationUnitDto>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Post',
data: input
  });
};
export const DeleteAsyncOrganizationUnit = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Delete',
data: id
  });
};
export const DeleteAsyncOrganizationUnit = async (keys: string[]): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit/keys`, {
    method: 'Delete',
data: keys
  });
};
export const UpdateAsyncOrganizationUnit = async (id: string,input: API.JhIdentity.OrganizationUnitUpdateInputDto): Promise<API.JhIdentity.OrganizationUnitDto> => {
  return await request<API.JhIdentity.OrganizationUnitDto>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Put',
data: id,input
  });
};
export const UpdatePortionAsyncOrganizationUnit = async (id: string,inputDto: API.JhIdentity.OrganizationUnitUpdateInputDto): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Patch',
data: id,inputDto
  });
};
export const RecoverAsyncOrganizationUnit = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit/{id}/Recover`, {
    method: 'Patch',
data: id
  });
};
export const GetListAsyncOrganizationUnit = async (input: API.JhIdentity.OrganizationUnitRetrieveInputDto): Promise<API.PagedResultDto<API.JhIdentity.OrganizationUnitDto>> => {
  return await request<API.PagedResultDto<API.JhIdentity.OrganizationUnitDto>>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Get',
data: input
  });
};
export const GetEntitysAsyncOrganizationUnit = async (inputDto: API.JhIdentity.OrganizationUnitRetrieveInputDto): Promise<API.ListResultDto<API.JhIdentity.OrganizationUnitDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.OrganizationUnitDto>>(`${Identity_API}api/v1/OrganizationUnit/all`, {
    method: 'Get',
data: inputDto
  });
};
export const GetAsyncOrganizationUnit = async (id: string): Promise<API.JhIdentity.OrganizationUnitDto> => {
  return await request<API.JhIdentity.OrganizationUnitDto>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Get',
data: id
  });
};
export const GetRolesAsyncOrganizationUnit = async (id: string): Promise<API.ListResultDto<API.JhIdentity.IdentityRoleDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.IdentityRoleDto>>(`${Identity_API}api/v1/OrganizationUnit/{id}/roles`, {
    method: 'Get',
data: id
  });
};
export const GetOrganizationTreeAsyncOrganizationUnit = async (): Promise<API.ListResultDto<API.JhIdentity.TreeDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.TreeDto>>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Get',

  });
};
export const GetSelectAsyncOrganizationUnit = async (name: string): Promise<any> => {
  return await request<any>(`${Identity_API}api/v1/OrganizationUnit/select`, {
    method: 'Get',
data: name
  });
};
export const GetMembersAsyncOrganizationUnit = async (id: string): Promise<API.ListResultDto<API.JhIdentity.IdentityUserDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.IdentityUserDto>>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Get',
data: id
  });
};
export const CreateByRoleAsyncOrganizationUnit = async (roleId: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/OrganizationUnit`, {
    method: 'Get',
data: roleId
  });
};
