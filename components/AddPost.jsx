"use client";
import React, { useState } from "react";
import AddPostModal from "./AddPostModal";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AddPost = () => {
  
  const [inView, setInView] = useState(false);

  const { data: session, status } = useSession();
  const profilePic = session?.user?.avatar

  const name = session?.user?.username;

  const router = useRouter()

  const showAddPostModal = () => {
    if (session?.user) {
      setInView(!inView);
    }
    if(!session?.user){
      router.push("/pages/login")
    }
  };

return (
  <div className="mx-6 mt-4 max-sm:mx-4 max-xsm:mx-2">
    <section className="singlepost mx-auto flex w-full max-w-[620px] justify-between rounded-lg bg-white px-4 py-4 max-xsm:py-3">
      <div className="flex w-full flex-row items-center gap-4">
        <Image
          src={profilePic ? profilePic : "/images/defaultAvatar2.png"}
          alt="icon"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[45px] w-[45px] rounded-full"
        />
        <button
          className="flex flex-1 h-[40px] cursor-pointer items-center rounded-full 
          bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-800 pl-4 text-white outline-none 
          max-xsm:from-red-950 max-xsm:via-yellow-700 max-xsm:to-red-950"
          onClick={showAddPostModal}
        >
          {session?.user
            ? `Schrijf hier iets, ${name}!`
            : "wat wil je met ons delen?"}
        </button>
      </div>
    </section>
    <AddPostModal inView={inView} setInView={setInView} />
  </div>
);
};

export default AddPost;
