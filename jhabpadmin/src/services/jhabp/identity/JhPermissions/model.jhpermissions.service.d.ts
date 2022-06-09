declare namespace API.JhIdentity {
  export interface PermissionGrantedDto {
    tenantId?: string;
    name: string;
    granted: boolean;
  }

  export interface PermissionGrantedByNameRetrieveInputDto {
    permissionNames: string;
    providerName: string;
  }

  export interface PermissionTreesRetrieveInputDto {
    providerName?: string;
  }

  export interface PermissionGrantedCreateInputDto {
    permissionNames: string;
    providerName: string;
    providerKey: string;
  }
}
