import { ProFormSelect } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useCallback } from 'react';
import * as identityuserService from '@/services/jhabp/identity/IdentityUser/identityuser.service';

type IdentityUserSelectProps = {
  onChange?: (values: any, option: any) => void;
  name?: string;
  label?: React.ReactNode;
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
  initialValue?: any;
};
const IdentityUserSelect: FC<IdentityUserSelectProps> = ({ onChange, name, ...props }) => {
  const requestSelectOptions = useCallback(async () => {
    const data = await identityuserService.GetOptions();
    const items = data.items as API.OptionDto<string>[];
    return items;
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
