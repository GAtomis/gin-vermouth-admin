declare interface CaptchaResp {
    captchaId: string
    picPath: string
    captchaLength: number
    openCaptcha: boolean
  }


  declare interface LoginReq {
    username: string
    password: string
    captcha: string
    captchaId: string
    openCaptcha: boolean
  }
  



  declare interface LoginResp {
    user: User
    token: string
    expiresAt: number
  }
  
  declare interface User {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    uuid: string
    userName: string
    nickName: string
    sideMode: string
    headerImg: string
    baseColor: string
    authorityId: number
    authority: Authority
    authorities: Authority2[]
    phone: string
    email: string
    enable: number
  }
  
  declare interface Authority {
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: any
    authorityId: number
    authorityName: string
    parentId: number
    dataAuthorityId: any
    children: any
    menus: any
    defaultRouter: string
  }
  
  declare interface Authority2 {
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: any
    authorityId: number
    authorityName: string
    parentId: number
    dataAuthorityId: any
    children: any
    menus: any
    defaultRouter: string
  }
  