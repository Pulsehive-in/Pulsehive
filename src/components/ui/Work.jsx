import React, { useState } from 'react'
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
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
    <div className="w-full h-[90vh]">
      <div className="relative h-full  mx-auto text-center mt-20">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Made by dreamers, <br/> for brands
            </p>
          </div>
        </BackgroundGradientAnimation>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
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