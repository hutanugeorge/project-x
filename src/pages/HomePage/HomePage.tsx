import React, { useEffect, useState } from 'react'

import axios from 'axios'
import FormData from 'form-data'

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
   const dispatch = useDispatch()

   const { url } = useSelector((state: RootState) => state.url)
   const { showNotifications, showExplore } = useSelector((state: RootState) => state.modals)

   const [ photo, setPhoto ] = useState(null)

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
      if (photo) {
         let formData = new FormData()
         formData.append('userID', '622dc0bdc4cfec2f9ccd213f')
         formData.append('description', 'Test test bun')
         formData.append('photo', new File([photo], Date.now().toString()))

         ;(async () => await axios.post('https://project-x-server.vercel.app/post', formData, {
            headers: {
               'authorization': 'Bearer ' + localStorage.getItem('token'),
               'Content-Type': 'multipart/form-data',
            },
         }))()
      }

   }, [ photo ])

   return (
      <>
         <input type='file' onChange={ (e) => {
            setPhoto(e.target.files[0])
         }} />
         <div className='home-page'>
            <DesktopNotifications />
            {showNotifications && <MobileNotifications />}
            {!showNotifications && !showExplore && <MainSection />}
            {showExplore && <MobileExplore />}
            <DesktopNotifications />
         </div>
      </>
   )
}
