import { API, request } from '@/api'
import { IUserResponse } from '@/interfaces'
import { IUpdateUserDto } from './dto/update-user.dto'

export const getUser = async (): Promise<IUserResponse> => {
  return request({
    url: API.user.get,
    token: localStorage.getItem('token') || ''
  })
}

export const getUserByEmail = async (): Promise<IUserResponse> => {
  return request({
    url: API.user.getByEmail,
    token: localStorage.getItem('token') || ''
  })
}

export const updateUser = async (dto: IUpdateUserDto): Promise<IUserResponse> => {
  return request({
    url: API.user.update,
    body: dto,
    method: 'POST',
    token: localStorage.getItem('token') || ''
  })
}
