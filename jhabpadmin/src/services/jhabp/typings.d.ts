declare namespace JhAPI {
  export interface CurrentUserNavMenus {
    path: string;
    name: string;
    icon: any;
    routes: CurrentUserNavMenus[];
    code: string;
    parentCode: string;
    sort: number;
  }
}
