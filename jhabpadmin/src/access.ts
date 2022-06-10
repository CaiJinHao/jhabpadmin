/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
import type { InitialStateType } from './model';

export default function access(initialState: InitialStateType) {
  const { permissions } = initialState;
  const accessObj = new Object();
  if (permissions) {
    //@ts-ignore
    for (const permission of permissions.items) {
      accessObj[permission.name] = permission.isGranted;
    }
  }
  return accessObj;
}
