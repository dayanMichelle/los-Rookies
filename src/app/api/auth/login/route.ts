import signIn from "@/firebase/auth/signin";
import { NextResponse } from "next/server";

export type LoginResponse = {
  data: any;
  error: any;
};

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const { data, error } = await signIn(email, password);

  if (error) {
    return NextResponse.json({
      error: "Invalid credentials",
      data: null,
    });
  }

  return NextResponse.json({ data, error });
}
