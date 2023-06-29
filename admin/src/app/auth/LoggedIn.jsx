"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Avatar } from "flowbite-react";
export default function LoggedIn({ img, name }) {
  return (
    <button>
      <Avatar img={img} />
    </button>
  );
}
