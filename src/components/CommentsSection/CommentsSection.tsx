import { useState } from 'react'
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
               src={'https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg'}
               alt='userPhoto' />
         </div>
         <form className='comments-section__write-comment__form' onSubmit={() => {
            console.log(inputValue)}
         }>
         <Input name={'commentsInput'} type={'text'} placeholder={'Write a comment...'}
                onChange={[ setInputValue ]} borderRadius={InputBorderRadius.FULL}
                width={[ DesktopInputWidth.M, TabletInputWidth.L, MobileInputWidth.XL ]}
                height={[ DesktopInputHeight.S, TabletInputHeight.M, MobileInputHeight.L ]}
                color={InputColor.SECONDARY}
                value={inputValue} error={undefined} />
            <button type='submit' style={{display: "none"}}/>
         </form>
      </div>
      <div className='comments-section__comments'>
         <Comment userPhoto={'https://images.wsj.net/im-409842?width=1280&size=1'}
                  username={'Aurica Bernard'} comment={'Gorgeous husband'} noLikes={1}
                  date={'two minutes ago'} liked={true} noReplies={1}>
            <>
               <Comment
                  userPhoto={'https://www.pinkvilla.com/imageresize/queen_elizabeth_ii_3.jpg?width=752&format=webp&t=pvorg'}
                  username={'Maria Bichescu'} comment={'Nice beard'} noLikes={0} isReply={true}
                  date={'a few seconds ago'} noReplies={1} />

               <Comment userPhoto={'https://images.wsj.net/im-409842?width=1280&size=1'}
                        username={'Aurica Bernard'} comment={'Gorgeous husband'} noLikes={1}
                        isReply={true}
                        date={'two minutes ago'} liked={true} noReplies={0} />
            </>
         </Comment>
         <Comment
            userPhoto={'https://www.pinkvilla.com/imageresize/queen_elizabeth_ii_3.jpg?width=752&format=webp&t=pvorg'}
            username={'Maria Bichescu'} comment={'Nice beard'} noLikes={0}
            date={'a few seconds ago'} noReplies={0} />

      </div>
   </div>
}