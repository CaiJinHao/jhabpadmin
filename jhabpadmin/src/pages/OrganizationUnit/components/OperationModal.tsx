import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';
import IdentityRoleSelect from '@/pages/components/IdentityRoleSelect';
import IdentityUserSelect from '@/pages/components/IdentityUserSelect';
import OrganizationUnitSelect from '@/pages/components/OrganizationUnitSelect';

type OperationModalProps = {
  operator: ViewOperator;
  visible: boolean;
  onCancel: () => void;
  current?: API.JhIdentity.OrganizationUnitDto;
  onSubmit: (values: API.JhIdentity.OrganizationUnitDto) => void;
};

const OperationModalOrganizationUnit: FC<OperationModalProps> = (props) => {
  const { operator, visible, current, onCancel, onSubmit, children } = props;
  const [title, setTitle] = useState<string>();
  const intl = useIntl();
  const [extraProperties, setExtraProperties] = useState<any>();

  const modalFormFinish = async (values: any) => {
    values.extraProperties = extraProperties;
    if (current) {
      const _data = Object.assign(current, values);
      const updateDto = await defaultService.Update(
        current.id,
        _data as API.JhIdentity.OrganizationUnitUpdateInputDto,
      );
      if (updateDto) {
        onSubmit(updateDto);
      }
    } else {
      const _data = values as API.JhIdentity.OrganizationUnitCreateInputDto;
      const createDto = await defaultService.Create(_data);
      if (createDto) {
        onSubmit(createDto);
      }
    }
  };

  const operatorTitle = useMemo(() => {
    let _t = intl.formatMessage({ id: 'DisplayName:JhOrganizationUnit', defaultMessage: '组织' });
    switch (operator) {
      case ViewOperator.Add:
        {
          _t = `${_t} ${intl.formatMessage({
            id: 'Permission:Create',
            defaultMessage: '创建',
          })}`;
        }
        break;
      case ViewOperator.Edit:
        {
          _t = `${_t} ${intl.formatMessage({
            id: 'Permission:Edit',
            defaultMessage: '编辑',
          })}`;
        }
        break;
      case ViewOperator.Detail:
        {
          _t = `${_t} ${intl.formatMessage({
            id: 'Permission:Detail',
            defaultMessage: '详情',
          })}`;
        }
        break;
      default:
        break;
    }
    return _t;
  }, [intl, operator]);

  useEffect(() => {
    setTitle(operatorTitle);
    setExtraProperties(current?.extraProperties);
  }, [current, operatorTitle]);

  if (!current && operator != ViewOperator.Add) {
    return <></>;
  }

  return (
    <>
      <ModalForm<API.JhIdentity.OrganizationUnitDto>
        visible={visible}
        title={title}
        onFinish={modalFormFinish}
        initialValues={operator == ViewOperator.Add ? {} : current}
        trigger={<>{children}</>}
        modalProps={{
          onCancel: () => onCancel(),
          destroyOnClose: true,
        }}
        submitter={operator == ViewOperator.Detail ? false : {}}
      >
        <>
          <ProForm.Group>
            <OrganizationUnitSelect
              width="md"
              name="parentId"
              label={intl.formatMessage({
                id: 'DisplayName:JhOrganizationUnit:ParentId',
                defaultMessage: '上级组织',
              })}
            />
            <ProFormText
              width="md"
              name="displayName"
              label={intl.formatMessage({
                id: 'DisplayName:JhOrganizationUnit:DisplayName',
                defaultMessage: '组织名称',
              })}
              rules={[
                {
                  required: true,
                  message: `${intl.formatMessage({
                    id: 'form.rules.message',
                    defaultMessage: '请输入',
                  })}\${label}`,
                },
              ]}
            />
            <IdentityRoleSelect
              //@ts-ignore
              title="为组织分配可用角色"
              width="md"
              label={intl.formatMessage({
                id: 'DisplayName:IdentityRole',
                defaultMessage: '为组织分配可用角色',
              })}
            />
            <IdentityUserSelect
              width="md"
              name="leaderId"
              label={intl.formatMessage({
                id: 'DisplayName:JhOrganizationUnit:LeaderId',
                defaultMessage: '负责人',
              })}
            />
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};

export default OperationModalOrganizationUnit;
