import axios from 'axios'
import jwt_decode from 'jwt-decode'
import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Post from '../../components/Post'
import { goDevelop } from '../../redux/apiURL'

import { RootState } from '../../redux/store'
import { loadUser } from '../../redux/user'
import { getUser } from '../../services/userServices'


const uploadProfilePhoto = (profilePhoto: File | null, url: string) => {
   if (profilePhoto) {
      const token = localStorage.getItem('token')
      const decodedToken: any = token && jwt_decode(token)
      let formData = new FormData()
      formData.append('profilePhoto', profilePhoto);

      (async () => {
         await axios.post(`${url}/user/profile-photo/${decodedToken.userID}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'multipart/form-data',
            },
         })
      })()
   }
}

export default () => {

   const dispatch = useDispatch()

   const { userID } = useParams()

   const photoInput = useRef<any>(null)

   const { url } = useSelector((state: RootState) => state.url)
   const { user } = useSelector((state: RootState) => state.user)

   const [ showFullScreenProfilePhoto, setShowFullScreenProfilePhoto ] = useState<boolean>(false)
   const [ profilePhoto, setProfilePhoto ] = useState<File | null>(null)

   // dispatch(goDevelop())

   useEffect(() => {
      (async () => {
         const [ response, error ] = await getUser(`${url}/user`, userID)
         console.log(response)
         !error && response.status === 200 && dispatch(loadUser(response.data.user))
      })()
   }, [ userID, url ])


   return <>
      {showFullScreenProfilePhoto && <div className='profile-photo-full-screen'
                                          onClick={() => setShowFullScreenProfilePhoto(false)}>
         <img onClick={(e) => e.stopPropagation()}
              src={profilePhoto ? URL.createObjectURL(profilePhoto) : `https://spaces.george-hutanu.com/${user.profilePhoto}`}
              alt='profile photo' />
      </div>}
      <div className='user-page__wrapper'>
         <div className='user-page'>
            <div className='user-page__upper-section'>
               <div className='user-page__upper-section__user-photos'>
                  <div className='user-page__upper-section__user-photos__cover-photo'>
                     <img src='https://wallpaperaccess.com/full/508751.jpg' alt='cover photo' />
                  </div>
                  <div className='user-page__upper-section__user-photos__profile-photo'>
                     <div className='user-page__upper-section__user-photos__profile-photo__options'>
                        <div onClick={() => setShowFullScreenProfilePhoto(true)}
                             className='user-page__upper-section__user-photos__profile-photo__options__view-photo'>
                           View photo
                        </div>
                        <div onClick={() => {
                           photoInput.current && photoInput.current.click()
                        }} className='user-page__upper-section__user-photos__profile-photo__options__upload-photo'>
                           <input type='file' accept='image/png, image/jpeg, image/jpg'
                                  onChange={(e) => {
                                     e.target.files && setProfilePhoto(e.target.files[0])
                                  }} ref={photoInput} />
                           Upload photo
                        </div>
                     </div>
                     <img
                        src={profilePhoto ? URL.createObjectURL(profilePhoto) : `https://spaces.george-hutanu.com/${user.profilePhoto}`}
                        alt='profile photo' />
                     <div
                        className='user-page__upper-section__user-photos__profile-photo__action-buttons'>
                        {profilePhoto && <button
                           className='user-page__upper-section__user-photos__profile-photo__action-buttons__discard'
                           onClick={() => setProfilePhoto(null)}>Discard</button>}
                        {profilePhoto && <button
                           className='user-page__upper-section__user-photos__profile-photo__action-buttons__upload'
                           onClick={async () => {
                              await uploadProfilePhoto(profilePhoto, url)
                              setProfilePhoto(null)
                           }}
                        >Upload Photo</button>}
                     </div>
                  </div>
               </div>
               <div className='user-page__upper-section__navigation-tabs'>
                  <div className='user-page__upper-section__navigation-tabs__side'>
                     <div
                        className='user-page__upper-section__navigation-tabs__side__tab user-page__upper-section__navigation-tabs__side__tab__active'>Posts
                     </div>
                     <div className='user-page__upper-section__navigation-tabs__side__tab'>About
                     </div>
                  </div>
                  <div className='user-page__upper-section__navigation-tabs__side'>
                     <div className='user-page__upper-section__navigation-tabs__side__tab'>Photos
                     </div>
                     <div className='user-page__upper-section__navigation-tabs__side__tab'>Friends
                     </div>
                  </div>
               </div>
            </div>
            <div className={`user-page__posts ${profilePhoto ? 'user-page__posts__editing' : ''}`}>
               <Post
                  userID={'622dc0f07c3f071f571bd5e7'}
                  postID={'654636546436'}
                  username={'Will Smith'}
                  noLikes={22}
                  noComments={1}
                  noSaves={10}
                  date={'a few minutes ago'}
                  liked={true}
                  text={'The sunset'}
                  photo={
                     'https://q-xx.bstatic.com/xdata/images/hotel/840x460/103875013.jpg?k=87bdb822961e3d76486492ce7721f5e74df5a2ed2249055b97f5fca85530a29f&o='
                  }
                  userPhoto={
                     'https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2.jpg?s=1400'
                  }
               />
               <Post
                  userID={'4234535246'}
                  postID={'654636546436'}
                  username={'Hailee Steinfeld'}
                  noLikes={2}
                  noComments={0}
                  noSaves={0}
                  date={'two hours ago'}
                  text={'Best fireworks show I\'ve ever seen!'}
                  photo={
                     'https://i.ytimg.com/vi/CNjggrxUQ78/maxresdefault.jpg'
                  }
                  userPhoto={
                     'https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg'
                  }
               />
               <Post
                  userID={'4234535246'}
                  postID={'654636546436'}
                  username={'Richard Branson'}
                  noLikes={10}
                  noComments={1}
                  noSaves={0}
                  date={'a day ago'}
                  text={'There is no greater thing you can do with your life and your work than follow' +
                  ' your passions in a way that serves the world and you.'}
                  userPhoto={
                     'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/211859445_10158300571710872_1739945872121343798_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hxoHy23JsGIAX8fZ7rb&_nc_ht=scontent.fias1-1.fna&oh=00_AT9MFNn7t5eKo0L9_PLP-cOwTqn07mLs_e24Q8vJNSKU3w&oe=624988D0'
                  }
               />
               <Post
                  userID={'4234535246'}
                  postID={'654636546436'}
                  username={'Will Smith'}
                  noLikes={22}
                  noComments={1}
                  noSaves={10}
                  date={'a few minutes ago'}
                  liked={true}
                  text={'The sunset'}
                  photo={
                     'https://q-xx.bstatic.com/xdata/images/hotel/840x460/103875013.jpg?k=87bdb822961e3d76486492ce7721f5e74df5a2ed2249055b97f5fca85530a29f&o='
                  }
                  userPhoto={
                     'https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2.jpg?s=1400'
                  }
               />
               <Post
                  userID={'4234535246'}
                  postID={'654636546436'}
                  username={'Hailee Steinfeld'}
                  noLikes={2}
                  noComments={0}
                  noSaves={0}
                  date={'two hours ago'}
                  text={'Best fireworks show I\'ve ever seen!'}
                  photo={
                     'https://i.ytimg.com/vi/CNjggrxUQ78/maxresdefault.jpg'
                  }
                  userPhoto={
                     'https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg'
                  }
               />
               <Post
                  userID={'4234535246'}
                  postID={'654636546436'}
                  username={'Richard Branson'}
                  noLikes={10}
                  noComments={1}
                  noSaves={0}
                  date={'a day ago'}
                  text={'There is no greater thing you can do with your life and your work than follow' +
                  ' your passions in a way that serves the world and you.'}
                  userPhoto={
                     'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/211859445_10158300571710872_1739945872121343798_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hxoHy23JsGIAX8fZ7rb&_nc_ht=scontent.fias1-1.fna&oh=00_AT9MFNn7t5eKo0L9_PLP-cOwTqn07mLs_e24Q8vJNSKU3w&oe=624988D0'
                  }
               />
            </div>
         </div>
      </div>
   </>
}
