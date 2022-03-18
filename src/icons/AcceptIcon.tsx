import IconProps from './interfaces'


export default ({ fillColor, width, height }: IconProps) =>
   <svg xmlns="http://www.w3.org/2000/svg" width={width ?? 24} height={height ?? 24} viewBox="0 0 48 48">
      <g transform="translate(7.332 -971.036)">
         <circle cx="16.668" cy="995.036" r="23.25" fill={fillColor ?? 'none'} stroke={fillColor ? '#fff' : '#000'} strokeLinecap="round"
                 strokeLinejoin="round" strokeWidth="1.5"/>
         <path fill="none" stroke={fillColor ? '#fff' : '#000'} strokeLinecap="round" strokeLinejoin="round"
               strokeWidth="1.5" d="m 2.667517,995.03602 4,7.99998 24,-15.99998"/>
      </g>
   </svg>
