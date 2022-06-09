declare namespace API.JhIdentity {
  export interface PermissionGrantedDto {
    tenantId?: string;
    name: string;
    granted: boolean;
  }

  export interface PermissionGrantedRetrieveInputDto {
    providerName?: string;
    roleName: string;
  }

  export interface PermissionTreesRetrieveInputDto {
    providerName?: string;
  }

  export interface PermissionGrantedCreateInputDto {
    permissionNames: string[];
    providerName?: string;
    roleName: string;
  }
}
