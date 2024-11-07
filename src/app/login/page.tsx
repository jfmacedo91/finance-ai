import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import loginImage from "@/../public/login.png";
import logoImage from "@/../public/logo.svg";

export default async function Login() {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="mx-auto flex h-full max-w-[512px] flex-col justify-center p-8">
        <Image
          src={logoImage}
          alt="Finance AI"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant={"outline"}>
            <LogInIcon className="mr-2" />
            Fazer login ou criar a conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image src={loginImage} alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
}
