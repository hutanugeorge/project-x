import _ from 'lodash'
import { useState } from 'react'

import { NotificationProps } from './interfaces'

export default ({ text, username, type, date, mobileView, userPhoto, seen }: NotificationProps) => {
   const notificationType = _.capitalize(type.replaceAll('_', ' '))
   const [isSeen, setIsSeen] = useState<boolean>(seen)

   return (
      <div className={`notification ${mobileView ? 'notification__mobile' : ''} ${!isSeen ? 'notification__unseen': ''}`} onClick={() => !isSeen && setIsSeen(true)}>
         <div className="notification__header">
            <div className="notification__header__left">
               <div className="notification__header__left__user-image">
                  <img
                     src={userPhoto}
                     alt="user photo"
                  />
               </div>
            </div>
            <div className="notification__header__right">
               <div className="notification__header__right__up">
                  <p className="notification__header__right__up__username">{username}</p>
                  <p className="notification__header__right__up__type">{notificationType}</p>
               </div>
               <div className="notification__header__right__down">
                  <p className="notification__header__right__down__date">{date}</p>
               </div>
            </div>
         </div>
         <div className="notification__body">
            <p className="notification__body__text">{text}</p>
         </div>
      </div>
   )
}
