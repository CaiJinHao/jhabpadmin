import { ProFormSelect } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useCallback } from 'react';

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
  const requestSelectOptions = useCallback(async () => {
    const data = await defaultService.GetOptions('');
    const items = data.items as API.OptionDto<string>[];
    return items;
  }, []);

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
