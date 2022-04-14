declare namespace API {
  //account

  export interface LoginInput {
    userNameOrEmailAddress?: string;
    password?: string;
    rememberMe?: boolean;
    type?: string;
  }

  export interface LoginResponse {
    result?: number;
    description?: string;
    type?: string;
  }

  type IdentityUser = {
    extraProperties: any;
    id: string;
    creationTime: string;
    creatorId: string;
    lastModificationTime: string;
    lastModifierId: string;
    isDeleted: true;
    deleterId: string;
    deletionTime: string;
    userName: string;
    normalizedUserName: string;
    name: string;
    surname: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed: true;
    passwordHash: string;
    securityStamp: string;
    isExternal: true;
    phoneNumber: string;
    phoneNumberConfirmed: true;
    twoFactorEnabled: true;
    lockoutEnd: string;
    lockoutEnabled: true;
    accessFailedCount: 0;
    isActive: true;
    concurrencyStamp: string;
    tenantId: string;
    organizationUnitIds: string[];
    roleIds: string[];
    avatar?: string;
  };
}
