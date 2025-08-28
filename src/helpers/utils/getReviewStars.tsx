
export const getReviewStars = (level: number) => {
  let stars: string[] = [];
  let fullStars = Math.floor(level);
  let halfStar = level - fullStars;
  let emptyStars = 5 - fullStars - (halfStar > 0 ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push("Full");
  }
  for (let i = 0; i < halfStar; i++) {
    stars.push("Half");
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push("Empty");
  }

  return stars;
}