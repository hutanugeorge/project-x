import { useState } from 'react'

import { useSelector } from 'react-redux'
import ActivityIcon from '../../icons/ActivityIcon'
import ExploreIcon from '../../icons/ExploreIcon'
import HomePageIcon from '../../icons/HomePageIcon'

import LogoutIcon from '../../icons/LogoutIcon'
import PhotoIcon from '../../icons/PhotoIcon'
import SearchIcon from '../../icons/SearchIcon'
import SettingsIcon from '../../icons/SettingsIcon'
import { RootState } from '../../redux/store'


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
                     <input
                        data-testid='input'
                        className='nav-bar__element__form__input'
                        type='text'
                        value={inputValue}
                        onChange={(e) => {
                           setInputValue(e.target.value)
                        }}
                        placeholder='Search anything...'
                        name='SearchInput'
                     />
                     <button
                        className='nav-bar__element__form__button'
                        data-testid='button-trigger'
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
                     className='nav-bar__element__svg' data-testid = 'logout-trigger'
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
                  onClick={() => selectTab(Tabs.USER_TAB)}>
                  <ActivityIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     activityTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  onClick={() => selectTab(Tabs.ACTIVITY_TAB)}>
                  <ActivityIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     homepageTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  onClick={() => selectTab(Tabs.HOMEPAGE_TAB)}>
                  <HomePageIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     exploreTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  onClick={() => selectTab(Tabs.EXPLORER_TAB)}>
                  <ExploreIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     settingsTab && '__active'
                  } nav-bar__mobile__elements__element`}
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
