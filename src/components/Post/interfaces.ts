import { Post } from '../../shared/interfaces/post'


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
}
