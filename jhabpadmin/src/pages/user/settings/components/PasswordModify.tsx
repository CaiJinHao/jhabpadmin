import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import React, { useState } from 'react';
import { Col, Row, Avatar, Descriptions, Tabs } from 'antd';
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
  const [title, setTitle] = useState<string>('修改登录密码');

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
        title={title}
        onFinish={modalFormFinish}
        modalProps={{
          onCancel: () => onCancel(),
          destroyOnClose: true,
        }}
        submitter={{}}
      >
        <ProForm.Group>
          <ProFormText.Password width="md" name="currentPassword" label="当前用户密码" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText.Password width="md" name="newPassword" label="新的用户密码" />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};

export default PasswordModify;
