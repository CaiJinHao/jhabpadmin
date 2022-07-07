import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Tree, Card } from 'antd';
import * as defaultService from '@/services/jhabp/identity/JhPermissions/jhpermissions.service';

type TreePermissionTreeProps = {
  checkable?: boolean;
  checkedKeys?: any[];
  onCheck?: (checked: any, info: any) => void;
};
const TreePermissionTree: FC<TreePermissionTreeProps> = ({ ...props }) => {
  const [treeData, setTreeData] = useState<any>();

  const loadTreeData = async () => {
    const _treeDto = await defaultService.GetTrees();
    setTreeData(_treeDto.items);
  };

  useEffect(() => {
    loadTreeData();
  }, []);

  return (
    <>
      {treeData && (
        <Card size="small" className="myCard">
          <Tree
            {...props}
            selectable={false}
            showLine={{ showLeafIcon: false }}
            // defaultExpandAll
            showIcon={false}
            switcherIcon={<DownOutlined />}
            treeData={treeData}
          />
        </Card>
      )}
    </>
  );
};

export default TreePermissionTree;
