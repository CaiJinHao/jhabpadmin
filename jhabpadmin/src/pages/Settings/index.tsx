import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ViewOperator, getProvider } from '@/services/jhabp/app.enums';
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
    setSelectedRowKeys([]);
  };

  const requestProviderOptions = useCallback(async () => {
    return await getProvider();
  }, []);

  const onCancelOperation = () => {
    setVisibleOperation(false);
  };

  const onSubmitOperation = () => {
    setVisibleOperation(false);
    reloadProTable();
  };

  const loadDetail = async (
    operation: ViewOperator,
    record: API.JhIdentity.SettingDefinitionDto,
  ) => {
    setDetailOperation(operation);
    setVisibleOperation(true);
    const detailDto = await defaultService.Get({
      providerName: record.providerNameEnum,
      providerKey: record.providerKey,
      name: record.name,
    }); //如果有额外得字段才会需要重新获取,否则可以直接使用record传递
    if (
      operation == ViewOperator.Edit &&
      (detailDto.providerNameEnum == 0 || detailDto.providerNameEnum == 1)
    ) {
      detailDto.providerNameEnum = 2; //需要修改为全局
    }
    delete detailDto.providerName; //由于表单名称包含此字段所以要删除，否则枚举字段赋值不上
    setCurrentOperation(detailDto);
  };

  const edit = async (record: API.JhIdentity.SettingDefinitionDto) => {
    await loadDetail(ViewOperator.Edit, record);
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
      request: requestProviderOptions,
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:ProviderKey',
        defaultMessage: '提供者Key',
      }),
      dataIndex: 'providerKey',
      tooltip: '当提供者名称为T和U时可查询，其他值查询无效',
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
      search: false,
    },
    {
      title: intl.formatMessage({
        id: 'DisplayName:SettingDefinitionDto:Value',
        defaultMessage: '值',
      }),
      width: 100,
      dataIndex: 'value',
      search: false,
    },
    // {
    //   title: intl.formatMessage({
    //     id: 'DisplayName:SettingDefinitionDto:IsInherited',
    //     defaultMessage: '是否继承',
    //   }),
    //   dataIndex: 'isInherited',
    //   renderText: (text: any) => {
    //     return <>{text.toString()}</>;
    //   },
    //   search: false,
    // },
    // {
    //   title: intl.formatMessage({
    //     id: 'DisplayName:SettingDefinitionDto:Properties',
    //     defaultMessage: '属性',
    //   }),
    //   dataIndex: 'properties',
    //   renderText: (text: any) => {
    //     return <>{JSON.stringify(text)}</>;
    //   },
    //   search: false,
    // },
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
