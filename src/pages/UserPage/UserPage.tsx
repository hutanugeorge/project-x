import axios from 'axios'
import jwt_decode from 'jwt-decode'
import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Post from '../../components/Post'
import PostForm from '../../components/PostForm'
import index from '../../components/PostForm'
import { goDevelop } from '../../redux/apiURL'

import { RootState } from '../../redux/store'
import { loadUser } from '../../redux/user'
import { loadVisitorUser } from '../../redux/visitorUser'
import { getPosts } from '../../services/postServices'
import { getUser, postProfilePhoto } from '../../services/userServices'
import getUserIdFromToken from '../../utils/getUserIdFromToken'


export default () => {

   const dispatch = useDispatch()

   const { userID } = useParams()

   const photoInput = useRef<any>(null)

   const { url } = useSelector((state: RootState) => state.url)
   const { user } = useSelector((state: RootState) => state.user)
   const { visitorUser } = useSelector((state: RootState) => state.visitorUser)

   const [ showFullScreenProfilePhoto, setShowFullScreenProfilePhoto ] = useState<boolean>(false)
   const [ stopScroll, setStopScroll ] = useState<boolean>(false)
   const [ profilePhoto, setProfilePhoto ] = useState<File | null>(null)
   const [ posts, setPosts ] = useState<string[] | undefined>()
   const [ isVisitorUser ] = useState(!(getUserIdFromToken() === userID))

   // dispatch(goDevelop())

   useEffect(() => {
      (async () => {
         const [ response, error ] = await getUser(`${url}/user`, userID)
         if (!error && response.status === 200) {
            if (getUserIdFromToken() === userID)
               dispatch(loadUser(response.data.user))
            else
               dispatch(loadVisitorUser(response.data.user))
         }
      })()

      ;(async () => {
         const [ response, error ] = await getPosts(url, userID)
         !error && response.status === 200 && setPosts(response.data.posts)
      })()
   }, [ userID, url ])

   return <>
      {showFullScreenProfilePhoto &&
      <div className="profile-photo-full-screen"
           onClick={() => {
              setStopScroll(false)
              setShowFullScreenProfilePhoto(false)
           }}>
          <img onClick={(e) => e.stopPropagation()}
               src={profilePhoto ? URL.createObjectURL(profilePhoto) : (isVisitorUser ? visitorUser.profilePhoto : user.profilePhoto)}
               alt="profile photo"/>
      </div>}
      <div className="user-page__wrapper">
         <div className={`user-page ${stopScroll ? 'user-page--stop-scroll' : ''}`}>
            <div className="user-page__upper-section">
               <div className="user-page__upper-section__user-photos">
                  <div className="user-page__upper-section__user-photos__cover-photo">
                     <img src="https://wallpaperaccess.com/full/508751.jpg" alt="cover photo"/>
                  </div>
                  <div className="user-page__upper-section__user-photos__profile-photo">
                     <div className="user-page__upper-section__user-photos__profile-photo__options">
                        <div onClick={() => {
                           setStopScroll(true)
                           setShowFullScreenProfilePhoto(true)
                        }}
                             className={`user-page__upper-section__user-photos__profile-photo__options__view-photo 
                             user-page__upper-section__user-photos__profile-photo__options__view-photo${isVisitorUser ? '--visitor' : ''}`}>
                           View photo
                        </div>
                        {!isVisitorUser && <div onClick={() => {
                           photoInput.current && photoInput.current.click()
                        }}
                                                className="user-page__upper-section__user-photos__profile-photo__options__upload-photo">
                            <input type="file" accept="image/png, image/jpeg, image/jpg"
                                   onChange={(e) => {
                                      e.target.files && setProfilePhoto(e.target.files[0])
                                   }} ref={photoInput}/>
                            Upload photo
                        </div>}
                     </div>
                     <img
                        src={profilePhoto ? URL.createObjectURL(profilePhoto) : (isVisitorUser ? visitorUser.profilePhoto : user.profilePhoto)}
                        alt="profile photo"/>
                  </div>
               </div>
               <div className="user-page__upper-section__navigation-tabs">
                  <div className="user-page__upper-section__navigation-tabs__side">
                     <div
                        className="user-page__upper-section__navigation-tabs__side__tab user-page__upper-section__navigation-tabs__side__tab__active">Posts
                     </div>
                     <div className="user-page__upper-section__navigation-tabs__side__tab">About
                     </div>
                  </div>
                  <div className="user-page__upper-section__navigation-tabs__side">
                     <div className="user-page__upper-section__navigation-tabs__side__tab">Photos
                     </div>
                     <div className="user-page__upper-section__navigation-tabs__side__tab">Friends
                     </div>
                  </div>
               </div>
            </div>
            {!isVisitorUser && <div
                className="user-page__upper-section__user-photos__action-buttons">
               {profilePhoto && <button
                   className="user-page__upper-section__user-photos__action-buttons__discard"
                   onClick={() => setProfilePhoto(null)}>Discard</button>}
               {profilePhoto && <button
                   className="user-page__upper-section__user-photos__action-buttons__upload"
                   onClick={async () => {
                      const [ response, error ] = await postProfilePhoto(url, profilePhoto)
                      !error && response.status === 200 && dispatch(loadUser(response.data.user))
                      setProfilePhoto(null)
                   }}
               >Upload Photo</button>}
            </div>}
            <div className={`user-page__posts ${profilePhoto ? 'user-page__posts__editing' : ''}`}>
               <PostForm setPosts={setPosts}/>
               {posts && posts.map((post: string, index: number) =>
                  <Post key={index} postID={post} setStopScroll={setStopScroll}/>)}
            </div>
         </div>
      </div>
   </>
}
