"use client";

import React, { useEffect, useState } from "react";
import styles from "./testimonials.module.scss";
import { testimonials } from "@/lib/testimonials";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState({
    text: "Initial Test",
    author: "Initial Author",
  });

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTestimonial(testimonials[i]);
      i = i >= 4 ? 0 : (i % 5) + 1;
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-12 p-24 bg-zinc-900 text-zinc-100">
      <div className="text-4xl md:text-6xl font-semibold tracking-tight md:leading-normal max-w-screen-2xl">
        {testimonial.text}
      </div>
      <div className="text-xl md:text-2xl text-zinc-500 font-medium mb-12">
        — {testimonial.author}
      </div>
      <div className="w-full h-0.5 bg-zinc-800">
        <div className={styles.progressBar} key={testimonial.author} />
      </div>
    </div>
  );
};

export default Testimonials;
