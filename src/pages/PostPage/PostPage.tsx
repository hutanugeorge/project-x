import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Post from '../../components/Post'
import { RootState } from '../../redux/store'
import { getPost } from '../../services/userServices'


export default () => {

   const [ post, setPost ] = useState<any>('')

   const { postID } = useParams()

   const { url } = useSelector((state: RootState) => state.url)

   useEffect(() => {
      (async () => {
         const [response, error] = await getPost(`${url}/post/${postID}`)
         !error && response.status === 200 && setPost(response.data)
      })()
   }, [url, postID])

   console.log(post)
   return <div className="post-page__wrapper">
      <div className='post-page'>
         <Post userID={post.user} postID={post._id} userPhoto={''} username={'Titi'} noLikes={0}
               noComments={0} noSaves={0} date={post.date} />
      </div>
   </div>
}