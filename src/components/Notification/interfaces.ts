export interface NotificationProps {
   text: string
   username: string
   type: NotificationTypes
   date: string
   mobileView?: boolean
   userPhoto: string
   seen: boolean
}

export enum NotificationTypes {
   LIKE = 'LIKE',
   COMMENT = 'COMMENT',
   NEW_POST = 'NEW_POST',
   FRIEND_REQUEST = 'FRIEND_REQUEST',
}
