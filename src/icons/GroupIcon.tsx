import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
   >
      <g data-name="Group User">
         <g data-name="&lt;Group&gt;">
            <circle
               cx="12"
               cy="8.5"
               r="3"
               fill="none"
               stroke={fillColor ?? '#000'}
               strokeLinecap="round"
               strokeLinejoin="round"
               data-name="&lt;Path&gt;"
            />
            <path
               fill="none"
               stroke={fillColor ?? '#000'}
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M12,13.5a11.52,11.52,0,0,0-5.14,1.37A2.51,2.51,0,0,0,5.5,17.11v.46a.93.93,0,0,0,.93.94H17.57a.93.93,0,0,0,.93-.94v-.46a2.51,2.51,0,0,0-1.36-2.23A11.52,11.52,0,0,0,12,13.5Z"
               data-name="&lt;Path&gt;"
            />
            <g data-name="&lt;Group&gt;">
               <circle
                  cx="4.5"
                  cy="7.5"
                  r="2"
                  fill="none"
                  stroke={fillColor ?? '#000'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-name="&lt;Path&gt;"
               />
               <path
                  fill="none"
                  stroke={fillColor ?? '#000'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.4,14.19a.7.7,0,0,0,.1-.35v-.32A1.8,1.8,0,0,0,7.67,12,6.45,6.45,0,0,0,4.5,11a6.45,6.45,0,0,0-3.17,1A1.8,1.8,0,0,0,.5,13.52v.32a.62.62,0,0,0,.57.66H7.64"
                  data-name="&lt;Path&gt;"
               />
            </g>
            <g data-name="&lt;Group&gt;">
               <circle
                  cx="19.5"
                  cy="7.5"
                  r="2"
                  fill="none"
                  stroke={fillColor ?? '#000'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-name="&lt;Path&gt;"
               />
               <path
                  fill="none"
                  stroke={fillColor ?? '#000'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.6,14.19a.7.7,0,0,1-.1-.35v-.32A1.8,1.8,0,0,1,16.33,12a6.45,6.45,0,0,1,3.17-1,6.45,6.45,0,0,1,3.17,1,1.8,1.8,0,0,1,.83,1.56v.32a.62.62,0,0,1-.57.66H16.36"
                  data-name="&lt;Path&gt;"
               />
            </g>
         </g>
      </g>
   </svg>
)
