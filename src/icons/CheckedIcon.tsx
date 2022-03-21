import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      fill={fillColor ?? '#000'}
      viewBox="0 0 24 24"
   >
      <path d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z" />
   </svg>
)
