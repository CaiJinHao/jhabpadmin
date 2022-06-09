import { Card, Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OrganizationUnitTreeProps = {
  reload?: boolean;
  onSelect?: (selectedKeys: any[], info: any) => void;
};
const OrganizationUnitTree: FC<OrganizationUnitTreeProps> = ({ reload, ...props }) => {
  const [treeData, setOrgTreeData] = useState<any>();

  const loadOrgTreeData = async () => {
    const _treeDto = await defaultService.GetOrganizationTree();
    setOrgTreeData(_treeDto.items);
  };

  useEffect(() => {
    loadOrgTreeData();
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

export default OrganizationUnitTree;
