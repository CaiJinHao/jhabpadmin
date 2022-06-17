import { request } from 'umi';
import type { ApplicationConfigurationDto } from '@/lib/abp/asp-net-core/mvc/application-configurations/models';

//使用代理的时候需要
export const setCsrfCookie = async () => {
  return await request(`${Identity_API}abp/Swashbuckle/SetCsrfCookie`);
};

//会自动执行SetCsrfCookie
export const getApplicationConfiguration = async (): Promise<ApplicationConfigurationDto> => {
  return await request<ApplicationConfigurationDto>(
    `${Identity_API}api/abp/application-configuration`,
  );
};

//修改后台语言
export const switchLanguage = async (language: string) => {
  return await request(
    `${Identity_API}Abp/Languages/Switch?culture=${language}&uiCulture=${language}&returnUrl=`,
  );
};
