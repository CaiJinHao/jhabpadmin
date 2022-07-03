import { ProFormSelect } from '@ant-design/pro-form';
import { FC, useCallback } from 'react';
import { useState } from 'react';
import * as identityuserService from '@/services/jhabp/identity/IdentityUser/identityuser.service';

type IdentityUserSelectProps = {
  onChange?: (values: any, option: any) => void;
  name?: string;
  label?: React.ReactNode;
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
  initialValue?: any;
};
const IdentityUserSelect: FC<IdentityUserSelectProps> = ({ onChange, name, ...props }) => {
  const [selectOptions, setSelectOptions] = useState<API.OptionDto<string>[]>([]);

  const requestSelectOptions = useCallback(async () => {
    if (selectOptions.length == 0) {
      const data = await identityuserService.GetOptions();
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
        allowClear
        name={name ?? 'userId'}
        request={requestSelectOptions}
        fieldProps={{
          onChange: onChange,
        }}
      />
    </>
  );
};

export default IdentityUserSelect;
