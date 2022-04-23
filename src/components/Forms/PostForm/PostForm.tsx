import React, { useEffect, useRef, useState } from 'react'

import FormData from 'form-data'
import jwt_decode from 'jwt-decode'
import ReactLoading from 'react-loading'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ImageIcon from '../../../icons/ImageIcon'
import { RootState } from '../../../redux/store'
import { postPost } from '../../../services/postServices'
import Input from '../../FormComponents/Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth,
} from '../../FormComponents/Input/interface'
import Post from '../../Post'

export default ({ setPosts }: any) => {
   const { user } = useSelector((state: RootState) => state.user)
   const { url } = useSelector((state: RootState) => state.url)

   const [postDescription, setPostDescription] = useState<string>('')
   const [postPhoto, setPostPhoto] = useState<File | null>(null)
   const [previewPost, setPreviewPost] = useState<any>(null)
   const [buttonText, setButtonText] = useState<any>('Upload')

   const navigate = useNavigate()

   const photoInput = useRef<any>(null)

   useEffect(() => {
      setPreviewPost((prev: any) => ({
         ...prev,
         description: postDescription,
         photo: postPhoto ? URL.createObjectURL(postPhoto) : '',
         user: {
            firstName: user.firstName,
            lastName: user.lastName,
            profilePhoto: user.profilePhoto!,
            _id: user._id,
         },
      }))
   }, [postDescription, postPhoto, user])

   return (
      <div className="post-form">
         <form
            className="post-form__form"
            onSubmit={(e) => {
               e.preventDefault()
               if (postDescription || postPhoto) {
                  const token = localStorage.getItem('token')
                  const decodedToken: any = token && jwt_decode(token)

                  let formData = new FormData()
                  formData.append('userID', decodedToken.userID)
                  postDescription && formData.append('description', postDescription)
                  postPhoto && formData.append('photo', postPhoto)

                  ;(async () => {
                     const [response, error] = await postPost(url, formData)
                     if (!error && response.status === 200) {
                        setPostDescription('')
                        setPostPhoto(null)
                        setButtonText('Success')
                        setPosts((prev: any) => [response.data.post._id, ...prev])
                        setTimeout(() => {
                           setButtonText('Upload')
                        }, 1000)
                     } else {
                        console.log(error)
                     }
                  })()
               }
            }}
         >
            <div className="post-form__form__input">
               <div className="post-form__user-image" onClick={() => window.location.pathname !== `/user/${user._id}` &&  navigate(`/user/${user._id}`)}>
                  {user.profilePhoto ? (
                     <img src={user.profilePhoto} alt="user-image" />
                  ) : (
                     <ReactLoading type={'spokes'} color={'2d31fa'} width={20} height={20} />
                  )}
               </div>
               <Input
                  name={'post-input'}
                  type={'text'}
                  placeholder={"What's on your mind?"}
                  onChange={[setPostDescription]}
                  color={InputColor.SECONDARY}
                  width={[DesktopInputWidth.XL, TabletInputWidth.XL, MobileInputWidth.XL]}
                  height={[DesktopInputHeight.M, TabletInputHeight.L, MobileInputHeight.L]}
                  value={postDescription}
                  error={undefined}
               />
            </div>
            <div className="post-form__file-upload">
               <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => {
                     e.target.files && setPostPhoto(e.target.files[0])
                  }}
                  ref={photoInput}
               />
               <label
                  htmlFor="file-upload"
                  className="post-form__file-upload__label"
                  onClick={() => {
                     photoInput.current && photoInput.current.click()
                  }}
               >
                  <ImageIcon width={35} height={35} /> Add Photo/Video
               </label>
               <button
                  type="submit"
                  className={`post-form__button ${
                     buttonText === 'Success' ? 'post-form__button--success' : ''
                  }`}
                  onClick={() =>
                     (postDescription || postPhoto) &&
                     setButtonText(
                        <ReactLoading type={'spokes'} color={'#2d31fa'} width={20} height={20} />,
                     )
                  }
               >
                  {buttonText}
               </button>
            </div>
         </form>
         {(postDescription || postPhoto) && (
            <div className="post-form__preview-post">
               <Post postID={''} isPreview={true} preview={previewPost} />
            </div>
         )}
      </div>
   )
}
