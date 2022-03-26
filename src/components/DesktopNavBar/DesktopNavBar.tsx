import { useState } from 'react'
import { useSelector } from 'react-redux'
import LogoutIcon from '../../icons/LogoutIcon'
import SearchIcon from '../../icons/SearchIcon'
import { RootState } from '../../redux/store'
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
   const [inputValue, setInputValue] = useState<string>('')

   const user = useSelector((state: RootState) => state.user)

   return window.location.href !== 'http://localhost:3000/' ? (
      <div className="nav-bar__wrapper" data-testid="nav-bar">
         <nav className="nav-bar">
            <div className="nav-bar__element">
               <h1 className="nav-bar__element__title" data-testid="title">
                  ProjectX
               </h1>
            </div>
            <div className="nav-bar__element">
               <form className="nav-bar__element__form" autoComplete="off">
                  <Input
                     type="text"
                     value={inputValue}
                     onChange={[setInputValue]}
                     placeholder="Search anything..."
                     name="SearchInput"
                     width={[DesktopInputWidth.L, TabletInputWidth.L, MobileInputWidth.L]}
                     height={[DesktopInputHeight.S, TabletInputHeight.M, MobileInputHeight.M]}
                     color={InputColor.PRIMARY}
                     error={undefined}
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
                  data-testid="logout-trigger"
                  onClick={() => {
                     localStorage.removeItem('token')
                     window.location.href = '/'
                  }}
               >
                  <LogoutIcon />
               </div>
            </div>
         </nav>
      </div>
   ) : (
      <></>
   )
}
