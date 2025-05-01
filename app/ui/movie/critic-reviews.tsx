import { fetchMovieCriticReviews } from "@/lib/data";

export default async function CriticReviews({ movieId }: { movieId: string }) {
  const reviews = await fetchMovieCriticReviews({ params: { movie: movieId } });

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Critics&apos; Takes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg">
            <div className="mb-2">
              <span className="font-semibold">{review.critic_name}</span>
              <span className="text-gray-400 ml-2">- {review.publication_name}</span>
            </div>
            <p className="text-gray-300">{review.review_text}</p>
            {review.review_url && (
              <a 
                href={review.review_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
              >
                Read full review
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 