import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { FC, useEffect, useState } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/IdentityRole/identityrole.service';

type OperationModalProps = {
  operator: ViewOperator;
  visible: boolean;
  onCancel: () => void;
  current: API.JhIdentity.IdentityRoleDto;
  onSubmit: (values: API.JhIdentity.IdentityRoleDto) => void;
};
const OperationModalIdentityRole: FC<OperationModalProps> = (props) => {
  const { operator, visible, current, onCancel, onSubmit, children } = props;
  const [title, setTitle] = useState<string>();
  const intl = useIntl();

  const modalFormFinish = async (values: any) => {
    if (current) {
      const _data = values as API.JhIdentity.IdentityRoleUpdateInputDto;
      _data.concurrencyStamp = current.concurrencyStamp;
      const updateDto = await defaultService.Update(current.id, _data);
      if (updateDto) {
        onSubmit(updateDto);
      }
    } else {
      const _data = values as API.JhIdentity.IdentityRoleCreateDto;
      _data.isDefault = true;
      _data.isPublic = true;
      const createDto = await defaultService.Create(_data);
      if (createDto) {
        onSubmit(createDto);
      }
    }
  };

  const initTitle = () => {
    let _t = '角色';
    switch (operator) {
      case ViewOperator.Add:
        {
          _t = `${_t}${intl.formatMessage({
            id: 'Permission:Create',
            defaultMessage: '创建',
          })}`;
        }
        break;
      case ViewOperator.Edit:
        {
          _t = `${_t}${intl.formatMessage({
            id: 'Permission:Edit',
            defaultMessage: '编辑',
          })}`;
        }
        break;
      case ViewOperator.Detail:
        {
          _t = `${_t}${intl.formatMessage({
            id: 'Permission:Detail',
            defaultMessage: '详情',
          })}`;
        }
        break;
    }
    setTitle(_t);
  };

  useEffect(() => {
    initTitle();
  }, [operator]);
  return (
    <>
      <ModalForm<API.JhIdentity.IdentityRoleDto>
        width={378}
        visible={visible}
        title={title}
        onFinish={modalFormFinish}
        initialValues={current}
        trigger={<>{children}</>}
        modalProps={{
          onCancel: () => onCancel(),
          destroyOnClose: true,
        }}
        submitter={operator == ViewOperator.Detail ? false : {}}
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
