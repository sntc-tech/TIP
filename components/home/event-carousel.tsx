"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/button/button";
import { eventData } from "@/lib/event-data";
import styles from "./event-carousel.module.scss";

const EventCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % eventData.length);
    }, 5000);
    if (index < 0) setIndex((i) => eventData.length + i);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <div className="w-full flex flex-row gap-0 min-h-[500px] relative">
        <div
          className="flex absolute left-0 top-0 h-full px-2 py-12 flex-col justify-center items-center text-zinc-100"
          onClick={() => {
            setIndex((prevIndex) =>
              prevIndex <= 0
                ? eventData.length + (prevIndex - 1)
                : (prevIndex - 1) % eventData.length,
            );
          }}
        >
          <ChevronLeft size={48} />
        </div>
        {eventData
          .concat(eventData.slice(0, 2))
          .slice(index, index + 3)
          .map((data, i) => (
            <div className="hidden md:block w-1/3 bg-zinc-900" key={i}>
              <div
                className={
                  "bg-[url(" +
                  data.imgPath +
                  ")] bg-center bg-cover w-full h-full bg-red-400 p-5 lg:p-12 text-zinc-100" +
                  " flex flex-col justify-end items-start uppercase " +
                  styles.carouselItem
                }
                key={index}
              >
                <div className="w-full text-2xl lg:text-4xl font-semibold tracking-tight md:leading-normal truncate">
                  {data.name}
                </div>
                <Button variant="transparent">details</Button>
              </div>
            </div>
          ))}
        <div
          className={
            "flex md:hidden w-full bg-[url(" +
            eventData[index].imgPath +
            ")] bg-center bg-cover flex-col justify-end items-start uppercase text-zinc-100 p-5 " +
            styles.carouselItem
          }
        >
          <div className="w-full text-4xl font-semibold tracking-tight leading-normal truncate">
            {eventData[index].name}
          </div>
          <Button variant="transparent">details</Button>
        </div>
        <div
          className="flex absolute right-0 top-0 h-full px-2 py-12 flex-col justify-center items-center text-zinc-100"
          onClick={() => {
            setIndex((prevIndex) => (prevIndex + 1) % eventData.length);
          }}
        >
          <ChevronRight size={48} />
        </div>
      </div>
    </>
  );
};

export default EventCarousel;
