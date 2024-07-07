"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const JumpBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="w-full bg-zinc-100 px-5 md:px-12 py-5 border-b-2 border-zinc-900/[0.1] flex justify-between cursor-pointer"
      onClick={() => setToggle(!toggle)}
    >
      <div className="text-2xl font-medium">Jump to</div>
      {toggle ? <Minus size={32} /> : <Plus size={32} />}
    </div>
  );
};

export default JumpBar;
