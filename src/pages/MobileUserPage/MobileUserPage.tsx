import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Post from '../../components/Post'
import PostForm from '../../components/Forms/PostForm'
import ArrowRightIcon from '../../icons/ArrowRightIcon'
import ClockIcon from '../../icons/ClockIcon'
import LocationIcon from '../../icons/LocationIcon'
import { RootState } from '../../redux/store'
import { getPosts } from '../../services/postServices'


export default () => {

   const [ posts, setPosts ] = useState<string[] | undefined>()

   const [ stopScroll, setStopScroll ] = useState<boolean>(false)

   const { url } = useSelector((state: RootState) => state.url)

   useEffect(() => {
      ;(async () => {
         const [ response, error ] = await getPosts(url)
         !error && response.status === 200 && setPosts(response.data.posts)
      })()
   }, [])

   return <div className='mobile-user-page'>
      <div className='mobile-user-page__upper-section'>
         <div className='mobile-user-page__upper-section__cover-photo'>
            <img
               src='https://timelinecovers.pro/facebook-cover/download/photography-city-lights-facebook-cover.jpg'
               alt='cover-photo' />
         </div>
         <div className='mobile-user-page__upper-section__user-photo'>
            <img
               src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg'
               alt='user-photo' />
         </div>
      </div>
      <div className='mobile-user-page__options'>
         <div className='mobile-user-page__options__about'>
            <div className='mobile-user-page__options__about__title'>
               <p className='mobile-user-page__options__about__title__name'>About</p>
               <ArrowRightIcon />
            </div>
            <div className='mobile-user-page__options__about__content'>
               <div className='mobile-user-page__options__about__content__location'>
                  <LocationIcon width={20} height={20} />
                  <p className='mobile-user-page__options__about__content__location__name'>Lives in
                     New York City</p>
               </div>
               <div className='mobile-user-page__options__about__content__registration-date'>
                  <ClockIcon width={20} height={20} />
                  <p className='mobile-user-page__options__about__content__registration-date__name'>Joined
                     April 2013</p>
               </div>
            </div>
         </div>
         <div className='mobile-user-page__options__friends'>
            <div className='mobile-user-page__options__friends__title'>
               <p className='mobile-user-page__options__friends__title__name'>Friends</p>
               <ArrowRightIcon />
            </div>
            <div className='mobile-user-page__options__friends__content'>

            </div>

         </div>
         <div className='mobile-user-page__options__photos'>
            <div className='mobile-user-page__options__photos__title'>
               <p className='mobile-user-page__options__photos__title__name'>Photos</p>
               <ArrowRightIcon />
            </div>
            <div className='mobile-user-page__options__photos__content'>

            </div>
         </div>
      </div>
      <div className='mobile-user-page__post-form'>
         <PostForm setPosts={setPosts} />
         {posts &&
         posts.map((post: string, index: number) => (
            <Post key={index} postID={post} setStopScroll={setStopScroll} />
         ))}
      </div>
   </div>
}