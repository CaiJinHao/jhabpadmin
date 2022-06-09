import { useState } from 'react';
import { Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import IdentityRoleTree from '@/pages/components/IdentityRoleTree';
import PermissionTree from '@/pages/components/PermissionTree';

const MenuPermission = () => {
  const [reloadRoleTree, setReloadRoleTree] = useState<boolean>(false);
  const [reloadPermisionTree, setReloadPermisionTree] = useState<boolean>(false);

  const reloadProTable = () => {
    setReloadRoleTree(!reloadRoleTree);
    setReloadPermisionTree(!reloadPermisionTree);
    // proTableActionRef.current?.reload();
  };

  const orgRoleTreeSelected = (info: any) => {
    console.log(info);
    if (info == null) {
    } else {
    }
    // reloadProTable();
  };

  const orgPermissionTreeSelected = (info: any) => {
    console.log(info);
    if (info == null) {
    } else {
    }
    // reloadProTable();
  };

  return (
    <>
      <PageContainer>
        <Row gutter={{ md: 16 }}>
          <Col md={6}>
            <IdentityRoleTree onTreeSelected={orgRoleTreeSelected} />
          </Col>
          <Col md={18}>
            <PermissionTree onTreeSelected={orgPermissionTreeSelected} />
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};

export default MenuPermission;
