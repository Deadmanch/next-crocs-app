export interface IAuthResponse {
  access_token: string
  user: IUser
}

export interface IUser {
  email: string
  userId: number
}
