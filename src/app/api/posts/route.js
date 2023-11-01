import { NextResponse } from "next/server";
import connect from "@/Utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  // console.log(request);
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch {
    return new NextResponse("database error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  //console.log(body);
  try {
    await connect();

    const newPost = new Post({
      title: body.title,
      desc: body.desc,
      image: body.media, // Map media to image
      username: body.username,
      content: body.content,
    });
    await newPost.save();

    return new NextResponse("newPost created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("database error", { status: 500 });
  }
};
