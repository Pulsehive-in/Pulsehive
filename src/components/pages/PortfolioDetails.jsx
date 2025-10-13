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
    <div className="text-white my-40 flex flex-col gap-10">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="text-6xl font-bold headFont">{details.heading}</h1>
        <h2 className="w-[80%] paraFont">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni
          id voluptatum doloribus nobis. Similique quisquam quidem neque
          veritatis totam.
        </h2>
      </div>
      <video
        src="/images/portfolio-cat.mp4"
        autoPlay
        loop
        muted
        className="w-[70vw] h-[50vh] object-cover object-center rounded-2xl"
      />
      <div className="w-[50VW]">
        <h1 className="text-4xl text-gray-400 headFont">lorem</h1>
        <p className="paraFont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          neque voluptates repellat veritatis reiciendis magnam, quisquam fuga
          architecto! Culpa quisquam quo nesciunt at enim. Expedita est corrupti
          placeat consectetur, exercitationem aliquid et. Expedita nihil
          doloribus ipsa temporibus, enim ea, ut magni accusantium, voluptates
          iusto nulla odio incidunt illo nam labore.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-20">
        <div className="size-[600px] bg-gray-500"></div>
        <div className="size-[600px] bg-gray-500"></div>
        <div className="size-[600px] bg-gray-500"></div>
        <div className="size-[600px] bg-gray-500"></div>
      </div>
    </div>
  );
}
