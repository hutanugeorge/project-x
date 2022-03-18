import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isJwtTokenExpired from 'jwt-check-expiry'

import MainSection from '../../components/MainSection/MainSection'
import NavBar from '../../components/NavBar'
import SecondaryLeftSection from '../../components/SecondaryLeftSection/SecondaryLeftSection'
import SecondaryRightSection from '../../components/SecondaryRightSection/SecondaryRightSection'
import { RootState } from '../../redux/store'


export default () => {

   const { isAuthenticated } = useSelector((state: RootState) => state.user)
   const navigate = useNavigate()

   useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token)
         navigate('/')
      else if (token && isJwtTokenExpired(token))
         navigate('/')
   }, [ isAuthenticated ])

   return <>
      <NavBar/>
      <div className="home-page">
         <SecondaryLeftSection/>
         <MainSection/>
         <SecondaryRightSection/>
      </div>
   </>
}