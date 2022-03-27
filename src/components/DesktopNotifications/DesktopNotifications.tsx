import Notification from '../Notification'
import { NotificationTypes } from '../Notification/interfaces'
import SideMenu from '../SideMenu/SideMenu'

export default () => {
   return (
      <SideMenu title={'Notifications'}>
         <>
            <Notification
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.FRIEND_REQUEST}
               date={'two seconds ago'}
            />
            <Notification
               text={'Aurica vrea sa va imprieteniti'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
            <Notification
               text={'Salut, s-a abonat la tine Aurica'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
            <Notification
               text={'Salut, s-a abonat la tine Aurica'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
            <Notification
               text={'Salut, s-a abonat la tine Aurica'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
            <Notification
               text={'Salut, s-a abonat la tine Aurica'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
            <Notification
               text={'Salut, s-a abonat la tine Aurica'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
            <Notification
               text={'Salut, s-a abonat la tine Aurica'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
            <Notification
               text={'Salut, s-a abonat la tine Aurica'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
            <Notification
               text={'Salut, s-a abonat la tine Aurica'}
               username={'Aurica Bernard'}
               type={NotificationTypes.LIKE}
               date={'two seconds ago'}
            />
         </>
      </SideMenu>
   )
}
