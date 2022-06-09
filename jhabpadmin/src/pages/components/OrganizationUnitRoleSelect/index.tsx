import { ProFormSelect } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useState } from 'react';
import * as organizationunitService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';
import { useIntl } from 'umi';

type OrganizationUnitRoleSelectProps = {
  onChange?: (values: any, option: any) => void;
  roleSelectName?: string;
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
};
const OrganizationUnitRoleSelect: FC<OrganizationUnitRoleSelectProps> = ({
  onChange,
  roleSelectName,
  ...props
}) => {
  const [organizationUnitOptions, setOrganizationUnitOptions] = useState<API.OptionDto<string>[]>(
    [],
  );
  const intl = useIntl();

  const requestOrganizationUnitOptions = async () => {
    if (organizationUnitOptions.length == 0) {
      const data = await organizationunitService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setOrganizationUnitOptions(items);
      return items;
    }
    return organizationUnitOptions;
  };

  const requestIdentityRoleOptions = async (value: any) => {
    const organizationUnitIds = value.organizationUnitIds as string[];
    if (organizationUnitIds.length > 0) {
      const data = await organizationunitService.GetRoleOptions(organizationUnitIds);
      const items = data.items as API.OptionDto<string>[];
      return items;
    }
    return [];
  };

  /*
  已使用简单的方式实现
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

  const onOrganizationUnitSelectedChange = async (values: any) => {
    await loadIdentityRoleOptions(values);
  };
  */

  return (
    <>
      <ProFormSelect<API.OptionDto<string>>
        {...props}
        mode="multiple"
        allowClear
        name="organizationUnitIds"
        label={intl.formatMessage({
          id: 'DisplayName:JhOrganizationUnit',
          defaultMessage: '组织',
        })}
        request={requestOrganizationUnitOptions}
      />
      <ProFormSelect<API.OptionDto<string>>
        {...props}
        mode="multiple"
        allowClear
        name={roleSelectName ?? 'roleIds'}
        label={intl.formatMessage({
          id: 'DisplayName:IdentityRole',
          defaultMessage: '角色',
        })}
        // options={identityRoleOptions}
        dependencies={['organizationUnitIds']}
        request={requestIdentityRoleOptions}
        fieldProps={{
          onChange: onChange,
          notFoundContent: '请先选择组织',
        }}
      />
    </>
  );
};

export default OrganizationUnitRoleSelect;
