import React, { useState } from 'react'

import MessageIcon from '../../../icons/MessageIcon'
import SearchIcon from '../../../icons/SearchIcon'
import Button from '../../FormComponents/Button'
import {
   ButtonColor,
   DesktopButtonHeight,
   DesktopButtonWidth,
   MobileButtonHeight,
   MobileButtonWidth,
   TabletButtonHeight,
   TabletButtonWidth,
} from '../../FormComponents/Button/interface'
import Input from '../../FormComponents/Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth,
} from '../../FormComponents/Input/interface'

export default () => {
   const [inputValue, setInputValue] = useState<string>('')
   const [showInput, setShowInput] = useState<boolean>(false)

   return (
      <div className="upper-mobile-navigation">
         <h1 className="upper-mobile-navigation__title">Project X</h1>
         <form className="upper-mobile-navigation__input-group">
            <div
               className={`upper-mobile-navigation__input-group__floating-input ${
                  !showInput ? 'upper-mobile-navigation__input-group__floating-input--hidden' : ''
               }`}
               onClick={() => setShowInput(false)}
            >
               <Input
                  name={'searchInput'}
                  type={'text'}
                  placeholder={'Search everything...'}
                  onChange={[setInputValue]}
                  width={[DesktopInputWidth.L, TabletInputWidth.XL, MobileInputWidth.XL]}
                  height={[DesktopInputHeight.M, TabletInputHeight.XL, MobileInputHeight.L]}
                  color={InputColor.WHITE}
                  value={inputValue}
                  error={undefined}
               />
               <div className="upper-mobile-navigation__input-group__floating-input__results">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam!
               </div>
            </div>
            <Button
               type="submit"
               color={ButtonColor.TRANSPARENT}
               preventDefault={true}
               width={[DesktopButtonWidth.FIT, TabletButtonWidth.FIT, MobileButtonWidth.FIT]}
               height={[DesktopButtonHeight.M, TabletButtonHeight.M, MobileButtonHeight.M]}
               onClickFunctions={[() => setShowInput((prev) => !prev)]}
            >
               <SearchIcon />
            </Button>
         </form>
         <MessageIcon width={30} height={30} />
      </div>
   )
}
