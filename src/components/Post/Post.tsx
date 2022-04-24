import React, { useEffect, useState } from 'react'

import ReactLoading from 'react-loading'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addLike, removeLike } from '../../redux/likes'

import PostActions from './PostComponents/PostActions'
import PostComments from './PostComponents/PostComments'
import PostContent from './PostComponents/PostContent'
import PostHead from './PostComponents/PostHead'
import PostPeopleReactions from './PostComponents/PostPeopleReactions'
import { PostHandlers, PostProps } from './interfaces'
import { RootState } from '../../redux/store'
import { getPost, patchLikePost } from '../../services/postServices'
import { LikeUser, Post as IPost } from '../../shared/interfaces/post'


export default ({ postID, isPreview, preview, setStopScroll }: PostProps) => {
   const [ showPostPhoto, setShowPostPhoto ] = useState<boolean>(false)
   const [ showComments, setShowComments ] = useState<boolean>(false)
   const [ post, setPost ] = useState<IPost>()
   const [ liked, setLiked ] = useState<boolean>(false)
   const [ noLikes, setNoLikes ] = useState<number>(0)
   const [ likedUsers, setLikedUsers ] = useState<LikeUser[]>()

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { url } = useSelector((state: RootState) => state.url)
   const globalUser = useSelector((state: RootState) => state.user)

   useEffect(() => {
      isPreview && preview
         ? setPost({
            date: 'a second ago', _id: '', liked: false,
            noLikes: 0, noComments: 0, noSaves: 0, ...preview,
            likedUsers: []
         })
         : (async () => {
            const [ response, error ] = await getPost(`${url}/post/${postID}`)
            if (!error && response.status === 200) {
               setPost(response.data.post)
               setLiked(response.data.post.liked)
               setNoLikes(response.data.post.noLikes)
               setLikedUsers(response.data.post.likedUsers)
            }
         })()
   }, [ postID, preview ])


   if (post) {
      const {
         user, date,
         description, photo,
         _id, noComments, noSaves
      } = post


      const postHandlers: PostHandlers = {
         onPersonClickHandler: () => {
            !isPreview && navigate(`/user/${user._id}`)
         },
         onDateClickHandler: () => {
            !isPreview && navigate(`/post/${_id}`)
         },
         onFullScreenToggleClickHandler: () => {
            setShowPostPhoto(prev => !prev)
            setStopScroll && setStopScroll(prev => !prev)
         },
         onImageClickHandler: (e: any) => {
            e.preventDefault()
         },
         onLikeClickHandler: async () => {
            const [ response, error ] = await patchLikePost(url, _id, globalUser.user._id)
            if (!error && response.status === 200) {
               if (!liked) {
                  setLiked(true)
                  setNoLikes(prev => prev + 1)
                  dispatch(addLike(_id))
               }
               if (liked) {
                  setLiked(false)
                  setNoLikes(prev => prev - 1)
                  dispatch(removeLike(_id))
               }
            }
         },
         onCommentsClickHandler: () => {
            setShowComments(prev => !prev)
         }
      }

      return (
         <div className="post">
            <PostHead
               user={user}
               date={date}
               onPersonClick={postHandlers.onPersonClickHandler}
               onDateClick={postHandlers.onDateClickHandler}
            />
            <PostContent
               showPostPhoto={showPostPhoto}
               onImageClick={postHandlers.onImageClickHandler}
               photo={photo}
               description={description}
               onFullScreenToggleClick={postHandlers.onFullScreenToggleClickHandler}
            />
            <PostPeopleReactions
               likedUsers={likedUsers}
               globalUser={globalUser}
               postID={_id}
            />
            <PostActions
               liked={liked}
               noLikes={noLikes}
               noComments={noComments}
               noSaves={noSaves}
               onLikeClick={postHandlers.onLikeClickHandler}
               onCommentsClick={postHandlers.onCommentsClickHandler}
            />
            <PostComments
               showComments={showComments}
            />
         </div>
      )

   }
   return <ReactLoading type={'spokes'} width={25} height={25} color={'#2d31fa'}/>
}
