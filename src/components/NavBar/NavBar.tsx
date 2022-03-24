import { useState } from 'react'

import { useSelector } from 'react-redux'
import ActivityIcon from '../../icons/ActivityIcon'
import ExploreIcon from '../../icons/ExploreIcon'
import HomePageIcon from '../../icons/HomePageIcon'

import LogoutIcon from '../../icons/LogoutIcon'
import SearchIcon from '../../icons/SearchIcon'
import SettingsIcon from '../../icons/SettingsIcon'
import { RootState } from '../../redux/store'
import Input from '../Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth,
} from '../Input/interface'


export default () => {
   const user = useSelector((state: RootState) => state.user)

   const [ inputValue, setInputValue ] = useState<string>('')
   const [ userTab, setUserTab ] = useState<boolean>(false)
   const [ activityTab, setActivityTab ] = useState<boolean>(false)
   const [ homepageTab, setHomepageTab ] = useState<boolean>(true)
   const [ exploreTab, setExploreTab ] = useState<boolean>(false)
   const [ settingsTab, setSettingsTab ] = useState<boolean>(false)

   enum Tabs {
      USER_TAB = 'USER_TAB',
      ACTIVITY_TAB = 'ACTIVITY_TAB',
      HOMEPAGE_TAB = 'HOMEPAGE_TAB',
      EXPLORER_TAB = 'EXPLORE_TAB',
      SETTINGS_TAB = 'SETTINGS_TAB',
   }

   const selectTab = (tab: Tabs) => {
      setUserTab(false)
      setActivityTab(false)
      setExploreTab(false)
      setSettingsTab(false)
      setHomepageTab(false)

      switch (tab) {
         case Tabs.USER_TAB:
            setUserTab(true)
            break
         case Tabs.ACTIVITY_TAB:
            setActivityTab(true)
            break
         case Tabs.HOMEPAGE_TAB:
            setHomepageTab(true)
            break
         case Tabs.EXPLORER_TAB:
            setExploreTab(true)
            break
         case Tabs.SETTINGS_TAB:
            setSettingsTab(true)
            break
         default:
            break
      }
   }

   return window.location.href !== 'http://localhost:3000/' ? (
      <>
         <div className='nav-bar__wrapper' data-testid='nav-bar'>
            <nav className='nav-bar'>
               <div className='nav-bar__element'>
                  <h1 className='nav-bar__element__title' data-testid='title'>ProjectX</h1>
               </div>
               <div className='nav-bar__element'>
                  <form className='nav-bar__element__form' autoComplete='off'>
                     <Input
                        type='text'
                        value={inputValue}
                        onChange={[ setInputValue ]}
                        placeholder='Search anything...'
                        name='SearchInput'
                        width={[ DesktopInputWidth.L, TabletInputWidth.L, MobileInputWidth.L ]}
                        height={[ DesktopInputHeight.S, TabletInputHeight.M, MobileInputHeight.M ]}
                        color={InputColor.PRIMARY}
                        error={undefined} />
                     <button
                        className='nav-bar__element__form__button'
                        onClick={(e) => {
                           e.preventDefault()
                           setInputValue('')
                        }}
                     >
                        <SearchIcon width={20} height={20} fillColor='#000' />
                     </button>
                  </form>
               </div>
               <div className='nav-bar__element'>
                  <div className='nav-bar__element__username'>
                     <p>
                        {user.user.firstName} {user.user.lastName}
                     </p>
                  </div>
                  <div className='nav-bar__element__person__photo'>
                     <img
                        src='https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg'
                        alt='person photo'
                     />
                  </div>
                  <div
                     className='nav-bar__element__svg' data-testid='logout-trigger'
                     onClick={() => {
                        localStorage.removeItem('token')
                        window.location.href = '/'
                     }}
                  >
                     <LogoutIcon />
                  </div>
               </div>
            </nav>
         </div>
         <div className='nav-bar__mobile'>
            <div className='nav-bar__mobile__elements'>
               <div
                  className={`nav-bar__mobile__elements__element${
                     userTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='profile'
                  onClick={() => selectTab(Tabs.USER_TAB)}>
                  <ActivityIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     activityTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='activity'
                  onClick={() => selectTab(Tabs.ACTIVITY_TAB)}>
                  <ActivityIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     homepageTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='homepage'
                  onClick={() => selectTab(Tabs.HOMEPAGE_TAB)}>
                  <HomePageIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     exploreTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='explore'
                  onClick={() => selectTab(Tabs.EXPLORER_TAB)}>
                  <ExploreIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     settingsTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='settings'
                  onClick={() => selectTab(Tabs.SETTINGS_TAB)}>
                  <SettingsIcon />
               </div>
            </div>
         </div>
      </>
   ) : (
      <></>
   )
}
