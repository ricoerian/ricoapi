
//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../../prisma/client";

export async function GET() {
  //get all posts
  const students = await prisma.student.findMany();

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Students",
      data: students,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
    //get all request
    const { nis, fullname, jk, classroom, address, no_hp } = await request.json();
  
    //create data post
    const student = await prisma.student.create({
      data: {
        nis: nis,
        fullname: fullname,
        jk: jk,
        classroom: classroom,
        address: address,
        no_hp: no_hp
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        success: true,
        message: "Student Created Successfully!",
        data: student,
      },
      { status: 201 }
    );
  }