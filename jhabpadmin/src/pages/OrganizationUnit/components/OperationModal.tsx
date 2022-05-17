import { ModalForm, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import * as organizationunitService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OperationModalProps = {
  visible: boolean;
  current: Partial<API.JhIdentity.OrganizationUnitDto> | undefined;
  onCancel: () => void;
  onSubmit: (values: API.JhIdentity.OrganizationUnitDto) => void;
};

const OperationModalOrganizationUnit: FC<OperationModalProps> = (props) => {
  const { visible, current, onCancel, onSubmit, children } = props;

  const modalFormFinish = async (values: API.JhIdentity.OrganizationUnitDto) => {
    console.log(values);
    console.log(current);
    if (current) {
      Object.assign(current, values);
      console.log(current);
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
      values.extraProperties = {};
      const createDto = await organizationunitService.Create(values);
      if (createDto) {
        onSubmit(values);
      }
    }
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
      >
        <>
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
