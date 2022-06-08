import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/IdentityUser/identityuser.service';
import * as identityroleService from '@/services/jhabp/identity/IdentityRole/identityrole.service';
import * as organizationunitService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';
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

  const [identityRoleOptions, setIdentityRoleOptions] = useState<API.OptionDto<string>[]>([]);
  const [organizationUnitOptions, setOrganizationUnitOptions] = useState<API.OptionDto<string>[]>(
    [],
  );
  const [roleNames, setRoleNames] = useState<string[]>([]);

  const modalFormFinish = async (values: any) => {
    values.extraProperties = extraProperties;
    values.roleNames = roleNames;
    if (current) {
      const _data = values as API.JhIdentity.IdentityUserUpdateInputDto;
      _data.concurrencyStamp = current.concurrencyStamp;
      const updateDto = await defaultService.Update(current.id as string, _data);
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

  const requestIdentityRoleOptions = async () => {
    if (identityRoleOptions.length == 0) {
      const data = await identityroleService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setIdentityRoleOptions(items);
      return items;
    }
    return identityRoleOptions;
  };

  const requestOrganizationUnitOptions = async () => {
    if (organizationUnitOptions.length == 0) {
      const data = await organizationunitService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setOrganizationUnitOptions(items);
      return items;
    }
    return organizationUnitOptions;
  };
  const initTitle = useCallback(() => {
    let _t = '用户';
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
    setTitle(_t);
  }, [intl, operator]);

  const roleSelectedChange = (value: any, option: any) => {
    const _rns: string[] = [];
    (option as any[]).forEach((item) => {
      _rns.push(item.label);
    });
    setRoleNames(_rns);
  };

  useEffect(() => {
    initTitle();
    setExtraProperties(current?.extraProperties);
  }, [current, initTitle]);

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
              label="用户账号"
              rules={[{ required: true, message: '请输入用户账号' }]}
              placeholder="请输入"
            />
            <ProFormText width="md" name="password" label="用户密码" placeholder="请输入" />
            <ProFormText
              width="md"
              name="phoneNumber"
              label="手机号"
              rules={[{ required: true, message: '手机号' }]}
              placeholder="请输入"
            />
            <ProFormText
              width="md"
              name="email"
              label="邮箱"
              rules={[{ required: true, message: '邮箱' }]}
              placeholder="请输入"
            />
            <ProFormText
              width="md"
              name="name"
              label="用户名称"
              rules={[{ required: true, message: '邮箱' }]}
              placeholder="请输入"
            />
            <OrganizationUnitRoleSelect
              organizationUnitDefalutValue={current?.organizationUnitIds}
              onRoleSelectedChange={roleSelectedChange}
            />
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalIdentityUser;
