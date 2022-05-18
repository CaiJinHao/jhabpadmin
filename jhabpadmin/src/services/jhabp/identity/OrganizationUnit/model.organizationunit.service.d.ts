declare namespace API.JhIdentity {
export interface OrganizationUnitDto
{
	 parentId?: string;
	 code?: string;
	 displayName?: string;
	 tenantId?: string;
	 concurrencyStamp?: string;
	 isDeleted?: boolean;
	 deleterId?: string;
	 deletionTime?: string;
	 lastModificationTime?: string;
	 lastModifierId?: string;
	 creationTime?: string;
	 creatorId?: string;
	 id?: string;
	 extraProperties?: any;
}

export interface OrganizationUnitCreateInputDto
{
	 extraProperties?: any;
	 parentId?: string;
	 displayName?: string;
	 concurrencyStamp?: string;
	 roleIds?: string[];
}

export interface OrganizationUnitUpdateInputDto
{
	 parentId?: string;
	 displayName?: string;
	 isDeleted?: boolean;
	 concurrencyStamp?: string;
	 roleIds?: string[];
	 extraProperties?: any;
}

export interface OrganizationUnitRetrieveInputDto
{
	 parentId?: string;
	 code?: string;
	 displayName?: string;
	 deleted?: number;
	 orParentId?: string;
	 sorting?: string;
	 skipCount?: number;
	 maxResultCount?: number;
}

export interface IdentityRoleDto
{
	 name?: string;
	 normalizedName?: string;
	 isDefault?: boolean;
	 isStatic?: boolean;
	 isPublic?: boolean;
	 concurrencyStamp?: string;
	 tenantId?: string;
	 id?: string;
	 extraProperties?: any;
}

export interface TreeDto
{
	 id?: string;
	 title?: string;
	 name?: string;
	 url?: string;
	 href?: string;
	 icon?: string;
	 parent_id?: string;
	 spread?: boolean;
	 checked?: boolean;
	 disabled?: boolean;
	 obj?: any;
	 sort?: string;
	 children?: any;
	 data?: any;
	 value?: string;
}

export interface IdentityUserDto
{
	 userName?: string;
	 normalizedUserName?: string;
	 name?: string;
	 surname?: string;
	 email?: string;
	 normalizedEmail?: string;
	 emailConfirmed?: boolean;
	 passwordHash?: string;
	 securityStamp?: string;
	 isExternal?: boolean;
	 phoneNumber?: string;
	 phoneNumberConfirmed?: boolean;
	 twoFactorEnabled?: boolean;
	 lockoutEnd?: string;
	 lockoutEnabled?: boolean;
	 accessFailedCount?: number;
	 isActive?: boolean;
	 concurrencyStamp?: string;
	 tenantId?: string;
	 organizationUnitIds?: string[];
	 roleIds?: string[];
	 isDeleted?: boolean;
	 deleterId?: string;
	 deletionTime?: string;
	 lastModificationTime?: string;
	 lastModifierId?: string;
	 creationTime?: string;
	 creatorId?: string;
	 id?: string;
	 extraProperties?: any;
}

}
