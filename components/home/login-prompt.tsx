import React from "react";
import Button from "@/components/button/button";
import GoogleLogo from "@/public/google.png";
import Image from "next/image";

const LoginPrompt = () => {
  return (
    <div className="px-12 py-24 flex flex-col md:items-start items-center">
      <div className="text-center md:text-left text-4xl md:text-6xl font-semibold tracking-tight md:leading-normal bg-gradient-to-br from-pink-500 to-amber-500 inline-block text-transparent bg-clip-text">
        Login to register for events
      </div>
      <div className="text-center md:text-left text-xl md:text-2xl text-zinc-500 font-medium mb-12 max-w-screen-sm">
        Registering on the website is mandatory to attend any event under the
        Technical Induction Program.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <Button variant="black">
          <Image src={GoogleLogo} alt={"Google logo"} width={24} />
          login with google
        </Button>
        <Button variant="outline">browse projects</Button>
      </div>
    </div>
  );
};

export default LoginPrompt;
