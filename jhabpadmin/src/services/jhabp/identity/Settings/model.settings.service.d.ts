declare namespace API.JhIdentity {
  export interface SettingDefinitionDto {
    name: string;
    displayName: string;
    description: string;
    defaultValue: string;
    isInherited: boolean;
    properties: string;
    isEncrypted: boolean;
    providerName: string;
    providerKey: string;
  }

  export interface SettingRetrieveInputDto {
    providerName: providerNameEnum;
    providerKey: string;
    name: string;
    fallback: boolean;
  }

  export interface SettingCreateOrUpdateInputDto {
    providerName: providerNameEnum;
    providerKey: string;
    name: string;
    value: string;
    forceToSet: boolean;
  }
}
