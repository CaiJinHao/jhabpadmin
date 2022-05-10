import React from 'react';
import { request } from 'umi';
import * as IconMap from '@ant-design/icons';

const createAntdIcon = (iconName: string) => {
  return React.createElement(IconMap[iconName]);
};

const replaceMenuIcon = (menus: API.CurrentUserNavMenus[]): API.CurrentUserNavMenus[] => {
  if (menus.length > 0) {
    return menus.map(({ icon, routes, ...item }) => ({
      ...item,
      icon: icon && createAntdIcon(icon),
      routes: routes && replaceMenuIcon(routes),
    }));
  } else {
    return [];
  }
};

/**菜单必须时 antd得菜单 图标不一样 */
export const currentUserNavMenus = async (): Promise<API.CurrentUserNavMenus[]> => {
  const data = await request<API.CurrentUserNavMenus[]>(
    `${Menu_API}/api/v1/MenuRoleMap/CurrentUserNavMenus`,
    { method: 'GET' },
  );
  return replaceMenuIcon(data);
};
