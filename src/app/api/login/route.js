//import next request and response
import { NextResponse } from "next/server";

//import bcrypt js
import bcypt from 'bcryptjs';

//import prisma client
import prisma from "../../../../prisma/client";

export async function POST(request) {
    //get all request
    const { username, password } = await request.json();

    const user = await prisma.user.findUnique({
        where: {username}
    });
    if (user && await bcypt.compare(password, user.password)) {
        //return response JSON
    return NextResponse.json(
        {
          success: true,
          message: "Login Successful!",
          fullname: user.fullname,
          role: user.role  
        },
        { status: 201 }
      );
    } else {
        return NextResponse.json(
            {
              success: false,
              message: "Username or Password is wrong!",
            },
            { status: 401 }
          );
    }
  }
