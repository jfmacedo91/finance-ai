import { NavBar } from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Subscription() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return <NavBar />;
}
