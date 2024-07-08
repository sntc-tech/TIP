import React from "react";
import EventsHeader from "@/components/events/events-header";
import JumpBar from "@/components/events/jump-bar";
import EventSection from "@/components/events/event-section";

const EventsPage = () => {
  return (
    <div className="relative">
      <EventsHeader />
      <div className="sticky top-20 z-40">
        <JumpBar />
      </div>
      <div className="flex flex-col gap-5 px-5 py-12 md:px-12">
        <EventSection />
      </div>
    </div>
  );
};

export default EventsPage;
