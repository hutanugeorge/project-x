import React from 'react';
import { ButtonProps } from './interface'

export default ({
   type,
   onClickFunctions,
   width,
   height,
   text,
   color,
   children,
   reactive,
   preventDefault,
}: ButtonProps) => {
   return (
      <button
         onClick={(e) => {
            preventDefault && e.preventDefault()
            onClickFunctions &&
               onClickFunctions.forEach((fn: () => void) => {
                  fn()
               })
         }}
         className={`button ${width[0]} ${width[1]} ${width[2]} ${height[0]} ${height[1]} ${
            height[2]
         } ${color} ${reactive && 'button-reactive'}`}
         type={type}
      >
         {' '}
         {text ?? children}
      </button>
   )
}
