import { Button, Switch, Table } from 'antd';
import { PlusOutlined, DeleteOutlined, UndoOutlined, TransactionOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import React, { useState } from 'react';
import { connect } from 'umi';
import { getListMenu, deleteMenuByid, recoverMenu } from '@/services/jhabp/menu/menu.service';
import { getYesOrNo } from '@/services/jhabp/app.enums';
import * as icons from '@ant-design/icons';

//@ts-ignore
const MenuList = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // columns functions
  const handlerIsDeleted = async (record: any, action: any) => {
    if (record.isDeleted) {
      await recoverMenu(record.id);
    } else {
      await deleteMenuByid(record.id);
    }
    action?.reload();
  };

  const columns: ProColumns<API.MenuDto>[] = [
    {
      title: '菜单编号',
      dataIndex: 'menuCode',
      sorter: true,
    },
    {
      title: '菜单名称',
      dataIndex: 'menuName',
    },
    {
      title: '图标',
      dataIndex: 'menuIcon',
      hideInSearch: true,
      render: (text, record, index, action) => {
        if (record.menuIcon) {
          return React.createElement(icons[record.menuIcon]);
        } else {
          return <>-</>;
        }
      },
    },
    {
      title: '序号',
      dataIndex: 'menuSort',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: '上级菜单',
      dataIndex: 'menuParentCode',
      // filters: [
      //   { text: 'A01', value: 'A01' },
      //   { text: 'A02', value: 'A02' },
      // ],
      // filterSearch: true,
    },
    {
      title: '菜单路由',
      dataIndex: 'menuUrl',
      search: false,
    },
    {
      title: '是否可用',
      dataIndex: 'isDeleted',
      hideInSearch: true,
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
      dataIndex: 'creationTime',
      valueType: 'dateTime',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: '备注',
      dataIndex: 'menuDescription',
      copyable: true,
      hideInSearch: true,
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      render: () => [<a key="edit">编辑</a>, <a key="detail">详情</a>],
    },
    {
      title: '是否禁用',
      dataIndex: 'deleted',
      hideInTable: true,
      valueType: 'select',
      request: getYesOrNo,
    },
  ];

  //table functions

  const getTableDataSource = async (params: any, sorter: any, filter: any) => {
    // 表单搜索项会从 params 传入，传递给后端接口。
    const sortings = [];
    // Object.assign(params, filter);//因为过滤查询后台需要支持数组，所以该功能根据需要实现
    const _sorter = new Object(sorter);
    for (const key in _sorter) {
      if (_sorter.hasOwnProperty(key)) {
        const val = sorter[key] as string;
        sortings.push(`${key} ${val.replace('end', '')}`);
      }
    }
    const inputParams = { ...params, sorting: sortings.join(',') };
    const menusResponse = await getListMenu(inputParams);
    setTotalPage(menusResponse.totalCount);
    return {
      data: menusResponse.items,
      success: true,
    };
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (srk: any) => setSelectedRowKeys(srk),
  };

  const deleteByKeys = () => {
    console.log('deleteByKeys');
    console.log(selectedRowKeys);
  };

  const create = () => {
    console.log('create');
  };

  return (
    <ProTable<API.MenuDto>
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
          创建
        </Button>,
        <Button type="default" key="recover_keys" shape="round" onClick={deleteByKeys}>
          <UndoOutlined />
          批量启用
        </Button>,
        <Button type="default" key="delete_keys" shape="round" danger={true} onClick={deleteByKeys}>
          <DeleteOutlined />
          批量禁用
        </Button>,
      ]}
      search={{ labelWidth: 100 }}
    />
  );
};

//@ts-ignore
export default connect(({ MenuListModel }) => ({ MenuListModel }))(MenuList);
