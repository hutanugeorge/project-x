import { ButtonProps } from './interface'


export default ({ type, onClickFunctions, width, height, text }: ButtonProps) => {
   return <button
      onClick={(e) => {
         onClickFunctions && onClickFunctions.forEach((fn: () => void) => {
            fn()
         })
      }}
      className={`button ${width[0]} ${width[1]} ${width[2]} ${height[0]} ${height[1]} ${height[2]}`}
      type={type}> {text}
   </button>
}