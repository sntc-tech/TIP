import React from "react";

const EventsHeader = () => {
  return (
    <div className="w-screen h-[60vh] bg-[url(/images/events.png)] bg-center bg-cover flex flex-col px-12 py-12 justify-end items-center md:items-start text-zinc-100">
      <div className="text-4xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
        View Events
      </div>
      <div className="text-xl md:text-2xl mb-5">See what's in it for you</div>
    </div>
  );
};

export default EventsHeader;
