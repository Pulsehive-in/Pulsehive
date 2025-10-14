import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import portfoliodetailsData from "../../data/portfoliodetailsData.js";

export default function PortfolioDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const data = portfoliodetailsData.find((item) => item.id === Number(id));
    setDetails(data);
  }, [id]);

  if (!details) {
    return (
      <p className="text-white text-6xl h-[100vh] flex justify-center items-center">
        Loading...
      </p>
    );
  }

  return (
    <div className="text-white my-40 flex flex-col gap-20 w-full items-center">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="text-6xl font-bold headFont">{details.heading}</h1>
        <h2 className="w-[80%] paraFont">{details.subheading}</h2>
      </div>
      <video
        src={details.videobanner}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        controls={false}
        className="w-[70vw] h-[50vh] object-cover object-center rounded-2xl"
      />
      <div className="w-[90vw] xl:w-[50VW] text-center">
        <h1 className="text-4xl text-gray-400 headFont">{details.head}</h1>
        <p className="paraFont">{details.para}</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[65%] sm:w-[85%] grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {details.works.map((item) => {
            return (
              <div className="relative group">
                {/* Video */}
                {[".mp4", ".mov", ".webm", ".avi"].some((ext) =>
                  item.src.includes(ext)
                ) ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline
                    controls={false}
                    className="h-[500px] w-[470px] object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt=""
                    className="h-[500px] w-[470px] object-cover rounded-lg"
                  />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Text content */}
                <div
                  className="absolute bottom-5 left-10 z-10 text-white opacity-0 translate-y-7
                group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-700 ease-in-out"
                >
                  <h1 className="text-3xl font-bold headFont">{item.name}</h1>
                  <h2 className="text-lg paraFont">{item.info}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
