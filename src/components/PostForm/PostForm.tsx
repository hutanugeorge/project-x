import { useEffect, useRef, useState } from 'react'

import FormData from 'form-data'
import jwt_decode from 'jwt-decode'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ImageIcon from '../../icons/ImageIcon'
import { RootState } from '../../redux/store'
import { postPost } from '../../services/postServices'
import { DEFAULT_POST } from '../../utils/constants'
import getPhoto from '../../utils/getPhoto'
import Input from '../Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth
} from '../Input/interface'
import Post from '../Post'
import { Post as IPost } from '../../shared/interfaces/post'


export default () => {

   const [ postDescription, setPostDescription ] = useState<string>('')
   const [ postPhoto, setPostPhoto ] = useState<File | null>(null)
   const [ previewPost, setPreviewPost ] = useState<IPost>({
      ...DEFAULT_POST,
      description: postDescription,
      photo: postPhoto ? URL.createObjectURL(postPhoto) : ''
   })

   const { user } = useSelector((state: RootState) => state.user)
   const { url } = useSelector((state: RootState) => state.url)

   const navigate = useNavigate()

   const photoInput = useRef<any>(null)

   useEffect(() => {
      setPreviewPost(prev => ({
         ...prev,
         description: postDescription,
         photo: postPhoto ? URL.createObjectURL(postPhoto) : ''
      }))
   }, [ postDescription, postPhoto ])

   return <div className="post-form">
      <form className="post-form__form" onSubmit={(e) => {
         e.preventDefault()
         if (postDescription && postPhoto) {
            const token = localStorage.getItem('token')
            const decodedToken: any = token && jwt_decode(token)

            let formData = new FormData()
            formData.append('userID', decodedToken.userID)
            formData.append('description', postDescription)
            formData.append('photo', postPhoto);

            (async () => {
               const [ response, error ] = await postPost(url, formData)
               if (!error && response.status === 200) {
                  setPostDescription('')
                  setPostPhoto(null)
               } else {
                  console.log(error)
               }
            })()
         }
      }}>
         <div className="post-form__form__input">
            <div className="post-form__user-image"
                 onClick={() =>  navigate(`/user/${user._id}`)}>
               <img
                  src={user.profilePhoto}
                  alt="user-image"/>
            </div>
            <Input name={'post-input'} type={'text'} placeholder={'What\'s on your mind?'}
                   onChange={[ setPostDescription ]}
                   color={InputColor.SECONDARY}
                   width={[ DesktopInputWidth.XL, TabletInputWidth.XL, MobileInputWidth.XL ]}
                   height={[ DesktopInputHeight.M, TabletInputHeight.L, MobileInputHeight.L ]}
                   value={postDescription} error={undefined}/>
         </div>
         <div className="post-form__file-upload">
            <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => {
               e.target.files && setPostPhoto(e.target.files[0])
            }} ref={photoInput}/>
            <label htmlFor="file-upload" className="post-form__file-upload__label" onClick={() => {
               photoInput.current && photoInput.current.click()
            }}>
               <ImageIcon width={35} height={35}/> Add Photo/Video
            </label>
            <button type="submit" className="post-form__button">
               Upload Post
            </button>
         </div>
      </form>
      {(postDescription || postPhoto) && <div className="post-form__preview-post">
          <Post post={previewPost} preview={true}/>
      </div>}
   </div>
}




