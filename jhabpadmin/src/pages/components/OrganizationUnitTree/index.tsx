import { Card, Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';

type OrganizationUnitTreeProps = {
  reload?: boolean;
  onTreeSelected: (values: API.TreeAntdDto | null) => void;
};
const OrganizationUnitTree: FC<OrganizationUnitTreeProps> = ({
  onTreeSelected,
  reload,
  ...props
}) => {
  const [orgTreeData, setOrgTreeData] = useState<any>();

  const orgTreeSelected = (selectedKeys: any[], info: any) => {
    if (selectedKeys.length > 0) {
      onTreeSelected(info);
    } else {
      onTreeSelected(null);
    }
  };

  const loadOrgTreeData = async () => {
    const _orgTreeDto = await defaultService.GetOrganizationTree();
    setOrgTreeData(_orgTreeDto.items);
  };

  useEffect(() => {
    loadOrgTreeData();
  }, [reload]);

  return (
    <>
      {orgTreeData && (
        <Card size="small" className="myCard">
          <Tree
            {...props}
            showLine={{ showLeafIcon: false }}
            defaultExpandAll
            showIcon={false}
            switcherIcon={<DownOutlined />}
            onSelect={orgTreeSelected}
            treeData={orgTreeData}
          />
        </Card>
      )}
    </>
  );
};

export default OrganizationUnitTree;
