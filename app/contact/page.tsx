import React from "react";
import ContactHeader from "@/components/contact/contact-header";
import Alert from "@/components/alert/alert";
import ContactCard from "@/components/contact/contact-card";

const ContactPage = () => {
  return (
    <div>
      <ContactHeader />
      <div className="flex flex-col items-center px-5 py-12 pb-24 md:px-12">
        <Alert
          text={
            "You are advised to text/email the contacts, not call them, so that they reply at their own convenience."
          }
          variant="warning"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-12 pb-24">
        <div className="sm:col-span-2 text-4xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
          Section Title
        </div>
        <ContactCard />
        <ContactCard />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-12 pb-24">
        <div className="sm:col-span-2 text-4xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
          Section Title
        </div>
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactPage;
