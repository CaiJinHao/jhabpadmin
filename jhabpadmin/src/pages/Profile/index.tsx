import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import React, { useState } from 'react';
import { Col, Row, Avatar, Descriptions, Tabs } from 'antd';
import styles from './index.less';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl } from 'umi';

const { TabPane } = Tabs;

const Profile: React.FC = () => {
  const intl = useIntl();
  const [extraProperties, setExtraProperties] = useState<any>();

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
              <Avatar size={128} src="/logo.png" />
            </Col>
            <Col sm={12} xs={24}>
              <Descriptions title="User Info">
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </ProCard>
        <ProCard bordered className={styles.profileForm}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="基本信息" key="1">
              <ProForm
                // onFinish={modalFormFinish}
                // initialValues={operator == ViewOperator.Add ? {} : current}
                submitter={{}}
                layout="horizontal"
                labelAlign="right"
                labelCol={{ span: 10 }}
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
                          id: 'Form.rules.message',
                          defaultMessage: '请输入',
                        })}\${label}`,
                      },
                    ]}
                  />
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
                          id: 'Form.rules.message',
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
                          id: 'Form.rules.message',
                          defaultMessage: '请输入',
                        })}\${label}`,
                      },
                    ]}
                  />
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
                          id: 'Form.rules.message',
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
