export interface PostProps {
   userID: string
   postID: string
   username: string
   text?: string
   photo?: string
   noLikes: number
   noComments: number
   noSaves: number
   date: string
   liked?: boolean
}
