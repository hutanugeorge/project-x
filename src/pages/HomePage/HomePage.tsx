import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import isJwtTokenExpired from 'jwt-check-expiry'
import { RootState } from '../../redux/store'
import { loadUser } from '../../redux/user'
import { getUser } from '../../services/userServices'

import DesktopNotifications from '../../components/DesktopNotifications'
import MainSection from '../../components/MainSection/MainSection'
import MobileNotifications from '../../components/MobileNotifications'
import MobileExplore from '../../components/MobileExplore'

export default () => {
   const dispatch = useDispatch()

   const { showNotifications, showExplore } = useSelector((state: RootState) => state.modals)

   useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) window.location.href = 'http://localhost:3000/'
      else if (token && isJwtTokenExpired(token)) window.location.href = 'http://localhost:3000/'
      ;(async () => {
         const [response, error] = await getUser()
         !error && response.status === 200 && dispatch(loadUser(response.data.user))
      })()
   }, [])

   return (
      <>
         <div className="home-page">
            <DesktopNotifications />
            {showNotifications && <MobileNotifications />}
            {!showNotifications && !showExplore && <MainSection />}
            {showExplore && <MobileExplore />}
            <DesktopNotifications />
         </div>
      </>
   )
}
