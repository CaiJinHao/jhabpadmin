import { useState, useRef, useEffect } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Switch, message, Modal } from 'antd';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { getYesOrNo, ViewOperator } from '@/services/jhabp/app.enums';
import { useIntl } from 'umi';
import { Row, Col } from 'antd';

import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';
import OperationModalOrganizationUnit from './components/OperationModal';
import OrganizationUnitTree from '@/pages/components/OrganizationUnitTree';

const OrganizationUnitList = () => {
  const [visibleOperation, setVisibleOperation] = useState<boolean>(false);
  const [detailOperation, setDetailOperation] = useState<ViewOperator>(ViewOperator.Detail);
  const { confirm } = Modal;
  const intl = useIntl();
  const proTableActionRef = useRef<ActionType>();
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [yesOrNoOptions, setYesOrNoOptions] = useState([]);
  const [queryOrgCode, setQueryOrgCode] = useState<string | null>(null);

  const [currentOperation, setCurrentOperation] = useState<
    API.JhIdentity.OrganizationUnitDto | undefined
  >(undefined);

  const [reloadTree, setReloadTree] = useState<boolean>(false);

  const reloadProTable = () => {
    setReloadTree(!reloadTree);
    proTableActionRef.current?.reload();
  };

  const requestYesOrNoOptions = async () => {
    if (yesOrNoOptions.length == 0) {
      const data = await getYesOrNo();
      setYesOrNoOptions(data);
      return data;
    }
    return yesOrNoOptions;
  };

  // columns functions
  const handlerIsDeleted = async (record: API.JhIdentity.OrganizationUnitDto) => {
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
          reloadProTable();
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
          reloadProTable();
        },
        onCancel() {},
      });
    }
  };

  const onCancelOperation = () => {
    setVisibleOperation(false);
  };

  const onSubmitOperation = () => {
    setVisibleOperation(false);
    message.success(intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }));
    reloadProTable();
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
  const loadDetail = async (record: API.JhIdentity.OrganizationUnitDto) => {
    setVisibleOperation(true);
    const detailDto = await defaultService.Get(record.id); //如果有额外得字段才会需要重新获取,否则可以直接使用record传递
    setCurrentOperation(detailDto);
  };
  const edit = async (record: API.JhIdentity.OrganizationUnitDto) => {
    setDetailOperation(ViewOperator.Edit);
    await loadDetail(record);
  };

  const detail = async (record: API.JhIdentity.OrganizationUnitDto) => {
    setDetailOperation(ViewOperator.Detail);
    await loadDetail(record);
  };

  useEffect(() => {
    setCurrentOperation(undefined);
  }, [visibleOperation]);

  //需要展示得字段、需要搜索得字段
  const columns: ProColumns<API.JhIdentity.OrganizationUnitDto>[] = [
    {
      title: intl.formatMessage({
        id: 'JhIdentity:JhOrganizationUnit:DisplayName',
        defaultMessage: '组织名称',
      }),
      dataIndex: 'displayName',
    },
    {
      title: intl.formatMessage({
        id: 'JhIdentity:JhOrganizationUnit:LeaderId',
        defaultMessage: '组织负责人',
      }),
      renderText: (text, record) => {
        return record.extraProperties.LeaderName;
      },
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
      dataIndex: 'creationTime',
      valueType: 'dateTime',
      search: false,
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:Operation', defaultMessage: '操作' }),
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
    //, filter: any
    const sortings = [];
    const _sorter = new Object(sorter);
    for (const key in _sorter) {
      if (_sorter.hasOwnProperty(key)) {
        const val = sorter[key] as string;
        sortings.push(`${key} ${val.replace('end', '')}`);
      }
    }
    const inputParams = { ...params, sorting: sortings.join(','), code: queryOrgCode };
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

  const orgTreeSelected = (info: any) => {
    if (info == null) {
      setQueryOrgCode(null);
    } else {
      setQueryOrgCode(info.node.data.code);
    }

    reloadProTable();
  };

  return (
    <>
      <PageContainer>
        <Row gutter={{ md: 16 }}>
          <Col md={6}>
            <OrganizationUnitTree onTreeSelected={orgTreeSelected} reload={reloadTree} />
          </Col>
          <Col md={18}>
            <ProTable<API.JhIdentity.OrganizationUnitDto>
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
          </Col>
        </Row>
      </PageContainer>
      <OperationModalOrganizationUnit
        operator={detailOperation}
        visible={visibleOperation}
        current={currentOperation}
        onCancel={onCancelOperation}
        onSubmit={onSubmitOperation}
      />
    </>
  );
};

export default OrganizationUnitList;
