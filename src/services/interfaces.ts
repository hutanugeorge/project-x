import { AxiosResponse } from 'axios'


export interface LoginUserData {
   email: string
   password: string
}

export interface SignupUserData {
   firstName: string
   lastName: string
   email: string
   password: string
   confirmPassword: string
}

export type ServiceResult = Promise<[ AxiosResponse, boolean ]>
