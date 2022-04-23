import React from 'react'

import { PostActionsProps } from '../../interfaces'
import LikeIcon from '../../../../icons/LikeIcon'
import MessageIcon from '../../../../icons/MessageIcon'
import SaveIcon from '../../../../icons/SaveIcon'





export default  (props: PostActionsProps) => {
   const { liked, noComments, noSaves, noLikes, onLikeClick, onCommentsClick } = props

   return <div className="post__actions">
      <div className="post__actions__left">
         <div className="post__actions__left__action">
            <div
               className={`post__actions__left__action__like ${
                  (liked) ? 'post__actions__left__action__like__active' : ''
               }`} onClick={onLikeClick}
            >
               <LikeIcon width={30} height={30}/>
            </div>
            <p className="post__actions__left__action__count">{noLikes}</p>
         </div>
         <div className="post__actions__left__action">
            <div
               className="post__actions__left__action__comments"
               onClick={onCommentsClick}
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
}