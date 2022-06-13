import { request } from 'umi';
export const DeleteByDeleteInputDto = async (deleteInputDto: API.JhIdentity.AuditLoggingDeleteInputDto): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/AuditLogging`, {
    method: 'Delete',
data: deleteInputDto
  });
};
export const DeleteByKeys = async (keys: string[]): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/AuditLogging/keys`, {
    method: 'Delete',
data: keys
  });
};
export const Get = async (id: string): Promise<API.JhIdentity.AuditLog> => {
  return await request<API.JhIdentity.AuditLog>(`${Identity_API}api/v1/AuditLogging/${id}`, {
    method: 'Get',
  });
};
export const GetList = async (input: API.JhIdentity.AuditLoggingRetrieveInputDto): Promise<API.PagedResultDto<API.JhIdentity.AuditLog>> => {
  return await request<API.PagedResultDto<API.JhIdentity.AuditLog>>(`${Identity_API}api/v1/AuditLogging`, {
    method: 'Get',
params: input
  });
};
export const GetEntitys = async (inputDto: API.JhIdentity.AuditLoggingRetrieveInputDto): Promise<API.ListResultDto<API.JhIdentity.AuditLog>> => {
  return await request<API.ListResultDto<API.JhIdentity.AuditLog>>(`${Identity_API}api/v1/AuditLogging/all`, {
    method: 'Get',
params: inputDto
  });
};
export const DeleteById = async (id: string): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/AuditLogging/${id}`, {
    method: 'Delete',
  });
};
