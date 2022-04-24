import IconProps from './interfaces'

export default ({ width, height, fillColor }: IconProps) => (
   <svg width={width ?? 24} height={height ?? 24} fill={fillColor ?? 'none'} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5"/>
      <path stroke="currentColor" strokeWidth="1.5" d="M12 8V12L14 14"/>
   </svg>
)
