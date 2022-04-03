import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg width={width ?? 24} height={height ?? 24} fill={fillColor ?? 'none'} viewBox="0 0 24 24">
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1.5"
         d="M13.75 6.75L19.25 12L13.75 17.25"
      />
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1.5"
         d="M19 12H4.75"
      />
   </svg>
)
