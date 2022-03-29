import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import PhotoIcon from '../../icons/PhotoIcon'

import MobileUpperNavigation from '../MobileUpperNavigation'
import { setModalsOff, toggleExplore, toggleNotifications } from '../../redux/homepageModals'
import ActivityIcon from '../../icons/ActivityIcon'
import ExploreIcon from '../../icons/ExploreIcon'
import HomePageIcon from '../../icons/HomePageIcon'
import SettingsIcon from '../../icons/SettingsIcon'


export default () => {
   const dispatch = useDispatch()

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

   return (
      <>
         <MobileUpperNavigation />
         <div className='nav-bar__mobile'>
            <div className='nav-bar__mobile__elements'>
               <div
                  className={`nav-bar__mobile__elements__element${
                     userTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='profile'
                  onClick={() => {
                     if (!userTab) {
                        selectTab(Tabs.USER_TAB)
                     }
                  }}
               >
                  <PhotoIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     activityTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='activity'
                  onClick={() => {
                     if (!activityTab) {
                        selectTab(Tabs.ACTIVITY_TAB)
                        dispatch(toggleNotifications())
                     }
                  }}
               >
                  <ActivityIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     homepageTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='homepage'
                  onClick={() => {
                     selectTab(Tabs.HOMEPAGE_TAB)
                     dispatch(setModalsOff())
                  }}
               >
                  <HomePageIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     exploreTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='explore'
                  onClick={() => {
                     if (!exploreTab) {
                        selectTab(Tabs.EXPLORER_TAB)
                        dispatch(toggleExplore())
                     }
                  }}
               >
                  <ExploreIcon />
               </div>
               <div
                  className={`nav-bar__mobile__elements__element${
                     settingsTab && '__active'
                  } nav-bar__mobile__elements__element`}
                  data-testid='settings'
                  onClick={() => selectTab(Tabs.SETTINGS_TAB)}
               >
                  <SettingsIcon />
               </div>
            </div>
         </div>
      </>
   )
}
