import React from "react";
import EventsHeader from "@/components/events/events-header";
import JumpBar from "@/components/events/jump-bar";

const EventsPage = () => {
  return (
    <div className="relative">
      <EventsHeader />
      <div className="sticky top-20">
        <JumpBar />
      </div>
    </div>
  );
};

export default EventsPage;
