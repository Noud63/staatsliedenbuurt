"use client";
import Image from "next/image";
import PostCommentForm from "./PostCommentForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Comment from "./Comment";

const PostComment = ({ post, comments }) => {

   const sortedComments = comments.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  const { data: session } = useSession();
  const profilePic = session?.user?.avatar;

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="flex w-full flex-col">
        <div className="mb-2 pb-4 pl-4 text-lg font-semibold text-gray-600">
          Reacties:
        </div>
        {sortedComments.map((com, index) => (
          <Comment key={index} com={com} />
        ))}
      </div>

      <div className="flex h-auto w-full gap-2 px-4 pb-4 max-xxsm:px-2">
        <div className="h-[45px] w-[45px] overflow-hidden rounded-full bg-gray-200 max-xxsm:h-[40px] max-xxsm:w-[40px]">
          <Image
            src={profilePic ? profilePic : "/images/defaultAvatar2.png"}
            alt="avatar"
            width={45}
            height={45}
            className="h-full w-full object-cover"
          />
        </div>
        <PostCommentForm post={post} />
      </div>
    </div>
  );
};

export default PostComment;
