import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import PostForm from '../Forms/PostForm'
import Post from '../Post'
import { RootState } from '../../redux/store'
import { getPosts } from '../../services/postServices'

export default () => {
   const [posts, setPosts] = useState<string[] | undefined>()

   const { url } = useSelector((state: RootState) => state.url)

   useEffect(() => {
      ;(async () => {
         const [response, error] = await getPosts(url)
         !error && response.status === 200 && setPosts(response.data.posts)
      })()
   }, [])

   return (
      <div className="main-section">
         <PostForm setPosts={setPosts} />
         {posts && posts.map((post: string, index: number) => <Post key={index} postID={post} />)}
      </div>
   )
}
