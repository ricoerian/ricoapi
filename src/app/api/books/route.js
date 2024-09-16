//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../../prisma/client";

export async function GET() {
  //get all posts
  const books = await prisma.book.findMany();

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Books",
      data: books,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
    //get all request
    const { title, author, description } = await request.json();
  
    //create data post
    const book = await prisma.book.create({
      data: {
        title: title,
        author: author,
        description: description,
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        success: true,
        message: "Book Created Successfully!",
        data: book,
      },
      { status: 201 }
    );
  }