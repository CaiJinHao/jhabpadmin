import { request } from 'umi';
export const GetAll = async (
  input: API.JhIdentity.SettingRetrieveInputDto,
): Promise<API.ListResultDto<API.JhIdentity.SettingDefinitionDto>> => {
  return await request<API.ListResultDto<API.JhIdentity.SettingDefinitionDto>>(
    `${Identity_API}api/v1/Settings/all`,
    {
      method: 'Get',
      params: input,
    },
  );
};
export const Get = async (
  input: API.JhIdentity.SettingRetrieveInputDto,
): Promise<API.JhIdentity.SettingDefinitionDto> => {
  return await request<API.JhIdentity.SettingDefinitionDto>(`${Identity_API}api/v1/Settings`, {
    method: 'Get',
    params: input,
  });
};
export const Set = async (input: API.JhIdentity.SettingCreateOrUpdateInputDto): Promise<void> => {
  return await request<void>(`${Identity_API}api/v1/Settings`, {
    method: 'Put',
    data: input,
  });
};
