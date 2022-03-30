import Post from '../Post'

export default () => {
   return (
      <div className="mobile-explore">
         <div className="mobile-explore__header">
            <h1 className="mobile-explore__header__title">Explore</h1>
         </div>
         <div className="mobile-explore__content">
            <Post
               userID={'4234535246'}
               postID={'654636546436'}
               username={'Mia Amelia'}
               noLikes={95}
               noComments={5}
               noSaves={10}
               date={'a few seconds ago'}
               liked={false}
               text={'Amazing view!'}
               photo={'http://annstreetstudio.com/wp-content/uploads/2014/11/Island_Girl_20.jpg'}
               userPhoto={'https://images.wsj.net/im-409842?width=1280&size=1'}
            />
         </div>
      </div>
   )
}
