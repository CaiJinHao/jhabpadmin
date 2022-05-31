import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { FC, useCallback, useEffect } from 'react';
import { useState } from 'react';
import * as defaultService from '@/services/jhabp/identity/IdentityUser/identityuser.service';
import * as identityroleService from '@/services/jhabp/identity/IdentityRole/identityrole.service';
import * as organizationunitService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OperationModalProps = {
  detail: boolean;
  visible: boolean;
  onCancel: () => void;
  current: Partial<API.JhIdentity.IdentityUserDto> | undefined;
  onSubmit: (values: API.JhIdentity.IdentityUserDto) => void;
};
const OperationModalIdentityUser: FC<OperationModalProps> = (props) => {
  const { detail, visible, current, onCancel, onSubmit, children } = props;
  const [identityUserDto, setIdentityUserDto] = useState<API.JhIdentity.IdentityUserDto>([]);
  const [identityRoleOptions, setIdentityRoleOptions] = useState<API.OptionDto<string>[]>([]);
  const [organizationUnitOptions, setOrganizationUnitOptions] = useState<API.OptionDto<string>[]>(
    [],
  );

  //需要重新获取用户信息
  const initData = useCallback(async () => {
    const dataDto = await defaultService.Get(current?.id as string);
    setIdentityUserDto(dataDto);
  }, [current]);

  useEffect(() => {
    if (current) {
      initData();
    }
  }, [current]);

  const modalFormFinish = async (values: API.JhIdentity.IdentityUserCreateInputDto) => {
    if (current) {
      values.concurrencyStamp = identityUserDto.concurrencyStamp;
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
  if (!current) {
    return <></>;
  }
  return (
    <>
      <ModalForm<API.JhIdentity.IdentityUserDto>
        visible={visible}
        title={`${current ? '编辑' : '添加'}`}
        onFinish={modalFormFinish}
        initialValues={identityUserDto}
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
            <ProFormSelect<API.OptionDto<string>>
              mode="multiple"
              allowClear
              width="md"
              name="roleIds"
              label="角色"
              rules={[{ required: false, message: '请选择角色' }]}
              request={requestIdentityRoleOptions}
            />
            <ProFormSelect<API.OptionDto<string>>
              mode="multiple"
              allowClear
              width="md"
              name="organizationUnitIds"
              label="组织"
              rules={[{ required: false, message: '请选择组织' }]}
              request={requestOrganizationUnitOptions}
            />
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalIdentityUser;
