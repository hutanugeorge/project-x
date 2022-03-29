export interface PostProps {
   userID: string
   postID: string
   userPhoto: string
   username: string
   text?: string
   photo?: string
   noLikes: number
   noComments: number
   noSaves: number
   date: string
   liked?: boolean
}
