import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useState } from 'react';
import * as defaultService from '@/services/jhabp/identity/IdentityRole/identityrole.service';

type OperationModalProps = {
  detail: boolean;
  visible: boolean;
  onCancel: () => void;
  current: Partial<API.JhIdentity.IdentityRoleDto> | undefined;
  onSubmit: (values: API.JhIdentity.IdentityRoleDto) => void;
};
const OperationModalIdentityRole: FC<OperationModalProps> = (props) => {
  const { detail, visible, current, onCancel, onSubmit, children } = props;
  const modalFormFinish = async (values: API.JhIdentity.IdentityRoleCreateInputDto) => {
    values.isDefault = false;
    values.isPublic = true;
    values.isStatic = true;
    if (current) {
      const updateDto = await defaultService.Update(current.id as string, values);
      if (updateDto) {
        onSubmit(updateDto);
      }
    } else {
      const createDto = await defaultService.Create(values);
      if (createDto) {
        onSubmit(createDto);
      }
    }
  };

  return (
    <>
      <ModalForm<API.JhIdentity.IdentityRoleDto>
        width={378}
        visible={visible}
        title={`${current ? '编辑' : '添加'}`}
        onFinish={modalFormFinish}
        initialValues={current}
        trigger={<>{children}</>}
        modalProps={{
          onCancel: () => onCancel(),
          destroyOnClose: true,
        }}
        submitter={!detail ? {} : false}
      >
        <>
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label="角色名称"
              rules={[{ required: true, message: '请输入角色名称' }]}
              placeholder="请输入"
            />
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalIdentityRole;
