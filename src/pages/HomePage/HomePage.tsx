import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isJwtTokenExpired from 'jwt-check-expiry'

import MainSection from '../../components/MainSection/MainSection'
import NavBar from '../../components/NavBar'
import { DecodedToken } from '../../components/NavBar/interfaces'
import SecondaryLeftSection from '../../components/SecondaryLeftSection/SecondaryLeftSection'
import SecondaryRightSection from '../../components/SecondaryRightSection/SecondaryRightSection'
import { RootState } from '../../redux/store'
import { loadUser } from '../../redux/user'


export default () => {

   const user = useSelector((state: RootState) => state.user)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   useEffect(() => {
      const token = localStorage.getItem('token')
      const decodedToken: '' | null | DecodedToken = token && jwt_decode(token)
      if (!token)
         navigate('/')
      else if (token && isJwtTokenExpired(token))
         navigate('/');

      (async () => {
         const response = decodedToken && decodedToken.userID && await axios.get(`http://localhost:3001/user/${decodedToken.userID}`, {
            headers: { 'Authorization': `Bearer ${token}` }
         })
         response && dispatch(loadUser(response.data.user))
      })()
   }, [])
   
   return <>
      <NavBar/>
      <div className="home-page">
         <SecondaryLeftSection/>
         <MainSection/>
         <SecondaryRightSection/>
      </div>
   </>
}