import React, { useState } from 'react'
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
   const [images, SetImages] = useState([
        { url: "./public/images/1.png", top: "50%", left:"50%", isActive: false },
        { url: "./public/images/2.png", top: "57%", left:"43%", isActive: false },
        { url: "./public/images/3.png", top: "46%", left:"56%", isActive: false },
        { url: "./public/images/4.png", top: "54%", left:"49%", isActive: false },
        { url: "./public/images/5.png", top: "55%", left:"57%", isActive: false },
        { url: "./public/images/6.png", top: "59%", left:"53%", isActive: false },
    ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesshow(arr){
        SetImages(prev => (
            prev.map((item, index) => (
                 arr.includes(index) ? { ...item, isActive: true } : { ...item, isActive: false }
            ))
        ))
    }

    switch (Math.floor(data * 100)) {
        case 0:
            imagesshow([]);
            break;
        case 1:
            imagesshow([0]);
            break;
        case 2:
            imagesshow([0, 1]);
            break;
        case 3:
           imagesshow([0, 1, 2]);
            break;
        case 4:
            imagesshow([0, 1, 2, 3]);
            break;
        case 6:
            imagesshow([0, 1, 2, 3, 4]);
            break;
        case 8:
            imagesshow([0, 1, 2, 3, 4, 5]); // Fixed: Wrapped in array
            break;
    }
  });

  return (
    <div className="w-full h-full">
      <div className="relative mx-auto text-center">
        <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight headFont">
        Made by Dreamers{" "}
        <div className="relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] headFont">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">for Brands</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">for Brands</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%] z-50"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
         
      </div>
    </div>
  );
}

export default Work