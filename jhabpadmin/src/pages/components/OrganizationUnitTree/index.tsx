import { Card, Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import * as defaultService from '@/services/jhabp/identity/OrganizationUnit/organizationunit.service';
import defaultStyle from './index.less';

type OrganizationUnitTreeProps = {
  onTreeSelected: (values: API.TreeAntdDto | null) => void;
};
const OrganizationUnitTree: FC<OrganizationUnitTreeProps> = (props) => {
  const [orgTreeData, setOrgTreeData] = useState<any>();

  const orgTreeSelected = (selectedKeys: any[], info: any) => {
    if (selectedKeys.length > 0) {
      props.onTreeSelected(info);
    } else {
      props.onTreeSelected(null);
    }
  };

  const initOrgTreeData = useCallback(async () => {
    const _orgTreeDto = await defaultService.GetOrganizationTree();
    setOrgTreeData(_orgTreeDto.items);
  }, []);

  useEffect(() => {
    initOrgTreeData();
  }, [initOrgTreeData]);

  return (
    <>
      {orgTreeData && (
        <Card size="small" className={defaultStyle.myCard}>
          <Tree
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
