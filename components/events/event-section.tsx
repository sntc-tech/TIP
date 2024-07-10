import React, { useContext } from "react";
import Image from "next/image";
import { Calendar, Clock, Mail, Pin } from "lucide-react";
import Button from "@/components/button/button";
import HeaderPic from "@/public/images/header.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { UserContext } from "@/context/user-context";
import toast from "react-hot-toast";

interface Props {
  props: {
    id: number | string;
    name: string;
    img: StaticImport;
    date: string;
    time: string;
    location: string;
    desc: string;
    by: string;
    contact: string;
  };
  regEvents: string[];
  setRegEvents: (event: string[]) => void;
}

const EventSection = ({ props, regEvents, setRegEvents }: Props) => {
  const { currentUserID } = useContext(UserContext);

  const registerUser = () => {
    if (currentUserID) {
      if (!regEvents.includes(props.name)) {
        setRegEvents([...regEvents, props.name]);
        toast.success("Registration successful!");
      } else {
        toast("You've already registered!");
      }
    } else {
      toast.error("You need to log in first!");
    }
  };

  const isUserRegistered = () => {
    return regEvents.includes(props.name);
  };

  return (
    <div
      className="border-t-[200px] mt-[-200px] border-t-transparent bg-clip-padding flex flex-col lg:flex-row lg:py-12 font-medium items-center lg:items-stretch"
      id={`event-${props.id}`}
    >
      <Image
        src={props.img || HeaderPic}
        alt={props.name || "Undefined Event"}
        className="w-full sm:w-[500px] lg:w-[300px] min-h-[300px] object-cover mb-5 lg:mb-0"
      />
      <div className="w-full lg:w-[calc(100vw-600px)] lg:px-5">
        <div className="text-4xl md:text-5xl font-semibold tracking-tight md:leading-normal mb-5">
          {props.name || "Undefined Event"}
        </div>
        <div className="font-normal max-w-screen-lg">
          {props.desc ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae quam nec elit gravida condimentum. Aenean faucibus quam facilisis nibh viverra, eget congue nisl aliquet. Maecenas scelerisque pellentesque facilisis. Ut eu varius tortor, id ultricies nibh. Aliquam sit amet placerat lorem. Quisque nulla enim, euismod eleifend maximus eget, rutrum et arcu. Aliquam euismod porta nulla quis ornare. Sed dictum erat eu sollicitudin consectetur. Aenean vel libero lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae quam nec elit gravida condimentum."}
        </div>
      </div>
      <div className="mt-5 py-5 lg:mt-0 lg:py-0 w-full lg:w-[300px] border-t-2 lg:border-t-0 lg:border-l-2 border-zinc-900/[0.1] lg:px-5 flex flex-col items-start relative">
        <div className="text-base text-zinc-400 mb-5">
          Offered by {props.by || "no one"}
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-row gap-2.5 items-center">
            <Calendar size={24} />
            {props.date || "TBD"}
          </div>
          <div className="flex flex-row gap-2.5 items-center">
            <Clock size={24} />
            {props.time || "TBD"}
          </div>
          <div className="flex flex-row gap-2.5 items-center">
            <Pin size={24} />
            {props.location || "TBD"}
          </div>
          <div className="flex flex-row gap-2.5 mt-2.5 items-center text-zinc-400">
            <Mail size={24} />
            {props.contact || "90909 09090"}
          </div>
        </div>
        <div className="mt-5 lg:mt-0 lg:absolute lg:bottom-0 lg:left-5">
          <Button
            onClick={registerUser}
            variant={isUserRegistered() ? "disabled" : "gradient"}
          >
            {" "}
            {isUserRegistered() ? "Registered" : "Register"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
