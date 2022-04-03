import React from 'react'
import Post from '../Post'

export default () => {
   return (
      <div className="main-section">
         <Post
            userID={'4234535246'}
            postID={'6237ab482e30d402f150c4db'}
            username={'Will Smith'}
            noLikes={22}
            noComments={1}
            noSaves={10}
            date={'a few minutes ago'}
            liked={true}
            text={'The sunset'}
            photo={
               'https://q-xx.bstatic.com/xdata/images/hotel/840x460/103875013.jpg?k=87bdb822961e3d76486492ce7721f5e74df5a2ed2249055b97f5fca85530a29f&o='
            }
            userPhoto={
               'https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2.jpg?s=1400'
            }
         />
         <Post
            userID={'4234535246'}
            postID={'654636546436'}
            username={'Hailee Steinfeld'}
            noLikes={2}
            noComments={0}
            noSaves={0}
            date={'two hours ago'}
            text={"Best fireworks show I've ever seen!"}
            photo={'https://i.ytimg.com/vi/CNjggrxUQ78/maxresdefault.jpg'}
            userPhoto={
               'https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg'
            }
         />
         <Post
            userID={'4234535246'}
            postID={'654636546436'}
            username={'Richard Branson'}
            noLikes={10}
            noComments={1}
            noSaves={0}
            date={'a day ago'}
            text={
               'There is no greater thing you can do with your life and your work than follow' +
               ' your passions in a way that serves the world and you.'
            }
            userPhoto={
               'https://q-xx.bstatic.com/xdata/images/hotel/840x460/103875013.jpg?k=87bdb822961e3d76486492ce7721f5e74df5a2ed2249055b97f5fca85530a29f&o='
            }
         />
      </div>
   )
}
