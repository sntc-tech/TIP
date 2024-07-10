"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import sntcLogo from "@/public/sntc.png";
import Button from "@/components/button/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserDoc, signInWithGooglePopup } from "@/firebase/firebase";
import { UserContext } from "@/context/user-context";

const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    setCurrentUser(user);
    const userRef = await createUserDoc(user);
    router.push("/profile", {});
  };

  return (
    <>
      <div className="w-full bg-zinc-100 h-full px-5 sm:px-12 py-2.5 flex flex-row justify-between items-center border-b-2">
        <Image src={sntcLogo} alt="SnTC logo" width={60} height={60} />
        <div className="hidden sm:flex gap-5 items-center text-base leading-normal font-medium uppercase">
          <Link href={"/"}>Home</Link>
          <Link href={"/events"}>Events</Link>
          <Link href={"/contact"}>contact</Link>
          {currentUser ? (
            <Link href={"/profile"}>
              <Button>Profile</Button>
            </Link>
          ) : (
            <Button onClick={loginUser}>Login</Button>
          )}
        </div>
        <div
          className="inline sm:hidden pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <X size={36} /> : <Menu size={36} />}
        </div>
      </div>
      <div
        className={`${toggle ? "flex" : "hidden"} bg-zinc-100 w-full p-5 sm:hidden flex-col gap-5 text-base leading-normal font-medium uppercase`}
      >
        <Link href={"/"} onClick={() => setToggle(false)}>
          Home
        </Link>
        <Link href={"/events"} onClick={() => setToggle(false)}>
          Events
        </Link>
        <Link href={"/contact"} onClick={() => setToggle(false)}>
          contact
        </Link>
        <Link href={"/profile"} onClick={() => setToggle(false)}>
          login
        </Link>
      </div>
    </>
  );
};

export default Navbar;
