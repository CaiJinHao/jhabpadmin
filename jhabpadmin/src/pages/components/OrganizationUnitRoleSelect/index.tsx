import { ProFormSelect } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as organizationunitService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OrganizationUnitRoleSelectProps = {
  organizationUnitDefalutValue?: string[];
  onRoleSelectedChange?: (values: any, option: any) => void;
  name?: string;
};
const OrganizationUnitRoleSelect: FC<OrganizationUnitRoleSelectProps> = ({
  onRoleSelectedChange,
  name,
  organizationUnitDefalutValue,
}) => {
  const [identityRoleOptions, setIdentityRoleOptions] = useState<any[]>([]);
  const [organizationUnitOptions, setOrganizationUnitOptions] = useState<API.OptionDto<string>[]>(
    [],
  );
  const requestOrganizationUnitOptions = async () => {
    if (organizationUnitOptions.length == 0) {
      const data = await organizationunitService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setOrganizationUnitOptions(items);
      return items;
    }
    return organizationUnitOptions;
  };

  const loadIdentityRoleOptions = async (values: string[]) => {
    if (values.length > 0) {
      const data = await organizationunitService.GetRoleOptions(values);
      setIdentityRoleOptions(data.items as any[]);
    } else {
      setIdentityRoleOptions([]);
    }
  };

  useEffect(() => {
    if (organizationUnitDefalutValue) {
      loadIdentityRoleOptions(organizationUnitDefalutValue);
    }
  }, [organizationUnitDefalutValue]);

  //TODO: organizationUnitIds是否可以直接拿到组织的值，就不需要传值了
  const onOrganizationUnitSelectedChange = async (values: any) => {
    await loadIdentityRoleOptions(values);
  };
  return (
    <>
      <ProFormSelect<API.OptionDto<string>>
        mode="multiple"
        allowClear
        width="md"
        name="organizationUnitIds"
        label="组织"
        rules={[{ required: false, message: '请选择组织' }]}
        request={requestOrganizationUnitOptions}
        fieldProps={{
          onChange: onOrganizationUnitSelectedChange,
        }}
      />
      <ProFormSelect<API.OptionDto<string>>
        mode="multiple"
        allowClear
        width="md"
        name={name ?? 'roleIds'}
        label="角色"
        rules={[{ required: false, message: '请选择角色' }]}
        options={identityRoleOptions}
        fieldProps={{
          onChange: onRoleSelectedChange,
          notFoundContent: '请选择组织',
        }}
      />
    </>
  );
};

export default OrganizationUnitRoleSelect;
