import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import isJwtTokenExpired from 'jwt-check-expiry'
import { goDevelop } from '../../redux/apiURL'
import { RootState } from '../../redux/store'
import { loadUser } from '../../redux/user'
import { getUser } from '../../services/userServices'

import DesktopNotifications from '../../components/DesktopNotifications'
import MainSection from '../../components/MainSection/MainSection'
import MobileNotifications from '../../components/MobileNotifications'
import MobileExplore from '../../components/MobileExplore'


export default () => {

   const { url } = useSelector((state: RootState) => state.url)
   const dispatch = useDispatch()

   const { showNotifications, showExplore } = useSelector((state: RootState) => state.modals)

   // dispatch(goDevelop())
   useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) window.location.pathname = '/'
      else if (token && isJwtTokenExpired(token)) window.location.pathname = '/'
      ;
      (async () => {
         const [ response, error ] = await getUser(`${url}/user`)
         !error && response.status === 200 && dispatch(loadUser(response.data.user))
      })()

   }, [])

   return (
      <>
         <div className='home-page'>
            <DesktopNotifications />
            {/*{showNotifications && <MobileNotifications />}*/}
            {/*{!showNotifications && !showExplore && <MainSection />}*/}
            {/*{showExplore && <MobileExplore />}*/}
            <DesktopNotifications />
         </div>
      </>
   )
}
