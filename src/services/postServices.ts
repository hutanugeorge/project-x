import axios from 'axios'

import { ServiceResult } from './interfaces'
import getHeaders from '../utils/getHeaders'


export const getPost = async (url: string): ServiceResult => {
   try {
      const response = await axios.get(url, {
         headers: getHeaders({ auth: true })
      })
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}

export const postPost = async (url: string, formData: any): ServiceResult => {
   try {
      const response = await axios.post(`${url}/post`, formData, {
         headers: getHeaders({ auth: true, multipartFormData: true })
      })
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}

export const getPosts = async (url: string, userID?: string): ServiceResult => {
   try {
      const response = await axios.get(`${url}/posts${userID ? `/${userID}` : ''}`, {
         headers: getHeaders({ auth: true })
      })
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}

export const patchLikePost = async (url: string, postID: string, userID: string): ServiceResult => {
   try {
      const response = await axios.patch(`${url}/post/like`,
         { postID, userID },
         {
            headers: getHeaders({ auth: true })
         })
      return [ response, false ]
   } catch (error: any) {
      return [ error.response, true ]
   }
}
