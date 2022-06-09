import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Tree, Card } from 'antd';
import * as defaultService from '@/services/jhabp/identity/JhPermissions/jhpermissions.service';

type TreePermissionTreeProps = {
  reload?: boolean;
  onTreeSelected: (values: API.TreeAntdDto | null) => void;
};
const TreePermissionTree: FC<TreePermissionTreeProps> = (props) => {
  const [treeData, setTreeData] = useState<any>();

  const treeSelected = (selectedKeys: any[], info: any) => {
    if (selectedKeys.length > 0) {
      props.onTreeSelected(info);
    } else {
      props.onTreeSelected(null);
    }
  };

  const loadTreeData = async () => {
    const _treeDto = await defaultService.GetTrees();
    setTreeData(_treeDto.items);
  };

  useEffect(() => {
    loadTreeData();
  }, [props.reload]);

  return (
    <>
      {treeData && (
        <Card size="small" className="myCard">
          <Tree
            showLine={{ showLeafIcon: false }}
            defaultExpandAll
            showIcon={false}
            switcherIcon={<DownOutlined />}
            onSelect={treeSelected}
            treeData={treeData}
          />
        </Card>
      )}
    </>
  );
};

export default TreePermissionTree;
