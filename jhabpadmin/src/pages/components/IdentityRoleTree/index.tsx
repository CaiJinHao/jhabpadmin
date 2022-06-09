import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Tree, Card } from 'antd';
import * as defaultService from '@/services/jhabp/identity/IdentityRole/identityrole.service';

type IdentityRoleTreeProps = {
  reload?: boolean;
  onSelect: (selectedKeys: any[], info: any) => void;
};
const IdentityRoleTree: FC<IdentityRoleTreeProps> = ({ reload, ...props }) => {
  const [treeData, setTreeData] = useState<any>();

  const loadTreeData = async () => {
    const _treeDto = await defaultService.GetTrees();
    setTreeData(_treeDto.items);
  };

  useEffect(() => {
    loadTreeData();
  }, [reload]);

  return (
    <>
      {treeData && (
        <Card size="small" className="myCard">
          <Tree
            {...props}
            showLine={{ showLeafIcon: false }}
            defaultExpandAll
            showIcon={false}
            switcherIcon={<DownOutlined />}
            treeData={treeData}
          />
        </Card>
      )}
    </>
  );
};

export default IdentityRoleTree;
