import { useState } from 'react';
import { Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import IdentityRoleTree from '@/pages/components/IdentityRoleTree';
import PermissionTree from '@/pages/components/PermissionTree';
import * as jhpermissions from '@/services/jhabp/identity/JhPermissions/jhpermissions.service';

const MenuPermission = () => {
  const [reloadRoleTree, setReloadRoleTree] = useState<boolean>(false);
  const [reloadPermisionTree, setReloadPermisionTree] = useState<boolean>(false);
  const [permissionSelectedKeys, setPermissionSelectedKeys] = useState<string[]>();

  const reloadProTable = () => {
    setReloadRoleTree(!reloadRoleTree);
    setReloadPermisionTree(!reloadPermisionTree);
    // proTableActionRef.current?.reload();
  };

  const orgRoleTreeSelected = async (info: any) => {
    if (info == null) {
    } else {
      //触发获取当前选中角色的权限
      const grantedPermissions = await jhpermissions.GetPermissionGrantedByRole({
        roleName: info.node.title,
      });
      setPermissionSelectedKeys(grantedPermissions.items as string[]);
    }
    // reloadProTable();
  };

  const orgPermissionTreeSelected = (info: any) => {
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
            <PermissionTree
              checkable
              checkedKeys={permissionSelectedKeys}
              onTreeSelected={orgPermissionTreeSelected}
            />
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};

export default MenuPermission;
