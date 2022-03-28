import Comment from '../Comment'
import Input from '../Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth,
} from '../Input/interface'


export default () => {
   return <div className='comments-section'>
      <div className='comments-section__write-comment'>
         <img
            src={'https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg'}
            alt='userPhoto' />
         <Input name={'commentsInput'} type={'text'} placeholder={'Write a comment...'}
                onChange={[ () => {
                } ]} width={[ DesktopInputWidth.XL, TabletInputWidth.S, MobileInputWidth.L ]}
                height={[ DesktopInputHeight.S, TabletInputHeight.M, MobileInputHeight.M ]}
                color={InputColor.SECONDARY}
                value={''} error={undefined} />
      </div>
      <div className='comments-section__comments'>
         <Comment userPhoto={'https://images.wsj.net/im-409842?width=1280&size=1'}
                  username={'Aurica Bernard'} comment={'Gorgeous husband'} noLikes={1}
                  date={'two minutes ago'} liked={true} noReplies={1}>
            <Comment
               userPhoto={'https://www.pinkvilla.com/imageresize/queen_elizabeth_ii_3.jpg?width=752&format=webp&t=pvorg'}
               username={'Maria Bichescu'} comment={'Nice beard'} noLikes={0}
               date={'a few seconds ago'} noReplies={1}>
               <Comment userPhoto={'https://images.wsj.net/im-409842?width=1280&size=1'}
                        username={'Aurica Bernard'} comment={'Gorgeous husband'} noLikes={1}
                        date={'two minutes ago'} liked={true} noReplies={1} />
            </Comment>
         </Comment>
         <Comment
            userPhoto={'https://www.pinkvilla.com/imageresize/queen_elizabeth_ii_3.jpg?width=752&format=webp&t=pvorg'}
            username={'Maria Bichescu'} comment={'Nice beard'} noLikes={0}
            date={'a few seconds ago'} noReplies={0} />

      </div>
   </div>
}