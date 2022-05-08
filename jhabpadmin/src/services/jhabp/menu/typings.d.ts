declare namespace API {
  // menu
  // menu
  export interface CurrentUserNavMenus {
    path: string;
    name: string;
    icon: any;
    routes: CurrentUserNavMenus[];
    code: string;
    parentCode: string;
    sort: number;
  }

  export interface MenuCreateInputDto extends API.ExtensibleObject {
    menuCode: string;
    menuName: string;
    menuIcon: string;
    menuSort: number;
    menuParentCode?: string;
    menuUrl?: string;
    menuDescription?: string;
    menuPlatform: number;
    concurrencyStamp?: string;
    roleIds: string[];
  }

  export interface MenuDto extends API.ExtensibleFullAuditedEntityDto<string> {
    menuCode?: string;
    menuName?: string;
    menuIcon?: string;
    menuSort?: number;
    menuParentCode?: string;
    menuUrl?: string;
    menuDescription?: string;
    menuPlatform?: number;
    tenantId?: string;
    concurrencyStamp?: string;
  }

  export interface MenuRetrieveInputDto extends API.PagedAndSortedResultRequestDto {
    deleted?: number;
    menuCode?: string;
    menuName?: string;
    sort?: number;
    menuParentCode?: string;
    orMenuCode?: string;
  }

  export interface MenuRoleMapCreateInputDto {
    menuIds: string[];
    roleIds: string[];
  }

  export interface MenuRoleMapDto extends API.CreationAuditedEntityDto<string> {
    menuId?: string;
    roleId?: string;
    tenantId?: string;
  }

  export interface MenuRoleMapRetrieveInputDto extends API.PagedAndSortedResultRequestDto {
    tenantId?: string;
    menuId?: string;
    roleId?: string;
  }

  export interface MenuRoleMapUpdateInputDto {
    menuId?: string;
    roleId?: string;
    tenantId?: string;
  }

  export interface MenuUpdateInputDto extends API.ExtensibleObject {
    menuCode?: string;
    menuName?: string;
    menuIcon?: string;
    menuSort?: number;
    menuParentCode?: string;
    menuUrl?: string;
    menuDescription?: string;
    menuPlatform?: number;
    concurrencyStamp?: string;
    isDeleted: boolean;
  }
}
