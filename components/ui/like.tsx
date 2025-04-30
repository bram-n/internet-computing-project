'use client';

import { useState, useEffect } from 'react';
import { ThumbsUp } from 'lucide-react';
import { createClient } from '@/app/supabase/client';

interface LikeButtonProps {
  movieId: string;
  initialLikeCount?: number;
}

export default function LikeButton({ movieId, initialLikeCount = 0 }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLikeStatus = async () => {
      const supabase = createClient();
      
     
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setIsLoading(false);
        return;
      }

      // Check if the user has already liked this movie
      const { data: existingLike } = await supabase
        .from('movie_likes')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('movie_id', movieId)
        .eq('like_type', 'like')
        .single();

      setIsLiked(!!existingLike);
      setIsLoading(false);
    };

    checkLikeStatus();
  }, [movieId]);

  const handleLike = async () => {
    const supabase = createClient();
    
    // Get the current user's session
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      // TODO: change this to handle not logged in state 
      return;
    }

    try {
      if (isLiked) {
        // Remove like
        await supabase
          .from('movie_likes')
          .delete()
          .eq('user_id', session.user.id)
          .eq('movie_id', movieId)
          .eq('like_type', 'like');
        
        setLikeCount(prev => prev - 1);
      } else {
        // Add like
        await supabase
          .from('movie_likes')
          .upsert({
            user_id: session.user.id,
            movie_id: movieId,
            like_type: 'like'
          });
        
        setLikeCount(prev => prev + 1);
      }
      
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
        isLiked 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      <ThumbsUp size={20} className={isLiked ? 'fill-current' : ''} />
      <span>{likeCount}</span>
    </button>
  );
}
