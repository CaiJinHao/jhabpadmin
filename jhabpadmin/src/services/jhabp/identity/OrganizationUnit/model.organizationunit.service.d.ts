declare namespace API.JhIdentity {
  export interface OrganizationUnitDto {
    parentId?: string;
    code: string;
    displayName: string;
    tenantId?: string;
    concurrencyStamp: string;
    isDeleted: boolean;
    deleterId?: string;
    deletionTime?: string;
    lastModificationTime?: string;
    lastModifierId?: string;
    creationTime: string;
    creatorId?: string;
    id: string;
    extraProperties: any;
  }

  export interface OrganizationUnitCreateInputDto {
    extraProperties: any;
    parentId?: string;
    displayName: string;
    concurrencyStamp: string;
    roleIds: string;
    leaderId?: string;
    leaderType?: number;
  }

  export interface OrganizationUnitUpdateInputDto {
    parentId?: string;
    displayName: string;
    isDeleted: boolean;
    concurrencyStamp: string;
    roleIds: string;
    extraProperties: any;
    leaderId?: string;
    leaderType?: number;
  }

  export interface OrganizationUnitRetrieveInputDto {
    leaderId?: string;
    parentId?: string;
    code: string;
    displayName: string;
    deleted?: number;
    orParentId?: string;
    sorting: string;
    skipCount: number;
    maxResultCount: number;
  }
}
