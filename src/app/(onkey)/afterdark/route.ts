import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookie = await cookies();
  cookie.set("theme", "afterdark");
  return NextResponse.redirect(new URL("/", request.url));
}
