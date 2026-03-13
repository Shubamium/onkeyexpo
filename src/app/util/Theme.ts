"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SwitchThemeCookie(theme: "afterdark" | "onkey") {
  const cookie = await cookies();
  cookie.set("theme", theme);
}

export const GetTheme = async (): Promise<"afterdark" | "onkey"> => {
  const cookie = await cookies();
  return (cookie.get("theme")?.value || "onkey") as "afterdark" | "onkey";
};
