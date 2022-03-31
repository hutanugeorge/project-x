import React from 'react'
import Notification from '../Notification'
import { NotificationTypes } from '../Notification/interfaces'

export default () => {
   return (
      <div className="mobile-notifications">
         <div className="mobile-notifications__header">
            <h1 className="mobile-notifications__header__title">Notifications</h1>
         </div>
         <div className="mobile-notifications__content">
            <Notification
               text={'Mary wants to be friends with you'}
               username={'Mary Sophia'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
               userPhoto={
                  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80'
               }
            />
            <Notification
               text={'Amelia likes you photo.'}
               username={'Amelia Charlotte'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
               userPhoto={
                  'https://media.wired.com/photos/5dbc7936c955950008b26760/125:94/w_2375,h_1786,c_limit/Ideas_VSCO-Girls-1182943443.jpg'
               }
            />
            <Notification
               text={'Emma post a new photo.'}
               username={'Emma Watson'}
               type={NotificationTypes.NEW_POST}
               date={'a few minutes ago'}
               userPhoto={
                  'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg'
               }
            />
         </div>
      </div>
   )
}
