"use client";
import SinglePost from "./SinglePost";
import Spinner from "./Spinner";
import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const GetAllPosts = () => {

  const { data, error, isLoading } = useSWR("/api/posts", fetcher);
  

  if (error) return (
    <div className="mx-auto mt-8 flex min-h-[200px] w-full max-w-[620px] flex-col items-center justify-center rounded-lg text-2xl text-white">
      <Image
        src="/images/halloween.png"
        alt="error"
        width={145}
        height={145}
        sizes="100vw"
        className="h-[145px] w-[145px]"
      />
      <span>failed to load data!</span>
      <span>Refresh page!</span>
    </div>
  );
  if (isLoading) return (
    <div>
      <Spinner loading={isLoading} />
    </div>
  );

  return (
    <div className="mx-auto flex w-full max-w-[670px] flex-grow flex-col rounded-lg py-4">
      {data &&
        data.map((post) => (
          <SinglePost post={post} key={post._id} comments={post.comments} />
        ))}
    </div>
  );
};

export default GetAllPosts;
