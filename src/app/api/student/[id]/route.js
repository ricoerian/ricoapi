//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../../../prisma/client";

export async function GET(request, { params }) {
  //get params id
  const id = parseInt(params.id);

  //get detail post
  const student = await prisma.student.findUnique({
    where: {
      id,
    },
  });

  if (!student) {
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Data Student Not Found!",
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
      message: "Detail Data Student",
      data: student,
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
    const { nis, fullname, jk, classroom, address, no_hp } = await request.json();
  
    //update data
    const student = await prisma.student.update({
      where: {
        id,
      },
      data: {
        nis: nis,
        fullname: fullname,
        jk: jk,
        classroom: classroom,
        address: address,
        no_hp: no_hp,
        updatedAt: new Date(),
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data Student Updated!",
        data: student,
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
    await prisma.student.delete({
      where: {
        id,
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data Student Deleted!",
      },
      {
        status: 200,
      }
    );
  }