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
    path: 'AuditLogging',
    name: 'AuditLogging',
    icon: 'table',
    access: 'JhAuditLogging.AuditLoggings',
    component: './AuditLogging',
  },
];
