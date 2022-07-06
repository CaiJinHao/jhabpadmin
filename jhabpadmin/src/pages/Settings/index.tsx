import { useState, useRef, useEffect, useMemo } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, message } from 'antd';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { ViewOperator } from '@/services/jhabp/app.enums';
import { useAccess, useIntl } from 'umi';

import * as defaultService from '@/services/jhabp/identity/Settings/settings.service';
import OperationModalSettingDefinitionDto from './components/OperationModal';
const SettingDefinitionDtoList = () => {
  const access = useAccess();
  const [visibleOperation, setVisibleOperation] = useState<boolean>(false);
  const [detailOperation, setDetailOperation] = useState<ViewOperator>(ViewOperator.Detail);
  const intl = useIntl();
  const proTableActionRef = useRef<ActionType>();
  const [totalPage, setTotalPage] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [currentOperation, setCurrentOperation] = useState<
    API.JhIdentity.SettingDefinitionDto | undefined
  >(undefined);
  const reloadProTable = () => {
    proTableActionRef.current?.reload();
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

  const loadDetail = async (record: API.JhIdentity.SettingDefinitionDto) => {
    setVisibleOperation(true);
    const detailDto = await defaultService.Get(record.id); //如果有额外得字段才会需要重新获取,否则可以直接使用record传递
    setCurrentOperation(detailDto);
  };
  const edit = async (record: API.JhIdentity.SettingDefinitionDto) => {
    setDetailOperation(ViewOperator.Edit);
    await loadDetail(record);
  };
  const detail = async (record: API.JhIdentity.SettingDefinitionDto) => {
    setDetailOperation(ViewOperator.Detail);
    await loadDetail(record);
  };

  useEffect(() => {
    setCurrentOperation(undefined);
  }, [visibleOperation]);

  const columns: ProColumns<API.JhIdentity.SettingDefinitionDto>[] = [
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:ProviderName',
        defaultMessage: '提供者名称',
      }),
      dataIndex: 'providerName',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:ProviderKey',
        defaultMessage: '提供者Key',
      }),
      dataIndex: 'providerKey',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:Name',
        defaultMessage: '名称',
      }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:DisplayName',
        defaultMessage: '显示名称',
      }),
      dataIndex: 'displayName',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:Description',
        defaultMessage: '描述',
      }),
      dataIndex: 'description',
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:DefaultValue',
        defaultMessage: '值',
      }),
      width: 100,
      dataIndex: 'defaultValue',
      search: false,
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:IsInherited',
        defaultMessage: '是否继承',
      }),
      dataIndex: 'isInherited',
      renderText: (text: any) => {
        return <>{text.toString()}</>;
      },
      search: false,
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:Properties',
        defaultMessage: '属性',
      }),
      dataIndex: 'properties',
      renderText: (text: any) => {
        return <>{JSON.stringify(text)}</>;
      },
      search: false,
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:IsEncrypted',
        defaultMessage: '是否加密',
      }),
      dataIndex: 'isEncrypted',
      renderText: (text: any) => {
        return <>{text.toString()}</>;
      },
      search: false,
    },
    {
      title: intl.formatMessage({ id: 'JhAbp:Operation', defaultMessage: '操作' }),
      key: 'option',
      valueType: 'option',
      render: (_, record) => [
        access['SettingManagement.Settings.Update'] && (
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
    const responseData = await defaultService.GetAll(inputParams);
    const datas = responseData.items as [];
    setTotalPage(datas.length);
    return {
      data: datas,
      success: true,
    };
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: (srk: any) => setSelectedRowKeys(srk),
  };

  const toolBarRender = useMemo(() => {
    return [
      access['SettingManagement.Settings.Update'] && (
        <Button type="primary" key="create" shape="round" onClick={create}>
          <PlusOutlined />
          {intl.formatMessage({ id: 'Permission:Create', defaultMessage: '创建' })}
        </Button>
      ),
    ];
  }, [access, intl]);

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
        <ProTable<API.JhIdentity.SettingDefinitionDto>
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
          toolBarRender={() => toolBarRender}
          search={tableSearch}
        />
      </PageContainer>
      <OperationModalSettingDefinitionDto
        operator={detailOperation}
        visible={visibleOperation}
        current={currentOperation}
        onCancel={onCancelOperation}
        onSubmit={onSubmitOperation}
      />
    </>
  );
};
export default SettingDefinitionDtoList;
