"use client";
import React, {useState} from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
 import { mutate } from "swr";

const LikeButton = ({ postId , post }) => {

  const { data: session} = useSession()

  const [likesCount, setLikesCount] = useState(post.likesCount);

  const router = useRouter()

  const toggleLike = async () => {
    try {

      const res = await fetch(`/api/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({postId})
      });

      const data = await res.json()

      if (data.message === "inc") {
        setLikesCount((prevCount) => prevCount + 1);
      } else {
        setLikesCount((prevCount) => prevCount - 1);
      }

    } catch (error) {
      console.error('Error toggling like:', error);
    }
  mutate(`/api/posts`);
  };

return (
  <div className="flex">
    <button type="button" disabled={!session}>
      <FaThumbsUp
        color="gray"
        size={20}
        disabled={!session?.user ? true : false}
        className="mr-2 cursor-pointer"
        onClick={toggleLike}
      />
    </button>
    <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-red-800 text-sm font-semibold text-white">
      {likesCount}
    </div>
  </div>
);
};

export default LikeButton;
