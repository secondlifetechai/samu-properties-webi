import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();
  const { name, email, phone, title, enquiry, budget } = await reqBody;
  try {
    await client.create({
      _type: "contact",
      name,
      email,
      phone,
      title,
      enquiry,
      budget
    });
  } catch (error) {
    console.error("Contact submit Error:", error);
    return NextResponse.json({
      success: false,
      message: "Contact submitting error",
    });
  }
  return NextResponse.json({
    success: true,
    message: "Contact submitted successfully!",
  });
};
