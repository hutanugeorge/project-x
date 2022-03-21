import Input from '../Input/Input'
import Label from '../Label/Label'
import { InputLabeledProps } from './interface'

export default (props: InputLabeledProps) => {
   const { name, type, placeholder, onChange, width, height, color, labelText, value, error } =
      props
   return (
      <div className="input-labeled">
         <Input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            width={width}
            value={value}
            height={height}
            error={error}
            color={color}
         />
         <Label htmlFor={labelText} text={labelText} error={error} />
      </div>
   )
}
