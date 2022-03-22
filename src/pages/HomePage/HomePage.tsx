import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isJwtTokenExpired from 'jwt-check-expiry'

import MainSection from '../../components/MainSection/MainSection'
import NavBar from '../../components/NavBar'
import SecondaryLeftSection from '../../components/SecondaryLeftSection/SecondaryLeftSection'
import SecondaryRightSection from '../../components/SecondaryRightSection/SecondaryRightSection'
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
            <SecondaryLeftSection />
            <MainSection />
            <SecondaryRightSection />
         </div>
      </>
   )
}
