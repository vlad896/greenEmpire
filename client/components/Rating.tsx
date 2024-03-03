import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'
import { StarIcon } from './StarIcon'

interface Props
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  rating: number
  keys: number
}

const Rating = ({ rating, key, ...props }: Props) => {
  return (
    <div {...props}>
      {[...Array(rating)].map((_, index) => {
        return (
          <span key={index}>
            <StarIcon size={25} />
          </span>
        )
      })}
    </div>
  )
}

export default Rating
