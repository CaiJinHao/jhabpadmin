import { request } from 'umi';

export const createMenu = async (input: API.MenuCreateInputDto): Promise<API.MenuDto> => {
  return await request<API.MenuDto>(`${Menu_API}/api/v1/Menu`, {
    method: 'POST',
    data: input,
  });
};

export const deleteMenuBykeys = async (keys: string[]): Promise<void> => {
  return await request<void>(`${Menu_API}/api/v1/Menu/keys`, {
    method: 'DELETE',
    data: keys,
  });
};

export const deleteMenuByid = async (id: string): Promise<void> => {
  return await request<void>(`${Menu_API}/api/v1/Menu/${id}`, {
    method: 'DELETE',
  });
};

export const getMenu = async (id: string): Promise<API.MenuDto> => {
  return await request<API.MenuDto>(`${Menu_API}/api/v1/Menu/${id}`, {
    method: 'GET',
  });
};

export const getEntitysMenu = async (
  inputDto: API.MenuRetrieveInputDto,
): Promise<API.ListResultDto<API.MenuDto>> => {
  return await request<API.ListResultDto<API.MenuDto>>(`${Menu_API}/api/v1/Menu/all`, {
    method: 'GET',
    params: inputDto,
  });
};

export const getListMenu = async (
  input: API.MenuRetrieveInputDto,
): Promise<API.PagedResultDto<API.MenuDto>> => {
  return await request<API.PagedResultDto<API.MenuDto>>(`${Menu_API}/api/v1/Menu`, {
    method: 'GET',
    params: input,
  });
};

export const getMaxMenuCodeMenu = async (parentCode: string): Promise<string> => {
  return await request<string>(`${Menu_API}/api/v1/Menu/MaxCode/${parentCode}`, {
    method: 'GET',
    responseType: 'text',
  });
};

export const recoverMenu = async (id: string): Promise<void> => {
  return await request<void>(`${Menu_API}/api/v1/Menu/${id}/Recover`, {
    method: 'Put',
  });
};

export const updateMenu = async (
  id: string,
  input: API.MenuUpdateInputDto,
): Promise<API.MenuDto> => {
  return await request<API.MenuDto>(`${Menu_API}/api/v1/Menu/${id}`, {
    method: 'PUT',
    data: input,
  });
};

export const updatePortionMenu = async (
  id: string,
  inputDto: API.MenuUpdateInputDto,
): Promise<void> => {
  return await request<void>(`${Menu_API}/api/v1/Menu/Patch/${id}`, {
    method: 'PUT',
    data: inputDto,
  });
};

//TODO:修改代码生成器，添加API,data参数直接传input
