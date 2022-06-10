declare namespace API.JhIdentity {
  export interface PermissionGrantedDto {
    name: string;
    isGranted: boolean;
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
