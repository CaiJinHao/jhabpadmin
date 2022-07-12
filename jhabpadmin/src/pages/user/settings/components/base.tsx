import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { getIntl, useIntl, useModel } from 'umi';
import * as defaultService from '@/services/jhabp/identity/IdentityUser/identityuser.service';

import styles from './BaseView.less';

const intlTop = getIntl();

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({ avatar }: { avatar: string }) => (
  <>
    <div className={styles.avatar_title}>
      {intlTop.formatMessage({
        id: 'app.settings.basic.avatar',
        defaultMessage: '头像',
      })}
    </div>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
    <Upload showUploadList={false}>
      <div className={styles.button_view}>
        <Button>
          <UploadOutlined />
          {intlTop.formatMessage({
            id: 'app.settings.basic.change-avatar',
            defaultMessage: '更换头像',
          })}
        </Button>
      </div>
    </Upload>
  </>
);

const BaseView: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const intl = useIntl();

  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }
      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }
    return '';
  };

  const onFinish = async (values: any) => {
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
    <div className={styles.baseView}>
      {
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={onFinish}
              submitter={{
                searchConfig: {
                  submitText: intl.formatMessage({
                    id: 'Save',
                    defaultMessage: '保存',
                  }),
                },
                render: (_, dom) => dom[1],
              }}
              initialValues={currentUser}
              hideRequiredMark
            >
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
              <ProFormText
                width="md"
                name="name"
                label={intl.formatMessage({
                  id: 'DisplayName:IdentityUser:Name',
                  defaultMessage: '名称',
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
              {/* <ProFormTextArea
                name="profile"
                label="个人简介"
                rules={[
                  {
                    required: false,
                    message: '请输入个人简介!',
                  },
                ]}
                placeholder="个人简介"
              /> */}
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
            </ProForm>
          </div>
          {/* <div className={styles.right}>
            <AvatarView avatar={getAvatarURL()} />
          </div> */}
        </>
      }
    </div>
  );
};

export default BaseView;
