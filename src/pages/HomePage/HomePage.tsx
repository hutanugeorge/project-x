import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import isJwtTokenExpired from 'jwt-check-expiry'

import DesktopNotifications from '../../components/DesktopNotifications'
import MainSection from '../../components/MainSection/MainSection'
import { loadUser } from '../../redux/user'
import { getUser } from '../../services/userServices'

export default () => {
   const dispatch = useDispatch()

   useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) window.location.pathname = ('/')
      else if (token && isJwtTokenExpired(token)) window.location.pathname = ('/')
      ;(async () => {
         const [response, error] = await getUser()
         !error && response.status === 200 && dispatch(loadUser(response.data.user))
      })()
   }, [])

   return (
      <>
         <div className="home-page">
            <DesktopNotifications />
            <MainSection />
            <DesktopNotifications />
         </div>
      </>
   )
}
