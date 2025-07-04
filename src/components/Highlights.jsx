import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../Utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.to('#watch',{
        opacity:1,
        y:0,
        duration: 1,
        stagger: 0.25,
    })
  }, []);
  return (
    <section
      id="highlights"
      className="w-full min-h-screen overflow-hidden sm:py-32 py-20 sm:px-10 px-5 bg-zinc-900"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1
            id="title"
            className="text-[#86868d] lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p id="watch"
              className="text-primary hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20
"
            >
              Watch the Flim
            </p>
            <img src={watchImg} alt="Watch" className="ml-2" />
            <p id="watch"
              className="text-primary hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20
"
            >
              Watch the Event
            </p>
            <img src={rightImg} alt="right" className="ml-2" />
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
