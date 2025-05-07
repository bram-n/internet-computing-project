import Image from "next/image";
import {MoviePosterProps} from "@/lib/definitions";

export default function MoviePoster({ src, title }: MoviePosterProps) {
  const isPlaceholder = src.includes('placeholder-poster.png');
  
  return (
    <div className="w-full md:w-2/5 flex justify-center">
        <div className={`${isPlaceholder ? "rounded-md p-4 flex items-center justify-center" : "w-full h-full"}`}>
          <Image 
            src={src} 
            alt={`Movie Poster for ${title}`}
            width={isPlaceholder ? 150 : 500}
            height={isPlaceholder ? 225 : 750}
            className="rounded-md border-2 border-gray-700 p-2"
          />
        </div>
    </div>
  );
} 