import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'

import { PostPeopleReactionsProps } from '../../interfaces'
import { getLikedUsers } from '../../utils'


export default (props: PostPeopleReactionsProps) => {
   const { likedUsers, globalUser, postID } = props

   const { likes } = useSelector((state: RootState) => state.likes)

   return <div className="post__people-reactions">
      {((likedUsers && likedUsers.length > 0) || (likes.length > 1 && likes.includes(postID))) &&
      <p className="post__people-reactions__prefix">Liked by </p>}
      {getLikedUsers(globalUser.user._id, likedUsers, postID)}
   </div>
}