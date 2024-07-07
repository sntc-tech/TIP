import React from "react";
import sntcLogo from "@/public/sntc.png";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full flex gap-0 bg-zinc-900">
      <div className="bg-zinc-900 md:bg-zinc-100 w-full md:w-1/3 p-12 flex flex-col items-center md:items-start">
        <Image src={sntcLogo} alt="sntc logo" width={200} />
        <div className="text-xl md:text-2xl text-zinc-100 md:text-zinc-900 font-medium">
          Presented by SnTC, IIT Mandi
        </div>
        <div className="text-zinc-500 text-center md:text-left">
          Lorem ipsum. This is a short description of the club and what it does.
        </div>
        <div className="mt-12 text-zinc-500 text-sm block md:hidden">
          Copyright © 2024, SnTC, IIT Mandi.
        </div>
      </div>
      <div className=" m-12 text-zinc-100 w-2/3 relative hidden md:block">
        <div className="text-xl md:text-2xl text-zinc-100 font-medium">
          About TIP
        </div>
        <div className="text-zinc-500 max-w-screen-lg mb-12">
          TIP is a program in IIT Mandi that honestly I have no idea what it
          does lol this is just filler text to emphasise on the design more than
          anything else so feel free to ignore this long text and thank you for
          your patience
        </div>
        <div className="flex gap-2.5">
          <Mail />
          <Phone />
          <Linkedin />
        </div>
        <div className="absolute bottom-0 left-0 text-sm text-zinc-500">
          Copyright © 2024, SnTC, IIT Mandi.
        </div>
      </div>
    </div>
  );
};

export default Footer;
