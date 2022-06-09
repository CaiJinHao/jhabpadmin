import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Tree, Card } from 'antd';
import * as defaultService from '@/services/jhabp/identity/JhPermissions/jhpermissions.service';

type TreePermissionTreeProps = {
  reload?: boolean;
  onTreeSelected: (values: API.TreeAntdDto | null) => void;
  checkable?: boolean;
  defaultCheckedKeys?: any[];
  defaultSelectedKeys?: any[];
};
const TreePermissionTree: FC<TreePermissionTreeProps> = ({ onTreeSelected, reload, ...props }) => {
  const [treeData, setTreeData] = useState<any>();

  const treeSelected = (selectedKeys: any[], info: any) => {
    if (selectedKeys.length > 0) {
      onTreeSelected(info);
    } else {
      onTreeSelected(null);
    }
  };

  const loadTreeData = async () => {
    const _treeDto = await defaultService.GetTrees();
    setTreeData(_treeDto.items);
  };

  const onCheck = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info);
  };

  useEffect(() => {
    loadTreeData();
  }, [reload]);

  console.log(props.defaultCheckedKeys);

  return (
    <>
      {treeData && (
        <Card size="small" className="myCard">
          <Tree
            {...props}
            onCheck={onCheck}
            showLine={{ showLeafIcon: false }}
            defaultExpandAll
            showIcon={false}
            switcherIcon={<DownOutlined />}
            onSelect={treeSelected}
            treeData={treeData}
            // defaultSelectedKeys={['0-0-0', '0-0-1']}
            // defaultCheckedKeys={['0-0-0', '0-0-1']}
          />
        </Card>
      )}
    </>
  );
};

export default TreePermissionTree;
