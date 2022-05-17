import { useState, useRef, useEffect, useCallback } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Switch, Table } from 'antd';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined, DeleteOutlined, UndoOutlined } from '@ant-design/icons';
import { getYesOrNo } from '@/services/jhabp/app.enums';
import * as organizationService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';
import OperationModalOrganizationUnit from './components/OperationModal';

const OrganizationUnitList = () => {
  const [visibleOperation, setVisibleOperation] = useState<boolean>(false);
  const [currentOperation, setCurrentOperation] = useState<
    Partial<API.JhIdentity.OrganizationUnitDto> | undefined
  >(undefined);

  const proTableActionRef = useRef<ActionType>();
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [yesOrNo, setYesOrNo] = useState([]);

  const initData = useCallback(async () => {
    setYesOrNo(await getYesOrNo());
  }, []);

  useEffect(() => {
    initData();
  }, [initData]);

  const requestYesOrNo = async () => {
    return yesOrNo;
  };

  // columns functions
  const handlerIsDeleted = async (record: any, action: any) => {
    if (record.isDeleted) {
      await organizationService.Recover(record.id);
    } else {
      await organizationService.DeleteById(record.id);
    }
    action?.reload();
  };

  const onCancelOperation = () => {
    setVisibleOperation(false);
  };

  const onSubmitOperation = () => {
    setVisibleOperation(false);
    proTableActionRef.current?.reload();
  };

  const create = () => {
    setVisibleOperation(true);
    setCurrentOperation(undefined);
  };

  const deleteByKeys = () => {
    console.log('deleteByKeys');
    console.log(selectedRowKeys);
    proTableActionRef.current?.reload();
  };

  const edit = (record: API.JhIdentity.OrganizationUnitDto) => {
    setVisibleOperation(true);
    setCurrentOperation(record);
  };

  //需要展示得字段、需要搜索得字段
  const columns: ProColumns<API.JhIdentity.OrganizationUnitDto>[] = [
    {
      title: '组织编号',
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: '组织名称',
      dataIndex: 'displayName',
    },
    {
      title: '组织负责人',
      dataIndex: 'leaderName',
      search: false,
    },
    {
      title: '是否可用',
      dataIndex: 'isDeleted',
      search: false,
      render: (text, record, index, action) => {
        return (
          <Switch
            checkedChildren="已启用"
            unCheckedChildren="已禁用"
            checked={!record.isDeleted}
            onChange={() => handlerIsDeleted(record, action)}
          />
        );
      },
    },
    {
      title: '创建时间',
      width: 140,
      dataIndex: 'creationTime',
      valueType: 'date',
      search: false,
      sorter: true,
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a key="edit" onClick={() => edit(record)}>
          编辑
        </a>,
        <a key="detail">详情</a>,
      ],
    },
    {
      title: '是否禁用',
      dataIndex: 'deleted',
      hideInTable: true,
      valueType: 'select',
      request: requestYesOrNo,
    },
  ];

  //table functions
  const getTableDataSource = async (params: any, sorter: any, filter: any) => {
    // 表单搜索项会从 params 传入，传递给后端接口。
    const sortings = [];
    console.log(filter);
    const _sorter = new Object(sorter);
    for (const key in _sorter) {
      if (_sorter.hasOwnProperty(key)) {
        const val = sorter[key] as string;
        sortings.push(`${key} ${val.replace('end', '')}`);
      }
    }
    const inputParams = { ...params, sorting: sortings.join(',') };
    const responseData = await organizationService.GetList(inputParams);
    setTotalPage(responseData.totalCount);
    return {
      data: responseData.items,
      success: true,
    };
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (srk: any) => setSelectedRowKeys(srk),
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
  };

  return (
    <>
      <PageContainer>
        <ProTable<API.JhIdentity.OrganizationUnitDto>
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
              添加
            </Button>,
            <Button type="default" key="recover_keys" shape="round" onClick={deleteByKeys}>
              <UndoOutlined />
              批量启用
            </Button>,
            <Button
              type="default"
              key="delete_keys"
              shape="round"
              danger={true}
              onClick={deleteByKeys}
            >
              <DeleteOutlined />
              批量禁用
            </Button>,
          ]}
          search={{ labelWidth: 100 }}
        />
      </PageContainer>
      <OperationModalOrganizationUnit
        visible={visibleOperation}
        current={currentOperation}
        onCancel={onCancelOperation}
        onSubmit={onSubmitOperation}
      />
    </>
  );
};

export default OrganizationUnitList;
