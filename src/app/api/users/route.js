//import next request and response
import { NextResponse } from "next/server";

//import bcrypt js
import bcypt from 'bcryptjs';

//import prisma client
import prisma from "../../../../prisma/client";

export async function GET() {
  //get all posts
  const users = await prisma.user.findMany();

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Users",
      data: users,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
    //get all request
    const { fullname, username, email, password, role } = await request.json();

    //hashing password
    const hashedPassword = await bcypt.hash(password, 10)
  
    //create data post
    const user = await prisma.user.create({
      data: {
        fullname: fullname,
        username: username,
        email: email,
        role: role,
        password: hashedPassword,
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        success: true,
        message: "User Created Successfully!",
        data: user,
      },
      { status: 201 }
    );
  }