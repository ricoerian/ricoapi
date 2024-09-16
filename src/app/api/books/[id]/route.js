//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../../../prisma/client";

export async function GET(request, { params }) {
  //get params id
  const id = parseInt(params.id);

  //get detail post
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
  });

  if (!book) {
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Data Book Not Found!",
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
      message: "Detail Data Book",
      data: book,
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
    const { title, author, description } = await request.json();
  
    //update data
    const book = await prisma.book.update({
      where: {
        id,
      },
      data: {
        title: title,
        author: author,
        description: description,
        updatedAt: new Date(),
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data Book Updated!",
        data: book,
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
    await prisma.book.delete({
      where: {
        id,
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data Book Deleted!",
      },
      {
        status: 200,
      }
    );
  }