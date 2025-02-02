type Props = {
  size?: number;
  color?: string;
}

export const PlaySVG = ({ color = "#FFFFFF", size = 24 }: Props) => {
  return(
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2035 7.6447C11.5378 7.22106 10.6666 7.69927 10.6666 8.48836V23.5117C10.6666 24.3008 11.5378 24.779 12.2035 24.3553L24.0075 16.8437C24.625 16.4507 24.625 15.5493 24.0075 15.1564L12.2035 7.6447Z" fill={color}/>
    </svg>
  )
}