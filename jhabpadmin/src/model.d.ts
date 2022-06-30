import type { ApplicationConfigurationDto } from '@/lib/abp/asp-net-core/mvc/application-configurations/models';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';

export interface InitialStateType {
  applicationConfiguration: ApplicationConfigurationDto;
  settings?: Partial<LayoutSettings>;
  currentUser?: API.JhIdentity.IdentityUserDto;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
  permissions?: API.ListResultDto<API.JhIdentity.PermissionGrantedDto>;
}
