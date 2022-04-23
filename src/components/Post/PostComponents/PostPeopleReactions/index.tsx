import React from 'react'

import { PostPeopleReactionsProps } from '../../interfaces'
import { getLikedUsers } from '../../utils'


export default (props: PostPeopleReactionsProps) => {
   const { likedUsers, globalUser, user } = props
   return <div className="post__people-reactions">
      {likedUsers && likedUsers.length > 0 &&
      <p className="post__people-reactions__prefix">Liked by </p>}
      {getLikedUsers(globalUser.user._id, likedUsers, user._id)}
   </div>
}