import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import Input from '../FormComponents/Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputBorderRadius,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth,
} from '../FormComponents/Input/interface'

export default () => {
   const [inputValue, setInputValue] = useState<string>('')

   const { user } = useSelector((state: RootState) => state.user)

   return (
      <>
         <div className="comments-section">
            <div className="comments-section__write-comment">
               <div className="comments-section__write-comment__user-photo">
                  <img src={user.profilePhoto} alt="userPhoto" />
               </div>
               <form
                  className="comments-section__write-comment__form"
                  onSubmit={() => {
                     console.log(inputValue)
                  }}
               >
                  <Input
                     name={'commentsInput'}
                     type={'text'}
                     placeholder={'Write a comment...'}
                     onChange={[setInputValue]}
                     borderRadius={InputBorderRadius.STANDARD}
                     width={[DesktopInputWidth.M, TabletInputWidth.L, MobileInputWidth.XL]}
                     height={[DesktopInputHeight.S, TabletInputHeight.M, MobileInputHeight.L]}
                     color={InputColor.SECONDARY_DARK}
                     value={inputValue}
                     error={undefined}
                  />
                  <button type="submit" style={{ display: 'none' }} />
               </form>
            </div>
            <div className="comments-section__comments">

            </div>
         </div>
      </>
   )
}
