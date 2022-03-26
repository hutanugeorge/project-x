import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isJwtTokenExpired from 'jwt-check-expiry'

import DesktopNotifications from '../../components/DesktopNotifications'
import MainSection from '../../components/MainSection/MainSection'
import { loadUser } from '../../redux/user'
import { getUser } from '../../services/userServices'

export default () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) navigate('/')
      else if (token && isJwtTokenExpired(token)) navigate('/')
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
