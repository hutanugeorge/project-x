import React, { useEffect, useState } from 'react'

import ReactLoading from 'react-loading'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import { getPost, patchLikePost } from '../../services/postServices'
import { LikeUser, Post as IPost } from '../../shared/interfaces/post'
import CommentsSection from '../CommentsSection/CommentsSection'
import SettingsIcon from '../../icons/SettingsIcon'
import LikeIcon from '../../icons/LikeIcon'
import SaveIcon from '../../icons/SaveIcon'
import MessageIcon from '../../icons/MessageIcon'
import { PostProps } from './interfaces'


export default ({ postID, isPreview, preview, setStopScroll }: PostProps) => {
   const [ showPostPhoto, setShowPostPhoto ] = useState<boolean>(false)
   const [ showComments, setShowComments ] = useState<boolean>(false)
   const [ post, setPost ] = useState<IPost>()
   const [ liked, setLiked ] = useState<boolean>(false)
   const [ noLikes, setNoLikes ] = useState<number>(0)
   const [ likedUsers, setLikedUsers ] = useState<LikeUser[]>()

   const navigate = useNavigate()

   const { url } = useSelector((state: RootState) => state.url)

   useEffect(() => {
      isPreview && preview
         ? setPost({
            date: 'a second ago', _id: '', liked: false,
            noLikes: 0, noComments: 0, noSaves: 0, ...preview,
            likedUsers: []
         })
         : (async () => {
            const [ response, error ] = await getPost(`${url}/post/${postID}`)
            if (!error && response.status === 200) {
               setPost(response.data.post)
               setLiked(response.data.post.liked)
               setNoLikes(response.data.post.noLikes)
               setLikedUsers(response.data.post.likedUsers)
            }
         })()
   }, [ postID, preview ])

   if (post) {
      const {
         user,
         date,
         description,
         photo,
         _id,
         noComments,
         noSaves
      } = post

      return (
         <div className="post">
            <div className="post__header">
               <div className="post__header__person">
                  <div
                     className="post__header__person__photo"
                     onClick={() => !isPreview && navigate(`/user/${user._id}`)}
                  >
                     <img src={user.profilePhoto} alt="person photo"/>
                  </div>
                  <div className="post__header__person__username">
                     <p
                        className="post__header__person__username__content"
                        onClick={() => !isPreview && navigate(`/user/${user._id}`)}>
                        {`${user.firstName} ${user.lastName}`}</p>
                     <p
                        className="post__header__person__username__date"
                        onClick={() => !isPreview && navigate(`/post/${_id}`)}>
                        {date}
                     </p>
                  </div>
               </div>
               <div className="post__header__more-options">
                  <SettingsIcon width={30} height={30}/>
               </div>
            </div>
            <div className="post__content">
               {showPostPhoto && (
                  <div
                     className="post__content__full-screen"
                     onClick={() => {
                        setShowPostPhoto(false)
                        setStopScroll && setStopScroll(false)
                     }}
                  >
                     <img
                        onClick={(e) => e.stopPropagation()}
                        src={photo && photo}
                        alt="profile photo"
                     />
                  </div>
               )}
               {description && <p className="post__content__text">{description}</p>}
               {photo && (
                  <img
                     src={photo}
                     alt="post photo"
                     onClick={() => {
                        setShowPostPhoto(true)
                        setStopScroll && setStopScroll(true)
                     }}
                  />
               )}
            </div>
            <div className="post__actions">
               <div className="post__actions__left">
                  <div className="post__actions__left__action">
                     <div
                        className={`post__actions__left__action__like ${
                           (liked) ? 'post__actions__left__action__like__active' : ''
                        }`} onClick={async () => {
                        const [ response, error ] = await patchLikePost(url, _id, user._id)
                        if (!liked) {
                           !error && response.status === 200 && setLiked(true)
                           setNoLikes(prev => prev + 1)
                        }
                        if (liked) {
                           !error && response.status === 200 && setLiked(false)
                           setNoLikes(prev => prev - 1)
                        }
                     }}
                     >
                        <LikeIcon width={30} height={30}/>
                     </div>
                     <p className="post__actions__left__action__count">{noLikes}</p>
                     <div>
                        {likedUsers ? likedUsers.map(likeUser =>
                           <p className="post__actions__left__action__like-person"
                              onClick={() => user._id !== likeUser._id && navigate(`/user/${likeUser._id}`)}>
                              {` ${user._id !== likeUser._id ? `${likeUser.firstName} ${likeUser.lastName}` : 'You'}`}
                           </p>) : null}
                     </div>
                  </div>
                  <div className="post__actions__left__action">
                     <div
                        className="post__actions__left__action__comments"
                        onClick={() => {
                           setShowComments((prev) => !prev)
                        }}
                     >
                        <MessageIcon width={30} height={30}/>
                     </div>
                     <p className="post__actions__left__action__count">{noComments}</p>
                  </div>
               </div>
               <div className="post__actions__right">
                  <div className="post__actions__right__action">
                     <div className="post__actions__right__action__save">
                        <SaveIcon width={30} height={30}/>
                     </div>
                     <p className="post__actions__left__action__count">{noSaves}</p>
                  </div>
               </div>
            </div>
            {showComments && (
               <div className="post__comments">
                  <CommentsSection/>
               </div>
            )}
         </div>
      )
   }
   return <ReactLoading type={'spokes'} width={25} height={25} color={'#2d31fa'}/>
}
