import React from "react";
import { Mail, Phone } from "lucide-react";

interface Props {
  name: string;
  mail?: string;
  phone?: number;
}

const ContactCard = ({ name, mail, phone }: Props) => {
  return (
    <div className="font-medium text-center md:text-left">
      <div className="text-xl md:text-2xl mb-2.5">{name}</div>
      {mail && (
        <div className="flex flex-row gap-2.5 items-center justify-center md:justify-start text-zinc-400">
          <Mail size={24} />
          {mail}
        </div>
      )}
      {phone && (
        <div className="flex flex-row gap-2.5 items-center justify-center md:justify-start text-zinc-400">
          <Phone size={24} />
          {phone}
        </div>
      )}
    </div>
  );
};

export default ContactCard;
