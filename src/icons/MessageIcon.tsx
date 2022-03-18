import IconProps from './interfaces'


export default ({ fillColor, width, height }: IconProps) =>
   <svg xmlns="http://www.w3.org/2000/svg" width={width ?? 24} height={height ?? 24}
        viewBox="0 0 24 24">
      <g data-name="Chat Bubble 12">
         <path fill="none" stroke={fillColor ?? '#000'} strokeLinecap="round" strokeLinejoin="round"
               d="M21,1.5H3A1.5,1.5,0,0,0,1.5,3V22.5l5-5H21A1.5,1.5,0,0,0,22.5,16V3A1.5,1.5,0,0,0,21,1.5Z"
               strokeWidth="1"/>
         <line x1="6.5" x2="17.5" y1="6.5" y2="6.5" fill="none" stroke={fillColor ?? '#000'}
               strokeLinecap="round" strokeLinejoin="round"/>
         <line x1="6.5" x2="17.5" y1="9.5" y2="9.5" fill="none" stroke={fillColor ?? '#000'}
               strokeLinecap="round" strokeLinejoin="round"/>
         <line x1="6.5" x2="12.5" y1="12.5" y2="12.5" fill="none" stroke={fillColor ?? '#000'}
               strokeLinecap="round" strokeLinejoin="round"/>
      </g>
   </svg>