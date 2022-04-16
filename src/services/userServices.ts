import axios, { AxiosResponse } from 'axios'

import getHeaders from '../utils/getHeaders'
import getUserIdFromToken from '../utils/getUserIdFromToken'
import { LoginUserData, SignupUserData } from './interfaces'


export const signInUser = async (
   data: LoginUserData,
   url: string
): Promise<[ AxiosResponse, boolean ]> => {
   const { email, password } = data
   try {
      const response = await axios.post(
         url,
         {
            email: email,
            password: password
         },
         { headers: getHeaders() }
      )
      response.status === 200 && localStorage.setItem('token', response.data.token)
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}

export const signupUser = async (
   data: SignupUserData,
   url: string
): Promise<[ AxiosResponse, boolean ]> => {
   const { firstName, lastName, email, password, confirmPassword } = data
   try {
      const response = await axios.post(
         url,
         {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            firstName: firstName,
            lastName: lastName
         },
         { headers: getHeaders() }
      )
      response.status === 200 && localStorage.setItem('token', response.data.token)
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}

export const getUser = async (url: string, userID?: string): Promise<[ AxiosResponse, boolean ]> => {
   try {
      const response = await axios.get(`${url}/user/${userID ?? getUserIdFromToken()}`, {
         headers: getHeaders({ auth: true })
      })
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}

export const postUserPhoto = async (
   url: string,
   photoType: 'p' | 'c',
   profilePhoto: File | null
): Promise<[ AxiosResponse, boolean ]> => {
   try {
      let formData = new FormData()
      profilePhoto && formData.append('photo', profilePhoto)

      const response = await axios.post(
         `${url}/user/profile-photo/${photoType}/${getUserIdFromToken()}`,
         formData,
         {
            headers: getHeaders({ auth: true, multipartFormData: true })
         }
      )
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}

export const deleteUserPhoto = async (url: string, photo: string): Promise<[ AxiosResponse, boolean ]> => {
   try {
      const response = await axios.delete(`${url}/user/profile-photo/${photo}`, {
         headers: getHeaders({ auth: true })
      })
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}
