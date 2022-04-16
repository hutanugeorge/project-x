import { Post } from './post'

export default interface User {
   _id: string
   firstName: string
   lastName: string
   middleName?: string
   email: string
   sex: 'Male' | 'Female'
   dob?: string
   cityLiving?: string
   bio?: string
   phoneNumber?: string

   friends: PartialUser[]
   noFriends: number
   followers: PartialUser[]
   noFollowers: number
   following: PartialUser[]
   noFollowing: number
   friendsRequest: FriendRequest[]
   noFriendsRequest: number

   photos?: string[]
   noPhotos?: number
   posts?: Post[]
   profilePhoto?: string
   coverPhoto?: string

   education?: Education
   previousJobs?: Job[]
   noPreviousJobs?: number
   job?: Job
   languages?: string[]
   hobbies?: string[]

   messages?: Message[]
}

export type VisitorUser = Omit<User, '_id' | 'messages' | 'noFriendsRequest' | 'friendsRequest'>

export interface Message {
   user: PartialUser
   text: string
   date: string
}

interface Education {
   highSchool: string
   university?: string
}

interface Job {
   company: string
   function: string
   location: string
   description?: string
}

interface FriendRequest {
   readonly user: PartialUser
   readonly date: string
}

export type PartialUser = Extract<User, 'userID' & 'firstName' & 'lastName'>
