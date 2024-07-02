declare interface Role {
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: any;
  authorityId: number;
  authorityName: string;
  parentId: number;
  dataAuthorityId: DataAuthorityId[];
  children: Children[];
  menus: any;
  defaultRouter: string;
}

declare interface DataAuthorityId {
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: any;
  authorityId: number;
  authorityName: string;
  parentId: number;
  dataAuthorityId: any;
  children: any;
  menus: any;
  defaultRouter: string;
}

declare interface Children {
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: any;
  authorityId: number;
  authorityName: string;
  parentId: number;
  dataAuthorityId: any[];
  children: any[];
  menus: any;
  defaultRouter: string;
}
