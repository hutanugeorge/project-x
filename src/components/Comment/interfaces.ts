export interface CommentProps {
   userPhoto: string
   username: string
   comment: string
   noLikes: number
   date: string
   liked?: boolean
   children?: JSX.Element
   noReplies: number
   isReply?: boolean
}
