import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(request) {
  const data = await request.json();
  if (data) {
    if (data.email == "abc@gmail.com") {
      cookies().set("accessToken", "mytoken");
      return await NextResponse.json({ success: "Login success" });
    }
  }
  return await NextResponse.json(
    { error: "User & password not match" },
    { status: 400 }
  );
}
