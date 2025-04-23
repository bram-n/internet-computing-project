import Image from "next/image";

export default function MovieRatings() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <Image 
            src="/imdb.png" 
            alt="IMDb Rating" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span>7.5/10</span>
        </div>
        <div className="flex items-center">
          <Image 
            src="/metascore.png" 
            alt="Metacritic Score" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span>75/100</span>
        </div>
        <div className="flex items-center">
          <Image 
            src="/tomato.png" 
            alt="Rotten Tomatoes Score" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span>85%</span>
        </div>
      </div>
    </div>
  );
} 