import axios, { AxiosResponse } from 'axios'

import getHeaders from '../utils/getHeaders'

export const getPost = async (url: string): Promise<[AxiosResponse, boolean]> => {
   try {
      const response = await axios.get(url, {
         headers: getHeaders({ auth: true }),
      })
      return [response, false]
   } catch (error: any) {
      return [error.response, true]
   }
}

export const postPost = async (url: string, formData: any): Promise<[AxiosResponse, boolean]> => {
   try {
      const response = await axios.post(`${url}/post`, formData, {
         headers: getHeaders({ auth: true, multipartFormData: true }),
      })
      return [response, false]
   } catch (error: any) {
      return [error.response, true]
   }
}

export const getPosts = async (url: string, userID?: string): Promise<[AxiosResponse, boolean]> => {
   try {
      const response = await axios.get(`${url}/posts${userID ? `/${userID}` : ''}`, {
         headers: getHeaders({ auth: true }),
      })
      return [response, false]
   } catch (error: any) {
      return [error.response, true]
   }
}
