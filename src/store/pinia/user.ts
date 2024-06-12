/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2024-05-27 17:23:55
 * @LastEditors: GAtomis 850680822@qq.com
 */
import { defineStore } from 'pinia'
import { ACCESS_TOKEN, CACHE_USERNAME } from '@/store/store-enum'
import { storage } from '@/utils/storage'
import { login, getUserInfo } from '@/api/login'
import { LoginFrom } from '@/model/login/login-form' //深坑一定要用type导出接口 vite专属bug
import type { UserInfo } from '@/model/account'

export type IUserState = UserInfo & {
  username?: string
  token?: string
  age: number
  level?: string
  welcome: string
  roles: any[]
  info?: any,
  user:LoginResp['user']|null
}

export default defineStore({
  id: 'user',
  state: (): IUserState => ({
    id: 0,
    token: storage.get(ACCESS_TOKEN, '') as string,
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    level: '',
    username: storage.get(CACHE_USERNAME, '') as string,
    age: 0,
    jobType: '',
    catchPhrase: '',
    company: '',
    user:null
  }),
  getters: {
    getInfo: (state) => state.user,
    getToken: (state) => state.token,
    getUserId: (state) => state.id,
  },
  actions: {
    // ActionContext<S, R> s为state R为rootState
    // // 登录获取token
    // async login({ username, password }): Promise<any> {
    //   try {
    //     const response = await login({ username, password })
    //     const ex = 7 * 24 * 60 * 60 * 1000 //过期时间
    //     storage.set(ACCESS_TOKEN, response.token, ex)
    //     storage.set(CACHE_USERNAME, username, ex)
    //     this.token = response.token
    //     this.username = username
    //     return Promise.resolve(response)
    //   } catch (e) {
    //     return Promise.reject(e)
    //   }
    // },
    // 登录获取token
    async login(params: LoginReq): Promise<any> {
      try {
        const {data} = await login(params)
        // console.warn(response)

        const ex = 7 * 24 * 60 * 60 * 1000 //过期时间
        storage.set(ACCESS_TOKEN, data.token, ex)
        storage.set(CACHE_USERNAME, data.user.userName, ex)
        this.token = data.token
        this.username =  data.user.userName
        this.setUserInfo(data.user)
        return Promise.resolve(data)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    setUserInfo(user:LoginResp['user']){

      this.user=user

    },
    // 获取用户信息
    getUserInfo() {
      return new Promise<User>(async (resolve, reject) => {
        try {
         const {data:{userInfo}}= await getUserInfo()
         this.user=userInfo
         
          resolve(userInfo)
        } catch (error) {
          reject(error)
        }
      })
    },

    resetToken(): Promise<string> {
      return new Promise((resolve) => {
        this.token = ''
        this.name = ''
        storage.clear()
        resolve(this.token)
      })
    },
  },
})
