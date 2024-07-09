import React from "react";
import Image from "next/image";
import HeaderPic from "@/public/images/header.png";
import Link from "next/link";
import { eventData } from "@/lib/event-data";

const ProfileCard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="p-12 col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 border-2 border-zinc-200 bg-zinc-200/[0.2] rounded-md mt-12">
        <div className="flex flex-col sm:flex-row items-center gap-5 pb-12">
          <Image
            src={HeaderPic}
            width={200}
            height={200}
            className="w-40 h-40 shadow-xl shadow-zinc-900/[0.3] rounded-full"
            alt="Profile"
          />
          <div>
            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
              Username
            </div>
            <div className="text-lg font-medium text-sky-500 underline">
              Sign out
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2.5 items-center mb-12">
          <div className="text-xl font-medium">Email</div>
          <Link href="">
            <div className="text-xl text-sky-500 underline">
              testmail@gmail.com
            </div>
          </Link>
        </div>
        <div className="text-xl md:text-2xl font-medium mb-2.5">
          Registered events
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {eventData.map((event) => (
            <div className="text-lg" key={event.id}>
              {event.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
