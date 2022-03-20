import { LabelProps } from './interface'


export default ({ htmlFor, text, error }: LabelProps) => {
   return <label data-testid="label" className={`label ${error ? 'label__error' : ''}`} htmlFor={htmlFor}>
      {error ?? text}
   </label>
}