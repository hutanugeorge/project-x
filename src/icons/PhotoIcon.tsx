import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Image 1"
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
   >
      <g data-name="&lt;Group&gt;">
         <rect
            width="23"
            height="17"
            x=".5"
            y="3.5"
            fill="none"
            stroke={fillColor ?? '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-name="&lt;Rectangle&gt;"
            rx="1.5"
            ry="1.5"
         />
         <circle
            cx="8"
            cy="9"
            r="2.5"
            fill="none"
            stroke={fillColor ?? '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-name="&lt;Path&gt;"
         />
         <polyline
            fill="none"
            stroke={fillColor ?? '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            points=".56 19.43 6 14 9.5 17.5"
            data-name="&lt;Path&gt;"
         />
         <polyline
            fill="none"
            stroke={fillColor ?? '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            points="8.5 16.5 15 10 23.5 18.5"
            data-name="&lt;Path&gt;"
         />
      </g>
   </svg>
)
