import React from 'react'

import { PostHeadProps } from '../../interfaces'
import SettingsIcon from '../../../../icons/SettingsIcon'


export default (props: PostHeadProps) => {
   const { onPersonClick, user, onDateClick, date } = props

   return (
      <div className="post__header">
         <div className="post__header__person">
            <div
               className="post__header__person__photo"
               onClick={onPersonClick}
            >
               <img src={user.profilePhoto} alt="person photo"/>
            </div>
            <div className="post__header__person__username">
               <p
                  className="post__header__person__username__content"
                  onClick={onPersonClick}>
                  {`${user.firstName} ${user.lastName}`}</p>
               <p
                  className="post__header__person__username__date"
                  onClick={onDateClick}>
                  {date}
               </p>
            </div>
         </div>
         <div className="post__header__more-options">
            <SettingsIcon
               width={30}
               height={30}/>
         </div>
      </div>
   )
}