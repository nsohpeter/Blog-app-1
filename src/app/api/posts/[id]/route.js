import { NextResponse } from "next/server";
import connect from "@/Utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch {
    return new NextResponse("database error", { status: 200 });
  }
};
