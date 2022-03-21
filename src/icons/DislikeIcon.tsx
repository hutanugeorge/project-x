import IconProps from './interfaces'

export default ({ fillColor, width, height }: IconProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 30 30"
   >
      <path
         fill="none"
         stroke={fillColor ?? '#000'}
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M21.3 6h3.75A1.25 1.25 0 0 1 26.3 7.25v8.5A1.25 1.25 0 0 1 25.05 17H21.3zM21.3 8l-2-1.33A4 4 0 0 0 17.09 6H8.28A1.25 1.25 0 0 0 7.06 7l-2 7.94A2.49 2.49 0 0 0 7.5 18h6.8v7h2.61a2 2 0 0 0 1.88-1.3L21.3 17"
      />
   </svg>
)
