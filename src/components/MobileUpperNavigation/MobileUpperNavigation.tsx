import React, { useState } from 'react'
import MessageIcon from '../../icons/MessageIcon'
import SearchIcon from '../../icons/SearchIcon'
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

   return (
      <div className="upper-mobile-navigation">
         <h1 className="upper-mobile-navigation__title">Project X</h1>
         <form className="upper-mobile-navigation__input-group">
            <Input
               name={'searchInput'}
               type={'text'}
               placeholder={'Search everything...'}
               onChange={[setInputValue]}
               width={[DesktopInputWidth.S, TabletInputWidth.L, MobileInputWidth.L]}
               height={[DesktopInputHeight.S, TabletInputHeight.M, MobileInputHeight.L]}
               color={InputColor.SECONDARY}
               value={inputValue}
               error={undefined}
            />
            <Button
               type="submit"
               color={ButtonColor.TRANSPARENT}
               preventDefault={true}
               width={[DesktopButtonWidth.FIT, TabletButtonWidth.FIT, MobileButtonWidth.FIT]}
               height={[DesktopButtonHeight.M, TabletButtonHeight.M, MobileButtonHeight.M]}
            >
               <SearchIcon />
            </Button>
         </form>
         <MessageIcon width={30} height={30}/>
      </div>
   )
}
