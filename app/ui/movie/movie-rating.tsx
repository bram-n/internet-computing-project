import Image from 'next/image';

interface MovieRatingProps {
  rating: string | null;
}

export default function MovieRating({ rating }: MovieRatingProps) {
  if (!rating) return null;

  // Convert TMDB rating to our rating format
  const getRatingImage = (rating: string) => {
    const ratingMap: { [key: string]: string } = {
      'G': '/ratings/g-inverted.png',
      'PG': '/ratings/pg-inverted.png',
      'PG-13': '/ratings/pg-13-inverted.png',
      'R': '/ratings/r-inverted.png',
      'NC-17': '/ratings/nc-17-inverted.png',
      'MA': '/ratings/ma-inverted.png'
    };

    return ratingMap[rating] || null;
  };

  const ratingImage = getRatingImage(rating);
  if (!ratingImage) return null;

  return (
    <Image
      src={ratingImage}
      alt={`${rating} Rating`}
      width={30}
      height={30}
      className="object-contain inline-block"
    />
  );
} 