import { useState } from 'react'
import MessageIcon from '../../icons/MessageIcon'
import SearchIcon from '../../icons/SearchIcon'
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
         <div className="upper-mobile-navigation__input-group">
            <Input
               name={'searchInput'}
               type={'text'}
               placeholder={'Search everything...'}
               onChange={[setInputValue]}
               width={[DesktopInputWidth.S, TabletInputWidth.L, MobileInputWidth.L]}
               height={[DesktopInputHeight.S, TabletInputHeight.M, MobileInputHeight.M]}
               color={InputColor.SECONDARY}
               value={inputValue}
               error={undefined}
            />
            <SearchIcon />
         </div>
         <MessageIcon />
      </div>
   )
}
