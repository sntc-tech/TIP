import React from "react";
import Button from "@/components/button/button";

const HomeHeader = () => {
  return (
    <div className="w-screen h-[70vh] bg-[url(/images/header.png)] bg-center bg-cover flex flex-col px-12 py-12 justify-center items-center md:items-start text-zinc-100">
      <div className="text-4xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
        Technical Induction Program &apos;24
      </div>
      <div className="text-xl md:text-2xl font-medium mb-5">
        SnTC, IIT Mandi
      </div>
      <Button variant="transparent">Browse events</Button>
    </div>
  );
};

export default HomeHeader;
