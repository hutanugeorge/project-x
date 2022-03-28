import { useState } from 'react'
import LikeIcon from '../../icons/LikeIcon'
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
                }: CommentProps) => {

   const [ showComments, setShowComments ] = useState<boolean>(false)

   return <div className='comment'>
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
            <p className={`comment__elements__actions__like ${liked ? 'comment__elements__actions__like__active' : ''}`}>
               Like
            </p>
            <p className='comment__elements__actions__comment'
               onClick={() => noReplies > 0 && setShowComments(prev => !prev)}>
               Comment {noReplies > 0 ? noReplies : ''}
            </p>
            <p className='comment__elements__actions__date'>
               {date}
            </p>
            <p className={`comment__elements__content__no-likes ${liked ? 'comment__elements__content__no-likes__active' : ''}`}>
               <LikeIcon width={20} height={20} fillColor={'red'} /> {noLikes}
            </p>
         </div>
      </div>
      {showComments && <div className='comment__elements__comment__comments'>
         {children}
      </div>}
   </div>
}