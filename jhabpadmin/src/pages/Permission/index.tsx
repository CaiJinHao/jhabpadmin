import { useState } from 'react';
import { Row, Col, Button, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

import IdentityRoleTree from '@/pages/components/IdentityRoleTree';
import PermissionTree from '@/pages/components/PermissionTree';
import * as jhpermissions from '@/services/jhabp/identity/JhPermissions/jhpermissions.service';

const MenuPermission = () => {
  const intl = useIntl();

  const [permissionCheckedKeys, setPermissionCheckedKeys] = useState<string[]>([]);
  const [roleSelected, setRoleSelected] = useState<string>('');

  const onSelectTreeRole = async (selectedKeys: any[], info: any) => {
    if (selectedKeys.length > 0) {
      setRoleSelected(info.node.title);
      //触发获取当前选中角色的权限
      const grantedPermissions = await jhpermissions.GetPermissionGrantedByRole({
        roleName: info.node.title,
      });
      setPermissionCheckedKeys(grantedPermissions.items as string[]);
    }
  };

  const onCheckPermissionTree = (checkedKeys: string[]) => {
    setPermissionCheckedKeys(checkedKeys);
  };

  const onSavePermission = async () => {
    await jhpermissions.Update({
      permissionNames: permissionCheckedKeys,
      roleName: roleSelected,
    });
    message.success(intl.formatMessage({ id: 'message.success', defaultMessage: '操作成功' }));
  };

  return (
    <>
      <PageContainer
        extra={[
          <Button key="permission_save" type="primary" onClick={onSavePermission}>
            {intl.formatMessage({ id: 'Button.Permission.Save', defaultMessage: '保存权限' })}
          </Button>,
        ]}
      >
        <Row gutter={{ md: 16 }}>
          <Col md={6}>
            <IdentityRoleTree onSelect={onSelectTreeRole} />
          </Col>
          <Col md={18}>
            <PermissionTree
              checkable
              checkedKeys={permissionCheckedKeys}
              onCheck={onCheckPermissionTree}
            />
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};

export default MenuPermission;
