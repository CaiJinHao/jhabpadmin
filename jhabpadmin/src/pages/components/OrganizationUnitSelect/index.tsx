import { ProFormSelect } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useState } from 'react';

import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OrganizationUnitSelectSelectProps = {
  onChange?: (values: any, option: any) => void;
  name?: string;
  label?: React.ReactNode;
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
};
const OrganizationUnitSelectSelect: FC<OrganizationUnitSelectSelectProps> = ({
  onChange,
  name,
  ...props
}) => {
  const [selectOptions, setSelectOptions] = useState<API.OptionDto<string>[]>([]);

  const requestSelectOptions = async () => {
    if (selectOptions.length == 0) {
      const data = await defaultService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setSelectOptions(items);
      return items;
    }
    return selectOptions;
  };

  return (
    <>
      <ProFormSelect<API.OptionDto<string>>
        {...props}
        allowClear
        name={name ?? 'OrganizationUnitId'}
        request={requestSelectOptions}
        fieldProps={{
          onChange: onChange,
        }}
      />
    </>
  );
};

export default OrganizationUnitSelectSelect;
