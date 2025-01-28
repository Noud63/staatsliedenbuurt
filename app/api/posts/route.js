import connectDB from "@/connectDB/database";
import cloudinary from "@/config/cloudinary";
import Post from "@/models/post"
import Comment from "@/models/comment";
import { getSessionUser } from "@/utils/getSessionUser";

export const POST = async (request) => {

  try {
    await connectDB();

    const formData = await request.formData();
    
    const sessionUser = await getSessionUser();

if (!sessionUser || !sessionUser.user.id) {
  return new Response("User ID is required", { status: 401 });
}

   const {
     user: { name, email, image, id, username, avatar },
     userId,
   } = sessionUser;
// console.log("User:", sessionUser)

     const content = formData.get("postContent")
    const images = formData.getAll("images").filter((image) => image.name !== ""); //prevent error cloudinary 


    const postData = {
      postContent: content,
      user: userId,
      username: username,
      name: name,
      images
    }

    const imageUploadPromises = [];

    for (const image of images) {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      //Convert the image data to base64
      const imageBase64 = imageData.toString("base64");

      //Make request to upload to cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        { folder: "nextjs_blog" }
      );

      imageUploadPromises.push(result.secure_url);

      //Wait for all images to upload
      const uploadedImages = await Promise.all(imageUploadPromises);

      //Add uploaded images to the post 
      postData.images = uploadedImages;
    }

    // console.log("Post:", postData);

      const newPost = new Post(postData);
      await newPost.save();

      console.log(newPost)

    return new Response(JSON.stringify(newPost, {status:200}));

  } catch (error) {
    console.log(error)
    return new Response("Failed to add post", { status: 500 });
  }
};


export const GET = async (request) => {

  try {
    await connectDB();

    // const posts = await Post.aggregate([
    //   {
    //     $lookup: {
    //       from: "comments", // The collection to join
    //       localField: "_id", // Field from the posts collection
    //       foreignField: "postId", // Field from the comments collection
    //       as: "comments", // Output array field
    //     },
    //   },
    //   {
    //     $lookup: {
    //       from: "likes", // Collection name for likes
    //       localField: "_id", // Field in posts collection
    //       foreignField: "postId", // Field in likes collection
    //       as: "likes", // Output field for likes
    //     },
    //   },
    //   {
    //     $sort: { createdAt: -1 }, // Optional: Sort posts by creation date
    //   },
    // ]);

    // Fetch posts and populate user info for each post (user's profile picture and username)
    const posts = await Post.find({})
      .populate("user", "avatar") // Populate user data (username, profilePicture)
      .sort({ createdAt: -1 })
      .lean();

      

    // Fetch comments and populate user info for each comment
    for (const post of posts) {
      const pc = post.comments = await Comment.find({ postId: post._id })
        .populate("userId", "avatar") // Populate user data in comments
        .lean();
        // console.log("Posts:", posts);
    }

     return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error)
  }
}
    
