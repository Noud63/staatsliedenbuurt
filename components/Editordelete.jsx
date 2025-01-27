"use client";
import { useState } from "react";
import Image from "next/image";
import edit from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/delete.png";
import { useRouter } from "next/navigation";
import EditPostForm from "./EditPostForm";
import { mutate } from "swr";

const Editordelete = ({ showOptions, setShowOptions, postId, post }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const router = useRouter();

  const showEditPostModal = async () => {
    setShowEditForm(true);
    setShowOptions(false);
  };

  const deletePost = async () => {
    try {
      const res = await fetch(`/api/deletepost/${postId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data.message);
      }
    } catch (error) {
      console.log(data.message);
    }
    setShowOptions(false);
    mutate('/api/posts');
  };


  return (
    <>
      {showEditForm && (
        <EditPostForm setShowEditForm={setShowEditForm} post={post} />
      )}
      {showOptions && (
        <div className="postMenu absolute right-14 top-12 flex h-auto w-[240px] flex-col rounded-lg bg-white p-4 text-lg font-semibold">
          <div
            className="mb-2 flex w-full cursor-pointer flex-row border-b border-gray-400 pb-2"
            onClick={showEditPostModal}
          >
            <Image
              src={edit}
              alt=""
              width={32}
              height={32}
              className="h-[32px] w-[32px] cursor-pointer p-2"
            />
            <span>Bewerk</span>
          </div>
          <div
            className="flex w-full cursor-pointer flex-row"
            onClick={deletePost}
          >
            <Image
              src={deleteIcon}
              alt=""
              width={32}
              height={32}
              className="h-[32px] w-[32px] cursor-pointer p-2"
            />
            <span>Verwijder</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Editordelete;
