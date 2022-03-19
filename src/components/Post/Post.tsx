import SettingsIcon from '../../icons/SettingsIcon'
import LikeIcon from '../../icons/LikeIcon'
import SaveIcon from '../../icons/SaveIcon'
import MessageIcon from '../../icons/MessageIcon'


export default () => {
   return <div className="post">
      <div className="post__header">
         <div className="post__header__person">
            <div className="post__header__person__photo">
               <img
                  src="https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg"
                  alt="person photo"/>
            </div>
            &nbsp;
            Costica 'Titi' Bernard
         </div>
         <div className="post__header__more-options">
            <SettingsIcon/>
         </div>
      </div>
      <div className="post__content">
         <img
            src="https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg"
            alt="photo"/>
      </div>
      <div className="post__actions">
         <div className="post__actions__left">
            <div className="post__actions__like">
               <LikeIcon/>
            </div>
            <div className="post__actions__comment">
               <MessageIcon/>
            </div>
         </div>
         <div className="post__actions__right">
            <div className="post__actions__save">
               <SaveIcon/>
            </div>
         </div>
      </div>
   </div>
}