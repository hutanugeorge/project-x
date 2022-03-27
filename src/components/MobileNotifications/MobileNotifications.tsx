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
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
               mobileView={true}
            />
            <Notification
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
               mobileView={true}
            />
            <Notification
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
               mobileView={true}
            />
            <Notification
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
               mobileView={true}
            />
            <Notification
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
               mobileView={true}
            />
            <Notification
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
               mobileView={true}
            />
            <Notification
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
               mobileView={true}
            />
         </div>
      </div>
   )
}
