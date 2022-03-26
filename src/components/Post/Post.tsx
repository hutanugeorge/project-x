import SettingsIcon from '../../icons/SettingsIcon'
import LikeIcon from '../../icons/LikeIcon'
import SaveIcon from '../../icons/SaveIcon'
import MessageIcon from '../../icons/MessageIcon'

export default () => {
   return (
      <div className="post">
         <div className="post__header">
            <div className="post__header__person">
               <div className="post__header__person__photo">
                  <img
                     src="https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg"
                     alt="person photo"
                  />
               </div>
               &nbsp; Costica 'Titi' Bernard
            </div>
            <div className="post__header__more-options">
               <SettingsIcon />
            </div>
         </div>
         <div className="post__content">
            <p className="post__content__text">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid animi
               minima officiis provident recusandae voluptatibus. Adipisci amet blanditiis
               consequuntur, corporis dicta ducimus earum error fuga, ipsa iste itaque laudantium
               minus numquam officiis quaerat quibusdam rem, repellat repellendus sapiente sed unde
               voluptas voluptatibus! Adipisci animi architecto aut commodi consequatur corporis
               cupiditate delectus deserunt dignissimos dolores eius error exercitationem facere
               fuga illum incidunt inventore iure labore, minima mollitia nobis nostrum, numquam
               optio perspiciatis quae quaerat quia quibusdam quis reprehenderit sapiente soluta
               suscipit temporibus unde. At consequatur deserunt dicta sunt? Adipisci architecto
               dignissimos dolore error ex iure maiores necessitatibus neque temporibus
               voluptatibus.
            </p>
            <img
               src="https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg"
               alt="photo"
            />
         </div>
         <div className="post__actions">
            <div className="post__actions__left">
               <div className="post__actions__like">
                  <LikeIcon />
               </div>
               <div className="post__actions__comment">
                  <MessageIcon />
               </div>
            </div>
            <div className="post__actions__right">
               <div className="post__actions__save">
                  <SaveIcon />
               </div>
            </div>
         </div>
      </div>
   )
}
