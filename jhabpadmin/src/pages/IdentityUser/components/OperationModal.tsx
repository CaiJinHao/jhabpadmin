import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/IdentityUser/identityuser.service';
import OrganizationUnitRoleSelect from '@/pages/components/OrganizationUnitRoleSelect';

type OperationModalProps = {
  operator: ViewOperator;
  visible: boolean;
  onCancel: () => void;
  current?: API.JhIdentity.IdentityUserDto;
  onSubmit: (values: API.JhIdentity.IdentityUserDto) => void;
};
const OperationModalIdentityUser: FC<OperationModalProps> = (props) => {
  const { operator, visible, current, onCancel, onSubmit, children } = props;
  const [title, setTitle] = useState<string>();
  const intl = useIntl();
  const [extraProperties, setExtraProperties] = useState<any>();

  const [roleNames, setRoleNames] = useState<string[]>([]);

  const modalFormFinish = async (values: any) => {
    values.extraProperties = extraProperties;
    values.roleNames = roleNames;
    if (current) {
      const _data = Object.assign(current, values);
      const updateDto = await defaultService.Update(
        current.id,
        _data as API.JhIdentity.IdentityUserUpdateInputDto,
      );
      if (updateDto) {
        onSubmit(updateDto);
      }
    } else {
      const _data = values as API.JhIdentity.IdentityUserCreateInputDto;
      const createDto = await defaultService.Create(_data);
      if (createDto) {
        onSubmit(createDto);
      }
    }
  };
  const operatorTitle = useMemo(() => {
    let _t = intl.formatMessage({ id: 'DisplayName:IdentityUser', defaultMessage: '用户' });
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
      default:
        break;
    }
    return _t;
  }, [intl, operator]);

  const onChangeRole = (value: any, option: any) => {
    const _rns: string[] = [];
    (option as any[]).forEach((item) => {
      _rns.push(item.label);
    });
    setRoleNames(_rns);
  };

  useEffect(() => {
    setTitle(operatorTitle);
    setExtraProperties(current?.extraProperties);
  }, [current, operatorTitle]);

  if (!current && operator != ViewOperator.Add) {
    return <></>;
  }

  return (
    <>
      <ModalForm<API.JhIdentity.IdentityUserDto>
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
            <ProFormText
              width="md"
              name="password"
              label={intl.formatMessage({
                id: 'DisplayName:IdentityUser:Password',
                defaultMessage: '用户密码',
              })}
            />
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

            <OrganizationUnitRoleSelect
              width="md"
              onChange={onChangeRole}
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
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalIdentityUser;
