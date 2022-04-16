import { useParams } from 'react-router-dom'

import Post from '../../components/Post'

export default () => {
   const { postID } = useParams()

   return (
      <div className="post-page__wrapper">
         <div className="post-page">
            <Post postID={postID!} />
         </div>
      </div>
   )
}
