import Image from "next/image";

import loginImage from "@/../public/login.png";
import logoImage from "@/../public/logo.svg";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

export default function Login() {
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
        <Button variant={"outline"}>
          <LogInIcon className="mr-2" />
          Fazer login ou criar a conta
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image src={loginImage} alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
}
