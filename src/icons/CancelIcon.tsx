import IconProps from './interfaces'


export default ({ fillColor, width, height }: IconProps) =>
   <svg xmlns="http://www.w3.org/2000/svg" width={width ?? 24} height={height ?? 24}  viewBox="0 0 48 48">
      <g transform="translate(106.832 -1004.371)">
         <circle cx="-82.833" cy="1028.371" r="23.25" fill="none" stroke={fillColor ?? '#000'}
                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
         <path fill="none" stroke={fillColor ?? '#000'} strokeLinecap="round" strokeLinejoin="round"
               strokeWidth="1.5" d="M-94.83251 1016.3711l24 24M-70.83251 1016.3711l-24 24"/>
      </g>
   </svg>