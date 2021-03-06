import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg width={width ?? 24} height={height ?? 24} fill="none" viewBox="0 0 24 24">
      <circle
         cx="12"
         cy="8"
         r="3.25"
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1.5"
      />
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1.5"
         d="M12.25 19.25H6.94953C5.77004 19.25 4.88989 18.2103 5.49085 17.1954C6.36247 15.7234 8.23935 14 12.25 14"
      />
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1.5"
         d="M17 14.75V19.25"
      />
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1.5"
         d="M19.25 17L14.75 17"
      />
   </svg>
)
