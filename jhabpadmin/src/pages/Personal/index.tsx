import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import React from 'react';
import { Col, Row, Avatar, Descriptions, Tabs } from 'antd';
import styles from './index.less';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, useModel } from 'umi';
import * as defaultService from '@/services/jhabp/identity/IdentityUser/identityuser.service';

const { TabPane } = Tabs;

/**没有使用，使用的是user/settings */
const Profile: React.FC = () => {
  const intl = useIntl();
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const modalFormFinish = async (values: any) => {
    if (currentUser) {
      const _data = Object.assign(currentUser, values);
      const updateDto = await defaultService.Update(
        currentUser.id,
        _data as API.JhIdentity.IdentityUserUpdateInputDto,
      );
      if (updateDto) {
        setInitialState((s: any) => ({
          ...s,
          currentUser: _data as API.JhIdentity.IdentityUserDto,
        }));
      }
    }
  };

  return (
    <>
      <PageContainer>
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
        <ProCard bordered className={styles.profileForm}>
          <Tabs defaultActiveKey="personalInfo">
            <TabPane
              tab={intl.formatMessage({
                id: 'PersonalInfo',
                defaultMessage: '个人信息',
              })}
              key="personalInfo"
            >
              <ProForm
                onFinish={modalFormFinish}
                initialValues={currentUser}
                submitter={{
                  searchConfig: {
                    submitText: intl.formatMessage({
                      id: 'Save',
                      defaultMessage: '保存',
                    }),
                  },
                  resetButtonProps: {
                    style: {
                      display: 'none',
                    },
                  },
                }}
                labelAlign="right"
              >
                <ProForm.Group>
                  <ProFormText
                    width="md"
                    name="name"
                    label={intl.formatMessage({
                      id: 'DisplayName:IdentityUser:Name',
                      defaultMessage: '用户名称',
                    })}
                    rules={[
                      {
                        required: true,
                        message: `${intl.formatMessage({
                          id: 'form.rules.message',
                          defaultMessage: '请输入',
                        })}\${label}`,
                      },
                    ]}
                  />
                </ProForm.Group>
                <ProForm.Group>
                  <ProFormText
                    width="md"
                    name="userName"
                    label={intl.formatMessage({
                      id: 'DisplayName:IdentityUser:UserName',
                      defaultMessage: '用户账号',
                    })}
                    rules={[
                      {
                        required: true,
                        message: `${intl.formatMessage({
                          id: 'form.rules.message',
                          defaultMessage: '请输入',
                        })}\${label}`,
                      },
                    ]}
                  />
                </ProForm.Group>
                <ProForm.Group>
                  <ProFormText
                    width="md"
                    name="password"
                    label={intl.formatMessage({
                      id: 'DisplayName:IdentityUser:Password',
                      defaultMessage: '用户密码',
                    })}
                  />
                </ProForm.Group>
                <ProForm.Group>
                  <ProFormText
                    width="md"
                    name="phoneNumber"
                    label={intl.formatMessage({
                      id: 'DisplayName:IdentityUser:PhoneNumber',
                      defaultMessage: '手机号',
                    })}
                    rules={[
                      {
                        required: true,
                        message: `${intl.formatMessage({
                          id: 'form.rules.message',
                          defaultMessage: '请输入',
                        })}\${label}`,
                      },
                    ]}
                  />
                </ProForm.Group>
                <ProForm.Group>
                  <ProFormText
                    width="md"
                    name="email"
                    label={intl.formatMessage({
                      id: 'DisplayName:IdentityUser:Email',
                      defaultMessage: '邮箱',
                    })}
                    rules={[
                      {
                        required: true,
                        message: `${intl.formatMessage({
                          id: 'form.rules.message',
                          defaultMessage: '请输入',
                        })}\${label}`,
                      },
                    ]}
                  />
                </ProForm.Group>
              </ProForm>
            </TabPane>
          </Tabs>
        </ProCard>
      </PageContainer>
    </>
  );
};

export default Profile;
