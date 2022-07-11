export default [
  {
    path: 'IdentityRole',
    name: 'IdentityRole',
    icon: 'table',
    access: 'AbpIdentity.Roles',
    component: './IdentityRole',
  },
  {
    path: 'OrganizationUnit',
    name: 'OrganizationUnit',
    icon: 'table',
    access: 'JhIdentity.OrganizationUnits',
    component: './OrganizationUnit',
  },
  {
    path: 'IdentityUser',
    name: 'IdentityUser',
    icon: 'table',
    access: 'AbpIdentity.Users',
    component: './IdentityUser',
  },
  {
    path: 'Permission',
    name: 'Permission',
    icon: 'table',
    access: 'JhIdentity.JhPermissions',
    component: './Permission',
  },
  {
    path: 'Settings',
    name: 'Settings',
    icon: 'table',
    access: 'SettingManagement.Settings',
    component: './Settings',
  },
  {
    path: 'AuditLogging',
    name: 'AuditLogging',
    icon: 'table',
    access: 'JhAuditLogging.AuditLoggings',
    component: './AuditLogging',
  },
  {
    path: 'Tenant',
    name: 'Tenant',
    icon: 'table',
    access: 'AbpTenantManagement.Tenants',
    component: './Tenant',
  },
  {
    path: '/systemConfig',
    redirect: '/systemConfig/IdentityRole',
  },
  {
    component: './404',
  },
];
