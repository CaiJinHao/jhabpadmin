declare namespace API.JhIdentity {
export interface TenantDto
{
	 name: string;
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

export interface TenantCreateDto
{
	 adminEmailAddress: string;
	 adminPassword: string;
	 name: string;
	 extraProperties: any;
}

export interface TenantUpdateDto
{
	 concurrencyStamp: string;
	 name: string;
	 extraProperties: any;
}

export interface TenantRetrieveInputDto
{
	 name: string;
	 sorting: string;
	 skipCount: number;
	 maxResultCount: number;
}

}
