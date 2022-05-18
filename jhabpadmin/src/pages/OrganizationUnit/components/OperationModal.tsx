import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useState } from 'react';
import * as organizationunitService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OperationModalProps = {
  detail: boolean;
  visible: boolean;
  current: Partial<API.JhIdentity.OrganizationUnitDto> | undefined;
  onCancel: () => void;
  onSubmit: (values: API.JhIdentity.OrganizationUnitDto) => void;
};

const OperationModalOrganizationUnit: FC<OperationModalProps> = (props) => {
  const { detail, visible, current, onCancel, onSubmit, children } = props;
  const [organizationUnitOptions, setOrganizationUnitOptions] = useState<API.OptionDto<string>[]>(
    [],
  );

  const modalFormFinish = async (values: API.JhIdentity.OrganizationUnitDto) => {
    if (current) {
      Object.assign(current, values);
      const updateDto = await organizationunitService.Update(current.id as string, {
        parentId: current.parentId,
        displayName: current.displayName,
        isDeleted: current.isDeleted,
        concurrencyStamp: current.concurrencyStamp,
        extraProperties: current.extraProperties,
      });
      if (updateDto) {
        onSubmit(current);
      }
    } else {
      const createDto = await organizationunitService.Create(values);
      if (createDto) {
        onSubmit(values);
      }
    }
  };

  const requestOrganizationUnitOptions = async () => {
    if (organizationUnitOptions.length == 0) {
      const data = await organizationunitService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setOrganizationUnitOptions(items);
      return items;
    }
    return organizationUnitOptions;
  };

  return (
    <>
      <ModalForm<API.JhIdentity.OrganizationUnitDto>
        visible={visible}
        title={`组织${current ? '编辑' : '添加'}`}
        onFinish={modalFormFinish}
        initialValues={current}
        trigger={<>{children}</>}
        modalProps={{
          onCancel: () => onCancel(),
          destroyOnClose: true,
        }}
        submitter={!detail ? {} : false}
      >
        <>
          <ProFormSelect<API.OptionDto<string>>
            name="parentId"
            label="上级组织"
            rules={[{ required: false, message: '请选择上级组织' }]}
            request={requestOrganizationUnitOptions}
          />
          <ProFormText
            name="displayName"
            label="组织名称"
            rules={[{ required: true, message: '请输入组织名称' }]}
            placeholder="请输入"
          />
        </>
      </ModalForm>
    </>
  );
};

export default OperationModalOrganizationUnit;
