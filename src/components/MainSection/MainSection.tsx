import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { goDevelop } from '../../redux/apiURL'
import { RootState } from '../../redux/store'
import Post from '../Post'
import { getPosts } from '../../services/postServices'
import PostForm from '../PostForm'


export default () => {

   const dispatch = useDispatch()
   const [ posts, setPosts ] = useState<{ _id: string }[] | undefined>()

   const { url } = useSelector((state: RootState) => state.url)

   dispatch(goDevelop())
   useEffect(() => {
      (async () => {
         const [ response, error ] = await getPosts(url)
         !error && response.status === 200 && setPosts(response.data.posts)
      })()
   }, [])

   return (
      <div className="main-section">
         <PostForm/>
         {posts && posts.map((post: { _id: string }, index: number) =>
            <Post key={index} postID={post._id}/>)}
      </div>
   )
}
