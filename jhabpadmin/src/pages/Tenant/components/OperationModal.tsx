import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useEffect, useState, useMemo } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/Tenant/tenant.service';

type OperationModalProps = {
  operator: ViewOperator;
  visible: boolean;
  onCancel: () => void;
  current?: API.JhIdentity.TenantDto;
  onSubmit: (values: API.JhIdentity.TenantDto) => void;
};
const OperationModalTenantDto: FC<OperationModalProps> = (props) => {
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
        _data as API.JhIdentity.TenantUpdateDto,
      );
      if (updateDto) {
        onSubmit(updateDto);
      }
    } else {
      const _data = values as API.JhIdentity.TenantCreateDto;
      const createDto = await defaultService.Create(_data);
      if (createDto) {
        onSubmit(createDto);
      }
    }
  };
  const operatorTitle = useMemo(() => {
    let _t = intl.formatMessage({ id: 'DisplayName:Tenant', defaultMessage: '' });

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
      <ModalForm<API.JhIdentity.TenantDto>
        width={378}
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
            <ProFormText
              width="md"
              name="name"
              label={intl.formatMessage({ id: 'DisplayName:Tenant:Name', defaultMessage: '名称' })}
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
            {operator == ViewOperator.Add && (
              <>
                <ProFormText
                  width="md"
                  name="adminEmailAddress"
                  label={intl.formatMessage({
                    id: 'DisplayName:IdentityUser:Email',
                    defaultMessage: '邮箱',
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

                <ProFormText
                  width="md"
                  name="adminPassword"
                  label={intl.formatMessage({
                    id: 'DisplayName:IdentityUser:Password',
                    defaultMessage: 'Admin密码',
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
              </>
            )}
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalTenantDto;
