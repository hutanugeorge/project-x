import { Dispatch, SetStateAction } from 'react'

import { LikeUser } from '../../shared/interfaces/post'


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

export interface PostHandlers {
   onPersonClickHandler: () => void
   onDateClickHandler: () => void
   onFullScreenToggleClickHandler: () => void
   onImageClickHandler: (e: any) => void
   onLikeClickHandler: () => Promise<void>
   onCommentsClickHandler: () => void
}

export interface PostActionsProps {
   liked: boolean
   noComments: number
   noSaves: number
   noLikes: number
   onLikeClick: () => Promise<void>
   onCommentsClick: () => void
}

export interface PostContentProps {
   showPostPhoto: boolean
   photo: string | undefined
   description: string
   onImageClick: (e: any) => void
   onFullScreenToggleClick: () => void
}

export interface PostHeadProps {
   onPersonClick: () => void
   user: {
      _id: string
      firstName: string
      lastName: string
      profilePhoto: string
   }
   onDateClick: () => void
   date: string
}

export interface PostPeopleReactionsProps {
   likedUsers: LikeUser[] | undefined
   globalUser: any
   user: {
      _id: string
      firstName: string
      lastName: string
      profilePhoto: string
   }
}

export interface PostComments {
   showComments: boolean
}