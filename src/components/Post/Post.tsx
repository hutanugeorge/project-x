import SettingsIcon from '../../icons/SettingsIcon'
import LikeIcon from '../../icons/LikeIcon'
import SaveIcon from '../../icons/SaveIcon'
import MessageIcon from '../../icons/MessageIcon'


export default () => {
   return <div className="post">
      <div className="post__header">
         <p className="post__header__person">
            <div className="post__header__person__photo">
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/196px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                  alt="person photo"/>
            </div>
            &nbsp;
            Will Smith
         </p>
         <p className="post__header__more-options">
            <SettingsIcon/>
         </p>
      </div>
      <div className="post__content">
         <img
            src="https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg"
            alt="photo"/>
      </div>
      <div className="post__actions">
         <div className="post__actions__left">
            <p className="post__actions__like">
               <LikeIcon/>
            </p>
            <p className="post__actions__comment">
               <MessageIcon/>
            </p>
         </div>
         <div className="post__actions__right">
            <p className="post__actions__save">
               <SaveIcon/>
            </p>
         </div>
      </div>
   </div>
}