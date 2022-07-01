/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
import type { InitialStateType } from './model';

export default function access(initialState: InitialStateType) {
  const accessObj = new Object();
  if (initialState) {
    const { permissions } = initialState;
    if (permissions) {
      //@ts-ignore
      for (const permission of permissions.items) {
        accessObj[permission.name] = permission.isGranted;
      }
    }
  }

  accessObj['systemConfig'] =
  accessObj['AbpIdentity.Roles'] ||
  accessObj['AbpIdentity.OrganizationUnits'] ||
  accessObj['AbpIdentity.Users'] ||
  accessObj['AbpIdentity.JhPermissions'] ||
  accessObj['JhAuditLogging.AuditLoggings'];
  return accessObj;
}
