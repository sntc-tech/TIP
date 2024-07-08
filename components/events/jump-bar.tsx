"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { eventCardData } from "@/lib/event-card-data";

const JumpBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={
          "w-full bg-zinc-100 px-5 md:px-12 py-5 flex justify-between cursor-pointer" +
          (!toggle && " border-b-2 border-zinc-900/[0.1]")
        }
        onClick={() => setToggle(!toggle)}
      >
        <div className="text-2xl font-medium">Jump to</div>
        {toggle ? <Minus size={32} /> : <Plus size={32} />}
      </div>
      {toggle && (
        <div className="w-screen bg-zinc-100 border-b-2 border-zinc-900/[0.1] px-5 md:px-12 pb-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xl">
          {eventCardData.map((e, i) => (
            <div key={i}>{e.name}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default JumpBar;
