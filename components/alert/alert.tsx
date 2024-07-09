"use client";

import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

interface Props {
  text: string;
  variant?: "warning" | "error" | "success";
}

const alert = cva(
  [
    "p-5",
    "flex",
    "flex-row",
    "justify-between",
    "text-zinc-900",
    "rounded-md",
    "min-w-[800px]",
    "max-w-[1000px]",
  ],
  {
    variants: {
      variant: {
        warning: ["bg-amber-300/[0.3] "],
        error: ["bg-red-300/[0.3] "],
        success: ["bg-green-300/[0.3] "],
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

const Alert = (props: Props) => {
  const [display, setDisplay] = useState(true);

  return (
    <div className={display ? alert({ variant: props.variant }) : "hidden"}>
      <div className="flex flex-col">
        <div className="font-semibold text-lg">
          {props.variant === "warning"
            ? "Heads up!"
            : props.variant === "error"
              ? "We messed up!"
              : "Yay!"}
        </div>
        <div className="font-medium">{props.text}</div>
      </div>
      <X
        className={
          (props.variant === "warning"
            ? "text-amber-600"
            : props.variant === "error"
              ? "text-red-700"
              : "text-green-700") + " cursor-pointer"
        }
        onClick={() => setDisplay(false)}
        size={24}
      />
    </div>
  );
};

export default Alert;
