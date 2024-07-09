import React from "react";
import EventsHeader from "@/components/events/events-header";
import JumpBar from "@/components/events/jump-bar";
import EventSection from "@/components/events/event-section";
import { eventData } from "@/lib/event-data";
import Alert from "@/components/alert/alert";

const EventsPage = () => {
  return (
    <div className="relative">
      <EventsHeader />
      <div className="sticky top-20 z-40">
        <JumpBar />
      </div>
      <div className="flex flex-col items-center gap-5 px-5 py-12 md:px-12">
        <Alert
          text={
            "Since the venue can only accommodate a maximum of 300 students, only the first 300 students to register will be considered."
          }
          variant="warning"
        />
        {eventData.map((event) => (
          <EventSection props={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
