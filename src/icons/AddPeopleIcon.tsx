import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Add User"
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
   >
      <g data-name="&lt;Group&gt;">
         <circle
            cx="11"
            cy="6"
            r="5.5"
            fill={fillColor ?? 'none'}
            stroke={fillColor ? '#fff' : '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-name="&lt;Path&gt;"
         />
         <path
            fill={fillColor ?? 'none'}
            stroke={fillColor ? '#fff' : '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.5,14.28A16.43,16.43,0,0,0,11,13.5a18.74,18.74,0,0,0-8.31,2.2A4,4,0,0,0,.5,19.27V20A1.5,1.5,0,0,0,2,21.5H13.52"
         />
      </g>
      <g data-name="&lt;Group&gt;">
         <g data-name="&lt;Group&gt;">
            <circle
               cx="18.5"
               cy="18.5"
               r="5"
               fill="none"
               stroke={fillColor ?? '#303c42'}
               strokeLinecap="round"
               strokeLinejoin="round"
               data-name="&lt;Path&gt;"
            />
         </g>
         <line
            x1="16.5"
            x2="20.5"
            y1="18.5"
            y2="18.5"
            fill="none"
            stroke={fillColor ?? '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-name="&lt;Path&gt;"
         />
         <line
            x1="18.5"
            x2="18.5"
            y1="16.5"
            y2="20.5"
            fill="none"
            stroke={fillColor ?? '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-name="&lt;Path&gt;"
         />
      </g>
   </svg>
)
