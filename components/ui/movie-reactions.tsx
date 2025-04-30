'use client';

import { useEffect, useState } from 'react';
import LikeButton from './like';
import DislikeButton from './dislike';
import { createClient } from '@/app/supabase/client';

interface MovieReactionsProps {
  movieId: string;
}

export default function MovieReactions({ movieId }: MovieReactionsProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  useEffect(() => {
    const fetchReactionCounts = async () => {
      const supabase = createClient();
      
      // Get likes count
      const { data: likes, error: likesError } = await supabase
        .from('movie_likes')
        .select('count', { count: 'exact' })
        .eq('movie_id', movieId)
        .eq('like_type', 'like');
      
      if (!likesError && likes) {
        setLikeCount(likes.length);
      }

      // Get dislikes count
      const { data: dislikes, error: dislikesError } = await supabase
        .from('movie_likes')
        .select('count', { count: 'exact' })
        .eq('movie_id', movieId)
        .eq('like_type', 'dislike');
      
      if (!dislikesError && dislikes) {
        setDislikeCount(dislikes.length);
      }
    };

    fetchReactionCounts();
  }, [movieId]);

  return (
    <div className="flex gap-4">
      <LikeButton movieId={movieId} initialLikeCount={likeCount} />
      <DislikeButton movieId={movieId} initialDislikeCount={dislikeCount} />
    </div>
  );
} 