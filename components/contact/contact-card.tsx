import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="font-medium text-center md:text-left">
      <div className="text-xl md:text-2xl mb-2.5">Contact Name</div>
      <div className="flex flex-row gap-2.5 items-center justify-center md:justify-start text-zinc-400">
        <Mail size={24} />
        {"90909 09090"}
      </div>
      <div className="flex flex-row gap-2.5 items-center justify-center md:justify-start text-zinc-400">
        <Phone size={24} />
        {"90909 09090"}
      </div>
    </div>
  );
};

export default ContactCard;
