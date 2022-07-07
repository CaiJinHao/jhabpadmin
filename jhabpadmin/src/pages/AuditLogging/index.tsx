import { useState, useRef, useEffect, useMemo } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, message, Modal } from 'antd';
import ProTable from '@ant-design/pro-table';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl, useAccess } from 'umi';

import * as defaultService from '@/services/jhabp/identity/AuditLogging/auditlogging.service';

import OperationModalAuditLog from './components/OperationModal';
const AuditLogList = () => {
  const [visibleOperation, setVisibleOperation] = useState<boolean>(false);
  const [detailOperation, setDetailOperation] = useState<ViewOperator>(ViewOperator.Detail);
  const { confirm } = Modal;
  const access = useAccess();
  const intl = useIntl();
  const proTableActionRef = useRef<ActionType>();
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [currentOperation, setCurrentOperation] = useState<API.JhIdentity.AuditLog | undefined>(
    undefined,
  );
  const reloadProTable = () => {
    proTableActionRef.current?.reload();
    setSelectedRowKeys([]);
  };

  const onCancelOperation = () => {
    setVisibleOperation(false);
  };

  const onSubmitOperation = () => {
    setVisibleOperation(false);
    reloadProTable();
  };

  const deleteByKeys = async () => {
    if (selectedRowKeys.length > 0) {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: (
          <>
            {intl.formatMessage({
              id: 'proTable.delete.BatchDelete',
              defaultMessage: '确定要删除选中项吗?',
            })}
          </>
        ),
        onOk: async () => {
          await defaultService.DeleteByKeys(selectedRowKeys);
          reloadProTable();
        },
        onCancel() {},
      });
    } else {
      message.warning(
        intl.formatMessage({ id: 'message.select.required', defaultMessage: '请选择操作项' }),
      );
    }
  };

  const loadDetail = async (record: API.JhIdentity.AuditLog) => {
    setVisibleOperation(true);
    const detailDto = await defaultService.Get(record.id); //如果有额外得字段才会需要重新获取,否则可以直接使用record传递
    setCurrentOperation(detailDto);
  };

  const detail = async (record: API.JhIdentity.AuditLog) => {
    setDetailOperation(ViewOperator.Detail);
    await loadDetail(record);
  };

  useEffect(() => {
    setCurrentOperation(undefined);
  }, [visibleOperation]);

  const columns: ProColumns<API.JhIdentity.AuditLog>[] = [
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:ApplicationName',
        defaultMessage: '应用名称',
      }),
      dataIndex: 'applicationName',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:UserName',
        defaultMessage: '操作用户名',
      }),
      dataIndex: 'userName',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:TenantName',
        defaultMessage: '租户名称',
      }),
      dataIndex: 'tenantName',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:ExecutionTime',
        defaultMessage: '执行时间',
      }),
      dataIndex: 'executionTime',
      search: false,
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:ExecutionDuration',
        defaultMessage: '执行耗时',
      }),
      dataIndex: 'executionDuration',
      search: false,
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:ClientIpAddress',
        defaultMessage: 'Ip地址',
      }),
      dataIndex: 'clientIpAddress',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:HttpMethod',
        defaultMessage: 'Http方法',
      }),
      dataIndex: 'httpMethod',
    },
    {
      title: intl.formatMessage({ id: 'DisplayName:AuditLog:Url', defaultMessage: 'Url' }),
      dataIndex: 'url',
      search: false,
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:HttpStatusCode',
        defaultMessage: 'Http状态码',
      }),
      dataIndex: 'httpStatusCode',
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:Operation', defaultMessage: '操作' }),
      key: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a key="detail" onClick={() => detail(record)}>
          {intl.formatMessage({ id: 'Permission:Detail', defaultMessage: '详情' })}
        </a>,
      ],
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:HasException',
        defaultMessage: '数据异常过滤',
      }),
      dataIndex: 'hasException',
      valueType: 'radio',
      hideInTable: true,
      initialValue: '',
      valueEnum: {
        '': { text: '全部' },
        true: { text: '异常' },
      },
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:AuditLog:DateTimeRange',
        defaultMessage: '执行时间区间',
      }),
      key: 'dateTimeRange',
      valueType: 'dateTimeRange',
      hideInTable: true,
      colSize: 2,
      search: {
        transform: (value: any) => ({ startTime: value[0], endTime: value[1] }),
      },
    },
  ];

  //table functions
  const getTableDataSource = async (params: any, sorter: any) => {
    const sortings = [];
    const _sorter = new Object(sorter);
    for (const key in _sorter) {
      if (_sorter.hasOwnProperty(key)) {
        const val = sorter[key] as string;
        sortings.push(`${key} ${val.replace('end', '')}`);
      }
    }
    const inputParams = { ...params, sorting: sortings.join(',') };
    const responseData = await defaultService.GetList(inputParams);
    setTotalPage(responseData.totalCount);
    return {
      data: responseData.items,
      success: true,
    };
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: (srk: any) => setSelectedRowKeys(srk as []),
  };

  const tableSearch = useMemo(() => {
    return {
      labelWidth: 100,
      searchText: intl.formatMessage({
        id: 'proTable.search.searchText',
        defaultMessage: '查询',
      }),
      resetText: intl.formatMessage({
        id: 'proTable.search.resetText',
        defaultMessage: '重置',
      }),
    };
  }, [intl]);

  return (
    <>
      <PageContainer>
        <ProTable<API.JhIdentity.AuditLog>
          actionRef={proTableActionRef}
          columns={columns}
          rowSelection={rowSelection}
          request={(params, sorter) => getTableDataSource(params, sorter)}
          rowKey="id"
          pagination={{
            pageSize: 10,
            total: totalPage,
          }}
          dateFormatter="string"
          toolBarRender={() => [
            access['JhAuditLogging.AuditLoggings.BatchDelete'] && (
              <Button
                type="default"
                key="delete_keys"
                shape="round"
                danger={true}
                onClick={deleteByKeys}
              >
                <DeleteOutlined />
                {intl.formatMessage({ id: 'Permission:BatchDelete', defaultMessage: '批量删除' })}
              </Button>
            ),
          ]}
          search={tableSearch}
        />
      </PageContainer>
      <OperationModalAuditLog
        operator={detailOperation}
        visible={visibleOperation}
        current={currentOperation}
        onCancel={onCancelOperation}
        onSubmit={onSubmitOperation}
      />
    </>
  );
};
export default AuditLogList;
