import { ProFormSelect } from '@ant-design/pro-form';
import { FC, useCallback } from 'react';
import { useState } from 'react';
import * as identityroleService from '@/services/jhabp/identity/IdentityRole/identityrole.service';

type IdentityRoleSelectProps = {
  onChange?: (values: any, option: any) => void;
  name?: string;
  label?: React.ReactNode;
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
};
const IdentityRoleSelect: FC<IdentityRoleSelectProps> = ({ onChange, name, ...props }) => {
  const [selectOptions, setSelectOptions] = useState<API.OptionDto<string>[]>([]);

  const requestSelectOptions = useCallback(async () => {
    if (selectOptions.length == 0) {
      const data = await identityroleService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setSelectOptions(items);
      return items;
    }
    return selectOptions;
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
