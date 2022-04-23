import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Post from '../../components/Post'
import PostForm from '../../components/Forms/PostForm'
import { RootState } from '../../redux/store'
import { loadUser } from '../../redux/user'
import { loadVisitorUser } from '../../redux/visitorUser'
import { getPosts } from '../../services/postServices'
import { deleteUserPhoto, getUser, postUserPhoto } from '../../services/userServices'
import getUserIdFromToken from '../../utils/getUserIdFromToken'


export default () => {
   const dispatch = useDispatch()

   const { userID } = useParams()

   const photoInput = useRef<any>(null)
   const coverInput = useRef<any>(null)

   const { url } = useSelector((state: RootState) => state.url)
   const { user } = useSelector((state: RootState) => state.user)
   const { visitorUser } = useSelector((state: RootState) => state.visitorUser)

   const [ showFullScreenProfilePhoto, setShowFullScreenProfilePhoto ] = useState<boolean>(false)
   const [ showFullScreenCoverPhoto, setShowFullScreenCoverPhoto ] = useState<boolean>(false)
   const [ stopScroll, setStopScroll ] = useState<boolean>(false)
   const [ profilePhoto, setProfilePhoto ] = useState<File | null>(null)
   const [ coverPhoto, setCoverPhoto ] = useState<File | null>(null)
   const [ posts, setPosts ] = useState<string[] | undefined>()
   const [ isVisitorUser ] = useState(!(getUserIdFromToken() === userID))
   const [ showPhotoUploadButtons, setShowPhotoUploadButtons ] = useState<boolean>(false)
   const [ enableUploadPhoto, setEnableUploadPhoto ] = useState<boolean>(true)

   useEffect(() => {
      ;(async () => {
         const [ response, error ] = await getUser(url, userID)
         !error && response.status === 200 && getUserIdFromToken() === userID
            ? dispatch(loadUser(response.data.user))
            : dispatch(loadVisitorUser(response.data.user))

      })()

      ;(async () => {
         const [ response, error ] = await getPosts(url, userID)
         !error && response.status === 200 && setPosts(response.data.posts)
      })()
   }, [ userID, url ])

   const getImageSrc = () => {
      return showFullScreenProfilePhoto && (profilePhoto
            ? URL.createObjectURL(profilePhoto)
            : isVisitorUser
               ? visitorUser.profilePhoto
               : user.profilePhoto
      ) || showFullScreenCoverPhoto && (
         coverPhoto
            ? URL.createObjectURL(coverPhoto)
            : isVisitorUser
               ? visitorUser.coverPhoto
               : user.coverPhoto
      ) || ''
   }

   return (
      <>
         {(showFullScreenProfilePhoto || showFullScreenCoverPhoto) && (
            <div
               className="photo-full-screen"
               onClick={() => {
                  setStopScroll(false)
                  showFullScreenProfilePhoto && setShowFullScreenProfilePhoto(false)
                  showFullScreenCoverPhoto && setShowFullScreenCoverPhoto(false)
               }}
            >
               <img
                  onClick={(e) => e.stopPropagation()}
                  src={getImageSrc()}
                  alt="photo"
               />
            </div>
         )}
         <div className="user-page__wrapper">
            <div className={`user-page ${stopScroll ? 'user-page--stop-scroll' : ''}`}>
               <div className="user-page__upper-section">
                  <div className="user-page__upper-section__user-photos">
                     <div className="user-page__upper-section__user-photos__cover-photo">
                        <div
                           className="user-page__upper-section__user-photos__cover-photo__options">
                           <div
                              onClick={() => {
                                 setShowFullScreenCoverPhoto(true)
                                 setStopScroll(true)
                              }}
                              className={`user-page__upper-section__user-photos__cover-photo__options__view-photo 
                             user-page__upper-section__user-photos__cover-photo__options__view-photo${
                                 isVisitorUser || !enableUploadPhoto ? '--visitor' : ''
                              }`}
                           >
                              View photo
                           </div>
                           {!isVisitorUser && enableUploadPhoto && (
                              <div
                                 onClick={() => {
                                    setShowPhotoUploadButtons(true)
                                    coverInput.current && coverInput.current.click()
                                 }}
                                 className="user-page__upper-section__user-photos__cover-photo__options__upload-photo"
                              >
                                 <input
                                    type="file"
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={(e) => {
                                       e.target.files && setCoverPhoto(e.target.files[0])
                                    }}
                                    ref={coverInput}
                                 />
                                 Upload photo
                              </div>
                           )}
                        </div>
                        <img src={
                           coverPhoto
                              ? URL.createObjectURL(coverPhoto)
                              : isVisitorUser
                                 ? visitorUser.coverPhoto
                                 : user.coverPhoto
                        }
                             alt="cover photo"/>
                     </div>
                     <div className="user-page__upper-section__user-photos__profile-photo">
                        <div
                           className="user-page__upper-section__user-photos__profile-photo__options">
                           <div
                              onClick={() => {
                                 setStopScroll(true)
                                 setShowFullScreenProfilePhoto(true)
                              }}
                              className={`user-page__upper-section__user-photos__profile-photo__options__view-photo 
                             user-page__upper-section__user-photos__profile-photo__options__view-photo${
                                 isVisitorUser || !enableUploadPhoto ? '--visitor' : ''
                              }`}
                           >
                              View photo
                           </div>
                           {!isVisitorUser && enableUploadPhoto && (
                              <div
                                 onClick={() => {
                                    photoInput.current && photoInput.current.click()
                                    setShowPhotoUploadButtons(true)
                                 }}
                                 className="user-page__upper-section__user-photos__profile-photo__options__upload-photo"
                              >
                                 <input
                                    type="file"
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={(e) => {
                                       e.target.files && setProfilePhoto(e.target.files[0])
                                    }}
                                    ref={photoInput}
                                 />
                                 Upload photo
                              </div>
                           )}
                        </div>
                        <img
                           src={
                              profilePhoto
                                 ? URL.createObjectURL(profilePhoto)
                                 : isVisitorUser
                                    ? visitorUser.profilePhoto
                                    : user.profilePhoto
                           }
                           alt="profile photo"
                        />
                     </div>
                  </div>
                  <div className="user-page__upper-section__navigation-tabs">
                     <div className="user-page__upper-section__navigation-tabs__side">
                        <div
                           className="user-page__upper-section__navigation-tabs__side__tab user-page__upper-section__navigation-tabs__side__tab__active">
                           Posts
                        </div>
                        <div className="user-page__upper-section__navigation-tabs__side__tab">
                           About
                        </div>
                     </div>
                     <div className="user-page__upper-section__navigation-tabs__side">
                        <div className="user-page__upper-section__navigation-tabs__side__tab">
                           Photos
                        </div>
                        <div className="user-page__upper-section__navigation-tabs__side__tab">
                           Friends
                        </div>
                     </div>
                  </div>
               </div>
               {!isVisitorUser && showPhotoUploadButtons && (
                  <div className="user-page__upper-section__user-photos__action-buttons">
                     {(profilePhoto || coverPhoto) && (
                        <button
                           className="user-page__upper-section__user-photos__action-buttons__discard"
                           onClick={() => {
                              profilePhoto && setProfilePhoto(null)
                              coverPhoto && setCoverPhoto(null)
                           }}
                        >
                           Discard
                        </button>
                     )}
                     {(profilePhoto || coverPhoto) && enableUploadPhoto && (
                        <button
                           className="user-page__upper-section__user-photos__action-buttons__upload"
                           onClick={async () => {
                              const photo = profilePhoto || coverPhoto
                              const photoType = profilePhoto ? 'p' : 'c'
                              await postUserPhoto(url, photoType, photo)
                              photoType === 'p' && user.profilePhoto && await deleteUserPhoto(url, user.profilePhoto)
                              photoType === 'c' && user.coverPhoto && await deleteUserPhoto(url, user.coverPhoto)
                              setShowPhotoUploadButtons(false)
                              setEnableUploadPhoto(false)
                           }}
                        >
                           Upload Photo
                        </button>
                     )}
                  </div>
               )}
               <div
                  className={`user-page__posts ${profilePhoto ? 'user-page__posts__editing' : ''}`}
               >
                  <PostForm setPosts={setPosts}/>
                  {posts &&
                  posts.map((post: string, index: number) => (
                     <Post key={index} postID={post} setStopScroll={setStopScroll}/>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}
