import '../../styles/components/sections/reviews.scss'
import { ReviewCard } from '../cards/ReviewCard'

export const Reviews = () => {
  return (
    <div className="reviews-container">
      <p className="reviews-title">Ce que disent nos utilisateurs</p>
      <p className="reviews-subtitle">Astroshare est noté 5 étoiles avec 100+ téléchargements.</p>

      <div className="cards-container">
        <ReviewCard
          author="John Doe"
          date="2 days ago"
          content="Great app! Really helps me with my daily tasks."
          rating={5}
        />
      </div>
    </div>
  )
}
