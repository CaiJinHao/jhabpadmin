declare namespace API.JhIdentity {
export interface AuditLoggingDeleteInputDto
{
	 startTime?: string;
	 endTime?: string;
	 httpMethod: string;
	 url: string;
	 userId?: string;
	 userName: string;
	 applicationName: string;
	 clientIpAddress: string;
	 correlationId: string;
	 maxExecutionDuration?: number;
	 minExecutionDuration?: number;
	 hasException?: boolean;
	 httpStatusCode?: httpStatusCode;
	 sorting: string;
	 skipCount: number;
	 maxResultCount: number;
}

export interface AuditLog
{
	 applicationName: string;
	 userId?: string;
	 userName: string;
	 tenantId?: string;
	 tenantName: string;
	 impersonatorUserId?: string;
	 impersonatorUserName: string;
	 impersonatorTenantId?: string;
	 impersonatorTenantName: string;
	 executionTime: string;
	 executionDuration: number;
	 clientIpAddress: string;
	 clientName: string;
	 clientId: string;
	 correlationId: string;
	 browserInfo: string;
	 httpMethod: string;
	 url: string;
	 exceptions: string;
	 comments: string;
	 httpStatusCode?: number;
	 entityChanges: any;
	 actions: any;
	 extraProperties: any;
	 concurrencyStamp: string;
	 id: string;
}

export interface AuditLoggingRetrieveInputDto
{
	 startTime?: string;
	 endTime?: string;
	 httpMethod: string;
	 url: string;
	 userId?: string;
	 userName: string;
	 applicationName: string;
	 clientIpAddress: string;
	 correlationId: string;
	 maxExecutionDuration?: number;
	 minExecutionDuration?: number;
	 hasException?: boolean;
	 httpStatusCode?: httpStatusCode;
	 sorting: string;
	 skipCount: number;
	 maxResultCount: number;
}

}
