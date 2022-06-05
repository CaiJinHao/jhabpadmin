declare namespace API.JhIdentity {
  export interface IdentityRoleDto {
    name: string;
    isDefault: boolean;
    isStatic: boolean;
    isPublic: boolean;
    concurrencyStamp: string;
    id: string;
    extraProperties: any;
  }

  export interface IdentityRoleCreateDto {
    name: string;
    isDefault: boolean;
    isPublic: boolean;
    extraProperties: any;
  }

  export interface IdentityRoleCreateInputDto {
    name: string;
    normalizedName: string;
    isDefault?: boolean;
    isStatic?: boolean;
    isPublic?: boolean;
    concurrencyStamp: string;
    extraProperties: any;
  }

  export interface IdentityRoleUpdateInputDto {
    name: string;
    normalizedName: string;
    isDefault?: boolean;
    isStatic?: boolean;
    isPublic?: boolean;
    concurrencyStamp: string;
    extraProperties: any;
  }

  export interface IdentityRoleRetrieveInputDto {
    name: string;
    normalizedName: string;
    isDefault?: boolean;
    isStatic?: boolean;
    isPublic?: boolean;
    sorting: string;
    skipCount: number;
    maxResultCount: number;
  }
}
