import connect from "@/Utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();

  try {
    const hashPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();
    return new NextResponse("user created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
