import { ReviewCard } from '../../cards/ReviewCard'
import '../../../styles/components/sections/reviews.scss'

export const Reviews = () => {
  return (
    <div className="reviews-container">
      <p className="reviews-title">Ce que disent nos utilisateurs</p>
      <p className="reviews-subtitle">Astroshare est noté 5 étoiles avec 100+ téléchargements.</p>

      <div className="cards-container">
        <ReviewCard
          author="Stéphanie M."
          date="16 septembre 2024"
          content="Une application très complète et très utile pour les astronomes amateurs et pour préparer ses soirées d'observation"
          rating={5}
        />
        <ReviewCard
          author="Annaïck T."
          date="11 octobre 2024"
          content="Application relativement complète et facile d'utilisation. Que demander de plus."
          rating={5}
        />
        <ReviewCard
          author="Olivia M."
          date="23 février 2025"
          content="Application très complète et moderne, je recommande vivement !"
          rating={5}
        />
      </div>
    </div>
  )
}
