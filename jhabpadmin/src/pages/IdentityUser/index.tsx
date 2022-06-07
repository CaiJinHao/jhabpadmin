import { useState, useRef, useEffect } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Switch, message, Modal } from 'antd';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { getYesOrNo, ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/IdentityUser/identityuser.service';
import OperationModalIdentityUser from './components/OperationModal';
const IdentityUserList = () => {
  const [visibleOperation, setVisibleOperation] = useState<boolean>(false);
  const [detailOperation, setDetailOperation] = useState<ViewOperator>(ViewOperator.Detail);
  const { confirm } = Modal;
  const intl = useIntl();
  const proTableActionRef = useRef<ActionType>();
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [yesOrNoOptions, setYesOrNoOptions] = useState([]);

  const [currentOperation, setCurrentOperation] = useState<
    API.JhIdentity.IdentityUserDto | undefined
  >(undefined);

  const requestYesOrNoOptions = async () => {
    if (yesOrNoOptions.length == 0) {
      const data = await getYesOrNo();
      setYesOrNoOptions(data);
      return data;
    }
    return yesOrNoOptions;
  };

  // columns functions
  const handlerIsDeleted = async (record: API.JhIdentity.IdentityUserDto, action: any) => {
    if (record.isDeleted) {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: (
          <>
            {intl.formatMessage({
              id: 'ProTable.delete.Recover',
              defaultMessage: '确定要恢复吗?',
            })}
          </>
        ),
        onOk: async () => {
          await defaultService.Recover(record.id);
          message.success(
            intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }),
          );
          action?.reload();
        },
        onCancel() {},
      });
    } else {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: (
          <>
            {intl.formatMessage({
              id: 'ProTable.delete.Delete',
              defaultMessage: '确定要禁用吗?',
            })}
          </>
        ),
        onOk: async () => {
          await defaultService.DeleteById(record.id);
          message.success(
            intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }),
          );
          action?.reload();
        },
        onCancel() {},
      });
    }
  };

  const handlerLockoutEnabled = async (record: API.JhIdentity.IdentityUserDto, action: any) => {
    let msg = '确定要启用登录锁吗?';
    if (record.lockoutEnabled) {
      msg = '确定要关闭登录锁吗?';
    }
    console.log(record);
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: (
        <>
          {intl.formatMessage({
            id: 'JhIdentity:IdentityUsers:LockoutEnd',
            defaultMessage: msg,
          })}
        </>
      ),
      onOk: async () => {
        const _v = !record.lockoutEnabled;
        console.log(_v);
        await defaultService.UpdateLockoutEnabled(record.id, _v);
        message.success(intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }));
        action?.reload();
      },
      onCancel() {},
    });
  };
  const onCancelOperation = () => {
    setVisibleOperation(false);
  };

  const onSubmitOperation = () => {
    setVisibleOperation(false);
    message.success(intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }));
    proTableActionRef.current?.reload();
  };

  const create = () => {
    setDetailOperation(ViewOperator.Add);
    setVisibleOperation(true);
    setCurrentOperation(undefined);
  };

  const deleteByKeys = async () => {
    if (selectedRowKeys.length > 0) {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: (
          <>
            {intl.formatMessage({
              id: 'ProTable.delete.BatchDelete',
              defaultMessage: '确定要禁用选中项吗?',
            })}
          </>
        ),
        onOk: async () => {
          await defaultService.DeleteByKeys(selectedRowKeys);
          message.success(
            intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }),
          );
          proTableActionRef.current?.reload();
        },
        onCancel() {},
      });
    } else {
      message.warning(
        intl.formatMessage({ id: 'message.select.required', defaultMessage: '请选择操作项' }),
      );
    }
  };

  const loadDetail = async (record: API.JhIdentity.IdentityUserDto) => {
    setVisibleOperation(true);
    const detailDto = await defaultService.Get(record.id); //如果有额外得字段才会需要重新获取,否则可以直接使用record传递
    setCurrentOperation(detailDto);
  };
  const edit = async (record: API.JhIdentity.IdentityUserDto) => {
    setDetailOperation(ViewOperator.Edit);
    await loadDetail(record);
  };
  const detail = async (record: API.JhIdentity.IdentityUserDto) => {
    setDetailOperation(ViewOperator.Detail);
    await loadDetail(record);
  };

  useEffect(() => {
    setCurrentOperation(undefined);
  }, [visibleOperation]);

  const columns: ProColumns<API.JhIdentity.IdentityUserDto>[] = [
    {
      title: intl.formatMessage({
        id: 'JhIdentity:IdentityUser:UserName',
        defaultMessage: '用户账号',
      }),
      dataIndex: 'userName',
    },
    {
      title: intl.formatMessage({
        id: 'JhIdentity:IdentityUser:Name',
        defaultMessage: '用户名称',
      }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({
        id: 'JhIdentity:IdentityUser:Email',
        defaultMessage: '邮箱',
      }),
      dataIndex: 'email',
    },
    {
      title: intl.formatMessage({
        id: 'JhIdentity:IdentityUser:PhoneNumber',
        defaultMessage: '手机号',
      }),
      dataIndex: 'phoneNumber',
    },
    {
      title: intl.formatMessage({
        id: 'JhIdentity:IdentityUser:LockoutEnd',
        defaultMessage: '登录锁结束时间',
      }),
      dataIndex: 'lockoutEnd',
      search: false,
    },
    {
      title: intl.formatMessage({
        id: 'JhIdentity:IdentityUser:LockoutEnabled',
        defaultMessage: '启用登录锁',
      }),
      dataIndex: 'lockoutEnabled',
      search: false,
      render: (text, record, index, action) => {
        return (
          <Switch
            checked={record.lockoutEnabled}
            onChange={() => handlerLockoutEnabled(record, action)}
          />
        );
      },
    },
    {
      title: intl.formatMessage({
        id: 'JhIdentity:IdentityUser:AccessFailedCount',
        defaultMessage: '登录错误次数',
      }),
      dataIndex: 'accessFailedCount',
      search: false,
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:IsDeleted', defaultMessage: '是否禁用' }),
      dataIndex: 'isDeleted',
      search: false,
      render: (text, record, index, action) => {
        return (
          <Switch checked={record.isDeleted} onChange={() => handlerIsDeleted(record, action)} />
        );
      },
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
      render: (_, record) =>
        !record.isDeleted && [
          <a key="edit" onClick={() => edit(record)}>
            {intl.formatMessage({ id: 'Permission:Edit', defaultMessage: '编辑' })}
          </a>,
          <a key="detail" onClick={() => detail(record)}>
            {intl.formatMessage({ id: 'Permission:Detail', defaultMessage: '详情' })}
          </a>,
        ],
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:IsDeleted', defaultMessage: '是否禁用' }),
      dataIndex: 'deleted',
      hideInTable: true,
      valueType: 'select',
      initialValue: 2,
      request: requestYesOrNoOptions,
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

  return (
    <>
      <PageContainer>
        <ProTable<API.JhIdentity.IdentityUserDto>
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
            <Button type="primary" key="create" shape="round" onClick={create}>
              <PlusOutlined />
              {intl.formatMessage({ id: 'Permission:Create', defaultMessage: '创建' })}
            </Button>,
            <Button
              type="default"
              key="delete_keys"
              shape="round"
              danger={true}
              onClick={deleteByKeys}
            >
              <DeleteOutlined />
              {intl.formatMessage({ id: 'Permission:BatchDelete', defaultMessage: '批量禁用' })}
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
      <OperationModalIdentityUser
        operator={detailOperation}
        visible={visibleOperation}
        current={currentOperation}
        onCancel={onCancelOperation}
        onSubmit={onSubmitOperation}
      />
    </>
  );
};
export default IdentityUserList;
