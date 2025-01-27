import React from "react";
import AddPost from "@/components/AddPost";
import GetAllPosts from "@/components/GetAllPosts";
import LeesDit from "@/components/LeesDit";

export default function Home() {
  return (
    <>
      <LeesDit />
      <AddPost />
      <GetAllPosts />
    </>
  );
}
