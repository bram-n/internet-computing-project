'use client';

import { useState, useEffect } from 'react';
import { ThumbsDown } from 'lucide-react';
import { createClient } from '@/app/supabase/client';

interface DislikeButtonProps {
  movieId: string;
  initialDislikeCount?: number;
}

export default function DislikeButton({ movieId, initialDislikeCount = 0 }: DislikeButtonProps) {
  const [isDisliked, setIsDisliked] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(initialDislikeCount);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDislikeStatus = async () => {
      const supabase = createClient();
      
      // Get the current user's session
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setIsLoading(false);
        return;
      }

      // Check if disliked 
      const { data: existingDislike } = await supabase
        .from('movie_likes')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('movie_id', movieId)
        .eq('like_type', 'dislike')
        .single();

      setIsDisliked(!!existingDislike);
      setIsLoading(false);
    };

    checkDislikeStatus();
  }, [movieId]);

  const handleDislike = async () => {
    const supabase = createClient();
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      // TODO: change this to handle not logged in state 
      return;
    }

    try {
      if (isDisliked) {
        await supabase
          .from('movie_likes')
          .delete()
          .eq('user_id', session.user.id)
          .eq('movie_id', movieId)
          .eq('like_type', 'dislike');
        
        setDislikeCount(prev => prev - 1);
      } else {
        await supabase
          .from('movie_likes')
          .upsert({
            user_id: session.user.id,
            movie_id: movieId,
            like_type: 'dislike'
          });
        
        setDislikeCount(prev => prev + 1);
      }
      
      setIsDisliked(!isDisliked);
    } catch (error) {
      console.error('Error updating dislike:', error);
    }
  };

  return (
    <button
      onClick={handleDislike}
      disabled={isLoading}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
        isDisliked 
          ? 'bg-red-600 text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      <ThumbsDown size={20} className={isDisliked ? 'fill-current' : ''} />
      <span>{dislikeCount}</span>
    </button>
  );
}
