import { API, request } from '@/api'
import { IAuthResponse, IUserResponse } from '@/interfaces'
import { IRegisterUserDto } from './dto/register-user.dto'
export const RegisterUser = async (dto: IRegisterUserDto): Promise<IUserResponse> => {
  return request({
    url: API.auth.register,
    body: dto,
    method: 'POST'
  })
}

export const LoginUser = async (email: string, password: string): Promise<IAuthResponse> => {
  return request({
    url: API.auth.login,
    body: {
      email,
      password
    },
    method: 'POST'
  })
}

export const GoogleLogin = async () => {
  return request({
    url: API.auth.google
  })
}
