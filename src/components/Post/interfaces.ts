import { Dispatch, SetStateAction } from 'react'


export interface PostProps {
   postID: string
   isPreview?: boolean
   preview?: {
      description: string
      photo: string
      user: {
         firstName: string
         lastName: string
         profilePhoto: string
         _id: string
      }
   }
   setStopScroll?: Dispatch<SetStateAction<boolean>>
}
