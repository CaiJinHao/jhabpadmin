import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import type { FC } from 'react';
import { useEffect, useState, useMemo } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

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
  }, [current, operatorTitle]);

  if (!current && operator != ViewOperator.Add) {
    return <></>;
  }

  return (
    <>
      <ModalForm<API.JhIdentity.SettingDefinitionDto>
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
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:Name',
                defaultMessage: '',
              })}
            />
            <ProFormText
              width="md"
              name="displayName"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:DisplayName',
                defaultMessage: '',
              })}
            />
            <ProFormText
              width="md"
              name="description"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:Description',
                defaultMessage: '',
              })}
            />
            <ProFormText
              width="md"
              name="defaultValue"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:DefaultValue',
                defaultMessage: '',
              })}
            />
            <ProFormText
              width="md"
              name="isVisibleToClients"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:IsVisibleToClients',
                defaultMessage: '',
              })}
            />
            <ProFormText
              width="md"
              name="isInherited"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:IsInherited',
                defaultMessage: '',
              })}
            />
            <ProFormText
              width="md"
              name="properties"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:Properties',
                defaultMessage: '',
              })}
            />
            <ProFormText
              width="md"
              name="isEncrypted"
              label={intl.formatMessage({
                id: 'DisplayName:SettingDefinitionDto:IsEncrypted',
                defaultMessage: '',
              })}
            />
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalSettingDefinitionDto;
