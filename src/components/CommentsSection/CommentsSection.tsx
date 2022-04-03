import React, { useState } from 'react'
import Comment from '../Comment'
import Input from '../Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputBorderRadius,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth,
} from '../Input/interface'


export default () => {

   const [ inputValue, setInputValue ] = useState<string>('')

   return <div className='comments-section'>
      <div className='comments-section__write-comment'>
         <div className='comments-section__write-comment__user-photo'>
            <img
               src={'https://scontent.fias1-1.fna.fbcdn.net/v/t1.6435-9/131986095_1595640257304818_7572429008707616586_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=263ZILrQ_rQAX83f7s3&_nc_ht=scontent.fias1-1.fna&oh=00_AT94VYVn_-E7Zm8jAa-hs2DbklOeg5dEfNu-jjyQF1X-ug&oe=626B4D69'}
               alt='userPhoto' />
         </div>
         <form className='comments-section__write-comment__form' onSubmit={(e) => {
            e.preventDefault()
         }
         }>
            <Input name={'commentsInput'} type={'text'} placeholder={'Write a comment...'}
                   onChange={[ setInputValue ]} borderRadius={InputBorderRadius.FULL}
                   width={[ DesktopInputWidth.M, TabletInputWidth.L, MobileInputWidth.XL ]}
                   height={[ DesktopInputHeight.S, TabletInputHeight.M, MobileInputHeight.L ]}
                   color={InputColor.SECONDARY}
                   value={inputValue} error={undefined} />
            <button type='submit' style={{ display: 'none' }} />
         </form>
      </div>
      <div className='comments-section__comments'>
         <Comment userPhoto={'https://images.wsj.net/im-409842?width=1280&size=1'}
                  username={'Mia Amelia'} comment={'Amazing view!'} noLikes={1}
                  date={'two minutes ago'} liked={true} noReplies={1}>
            <>
               <Comment
                  userPhoto={'https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2.jpg?s=1400'}
                  username={'Will Smith'} comment={'Thanks!'} noLikes={1} isReply={true}
                  date={'a few seconds ago'} noReplies={1} />
            </>
         </Comment>

      </div>
   </div>
}