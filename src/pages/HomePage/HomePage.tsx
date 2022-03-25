import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isJwtTokenExpired from 'jwt-check-expiry'

import MainSection from '../../components/MainSection/MainSection'
import SecondaryLeftSection from '../../components/SecondaryLeftSection/SecondaryLeftSection'
import SecondaryRightSection from '../../components/SecondaryRightSection/SecondaryRightSection'
import { RootState } from '../../redux/store'
import { loadUser } from '../../redux/user'
import { getUser } from '../../services/userServices'

export default () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { showExplore, showNotifications } = useSelector((state: RootState) => state.modals)

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
            {showExplore && <SecondaryLeftSection />}
            <MainSection />
            {showNotifications && <SecondaryRightSection /> }
         </div>
      </>
   )
}
