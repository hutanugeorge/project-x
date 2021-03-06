import User from './user'
import { PartialUser } from './user'


export interface LikeUser {
   firstName: string
   lastName: string
   _id: string
}

export interface Post {
   readonly user: {
      _id: string
      firstName: string
      lastName: string
      profilePhoto: string
   }
   readonly date: string
   description: string
   photo?: string
   comments?: Comment[]
   likedUsers: LikeUser[]
   noLikes: number
   noComments: number
   noSaves: number
   liked: boolean
   _id: string
}

interface Comment {
   readonly user: PartialUser
   readonly date: string
   text: string

   peopleWhoLike: User[]
   noLikes: number
   replies?: Comment[]
}
