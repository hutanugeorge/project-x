import { useState } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import LogoutIcon from '../../icons/LogoutIcon'
import PhotoIcon from '../../icons/PhotoIcon'
import SearchIcon from '../../icons/SearchIcon'
import { RootState } from '../../redux/store'

export default () => {
   const user = useSelector((state: RootState) => state.user)

   const [inputValue, setInputValue] = useState<string>('')

   const navigate = useNavigate()

   return (
      <>
         <div className="nav-bar__wrapper" data-testid="nav-bar">
            <nav className="nav-bar">
               <div className="nav-bar__element">
                  <h1 className="nav-bar__element__title">ProjectX</h1>
               </div>
               <div className="nav-bar__element">
                  <form className="nav-bar__element__form" autoComplete="off">
                     <input
                        className="nav-bar__element__form__input"
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                           setInputValue(e.target.value)
                        }}
                        placeholder="Search anything..."
                        name="SearchInput"
                     />
                     <button
                        className="nav-bar__element__form__button"
                        onClick={(e) => {
                           e.preventDefault()
                           setInputValue('')
                        }}
                     >
                        <SearchIcon width={20} height={20} fillColor="#000" />
                     </button>
                  </form>
               </div>
               <div className="nav-bar__element">
                  <div className="nav-bar__element__username">
                     <p>
                        {user.user.firstName} {user.user.lastName}
                     </p>
                  </div>
                  <div className="nav-bar__element__person__photo">
                     <img
                        src="https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Joerg.jpg"
                        alt="person photo"
                     />
                  </div>
                  <div
                     className="nav-bar__element__svg"
                     onClick={() => {
                        localStorage.removeItem('token')
                        navigate('/')
                     }}
                  >
                     <LogoutIcon />
                  </div>
               </div>
            </nav>
         </div>
         <div className="nav-bar__mobile__wrapper">
            <div className="nav-bar__mobile">
               <div className="nav-bar__mobile__element">
                  <h1 className="nav-bar__mobile__element__title">ProjectX</h1>
               </div>
               <div className="nav-bar__mobile__element">
                  <form className="nav-bar__mobile__element__form">
                     <input
                        type="text"
                        className="nav-bar__mobile__element__form__input"
                        value={inputValue}
                        onChange={(e) => {
                           setInputValue(e.target.value)
                        }}
                        placeholder="Search anything..."
                        name="SearchInput"
                     />
                     <button
                        className="nav-bar__mobile__element__form__button"
                        onClick={(e) => {
                           e.preventDefault()
                           setInputValue('')
                        }}
                     >
                        <SearchIcon width={25} height={25} fillColor="#000" />
                     </button>
                  </form>
                  <div className="nav-bar__mobile__element__menu">
                     <h2 className="nav-bar__mobile__element__menu__title">Menu</h2>
                     <ul className="nav-bar__mobile__element__menu__list">
                        <li>Activity</li>
                        <li>News Feed</li>
                        <li>ETC</li>
                     </ul>
                  </div>
               </div>
               <div className="nav-bar__mobile__element">
                  <div className="nav-bar__mobile__element__profile">
                     <h2 className="nav-bar__mobile__element__profile__title">Profile</h2>
                     <div className="nav-bar__mobile__element__profile__info">
                        <div className="nav-bar__mobile__element__profile__info__user">
                           <p className="nav-bar__mobile__element__profile__info__user__photo-icon">
                              <PhotoIcon />
                           </p>
                           <p className="nav-bar__mobile__element__profile__info__user__name">
                              Will Smith
                           </p>
                        </div>
                        <div className="nav-bar__mobile__element__profile__info__auth">
                           <p className="nav-bar__mobile__element__profile__info__auth__logout-icon">
                              <LogoutIcon />
                           </p>
                           <p className="nav-bar__mobile__element__profile__info__auth__logout-text">
                              {' '}
                              Log Out{' '}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
