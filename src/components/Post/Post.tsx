import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CommentsSection from '../CommentsSection/CommentsSection'
import SettingsIcon from '../../icons/SettingsIcon'
import LikeIcon from '../../icons/LikeIcon'
import SaveIcon from '../../icons/SaveIcon'
import MessageIcon from '../../icons/MessageIcon'
import { PostProps } from './interfaces'

export default ({
                   userID,
                   postID,
                   userPhoto,
                   username,
                   text,
                   photo,
                   noLikes,
                   noComments,
                   noSaves,
                   date,
                   liked = false,
                }: PostProps) => {
   const [showComments, setShowComments] = useState<boolean>(false)

   const navigate = useNavigate()

   return (
      <div className="post">
         <div className="post__header">
            <div className="post__header__person">
               <div className="post__header__person__photo" onClick={() => navigate(`/user/${userID}`)}>
                  <img src={'https://images.squarespace-cdn.com/content/v1/568ebf61a976afb1dc261dce/1584550323853-EJ80OC10T9S0H11579OM/Long+Legs+Full+Length+Portrait.jpg?format=1000w'} alt="person photo" />
               </div>
               <div className="post__header__person__username">
                  <p className="post__header__person__username__content"  onClick={() => navigate(`/user/${userID}`)}>{username}</p>
                  <p className="post__header__person__username__date" onClick={() => navigate(`/post/${postID}`)}>{date}</p>
               </div>
            </div>
            <div className="post__header__more-options">
               <SettingsIcon width={30} height={30} />
            </div>
         </div>
         <div className="post__content">
            {text && <p className="post__content__text">{text}</p>}
            {photo && <img src={photo} alt="post photo" />}
         </div>
         <div className="post__actions">
            <div className="post__actions__left">
               <div className="post__actions__left__action">
                  <div
                     className={`post__actions__left__action__like ${
                        liked ? 'post__actions__left__action__like__active' : ''
                     }`}
                  >
                     <LikeIcon width={30} height={30} />
                  </div>
                  <p className="post__actions__left__action__count">{noLikes}</p>
               </div>
               <div className="post__actions__left__action">
                  <div
                     className="post__actions__left__action__comments"
                     onClick={() => {
                        setShowComments((prev) => !prev)
                     }}
                  >
                     <MessageIcon width={30} height={30} />
                  </div>
                  <p className="post__actions__left__action__count">{noComments}</p>
               </div>
            </div>
            <div className="post__actions__right">
               <div className="post__actions__right__action">
                  <div className="post__actions__right__action__save">
                     <SaveIcon width={30} height={30} />
                  </div>
                  <p className="post__actions__left__action__count">{noSaves}</p>
               </div>
            </div>
         </div>
         {showComments && (
            <div className="post__comments">
               <CommentsSection />
            </div>
         )}
      </div>
   )
}