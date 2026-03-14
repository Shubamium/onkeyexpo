import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookie = await cookies();
  cookie.set("theme", "onkey");

  return NextResponse.redirect(new URL("/", request.url));
}
