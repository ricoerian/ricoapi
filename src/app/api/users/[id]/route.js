//import next request and response
import { NextResponse } from "next/server";

//import bcrypt js
import bcypt from 'bcryptjs';

//import prisma client
import prisma from "../../../../../prisma/client";

export async function GET(request, { params }) {
  //get params id
  const id = parseInt(params.id);

  //get detail post
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Data User Not Found!",
        data: null,
      },
      {
        status: 404,
      }
    );
  }

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "Detail Data User",
      data: user,
    },
    {
      status: 200,
    }
  );
}

export async function PATCH(request, { params }) {
    //get params id
    const id = parseInt(params.id);
  
    //get request data
    const { fullname, username, email, password, role } = await request.json();

    //hashing password
    const hashedPassword = await bcypt.hash(password, 10)
  
    //update data
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        fullname: fullname,
        username: username,
        email: email,
        password: hashedPassword,
        role: role,
        updatedAt: new Date(),
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data User Updated!",
        data: user,
      },
      {
        status: 200,
      }
    );
  }

  export async function DELETE(request, { params }) {
    //get params id
    const id = parseInt(params.id);
  
    //delete data
    await prisma.user.delete({
      where: {
        id,
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data User Deleted!",
      },
      {
        status: 200,
      }
    );
  }