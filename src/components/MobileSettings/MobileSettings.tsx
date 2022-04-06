import ArrowRightIcon from '../../icons/ArrowRightIcon'
import LogoutIcon from '../../icons/LogoutIcon'


export default () => {
   return <div className='mobile-settings'>
      <div className='mobile-settings__header'>
         <p className='mobile-settings__header__title'>
            Settings
         </p>
      </div>
      <div className='mobile-settings__content'>
         <div className='mobile-settings__content__settings1'>
            <p className='mobile-settings__content__settings1__name'>Settings1</p>
            <ArrowRightIcon />
         </div>
         <div className='mobile-settings__content__settings1'>
            <p className='mobile-settings__content__settings1__name'>Settings2</p>
            <ArrowRightIcon />
         </div>
         <div className='mobile-settings__content__settings1'>
            <p className='mobile-settings__content__settings1__name'>Settings3</p>
            <ArrowRightIcon />
         </div>
         <div className='mobile-settings__content__settings1'>
            <p className='mobile-settings__content__settings1__name'>Settings4</p>
            <ArrowRightIcon />
         </div>
         <div className='mobile-settings__content__settings1'>
            <p className='mobile-settings__content__settings1__name'>Settings5</p>
            <ArrowRightIcon />
         </div>
         <div className='mobile-settings__content__settings1'>
            <p className='mobile-settings__content__settings1__name'>Settings6</p>
            <ArrowRightIcon />
         </div>
         <div className='mobile-settings__content__log-out' onClick={() => {
            localStorage.removeItem('token')
            window.location.pathname = '/'
         }}>
            <LogoutIcon />
            <p className='mobile-settings__content__log-out__name'>
               Log out
            </p>
         </div>
      </div>

   </div>
}