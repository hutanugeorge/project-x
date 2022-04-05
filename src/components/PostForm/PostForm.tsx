import axios from 'axios'
import FormData from 'form-data'
import jwt_decode from 'jwt-decode'
import { useEffect, useRef, useState } from 'react'
import ArrowRightIcon from '../../icons/ArrowRightIcon'
import ImageIcon from '../../icons/ImageIcon'


import Input from '../Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth,
} from '../Input/interface'


export default () => {

   const [ postDescription, setPostDescription ] = useState<string>('')
   const [ postPhoto, setPostPhoto ] = useState<any>(null)

   const photoInput = useRef<any>(null)

   useEffect(() => {
      const token = localStorage.getItem('token')
      const decodedToken: any = token && jwt_decode(token)

      if (postPhoto) {

         let formData = new FormData()

         formData.append('userID', decodedToken.userID)
         formData.append('description', postDescription)
         formData.append('photo', postPhoto);
         (async () => {
            const response = await axios.post('https://project-x-server.vercel.app/post', formData, {
               headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data',
               },
            })
            console.log(response)
         })()
      }
   }, [ postPhoto ])

   return <div className='post-form'>
      <div className='post-form__input-field'>
         <div className='post-form__input-field__user-image'>
            <img
               src='https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2.jpg?s=1400'
               alt='user-image' />
         </div>
         <form className='post-form__input-field__form'>
            <div className='post-form__input-field__form__input'>
               <Input name={'post-input'} type={'text'} placeholder={'What\'s on your mind?'}
                      onChange={[ setPostDescription ]}
                      width={[ DesktopInputWidth.L, TabletInputWidth.L, MobileInputWidth.L ]}
                      height={[ DesktopInputHeight.M, TabletInputHeight.L, MobileInputHeight.L ]}
                      color={InputColor.SECONDARY}
                      value={postDescription} error={undefined} />
            </div>
            {postDescription && <div className='post-form__input-field__form__button'>
               <ArrowRightIcon width={28} height={28} />
            </div>}
         </form>
      </div>
      <div className='post-form__file-upload'>
         <input type='file' onChange={(e) => {
            e.target.files && setPostPhoto(e.target.files[0])
         }} ref={photoInput} />
         <label htmlFor='file-upload' className='post-form__file-upload__label' onClick={() => {
            photoInput.current && photoInput.current.click()
         }}>
            <ImageIcon width={35} height={35} /> Photo/Video
         </label>
      </div>
   </div>
}




