import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg width={width ?? 24} height={height ?? 24} fill="none" viewBox="0 0 24 24">
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1.5"
         d="M12 5.75V18.25"
      />
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1.5"
         d="M18.25 12L5.75 12"
      />
   </svg>
)
