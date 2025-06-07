import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { View } from "@react-three/drei";
import ModelView from "./ModelView";
import { Canvas } from "@react-three/fiber";

import { useState } from "react";
import { yellowImg } from "../Utils";
import * as THREE from "three";
import { models, sizes } from "../constants";
import { useEffect } from "react";
import { animateWithGsapTimeline } from "../Utils/animation";

const Model = () => {
  const [size, setSize] = useState("small");

  // Model data
  const [model, setModel] = useState({
    title: "iPhone 15 pro Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera control for model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();
  useEffect(()=>{

    if (size === 'large') {
        animateWithGsapTimeline(tl,small,smallRotation,"#view1","#view2",{
            transform: 'translateX(-100%)',
            duration: 2
        })
    }
    if (size === 'small') {
        animateWithGsapTimeline(tl,large,largeRotation,"#view2","#view1",{
            transform: 'translateX(0)',
            duration: 2
        })
        
    }
  },[size])
  
  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="max-w-screen">
        <h1
          id="heading"
          className="text-[#86868b] lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
        >
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                buttom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full max-w-lg">
            <p className="text-sm font-light text-center mb-8">{model.title}</p>
            {/* Fixed alignment container with proper centering */}
            <div className="flex items-center justify-center gap-6">
              
              <div
              style={{
                padding: "5px 5px",
              }}
              className="flex items-center justify-center rounded-full bg-[#42424578] backdrop-blur">
                <ul
                style={{
                    padding: "0px 5px",
                }}
                className=" flex items-center justify-center gap-3">
                  {models.map((item, i) => (
                    <li
                      key={i}
                      className="w-6 h-6 rounded-full cursor-pointer transition-all hover:scale-110"
                      style={{
                        backgroundColor: item.color[0],
                      }}
                      onClick={() => setModel(item)}
                    />
                  ))}
                </ul>
              </div>
              
              
              <div className="flex items-center justify-center rounded-full bg-[#42424578] backdrop-blur p-1">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="w-12 h-12 text-sm font-medium flex justify-center items-center rounded-full transition-all cursor-pointer hover:scale-105"
                    style={{
                      backgroundColor: size === value ? "#fff" : "transparent",
                      color: size === value ? "#000" : "#fff",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;