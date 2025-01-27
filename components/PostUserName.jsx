
import React from 'react'
import Link from 'next/link';

const PostUserName = ({post}) => {

  return (
    <div className="flex flex-col justify-start text-lg font-semibold text-black ml-2">
      <Link href={`/pages/postsByUserId/${post.user._id}`}>
        <div>
          {post.username}
        </div>
      </Link>
      <span className="w-full flex text-sm font-normal text-gray-500">
        Gepost op: {`${new Date(post.createdAt).toLocaleDateString()}`}
      </span>
    </div>
  );
}

export default PostUserName
