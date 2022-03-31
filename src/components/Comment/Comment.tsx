import React from 'react';
import { useState } from 'react'
import LikeIcon from '../../icons/LikeIcon'
import MessageIcon from '../../icons/MessageIcon'
import { CommentProps } from './interfaces'


export default ({
                   userPhoto,
                   username,
                   noLikes,
                   date,
                   liked,
                   comment,
                   children,
                   noReplies,
                   isReply = false,
                }: CommentProps) => {

   const [ showComments, setShowComments ] = useState<boolean>(false)

   return <div className='comment__wrap'>
      <div className='comment'>
         <div className='comment__user-photo'>
            <img
               src={userPhoto}
               alt='user photo' />
         </div>
         <div className='comment__elements'>
            <div className='comment__elements__content'>
               <p className='comment__elements__content__username'>
                  {username}
               </p>
               <p className='comment__elements__content__comment'>
                  {comment}
               </p>
            </div>

            <div className='comment__elements__actions'>
               <div className='comment__elements__actions__action'>
                  <div
                     className={`comment__elements__actions__action__like ${
                        liked ? 'comment__elements__actions__action__like__active' : ''
                     }`}
                  >
                     <LikeIcon width={24} height={24} />
                  </div>
                  <p className='comment__elements__actions__action__count'>{noLikes}</p>
               </div>
               {!isReply && <div className='comment__elements__actions__action'>
                  <div className='comment__elements__actions__action__comments' onClick={() => {
                     setShowComments((prev) => !prev)
                  }}>
                     <MessageIcon width={24} height={24} />
                  </div>
                  <p className='comment__elements__actions__action__count'>{noReplies}</p>
               </div>}
               <p className='comment__elements__actions__date'>
                  {date}
               </p>
            </div>
         </div>
      </div>
      {showComments && !isReply && <div className='comment__replies'>
         {children}
      </div>}
   </div>
}