import { ProFormSelect } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useCallback } from 'react';
import * as identityroleService from '@/services/jhabp/identity/IdentityRole/identityrole.service';

type IdentityRoleSelectProps = {
  onChange?: (values: any, option: any) => void;
  name?: string;
  label?: React.ReactNode;
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
};
const IdentityRoleSelect: FC<IdentityRoleSelectProps> = ({ onChange, name, ...props }) => {
  const requestSelectOptions = useCallback(async () => {
    const data = await identityroleService.GetOptions('');
    const items = data.items as API.OptionDto<string>[];
    return items;
  }, []);

  return (
    <>
      <ProFormSelect<API.OptionDto<string>>
        {...props}
        mode="multiple"
        allowClear
        name={name ?? 'roleIds'}
        request={requestSelectOptions}
        fieldProps={{
          onChange: onChange,
        }}
      />
    </>
  );
};

export default IdentityRoleSelect;
