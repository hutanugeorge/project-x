import User from './user'
import { PartialUser } from './user'

export default interface Post {
   readonly date: string
   description: string
   photo?: string
   comments?: Comment[]
}

interface Comment {
   readonly user: PartialUser
   readonly date: string
   text: string

   peopleWhoLike: User[]
   noLikes: number
   replies?: Comment[]
}
