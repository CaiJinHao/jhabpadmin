import { Button, Switch, Table } from 'antd';
import { PlusOutlined, DeleteOutlined, UndoOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { useState } from 'react';
import { connect } from 'umi';
import { getListMenu, deleteMenuByid, recoverMenu } from '@/services/jhabp/menu/menu.service';
import { getYesOrNo } from '@/services/jhabp/app.enums';

//@ts-ignore
const MenuList = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns: ProColumns<API.MenuDto>[] = [
    {
      title: '菜单编号',
      dataIndex: 'menuCode',
    },
    {
      title: '菜单名称',
      dataIndex: 'menuName',
    },
    {
      title: '图标',
      dataIndex: 'menuIcon',
      search: false,
    },
    {
      title: '排序',
      dataIndex: 'menuSort',
      search: false,
    },
    {
      title: '上级菜单编号',
      dataIndex: 'menuParentCode',
    },
    {
      title: '菜单路由',
      dataIndex: 'menuUrl',
      width: 200,
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
    },
    {
      title: '备注',
      dataIndex: 'menuDescription',
      ellipsis: true,
      copyable: true,
      search: false,
    },
    {
      title: '操作',
      width: 180,
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

  const handlerIsDeleted = async (record: any, action: any) => {
    if (record.isDeleted) {
      await recoverMenu(record.id);
    } else {
      await deleteMenuByid(record.id);
    }
    action?.reload();
  };

  //@ts-ignore
  const getTableDataSource = async (params, sorter, filter) => {
    // 表单搜索项会从 params 传入，传递给后端接口。
    console.log(params);
    console.log(sorter);
    console.log(filter);
    const menusResponse = await getListMenu(params);
    setTotalPage(menusResponse.totalCount);
    return {
      data: menusResponse.items,
      success: true,
    };
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (srk: any) => setSelectedRowKeys(srk),
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
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
      search={{ labelWidth: 100, span: 6 }}
    />
  );
};

//@ts-ignore
export default connect(({ MenuListModel }) => ({ MenuListModel }))(MenuList);
