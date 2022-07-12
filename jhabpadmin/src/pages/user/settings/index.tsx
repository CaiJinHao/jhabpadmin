import React, { useState, useRef } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Menu } from 'antd';
import BaseView from './components/base';
import BindingView from './components/binding';
import NotificationView from './components/notification';
import SecurityView from './components/security';
import styles from './style.less';
import { useIntl, useModel } from 'umi';

import { Col, Row, Avatar, Descriptions } from 'antd';
import ProCard from '@ant-design/pro-card';

const { Item } = Menu;

type SettingsStateKeys = 'base' | 'security' | 'binding' | 'notification';
type SettingsState = {
  mode: 'inline' | 'horizontal';
  selectKey: SettingsStateKeys;
};

const Settings: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const intl = useIntl();

  const menuMap: Record<string, React.ReactNode> = {
    base: intl.formatMessage({
      id: 'app.settings.menuMap.basic',
      defaultMessage: '基本设置',
    }),
    security: intl.formatMessage({
      id: 'app.settings.menuMap.security',
      defaultMessage: '基本设置',
    }),
    // binding: '账号绑定',
    // notification: '新消息通知',
  };

  const [initConfig, setInitConfig] = useState<SettingsState>({
    mode: 'inline',
    selectKey: 'base',
  });
  const dom = useRef<HTMLDivElement>();

  const getMenu = () => {
    return Object.keys(menuMap).map((item) => <Item key={item}>{menuMap[item]}</Item>);
  };

  const renderChildren = () => {
    const { selectKey } = initConfig;
    switch (selectKey) {
      case 'base':
        return <BaseView />;
      case 'security':
        return <SecurityView />;
      case 'binding':
        return <BindingView />;
      case 'notification':
        return <NotificationView />;
      default:
        return null;
    }
  };

  return (
    <>
      <GridContent>
        <ProCard>
          <Row
            gutter={[
              { xs: 15, sm: 20 }, //水平
              { xs: 30, sm: 30 }, //垂直
            ]}
          >
            <Col sm={3} xs={24} style={{ textAlign: 'center' }}>
              <Avatar size={128} src={currentUser?.avatar} />
            </Col>
            <Col sm={12} xs={24}>
              <Descriptions title={currentUser?.name}>
                <Descriptions.Item
                  label={intl.formatMessage({
                    id: 'DisplayName:IdentityUser:UserName',
                    defaultMessage: '用户账号',
                  })}
                >
                  {currentUser?.userName}
                </Descriptions.Item>
                <Descriptions.Item
                  label={intl.formatMessage({
                    id: 'DisplayName:IdentityUser:PhoneNumber',
                    defaultMessage: '手机号',
                  })}
                >
                  {currentUser?.phoneNumber}
                </Descriptions.Item>
                <Descriptions.Item
                  label={intl.formatMessage({
                    id: 'DisplayName:IdentityUser:Email',
                    defaultMessage: '邮箱',
                  })}
                >
                  {currentUser?.email}
                </Descriptions.Item>
                <Descriptions.Item
                  label={intl.formatMessage({
                    id: 'DisplayName:IdentityRole',
                    defaultMessage: '角色',
                  })}
                >
                  {currentUser?.roles?.join(',')}
                </Descriptions.Item>
                <Descriptions.Item
                  label={intl.formatMessage({
                    id: 'DisplayName:JhOrganizationUnit',
                    defaultMessage: '组织',
                  })}
                >
                  {currentUser?.organizationUnits?.join(',')}
                </Descriptions.Item>
                <Descriptions.Item
                  label={intl.formatMessage({
                    id: 'DisplayName:IdentityUser:RegisterTime',
                    defaultMessage: '注册时间',
                  })}
                >
                  {currentUser?.creationTime}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </ProCard>
        <ProCard style={{ marginTop: '1em' }}>
          <div
            className={styles.main}
            ref={(ref) => {
              if (ref) {
                dom.current = ref;
              }
            }}
          >
            <div className={styles.leftMenu}>
              <Menu
                mode={initConfig.mode}
                selectedKeys={[initConfig.selectKey]}
                onClick={({ key }) => {
                  setInitConfig({
                    ...initConfig,
                    selectKey: key as SettingsStateKeys,
                  });
                }}
              >
                {getMenu()}
              </Menu>
            </div>
            <div className={styles.right}>
              <div className={styles.title}>{menuMap[initConfig.selectKey]}</div>
              {renderChildren()}
            </div>
          </div>
        </ProCard>
      </GridContent>
    </>
  );
};
export default Settings;
