import React from 'react';
import { request } from 'umi';
import * as IconMap from '@ant-design/icons';

const createAntdIcon = (iconName: string) => {
  console.log(iconName);
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

export const currentUserNavMenus = async (): Promise<API.CurrentUserNavMenus[]> => {
  const data = await request<API.CurrentUserNavMenus[]>(
    '/jhmenu/api/v1/MenuRoleMap/CurrentUserNavMenus',
    { method: 'GET' },
  );
  return replaceMenuIcon(data);
};
