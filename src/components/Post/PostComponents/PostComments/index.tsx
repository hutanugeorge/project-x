import React from 'react'

import { PostComments } from '../../interfaces'
import CommentsSection from '../../../CommentsSection/CommentsSection'


export default (props: PostComments) => {
   const { showComments } = props
   return showComments
      ? <div className="post__comments">
         <CommentsSection/>
      </div>
      : <></>

}