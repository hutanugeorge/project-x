import React from 'react'

import { PostContentProps } from '../../interfaces'


export default (props: PostContentProps) => {
   const { showPostPhoto, photo, description, onImageClick, onFullScreenToggleClick } = props

   return <div className="post__content">
      {showPostPhoto && (
         <div
            className="post__content__full-screen"
            onClick={onFullScreenToggleClick}
         >
            <img
               onClick={onImageClick}
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
            onClick={onFullScreenToggleClick}
         />
      )}
   </div>
}