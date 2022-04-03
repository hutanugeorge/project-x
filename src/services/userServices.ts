import axios, { AxiosResponse } from 'axios'
import jwt_decode from 'jwt-decode'

import getHeaders from '../utils/getHeaders'
import { LoginUserData, SignupUserData } from './interfaces'

export const signInUser = async (
   data: LoginUserData,
   url: string,
): Promise<[AxiosResponse, boolean]> => {
   const { email, password } = data
   try {
      const response = await axios.post(
         url,
         {
            email: email,
            password: password,
         },
         { headers: getHeaders() },
      )
      response.status === 200 && localStorage.setItem('token', response.data.token)
      return [response, false]
   } catch (error: any) {
      return [error.response, true]
   }
}

export const signupUser = async (
   data: SignupUserData,
   url: string,
): Promise<[AxiosResponse, boolean]> => {
   const { firstName, lastName, email, password, confirmPassword } = data
   try {
      const response = await axios.post(
         url,
         {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            firstName: firstName,
            lastName: lastName,
         },
         { headers: getHeaders() },
      )
      response.status === 200 && localStorage.setItem('token', response.data.token)
      return [response, false]
   } catch (error: any) {
      return [error.response, true]
   }
}

export const getUser = async (url: string, userID?: string): Promise<[AxiosResponse, boolean]> => {
   const token = localStorage.getItem('token')
   const decodedToken: any = token && jwt_decode(token)
   try {
      const response = await axios.get(`${url}/${userID ?? decodedToken.userID}`, {
         headers: getHeaders(true),
      })
      return [response, false]
   } catch (error: any) {
      return [error.response, true]
   }
}
