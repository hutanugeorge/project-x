import { InputProps } from './interface'


export default ({
                   name,
                   type = 'text',
                   placeholder = '',
                   onChange,
                   width,
                   height,
                   color,
                   value
                }: InputProps) => {

   return <input name={name} type={type} placeholder={placeholder} value={value}
                 onChange={(e) => {
                    onChange[0](e.target.value)
                    onChange[1] && onChange[1].forEach((fn: () => void) => {
                       fn()
                    })
                 }}
                 className={`input ${width[0]} ${width[1]} ${width[2]} ${height[0]} ${height[1]} ${height[2]} ${color}`}/>
}