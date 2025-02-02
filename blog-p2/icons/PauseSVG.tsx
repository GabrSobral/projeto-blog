type Props = {
  size?: number;
  color?: string;
}

export const PauseSVG = ({ color = "#FFFFFF", size = 24 }: Props) => {
  return(
    <svg width={size} height={size} viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 0C0.671573 0 0 0.671573 0 1.5V17.5C0 18.3284 0.671573 19 1.5 19C2.32843 19 3 18.3284 3 17.5V1.5C3 0.671573 2.32843 0 1.5 0ZM9.5 0C8.67157 0 8 0.671573 8 1.5V17.5C8 18.3284 8.67157 19 9.5 19C10.3284 19 11 18.3284 11 17.5V1.5C11 0.671573 10.3284 0 9.5 0Z" fill={color}/>
    </svg>
  )
}