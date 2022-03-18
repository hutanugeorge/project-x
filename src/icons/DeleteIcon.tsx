import IconProps from './interfaces'


export default ({ fillColor, width, height }: IconProps) =>
   <svg xmlns="http://www.w3.org/2000/svg" width={width ?? 24} height={height ?? 24} viewBox="0 0 30 30">
      <line x1="6" x2="25" y1="8" y2="8" fill="none" stroke={fillColor ?? '#000'} strokeLinecap="round"
            strokeLinejoin="round" strokeWidth="2"/>
      <path fill="none" stroke={fillColor ?? '#000'} strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="2"
            d="M23 9V23a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V9M13 8V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V8"/>
      <line x1="13" x2="13" y1="13" y2="20" fill="none" stroke={fillColor ?? '#000'}strokeLinecap="round"
            strokeLinejoin="round" strokeWidth="2"/>
      <line x1="18" x2="18" y1="13" y2="20" fill="none" stroke={fillColor ?? '#000'} strokeLinecap="round"
            strokeLinejoin="round" strokeWidth="2"/>
   </svg>