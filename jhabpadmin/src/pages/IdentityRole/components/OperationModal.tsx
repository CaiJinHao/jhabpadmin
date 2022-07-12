import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/IdentityRole/identityrole.service';

type OperationModalProps = {
  operator: ViewOperator;
  visible: boolean;
  onCancel: () => void;
  current?: API.JhIdentity.IdentityRoleDto;
  onSubmit: (values: API.JhIdentity.IdentityRoleDto) => void;
};
const OperationModalIdentityRole: FC<OperationModalProps> = (props) => {
  const { operator, visible, current, onCancel, onSubmit, children } = props;
  const [title, setTitle] = useState<string>();
  const intl = useIntl();
  const [extraProperties, setExtraProperties] = useState<any>();

  const modalFormFinish = async (values: any) => {
    values.extraProperties = extraProperties;
    if (current) {
      const _data = Object.assign(current, values);
      const updateDto = await defaultService.UpdateByRoles(
        current.id,
        _data as API.JhIdentity.IdentityRoleUpdateInputDto,
      );
      if (updateDto) {
        onSubmit(updateDto);
      }
    } else {
      const _data = values as API.JhIdentity.IdentityRoleCreateDto;
      _data.isDefault = true;
      _data.isPublic = true;
      const createDto = await defaultService.CreateByRoles(_data);
      if (createDto) {
        onSubmit(createDto);
      }
    }
  };

  const operatorTitle = useMemo(() => {
    let _t = intl.formatMessage({ id: 'DisplayName:IdentityRole', defaultMessage: '角色' });
    switch (operator) {
      case ViewOperator.Add:
        {
          _t = `${_t} ${intl.formatMessage({
            id: 'Permission:Create',
            defaultMessage: '创建',
          })}`;
        }
        break;
      case ViewOperator.Edit:
        {
          _t = `${_t} ${intl.formatMessage({
            id: 'Permission:Edit',
            defaultMessage: '编辑',
          })}`;
        }
        break;
      case ViewOperator.Detail:
        {
          _t = `${_t} ${intl.formatMessage({
            id: 'Permission:Detail',
            defaultMessage: '详情',
          })}`;
        }
        break;
      default:
        break;
    }
    return _t;
  }, [intl, operator]);

  useEffect(() => {
    setTitle(operatorTitle);
    setExtraProperties(current?.extraProperties);
  }, [current, operatorTitle]);

  if (!current && operator != ViewOperator.Add) {
    return <></>;
  }

  return (
    <>
      <ModalForm<API.JhIdentity.IdentityRoleDto>
        width={378}
        visible={visible}
        title={title}
        onFinish={modalFormFinish}
        initialValues={operator == ViewOperator.Add ? {} : current}
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
              label={intl.formatMessage({
                id: 'DisplayName:IdentityRole:DisplayName',
                defaultMessage: '角色名称',
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
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalIdentityRole;
