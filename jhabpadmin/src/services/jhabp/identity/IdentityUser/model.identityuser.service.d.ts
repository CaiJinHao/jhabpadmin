declare namespace API.JhIdentity {
  export interface IdentityUserDto {
    userName: string;
    normalizedUserName: string;
    name: string;
    surname: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed?: boolean;
    passwordHash: string;
    securityStamp: string;
    isExternal?: boolean;
    phoneNumber: string;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    isActive: boolean;
    concurrencyStamp: string;
    tenantId?: string;
    organizationUnitIds: string[];
    roleIds: string[];
    isDeleted: boolean;
    deleterId?: string;
    deletionTime?: string;
    lastModificationTime?: string;
    lastModifierId?: string;
    creationTime: string;
    creatorId?: string;
    id: string;
    extraProperties: any;
    avatar?: string;
    roles?: string[];
    organizationUnits?: string[];
  }

  export interface IdentityUserCreateInputDto {
    password: string;
    concurrencyStamp: string;
    roleIds: string;
    organizationUnitIds: string;
    userName: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    isActive: boolean;
    lockoutEnabled: boolean;
    roleNames: string;
    extraProperties: any;
  }

  export interface IdentityUserUpdateInputDto {
    password: string;
    isDeleted: boolean;
    concurrencyStamp: string;
    organizationUnitIds: string;
    userName: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    isActive: boolean;
    lockoutEnabled: boolean;
    roleNames: string;
    extraProperties: any;
  }

  export interface IdentityRoleDto {
    name: string;
    normalizedName: string;
    isDefault?: boolean;
    isStatic?: boolean;
    isPublic?: boolean;
    concurrencyStamp: string;
    tenantId?: string;
    id: string;
    extraProperties: any;
  }

  export interface IdentityUserRetrieveInputDto {
    userName: string;
    normalizedUserName: string;
    name: string;
    surname: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed?: boolean;
    passwordHash: string;
    securityStamp: string;
    isExternal?: boolean;
    phoneNumber: string;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    deleted?: number;
    organizationUnitId?: string;
    sorting: string;
    skipCount: number;
    maxResultCount: number;
  }

  export interface ChangePasswordInputDto {
    currentPassword: string;
    newPassword: string;
  }
}
