// /api/abp/application-configuration
import { request } from 'umi';
import type { ApplicationConfigurationDto } from '@/lib/abp/asp-net-core/mvc/application-configurations/models';

export const setCsrfCookie = async () => {
  return await request(`${Identity_API}//abp/Swashbuckle/SetCsrfCookie`);
};

export const getApplicationConfiguration = async (): Promise<ApplicationConfigurationDto> => {
  return await request<ApplicationConfigurationDto>(
    `${Identity_API}/api/abp/application-configuration`,
  );
};

export const switchLanguage = async (language: string) => {
  return await request(
    `${Identity_API}/Abp/Languages/Switch?culture=${language}&uiCulture=${language}&returnUrl=`,
  );
};
