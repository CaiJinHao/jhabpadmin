import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { FC, useEffect, useState } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OperationModalProps = {
  operator: ViewOperator;
  visible: boolean;
  onCancel: () => void;
  current: API.JhIdentity.OrganizationUnitDto;
  onSubmit: (values: API.JhIdentity.OrganizationUnitDto) => void;
};

const OperationModalOrganizationUnit: FC<OperationModalProps> = (props) => {
  const { operator, visible, current, onCancel, onSubmit, children } = props;
  const [title, setTitle] = useState<string>();
  const intl = useIntl();

  const modalFormFinish = async (values: any) => {
    if (current) {
      const _data = values as API.JhIdentity.OrganizationUnitUpdateInputDto;
      _data.concurrencyStamp = current.concurrencyStamp;
      const updateDto = await defaultService.Update(current.id, _data);
      if (updateDto) {
        onSubmit(updateDto);
      }
    } else {
      const createDto = await defaultService.Create(
        values as API.JhIdentity.OrganizationUnitCreateInputDto,
      );
      if (createDto) {
        onSubmit(createDto);
      }
    }
  };

  const requestOrganizationUnitOptions = async () => {
    const data = await defaultService.GetOptions('');
    const items = data.items as API.OptionDto<string>[];
    return items;
  };

  const initTitle = () => {
    let _t = '组织';
    switch (operator) {
      case ViewOperator.Add:
        {
          _t = `${_t}${intl.formatMessage({
            id: 'Permission:Create',
            defaultMessage: '创建',
          })}`;
        }
        break;
      case ViewOperator.Edit:
        {
          _t = `${_t}${intl.formatMessage({
            id: 'Permission:Edit',
            defaultMessage: '编辑',
          })}`;
        }
        break;
      case ViewOperator.Detail:
        {
          _t = `${_t}${intl.formatMessage({
            id: 'Permission:Detail',
            defaultMessage: '详情',
          })}`;
        }
        break;
    }
    setTitle(_t);
  };

  useEffect(() => {
    initTitle();
  }, [operator]);

  return (
    <>
      <ModalForm<API.JhIdentity.OrganizationUnitDto>
        width={378}
        visible={visible}
        title={title}
        onFinish={modalFormFinish}
        initialValues={current}
        trigger={<>{children}</>}
        modalProps={{
          onCancel: () => onCancel(),
          destroyOnClose: true,
        }}
        submitter={operator == ViewOperator.Detail ? false : {}}
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
