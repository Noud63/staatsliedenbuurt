import connectDB from "@/connectDB/database";
import Comment from "@/models/comment";
import { getSessionUser } from "@/utils/getSessionUser";

export const POST = async (request) => {
  try {
    await connectDB();

    const { userId, postId, comment, username } = await request.json();

    const sessionUser = await getSessionUser();
    
    const user = sessionUser?.user

    if (!sessionUser || !user) {
      
      return new Response(
        JSON.stringify({
          message: "You must be logged in to post a comment!",
        }),
        { status: 401 }
      );
    }

    const newPost = new Comment({
      postId,
      userId,
      comment,
      username,

    });

    const post = await newPost.save()

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
      console.log(error)
    return new Response(
        JSON.stringify({
          message: "Something went wrong!",
        }),
        { status:500 }
      );
    }
};


