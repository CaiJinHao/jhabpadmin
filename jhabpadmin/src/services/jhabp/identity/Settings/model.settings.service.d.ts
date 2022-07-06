declare namespace API.JhIdentity {
  export interface SettingDefinitionDto {
    name: string;
    displayName: string;
    description: string;
    value: string;
    isInherited: boolean;
    properties: string;
    isEncrypted: boolean;
    providerName: string;
    providerKey?: string;
  }

  export interface SettingRetrieveInputDto {
    providerName: providerNameEnum;
    providerKey?: string;
    name: string;
  }

  export interface SettingCreateOrUpdateInputDto {
    providerName: providerNameEnum;
    providerKey?: string;
    name: string;
    value: string;
    forceToSet?: boolean;
  }
}
