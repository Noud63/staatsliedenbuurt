// "use client";
// import React, { useState } from "react";
// import { FaThumbsUp } from "react-icons/fa";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { mutate } from "swr";

// const LikeButton = ({ postId, post }) => {
//   const { data: session } = useSession();

// const toggleLike = async() => {
//   // Optimistically update the UI
//   mutate(
//     `/api/posts`,
//     async (currentData) => {
//       // Find the post that contains the comment
//       const updatedPosts = currentData.map((post) => {
//         if (post._id === postId) {
//         return {
//           ...post,
//           likesCount: {
//                 ...post,
//                 likesCount: post.likesCount + (post.likedByUser ? -1 : 1), // if likedbyuser is true -> comment.likesCount - 1 else comment.likesCount + 1
//                 likedByUser: !post.likedByUser, // Toggle like state true/false
//               }
//             }
//          };
//       });

//        try {
//          const res = await fetch(`/api/posts/${postId}/like`, {
//            method: "POST",
//            headers: {
//              "Content-Type": "application/json",
//            },
//            body: JSON.stringify({ postId }),
//          });

//          const data = await res.json();
//        } catch (error) {
//          console.error("Error toggling like:", error);
//          return post
//        }

//       return updatedPosts; // Return updated UI state
//     },
//     false,
//   ); // `false` means it won't revalidate immediately
// };


//   return (
//     <div className="flex items-center justify-center">
//       <button type="button" disabled={!session}>
//         <FaThumbsUp
//           color="gray"
//           size={20}
//           disabled={!session?.user ? true : false}
//           className="mr-2 cursor-pointer"
//           onClick={toggleLike}
//         />
//       </button>
//       <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
//         {post.likesCount}
//       </div>
//     </div>
//   );
// };

// export default LikeButton;
