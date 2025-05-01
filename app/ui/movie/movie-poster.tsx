import Image from "next/image";
import {MoviePosterProps} from "@/lib/definitions";

export default function MoviePoster({ src, title }: MoviePosterProps) {
  const isPlaceholder = src.includes('placeholder-poster.png');
  
  return (
    <div className="w-full md:w-1/3 flex justify-center">
      <div className="border-2 border-gray-700 rounded-lg p-2 flex items-center justify-center">
        <div className={`${isPlaceholder ? "rounded-md p-4 flex items-center justify-center" : "w-full h-full"}`}>
          <Image 
            src={src} 
            alt={`Movie Poster for ${title}`}
            width={isPlaceholder ? 150 : 400}
            height={isPlaceholder ? 225 : 600}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
} 