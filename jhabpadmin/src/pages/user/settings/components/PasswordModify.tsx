import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import { useIntl, useModel } from 'umi';
import * as defaultService from '@/services/jhabp/identity/IdentityUser/identityuser.service';
import type { FC } from 'react';

type OperationModalProps = {
  visible: boolean;
  onCancel: () => void;
  onSubmit: () => void;
};

const PasswordModify: FC<OperationModalProps> = (props) => {
  const intl = useIntl();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const { visible, onCancel, onSubmit } = props;

  const modalFormFinish = async (values: any) => {
    if (currentUser) {
      const _data = Object.assign(currentUser, values);
      const res = await defaultService.ChangePassword(
        _data as API.JhIdentity.ChangePasswordInputDto,
      );
      if (res !== undefined) {
        onSubmit();
      }
    }
  };
  return (
    <>
      <ModalForm<API.JhIdentity.IdentityRoleDto>
        width={378}
        visible={visible}
        title={intl.formatMessage({
          id: 'app.settings.security.password-modify.title',
          defaultMessage: '修改登录密码',
        })}
        onFinish={modalFormFinish}
        modalProps={{
          onCancel: () => onCancel(),
          destroyOnClose: true,
        }}
        submitter={{}}
      >
        <ProForm.Group>
          <ProFormText.Password
            width="md"
            name="currentPassword"
            label={intl.formatMessage({
              id: 'app.settings.security.password-modify.currentPassword',
              defaultMessage: '当前用户密码',
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
          <ProFormText.Password
            width="md"
            name="newPassword"
            label={intl.formatMessage({
              id: 'app.settings.security.password-modify.newPassword',
              defaultMessage: '新的用户密码',
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
      </ModalForm>
    </>
  );
};

export default PasswordModify;
