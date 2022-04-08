import jwt_decode from 'jwt-decode'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LogoutIcon from '../../icons/LogoutIcon'
import SearchIcon from '../../icons/SearchIcon'
import { RootState } from '../../redux/store'
import Button from '../Button'
import {
   ButtonColor,
   DesktopButtonHeight,
   DesktopButtonWidth,
   MobileButtonHeight,
   MobileButtonWidth,
   TabletButtonHeight,
   TabletButtonWidth,
} from '../Button/interface'
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

   const { user } = useSelector((state: RootState) => state.user)

   return (
      <div className="nav-bar__wrapper" data-testid="nav-bar">
         <nav className="nav-bar">
            <div className="nav-bar__element">
               <h1 className="nav-bar__element__title" data-testid="title" onClick={() => window.location.pathname= '/'}>
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
                     color={InputColor.SECONDARY}
                     error={undefined}
                  />
                  <Button
                     type={'submit'}
                     color={ButtonColor.TRANSPARENT}
                     width={[DesktopButtonWidth.FIT, TabletButtonWidth.FIT, MobileButtonWidth.FIT]}
                     height={[
                        DesktopButtonHeight.FIT,
                        TabletButtonHeight.FIT,
                        MobileButtonHeight.FIT,
                     ]}
                  >
                     <SearchIcon width={20} height={20} fillColor={'#c4c4c4'} />
                  </Button>
               </form>
            </div>
            <div className="nav-bar__element" >
               <div className="nav-bar__element__username" onClick={() => window.location.pathname = `/user/${user._id}`}>
                  <p>
                     {user.firstName} {user.lastName}
                  </p>
               </div>
               <div className="nav-bar__element__person__photo" onClick={() => window.location.pathname = `/user/${user._id}`}>
                  <img
                     src={`https://spaces.george-hutanu.com/${user.profilePhoto}`}
                     alt="person photo"
                  />
               </div>
               <div
                  className="nav-bar__element__svg"
                  data-testid="logout-trigger"
                  onClick={() => {
                     localStorage.removeItem('token')
                     window.location.pathname = '/'
                  }}
               >
                  <LogoutIcon />
               </div>
            </div>
         </nav>
      </div>
   )
}
