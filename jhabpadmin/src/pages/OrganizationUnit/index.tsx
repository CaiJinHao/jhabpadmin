import { useState, useRef, useEffect, useMemo } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Switch, message, Modal } from 'antd';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { getYesOrNo, ViewOperator } from '@/services/jhabp/app.enums';
import { useAccess, useIntl } from 'umi';
import { Row, Col } from 'antd';

import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';
import OperationModalOrganizationUnit from './components/OperationModal';
import OrganizationUnitTree from '@/pages/components/OrganizationUnitTree';

const OrganizationUnitList = () => {
  const access = useAccess();
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
    proTableActionRef.current?.reload();
    setSelectedRowKeys([]);
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
              id: 'proTable.delete.Recover',
              defaultMessage: '???????????????????',
            })}
          </>
        ),
        onOk: async () => {
          await defaultService.Recover(record.id);
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
              id: 'proTable.delete.Delete',
              defaultMessage: '???????????????????',
            })}
          </>
        ),
        onOk: async () => {
          await defaultService.DeleteById(record.id);
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
    reloadProTable();
    setReloadTree(!reloadTree);
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
              id: 'proTable.delete.BatchDelete',
              defaultMessage: '????????????????????????????',
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
        intl.formatMessage({ id: 'message.select.required', defaultMessage: '??????????????????' }),
      );
    }
  };
  const loadDetail = async (record: API.JhIdentity.OrganizationUnitDto) => {
    setVisibleOperation(true);
    const detailDto = await defaultService.Get(record.id); //????????????????????????????????????????????????,????????????????????????record??????
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

  //?????????????????????????????????????????????
  const columns: ProColumns<API.JhIdentity.OrganizationUnitDto>[] = [
    {
      title: intl.formatMessage({
        id: 'DisplayName:JhOrganizationUnit:DisplayName',
        defaultMessage: '????????????',
      }),
      dataIndex: 'displayName',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:JhOrganizationUnit:LeaderId',
        defaultMessage: '???????????????',
      }),
      dataIndex: 'leaderName',
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:IsDeleted', defaultMessage: '????????????' }),
      dataIndex: 'isDeleted',
      search: false,
      render: (text, record) => {
        return (
          <Switch
            disabled={
              !(
                access['AbpIdentity.OrganizationUnits.Recover'] &&
                access['AbpIdentity.OrganizationUnits.Delete']
              )
            }
            checked={record.isDeleted}
            onChange={() => handlerIsDeleted(record)}
          />
        );
      },
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:CreationTime', defaultMessage: '????????????' }),
      dataIndex: 'creationTime',
      valueType: 'dateTime',
      search: false,
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:Operation', defaultMessage: '??????' }),
      key: 'option',
      valueType: 'option',
      render: (_, record) =>
        !record.isDeleted && [
          access['AbpIdentity.OrganizationUnits.Update'] && (
            <a key="edit" onClick={() => edit(record)}>
              {intl.formatMessage({ id: 'Permission:Edit', defaultMessage: '??????' })}
            </a>
          ),
          <a key="detail" onClick={() => detail(record)}>
            {intl.formatMessage({ id: 'Permission:Detail', defaultMessage: '??????' })}
          </a>,
        ],
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:IsDeleted', defaultMessage: '????????????' }),
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

  const onSelectOrgTree = async (selectedKeys: any[], info: any) => {
    if (selectedKeys.length > 0) {
      setQueryOrgCode(info.node.data.code);
    } else {
      setQueryOrgCode(null);
    }

    reloadProTable();
  };

  const tableSearch = useMemo(() => {
    return {
      labelWidth: 100,
      searchText: intl.formatMessage({
        id: 'proTable.search.searchText',
        defaultMessage: '??????',
      }),
      resetText: intl.formatMessage({
        id: 'proTable.search.resetText',
        defaultMessage: '??????',
      }),
    };
  }, [intl]);

  return (
    <>
      <PageContainer>
        <Row gutter={{ md: 16 }}>
          <Col xs={24} sm={6}>
            <OrganizationUnitTree onSelect={onSelectOrgTree} reload={reloadTree} />
          </Col>
          <Col xs={24} sm={18}>
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
                access['AbpIdentity.OrganizationUnits.Create'] && (
                  <Button type="primary" key="create" shape="round" onClick={create}>
                    <PlusOutlined />
                    {intl.formatMessage({ id: 'Permission:Create', defaultMessage: '??????' })}
                  </Button>
                ),
                access['AbpIdentity.OrganizationUnits.BatchDelete'] && (
                  <Button
                    type="default"
                    key="delete_keys"
                    shape="round"
                    danger={true}
                    onClick={deleteByKeys}
                  >
                    <DeleteOutlined />
                    {intl.formatMessage({
                      id: 'Permission:BatchDelete',
                      defaultMessage: '????????????',
                    })}
                  </Button>
                ),
              ]}
              search={tableSearch}
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
