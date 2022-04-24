import IconProps from './interfaces'

export default ({ width, height, fillColor }: IconProps) => (
   <svg width={width ?? 24} height={height ?? 24} fill={fillColor ?? 'none'} viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"/>
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
   </svg>
)
