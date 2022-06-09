import { useState } from 'react';
import { Row, Col, Button, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

import IdentityRoleTree from '@/pages/components/IdentityRoleTree';
import PermissionTree from '@/pages/components/PermissionTree';
import * as jhpermissions from '@/services/jhabp/identity/JhPermissions/jhpermissions.service';

const MenuPermission = () => {
  const intl = useIntl();

  const [permissionSelectedKeys, setPermissionSelectedKeys] = useState<string[]>([]);
  const [roleSelected, setRoleSelected] = useState<string>('');

  const onTreeSelectedRole = async (info: any) => {
    if (info != null) {
      setRoleSelected(info.node.title);
      //触发获取当前选中角色的权限
      const grantedPermissions = await jhpermissions.GetPermissionGrantedByRole({
        roleName: info.node.title,
      });
      setPermissionSelectedKeys(grantedPermissions.items as string[]);
    }
  };

  const onCheckPermissionTree = (checkedKeys: string[]) => {
    setPermissionSelectedKeys(checkedKeys);
  };

  const onSavePermission = async () => {
    await jhpermissions.Update({
      permissionNames: permissionSelectedKeys,
      roleName: roleSelected,
    });
    message.success(intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }));
  };

  return (
    <>
      <PageContainer
        extra={[
          <Button key="permission_save" type="primary" onClick={onSavePermission}>
            保存权限
          </Button>,
        ]}
      >
        <Row gutter={{ md: 16 }}>
          <Col md={6}>
            <IdentityRoleTree onTreeSelected={onTreeSelectedRole} />
          </Col>
          <Col md={18}>
            <PermissionTree
              checkable
              checkedKeys={permissionSelectedKeys}
              onCheck={onCheckPermissionTree}
            />
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};

export default MenuPermission;
