"use client";

import React, { useContext, useEffect, useState } from "react";
import EventsHeader from "@/components/events/events-header";
import JumpBar from "@/components/events/jump-bar";
import Alert from "@/components/alert/alert";
import { UserContext } from "@/context/user-context";
import { getUserDoc } from "@/lib/actions";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { eventData } from "@/lib/event-data";
import EventSection from "@/components/events/event-section";

const EventsPage = () => {
  const [regEvents, setRegEvents] = useState<string[]>();
  const { currentUserID } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      if (currentUserID) {
        const { registeredEvents } = await getUserDoc(currentUserID);
        setRegEvents(registeredEvents);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (currentUserID) {
        const userDoc = doc(db, "users", currentUserID);
        if (regEvents) {
          await updateDoc(userDoc, {
            registeredEvents: regEvents,
          });
        }
      }
    })();
  }, [regEvents]);

  return (
    <div className="relative">
      <EventsHeader />
      <div className="sticky top-16 sm:top-20 z-40">
        <JumpBar />
      </div>
      <div></div>
      <div className="flex flex-col items-center gap-5 px-5 py-12 md:px-12">
        <Alert variant="warning">
          Since the venue can only accommodate a maximum of 350 students, only
          the first 350 students to register will be considered.
        </Alert>
        {eventData.map((event) => (
          <EventSection
            props={event}
            key={event.id}
            regEvents={regEvents}
            setRegEvents={setRegEvents}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
