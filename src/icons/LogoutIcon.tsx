import IconProps from './interfaces'


export default ({ fillColor, width, height }: IconProps) =>
   <svg xmlns="http://www.w3.org/2000/svg" width={width ?? 24} height={height ?? 24}
        fill={fillColor ?? "url(\'#myGradient\')"} viewBox="0 0 24 24">
      <defs>
         <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="1%"  stopColor="gold" />
            <stop offset="99%" stopColor="red" />
         </linearGradient>
      </defs>
      <path
         d="M12.59,13l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H3a1,1,0,0,0,0,2ZM12,2A10,10,0,0,0,3,7.55a1,1,0,0,0,1.8.9A8,8,0,1,1,12,20a7.93,7.93,0,0,1-7.16-4.45,1,1,0,0,0-1.8.9A10,10,0,1,0,12,2Z"/>
   </svg>