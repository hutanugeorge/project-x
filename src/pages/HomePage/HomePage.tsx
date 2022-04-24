import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import isJwtTokenExpired from 'jwt-check-expiry'

import { goDevelop } from '../../redux/apiURL'
import { RootState } from '../../redux/store'
import { loadUser } from '../../redux/user'
import { getUser } from '../../services/userServices'
import DesktopNotifications from '../../components/DesktopNotifications'
import MainSection from '../../components/MainSection/MainSection'
import MobileNotifications from '../../components/MobileComponents/MobileNotifications'
import MobileExplore from '../../components/MobileComponents/MobileExplore'
import MobileSettings from '../../components/MobileComponents/MobileSettings'

import MobileUserPage from '../MobileUserPage'


export default () => {
   const dispatch = useDispatch()

   const { url } = useSelector((state: RootState) => state.url)
   const { showNotifications, showExplore, showSettings, showUserPage } = useSelector(
      (state: RootState) => state.modals,
   )

   // dispatch(goDevelop())
   useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) window.location.pathname = '/'
      else if (token && isJwtTokenExpired(token)) window.location.pathname = '/'
      ;
      (async () => {
         const [ response, error ] = await getUser(url)
         !error && response.status === 200 && dispatch(loadUser(response.data.user))
      })()
   }, [ url ])
   return (
      <>
         <div className="home-page">
            <DesktopNotifications />
            {showNotifications && <MobileNotifications />}
            {showUserPage && <MobileUserPage />}
            {!showNotifications && !showExplore && !showSettings && !showUserPage &&  <MainSection />}
            {showExplore && <MobileExplore />}
            {showSettings && <MobileSettings />}
            <DesktopNotifications />
         </div>
      </>
   )
}
