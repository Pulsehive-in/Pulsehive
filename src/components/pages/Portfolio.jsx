import React from "react";
import PortfolioCards from "../ui/PortfolioCards";

export default function Portfolio() {
  return (
    <div className="text-white flex flex-col my-40 items-start w-full">
      <h1 className="ml-10 text-gray-300 font-bold">FILTER BY</h1>
      <div className="text-7xl font-bold ml-10 flex flex-col gap-4">
        <h1 className="hover:text-gray-400 transition duration-300 ease-in-out">
          Creative Direction
        </h1>
        <h1 className="hover:text-gray-400 transition duration-300 ease-in-out">
          3D & CGI
        </h1>
        <h1 className="hover:text-gray-400 transition duration-300 ease-in-out">
          Mixed Media
        </h1>
        <h1 className="hover:text-gray-400 transition duration-300 ease-in-out">
          Post Production
        </h1>
      </div>
      <div className="w-full mt-15 mb-5 h-[2px] bg-[repeating-linear-gradient(to_right,gray_0_10px,transparent_10px_24px)]" />
      <div className="flex flex-col items-center w-full">
        <h1 className="ml-10 text-gray-400 font-bold text-2xl">SELECTED PROJECTS</h1>
        <PortfolioCards/>
      </div>
    </div>
  );
}
