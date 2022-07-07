import { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useAccess, useIntl } from 'umi';

import IdentityRoleTree from '@/pages/components/IdentityRoleTree';
import PermissionTree from '@/pages/components/PermissionTree';
import * as defaultService from '@/services/jhabp/identity/JhPermissions/jhpermissions.service';

const Permission = () => {
  const access = useAccess();
  const intl = useIntl();

  const [permissionCheckedKeys, setPermissionCheckedKeys] = useState<string[]>([]);
  const [roleSelected, setRoleSelected] = useState<string>('');

  const onSelectTreeRole = async (selectedKeys: any[], info: any) => {
    if (selectedKeys.length > 0) {
      setRoleSelected(info.node.title);
      //触发获取当前选中角色的权限
      const grantedPermissions = await defaultService.GetPermissionGrantedByRole({
        roleName: info.node.title,
      });
      setPermissionCheckedKeys(grantedPermissions.items as string[]);
    }
  };

  const onCheckPermissionTree = (checkedKeys: string[]) => {
    setPermissionCheckedKeys(checkedKeys);
  };

  const onSavePermission = async () => {
    await defaultService.Update({
      permissionNames: permissionCheckedKeys,
      roleName: roleSelected,
    });
  };

  return (
    <>
      <PageContainer
        extra={[
          access['AbpIdentity.JhPermissions.Update'] && (
            <Button key="permission_save" type="primary" onClick={onSavePermission}>
              {intl.formatMessage({
                id: 'DisplayName:JhPermissions:Save',
                defaultMessage: '保存权限',
              })}
            </Button>
          ),
        ]}
      >
        <Row gutter={{ md: 16 }}>
          <Col sm={6} xs={6}>
            <IdentityRoleTree onSelect={onSelectTreeRole} />
          </Col>
          <Col sm={18} xs={18}>
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

export default Permission;
