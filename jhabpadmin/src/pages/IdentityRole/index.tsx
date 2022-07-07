import { useState, useRef, useEffect, useMemo } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';
import { useAccess } from 'umi';

import * as defaultService from '@/services/jhabp/identity/IdentityRole/identityrole.service';
import OperationModalIdentityRole from './components/OperationModal';
const IdentityRoleList = () => {
  const access = useAccess();
  const [visibleOperation, setVisibleOperation] = useState<boolean>(false);
  const [detailOperation, setDetailOperation] = useState<ViewOperator>(ViewOperator.Detail);
  const intl = useIntl();
  const proTableActionRef = useRef<ActionType>();
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [currentOperation, setCurrentOperation] = useState<
    API.JhIdentity.IdentityRoleDto | undefined
  >(undefined);

  const onCancelOperation = () => {
    setVisibleOperation(false);
  };

  const onSubmitOperation = () => {
    setVisibleOperation(false);
    proTableActionRef.current?.reload();
  };

  const create = () => {
    setDetailOperation(ViewOperator.Add);
    setVisibleOperation(true);
    setCurrentOperation(undefined);
  };
  const loadDetail = async (record: API.JhIdentity.IdentityRoleDto) => {
    setVisibleOperation(true);
    const detailDto = await defaultService.Get(record.id); //如果有额外得字段才会需要重新获取,否则可以直接使用record传递
    setCurrentOperation(detailDto);
  };
  const edit = async (record: API.JhIdentity.IdentityRoleDto) => {
    setDetailOperation(ViewOperator.Edit);
    await loadDetail(record);
  };
  const detail = async (record: API.JhIdentity.IdentityRoleDto) => {
    setDetailOperation(ViewOperator.Detail);
    await loadDetail(record);
  };

  useEffect(() => {
    setCurrentOperation(undefined);
  }, [visibleOperation]);

  const columns: ProColumns<API.JhIdentity.IdentityRoleDto>[] = [
    {
      title: intl.formatMessage({
        id: 'DisplayName:IdentityRole:DisplayName',
        defaultMessage: '角色名称',
      }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:Operation', defaultMessage: '操作' }),
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (_, record) => [
        access['AbpIdentity.Roles.Update'] && (
          <a key="edit" onClick={() => edit(record)}>
            {intl.formatMessage({ id: 'Permission:Edit', defaultMessage: '编辑' })}
          </a>
        ),
        <a key="detail" onClick={() => detail(record)}>
          {intl.formatMessage({ id: 'Permission:Detail', defaultMessage: '详情' })}
        </a>,
      ],
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
    onChange: (srk: any) => setSelectedRowKeys(srk),
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
        <ProTable<API.JhIdentity.IdentityRoleDto>
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
            access['AbpIdentity.Roles.Create'] && (
              <Button type="primary" key="create" shape="round" onClick={create}>
                <PlusOutlined />
                {intl.formatMessage({ id: 'Permission:Create', defaultMessage: '创建' })}
              </Button>
            ),
          ]}
          search={tableSearch}
        />
      </PageContainer>

      <OperationModalIdentityRole
        operator={detailOperation}
        visible={visibleOperation}
        current={currentOperation}
        onCancel={onCancelOperation}
        onSubmit={onSubmitOperation}
      />
    </>
  );
};
export default IdentityRoleList;
