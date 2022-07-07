import { ProFormSelect } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useCallback } from 'react';
import * as organizationunitService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';
import { useIntl } from 'umi';
import type { Rule } from 'rc-field-form/lib/interface';

type OrganizationUnitRoleSelectProps = {
  onChange?: (values: any, option: any) => void;
  roleSelectName?: string;
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
  rules?: Rule[];
};
const OrganizationUnitRoleSelect: FC<OrganizationUnitRoleSelectProps> = ({
  onChange,
  roleSelectName,
  ...props
}) => {
  const intl = useIntl();

  const requestOrganizationUnitOptions = useCallback(async () => {
    const data = await organizationunitService.GetOptions('');
    const items = data.items as API.OptionDto<string>[];
    return items;
  }, []);

  const requestIdentityRoleOptions = useCallback(async (value: any) => {
    const organizationUnitIds = value.organizationUnitIds as string[];
    if (organizationUnitIds.length > 0) {
      const data = await organizationunitService.GetRoleOptions(organizationUnitIds);
      const items = data.items as API.OptionDto<string>[];
      return items;
    }
    return [];
  }, []);

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
