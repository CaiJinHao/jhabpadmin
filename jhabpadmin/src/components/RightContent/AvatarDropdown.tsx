import React, { useCallback } from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import { useIntl, history, useModel } from 'umi';
import { stringify } from 'querystring';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

// import { outLogin } from '@/services/ant-design-pro/api';
// import { logout } from '@/services/jhabp/account/login.service';
import { logout } from '@/services/jhabp/auth.service';

import type { MenuInfo } from 'rc-menu/lib/interface';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  await logout();
  // const { query = {} } = history.location;
  // const { redirect } = query;
  // Note: There may be security issues, please note
  // if (window.location.pathname !== LOGIN_PATH && !redirect) {
  // window.location.href = LOGIN_PATH;
  // history.replace({
  //   pathname: LOGIN_PATH,
  //   search: stringify({
  //     redirect: pathname + search,
  //   }),
  // });
  // }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const intl = useIntl();

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        setInitialState((s: any) => ({ ...s, currentUser: undefined }));
        loginOut();
        return;
      }
      history.push(`/user/${key}`);
    },
    [setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.name) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {/* <Menu.Item key="personal">
        <UserOutlined />
        {intl.formatMessage({
          id: 'PersonalInfo',
          defaultMessage: '个人信息',
        })}
      </Menu.Item> */}
      <Menu.Item key="settings">
        <SettingOutlined />
        {intl.formatMessage({
          id: 'menu.account.settings',
          defaultMessage: '个人信息',
        })}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        {intl.formatMessage({
          id: 'Logout',
          defaultMessage: '注销',
        })}
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{currentUser.name}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
