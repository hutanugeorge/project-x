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
import Post from '../Post'
import index from '../Post'


export default () => {

   const [ postDescription, setPostDescription ] = useState<string>('')
   const [ postPhoto, setPostPhoto ] = useState<File | null>(null)

   const photoInput = useRef<any>(null)

   return <div className='post-form'>
      <form className='post-form__form' onSubmit={(e) => {
         e.preventDefault()
         if (postDescription && postPhoto) {
            const token = localStorage.getItem('token')
            const decodedToken: any = token && jwt_decode(token)

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
               if (response.status === 200) {
                  setPostDescription('')
                  setPostPhoto(null)
               }
            })()
         }
      }}>
         <div className='post-form__form__input'>
            <div className='post-form__user-image'>
               <img
                  src='https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2.jpg?s=1400'
                  alt='user-image' />
            </div>
            <Input name={'post-input'} type={'text'} placeholder={'What\'s on your mind?'}
                   onChange={[ setPostDescription ]}
                   width={[ DesktopInputWidth.XL, TabletInputWidth.XL, MobileInputWidth.XL ]}
                   height={[ DesktopInputHeight.M, TabletInputHeight.L, MobileInputHeight.L ]}
                   color={InputColor.SECONDARY}
                   value={postDescription} error={undefined} />
         </div>
         <div className='post-form__file-upload'>
            <input type='file' accept='image/png, image/jpeg, image/jpg' onChange={(e) => {
               e.target.files && setPostPhoto(e.target.files[0])
            }} ref={photoInput} />
            <label htmlFor='file-upload' className='post-form__file-upload__label' onClick={() => {
               photoInput.current && photoInput.current.click()
            }}>
               <ImageIcon width={35} height={35} /> Add Photo/Video
            </label>
            <button type='submit' className='post-form__button'>
               Upload Post
            </button>
         </div>
      </form>
      {(postDescription || postPhoto) && <div className='post-form__preview-post'>
         <Post userID={''} postID={''}
               userPhoto={'https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2.jpg?s=1400'}
               username={'Titi Bernard'} noLikes={0} noComments={0} noSaves={0} date={''}
               text={postDescription}
               photo={postPhoto ? URL.createObjectURL(postPhoto) : undefined} />
      </div>}
   </div>
}




