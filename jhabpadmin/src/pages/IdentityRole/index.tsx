import { useState, useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, message, Modal } from 'antd';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/IdentityRole/identityrole.service';
import OperationModalIdentityRole from './components/OperationModal';
const IdentityRoleList = () => {
  const [visibleOperation, setVisibleOperation] = useState<boolean>(false);
  const [detailOperation, setDetailOperation] = useState<boolean>(false);
  const { confirm } = Modal;
  const intl = useIntl();
  const proTableActionRef = useRef<ActionType>();
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [currentOperation, setCurrentOperation] = useState<
    Partial<API.JhIdentity.IdentityRoleDto> | undefined
  >(undefined);

  const onCancelOperation = () => {
    setVisibleOperation(false);
  };

  const onSubmitOperation = () => {
    setVisibleOperation(false);
    message.success(intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }));
    proTableActionRef.current?.reload();
  };

  const create = () => {
    setDetailOperation(false);
    setVisibleOperation(true);
    setCurrentOperation(undefined);
  };
  const edit = (record: API.JhIdentity.IdentityRoleDto) => {
    setDetailOperation(false);
    setVisibleOperation(true);
    setCurrentOperation(record);
  };
  const detail = (record: API.JhIdentity.IdentityRoleDto) => {
    setDetailOperation(true);
    setVisibleOperation(true);
    setCurrentOperation(record);
  };
  const columns: ProColumns<API.JhIdentity.IdentityRoleDto>[] = [
    {
      title: intl.formatMessage({
        id: 'JhIdentity:JhOrganizationUnit:DisplayName',
        defaultMessage: '角色名称',
      }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:CreationTime', defaultMessage: '创建时间' }),
      width: 140,
      dataIndex: 'creationTime',
      valueType: 'date',
      search: false,
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:Operation', defaultMessage: '操作' }),
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a key="edit" onClick={() => edit(record)}>
          {intl.formatMessage({ id: 'Permission:Edit', defaultMessage: '编辑' })}
        </a>,
        <a key="detail" onClick={() => detail(record)}>
          {intl.formatMessage({ id: 'Permission:Detail', defaultMessage: '详情' })}
        </a>,
      ],
    },
  ];

  //table functions
  const getTableDataSource = async (params: any, sorter: any, filter: any) => {
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
    onChange: (srk: any) => setSelectedRowKeys(srk),
  };

  return (
    <>
      <PageContainer>
        <ProTable<API.JhIdentity.IdentityRoleDto>
          actionRef={proTableActionRef}
          columns={columns}
          rowSelection={rowSelection}
          request={(params, sorter, filter) => getTableDataSource(params, sorter, filter)}
          rowKey="id"
          pagination={{
            pageSize: 10,
            total: totalPage,
          }}
          dateFormatter="string"
          toolBarRender={() => [
            <Button type="primary" key="create" shape="round" onClick={create}>
              <PlusOutlined />
              {intl.formatMessage({ id: 'Permission:Create', defaultMessage: '创建' })}
            </Button>,
          ]}
          search={{
            labelWidth: 100,
            searchText: intl.formatMessage({
              id: 'ProTable.search.searchText',
              defaultMessage: '查询',
            }),
            resetText: intl.formatMessage({
              id: 'ProTable.search.resetText',
              defaultMessage: '重置',
            }),
          }}
        />
      </PageContainer>

      <OperationModalIdentityRole
        detail={detailOperation}
        visible={visibleOperation}
        current={currentOperation}
        onCancel={onCancelOperation}
        onSubmit={onSubmitOperation}
      />
    </>
  );
};
export default IdentityRoleList;
