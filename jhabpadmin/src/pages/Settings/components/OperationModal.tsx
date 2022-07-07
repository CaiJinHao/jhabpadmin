import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useCallback } from 'react';
import { useEffect, useState, useMemo } from 'react';
import { ViewOperator, getProvider } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';
import { Switch } from 'antd';

import * as defaultService from '@/services/jhabp/identity/Settings/settings.service';

type OperationModalProps = {
  operator: ViewOperator;
  visible: boolean;
  onCancel: () => void;
  current?: API.JhIdentity.SettingDefinitionDto;
  onSubmit: (values: API.JhIdentity.SettingDefinitionDto) => void;
};
const OperationModalSettingDefinitionDto: FC<OperationModalProps> = (props) => {
  const { operator, visible, current, onCancel, onSubmit, children } = props;
  const [title, setTitle] = useState<string>();
  const intl = useIntl();

  const modalFormFinish = async (values: any) => {
    if (current) {
      const _data = Object.assign(current, values);
      await defaultService.Set(_data as API.JhIdentity.SettingCreateOrUpdateInputDto);
      onSubmit(_data as API.JhIdentity.SettingDefinitionDto);
    } else {
      const _data = values as API.JhIdentity.SettingCreateOrUpdateInputDto;
      await defaultService.Set(_data);
      onSubmit(values as API.JhIdentity.SettingDefinitionDto);
    }
  };

  const requestProviderOptions = useCallback(async () => {
    return await getProvider();
  }, []);

  const operatorTitle = useMemo(() => {
    let _t = intl.formatMessage({ id: 'DisplayName:SettingDefinitionDto', defaultMessage: '' });

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
  }, [current, operator, operatorTitle]);

  if (!current && operator != ViewOperator.Add) {
    return <></>;
  }

  return (
    <>
      <ModalForm<API.JhIdentity.SettingDefinitionDto>
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
            {operator != ViewOperator.Add && (
              <>
                <ProFormText
                  width="md"
                  name="displayName"
                  disabled
                  label={intl.formatMessage({
                    id: 'DisplayName:SettingDefinitionDto:DisplayName',
                    defaultMessage: '显示名称',
                  })}
                />
                <ProFormText
                  width="md"
                  name="description"
                  disabled
                  label={intl.formatMessage({
                    id: 'DisplayName:SettingDefinitionDto:Description',
                    defaultMessage: '描述',
                  })}
                />
                {/* <ProFormText
                  width="md"
                  name="isInherited"
                  disabled
                  label={intl.formatMessage({
                    id: 'DisplayName:SettingDefinitionDto:IsInherited',
                    defaultMessage: '是否继承',
                  })}
                /> */}
              </>
            )}
            <ProFormSelect<API.OptionDto<number>>
              width="md"
              name="providerName"
              initialValue={current?.providerNameEnum}
              tooltip="D和C为硬编码配置，不可修改，可使用G进行覆盖配置项"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:ProviderName',
                defaultMessage: '提供者名称',
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
              allowClear
              request={requestProviderOptions}
            />
            <ProFormText
              width="md"
              name="providerKey"
              tooltip="当提供者名称为T和U时有效，为空时设置为当前登录相关属性，全局设置无需填写"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:ProviderKey',
                defaultMessage: '提供者Key',
              })}
            />
            <ProFormText
              width="md"
              name="name"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:Name',
                defaultMessage: '名称',
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
              name="value"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:Value',
                defaultMessage: '值',
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
            <ProForm.Item
              name="forceToSet"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:ForceToSet',
                defaultMessage: '强制更新',
              })}
            >
              <Switch checkedChildren="开启" unCheckedChildren="关闭" />
            </ProForm.Item>
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalSettingDefinitionDto;
