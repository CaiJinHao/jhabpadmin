import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useState } from 'react';
import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OperationModalProps = {
  detail: boolean;
  visible: boolean;
  onCancel: () => void;
  current: Partial<API.JhIdentity.OrganizationUnitDto> | undefined;
  onSubmit: (values: API.JhIdentity.OrganizationUnitDto) => void;
};

const OperationModalOrganizationUnit: FC<OperationModalProps> = (props) => {
  const { detail, visible, current, onCancel, onSubmit, children } = props;
  const [organizationUnitOptions, setOrganizationUnitOptions] = useState<API.OptionDto<string>[]>(
    [],
  );

  const modalFormFinish = async (values: API.JhIdentity.OrganizationUnitCreateInputDto) => {
    if (current) {
      const updateDto = await defaultService.Update(current.id as string, values);
      if (updateDto) {
        onSubmit(updateDto);
      }
    } else {
      const createDto = await defaultService.Create(values);
      if (createDto) {
        onSubmit(createDto);
      }
    }
  };

  const requestOrganizationUnitOptions = async () => {
    if (organizationUnitOptions.length == 0) {
      const data = await defaultService.GetOptions('');
      const items = data.items as API.OptionDto<string>[];
      setOrganizationUnitOptions(items);
      return items;
    }
    return organizationUnitOptions;
  };

  return (
    <>
      <ModalForm<API.JhIdentity.OrganizationUnitDto>
        width={378}
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
          <ProForm.Group>
            <ProFormSelect<API.OptionDto<string>>
              width="md"
              name="parentId"
              label="上级组织"
              rules={[{ required: false, message: '请选择上级组织' }]}
              request={requestOrganizationUnitOptions}
            />
            <ProFormText
              width="md"
              name="displayName"
              label="组织名称"
              rules={[{ required: true, message: '请输入组织名称' }]}
              placeholder="请输入"
            />
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};

export default OperationModalOrganizationUnit;
