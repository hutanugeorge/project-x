import { LabelProps } from './interface'


export default ({ htmlFor, text }: LabelProps) => {
   return <label className= {`label`} htmlFor={htmlFor}>
      {text}
   </label>
}