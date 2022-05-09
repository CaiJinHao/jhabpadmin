import { Button, Tooltip } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { useState } from 'react';
import { connect } from 'umi';
import { getListMenu } from '@/services/jhabp/menu/menu.service';
import { getYesOrNo } from '@/services/jhabp/app.enums';

const columns: ProColumns<API.MenuDto>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
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
    valueType: 'select',
    request: getYesOrNo,
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
    render: () => [
      <a key="link">编辑</a>,
      <a key="link2">删除</a>,
      <a key="link3">详情</a>,
      <a key="link4">禁用</a>,
      <a key="link5">恢复</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

//@ts-ignore
const MenuList = () => {
  const [totalPage, setTotalPage] = useState(0);

  //@ts-ignore
  const getTableDataSource = async (params, sorter, filter) => {
    // 表单搜索项会从 params 传入，传递给后端接口。
    console.log(params);
    console.log(sorter);
    console.log(filter);
    const menusResponse = await getListMenu(params);
    setTotalPage(menusResponse.totalCount as number);
    return menusResponse.items;
  };

  return (
    <ProTable
      headerTitle="菜单列表"
      columns={columns}
      request={async (params, sorter, filter) => {
        const dataSource = await getTableDataSource(params, sorter, filter);
        return Promise.resolve({
          data: dataSource,
          success: true,
        });
      }}
      rowKey="id"
      pagination={{
        pageSize: 10,
        total: totalPage,
      }}
      dateFormatter="string"
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,
      ]}
    />
  );
};

//@ts-ignore
export default connect(({ MenuListModel }) => ({ MenuListModel }))(MenuList);
