import { getReviewStars } from '../../helpers/utils/getReviewStars';
import '../../styles/components/cards/reviewCard.scss'

interface ReviewCardProps {
  author: string;
  date: string;
  content: string;
  rating: number;
}

export const ReviewCard = ({ author, date, content, rating }: ReviewCardProps) => {
  return (
    <div className="review-card">
      <div className="review-card-header">
        <div className='author-container'>
          <div className="author-picto" data-author={author[0]} />
          <div className="author-infos">
            <div className="author-name">{author}</div>
            <div className="review-date">{date}</div>
          </div>
        </div>
        <div className="rating">
          {
            getReviewStars(rating).map((star, index) => (
              console.log(star),
              <img className='rating-star' key={index} src={`/images/icons/FiStar${star}.svg`} alt={`${star} star`} />
            ))
          }
        </div>
      </div>
      <div className="review-content">
        <p className='review-text'>{content}</p>
      </div>
    </div>
  )
}