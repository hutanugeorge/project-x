import _ from 'lodash'

import { NotificationProps } from './interfaces'

export default ({ text, username, type, date, mobileView }: NotificationProps) => {
   const notificationType = _.capitalize(type.replaceAll('_', ' '))

   return (
      <div className={`notification ${mobileView ? 'notification__mobile': ''}`}>
         <div className="notification__header">
            <div className="notification__header__left">
               <div className="notification__header__left__user-image">
                  <img
                     src="https://i.pinimg.com/736x/45/c5/31/45c531a9df6368605885efc73b98e70c.jpg"
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
