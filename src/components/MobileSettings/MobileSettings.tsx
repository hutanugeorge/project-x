import ArrowRightIcon from '../../icons/ArrowRightIcon'
import LogoutIcon from '../../icons/LogoutIcon'


export default () => {
   return <div className='mobile-settings'>
      <div className='mobile-settings__header'>
         <div className='mobile-settings__header__user-photo'>
            <img src='https://swashvillage.org/storage/img/images_2/william-biography_20.jpg'
                 alt='user-photo' />
         </div>
         <p className='mobile-settings__header__username'>
            William
         </p>
      </div>
      <div className='mobile-settings__content'>
         <div className='mobile-settings__content__settings'>
            <div className='mobile-settings__content__settings__settings1'>
               <p className='mobile-settings__content__settings__settings1__name'>Settings1</p>
               <ArrowRightIcon />
            </div>
            <div className='mobile-settings__content__settings__settings1'>
               <p className='mobile-settings__content__settings__settings1__name'>Settings2</p>
               <ArrowRightIcon />
            </div>
            <div className='mobile-settings__content__settings__settings1'>
               <p className='mobile-settings__content__settings__settings1__name'>Settings3</p>
               <ArrowRightIcon />
            </div>
            <div className='mobile-settings__content__settings__settings1'>
               <p className='mobile-settings__content__settings__settings1__name'>Settings4</p>
               <ArrowRightIcon />
            </div>
            <div className='mobile-settings__content__settings__settings1'>
               <p className='mobile-settings__content__settings__settings1__name'>Settings5</p>
               <ArrowRightIcon />
            </div>
            <div className='mobile-settings__content__settings__settings1'>
               <p className='mobile-settings__content__settings__settings1__name'>Settings6</p>
               <ArrowRightIcon />
            </div>
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