"use client";
import { signIn, signOut } from "next-auth/react";
import { Button } from "flowbite-react";

export default function Login() {
  return (
    <Button
      onClick={() => signIn()}
      className=""
    >Login
    </Button>
  );
}
