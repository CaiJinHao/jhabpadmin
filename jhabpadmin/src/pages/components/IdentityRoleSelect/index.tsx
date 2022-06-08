import { ProFormSelect } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useState } from 'react';
import * as identityroleService from '@/services/jhabp/identity/IdentityRole/identityrole.service';

type IdentityRoleSelectProps = {
  onRoleSelectedChange?: (values: any, option: any) => void;
  name?: string;
};
const IdentityRoleSelect: FC<IdentityRoleSelectProps> = ({ onRoleSelectedChange, name }) => {
  const [identityRoleOptions, setIdentityRoleOptions] = useState<API.OptionDto<string>[]>([]);

  const requestIdentityRoleOptions = async () => {
    if (identityRoleOptions.length == 0) {
      const data = await identityroleService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setIdentityRoleOptions(items);
      return items;
    }
    return identityRoleOptions;
  };

  return (
    <>
      <ProFormSelect<API.OptionDto<string>>
        mode="multiple"
        allowClear
        width="md"
        name={name ?? 'roleIds'}
        label="角色"
        rules={[{ required: false, message: '请选择角色' }]}
        request={requestIdentityRoleOptions}
        fieldProps={{
          onChange: onRoleSelectedChange,
        }}
      />
    </>
  );
};

export default IdentityRoleSelect;
