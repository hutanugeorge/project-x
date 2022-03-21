import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 30 30"
   >
      <path
         fill="none"
         stroke={fillColor ?? '#000'}
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="1"
         d="M9 23H5.25A1.25 1.25 0 0 1 4 21.75v-8.5A1.25 1.25 0 0 1 5.25 12H9zM9 21l2 1.33a4 4 0 0 0 2.22.67H22a1.25 1.25 0 0 0 1.22-.95l2-7.94A2.5 2.5 0 0 0 22.8 11H16V4H13.39a2 2 0 0 0-1.88 1.3L9 12"
      />
   </svg>
)
