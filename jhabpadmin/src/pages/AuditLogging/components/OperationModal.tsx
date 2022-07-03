import ProForm, { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { FC, useMemo } from 'react';
import { useEffect, useState } from 'react';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

type OperationModalProps = {
  operator: ViewOperator;
  visible: boolean;
  onCancel: () => void;
  current?: API.JhIdentity.AuditLog;
  onSubmit: (values: API.JhIdentity.AuditLog) => void;
};
const OperationModalAuditLog: FC<OperationModalProps> = (props) => {
  const { operator, visible, current, onCancel, children } = props;
  const [title, setTitle] = useState<string>();
  const intl = useIntl();

  const operatorTitle = useMemo(() => {
    let _t = intl.formatMessage({ id: 'DisplayName:AuditLog', defaultMessage: '' });
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
  }, [operator]);

  useEffect(() => {
    setTitle(operatorTitle);
  }, [current, operator]);

  if (!current && operator != ViewOperator.Add) {
    return <></>;
  }
  return (
    <>
      <ModalForm<API.JhIdentity.AuditLog>
        visible={visible}
        title={title}
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
              name="applicationName"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:ApplicationName',
                defaultMessage: '应用名称',
              })}
            />
            <ProFormText
              width="md"
              name="userName"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:UserName',
                defaultMessage: '用户账号',
              })}
            />
            <ProFormText
              width="md"
              name="tenantName"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:TenantName',
                defaultMessage: '租户名称',
              })}
            />
            {/* <ProFormText
              width="md"
              name="ImpersonatorUserName"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:ImpersonatorUserName',
                defaultMessage: '',
              })}
            />
            <ProFormText
              width="md"
              name="ImpersonatorTenantName"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:ImpersonatorTenantName',
                defaultMessage: '',
              })}
            /> */}
            <ProFormText
              width="md"
              name="executionTime"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:ExecutionTime',
                defaultMessage: '执行时间',
              })}
            />
            <ProFormText
              width="md"
              name="executionDuration"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:ExecutionDuration',
                defaultMessage: '执行耗时',
              })}
            />
            <ProFormText
              width="md"
              name="clientIpAddress"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:ClientIpAddress',
                defaultMessage: '客户端IP',
              })}
            />
            <ProFormText
              width="md"
              name="clientName"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:ClientName',
                defaultMessage: '客户端名称',
              })}
            />
            <ProFormText
              width="md"
              name="clientId"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:ClientId',
                defaultMessage: '客户端Id',
              })}
            />
            <ProFormText
              width="md"
              name="httpMethod"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:HttpMethod',
                defaultMessage: 'Http方法',
              })}
            />
            <ProFormText
              width="md"
              name="httpStatusCode"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:HttpStatusCode',
                defaultMessage: 'Http状态码',
              })}
            />
            <ProFormTextArea
              width="md"
              name="browserInfo"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:BrowserInfo',
                defaultMessage: '浏览器信息',
              })}
              fieldProps={{
                rows: 4,
              }}
            />
            <ProFormTextArea
              width="md"
              name="url"
              label={intl.formatMessage({ id: 'DisplayName:AuditLog:Url', defaultMessage: 'Url' })}
              fieldProps={{
                rows: 4,
              }}
            />
            <ProFormTextArea
              width="md"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:Actions',
                defaultMessage: '执行过程',
              })}
              fieldProps={{
                value: JSON.stringify(current?.actions),
                rows: 4,
              }}
            />
            <ProFormTextArea
              width="md"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:EntityChanges',
                defaultMessage: '更改实体',
              })}
              fieldProps={{
                value: JSON.stringify(current?.entityChanges),
                rows: 4,
              }}
            />
            <ProFormTextArea
              width="md"
              name="comments"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:Comments',
                defaultMessage: '注释',
              })}
            />
            <ProFormTextArea
              width="md"
              name="exceptions"
              label={intl.formatMessage({
                id: 'DisplayName:AuditLog:Exceptions',
                defaultMessage: '异常',
              })}
            />
          </ProForm.Group>
        </>
      </ModalForm>
    </>
  );
};
export default OperationModalAuditLog;
