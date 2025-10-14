import React from "react";
import { NavLink } from "react-router-dom";

const projectCategories = [
  {
    video: "/images/portfolio-cat.mp4",
    heading: "Branding & Identity",
    subheading: "Where your story takes visual shape",
  },
  {
    video: "/images/portfolio-cat.mp4",
    heading: "Website Design & Development",
    subheading: "Design that engages. Experience that converts",
  },
  {
    video: "/images/portfolio-cat.mp4",
    heading: "Digital Marketing & Strategy",
    subheading: "Visibility that drives results",
  },
  {
    video: "/images/portfolio-cat.mp4",
    heading: "Creative Production",
    subheading: "Turning idieas into cinematic visuals",
  },
  {
    video: "/images/portfolio-cat.mp4",
    heading: "Social Media & Content Creation",
    subheading: "Content that connects and converts",
  },
  {
    video: "/images/portfolio-cat.mp4",
    heading: "Advertising & Campaigns",
    subheading: "Make your message impossible to ignore",
  },
];

export default function PortfolioCards() {
  return (
    <div className="grid sm:grid-cols-2 mt-10 w-[85%] gap-10 xl:gap-y-20">
      {projectCategories.map((category, index) => (
        <NavLink to={`/portfolio/${index}`} key={index}>
          <div className="relative group">
            {/* Video */}
            <video
              src={category.video}
              autoPlay
              loop
              muted
              playsInline
              playsinline
              className="rounded-4xl transition-transform duration-500 group-hover:scale-90 group-hover:rounded-none"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Text content */}
            <div className="absolute bottom-8 left-10 z-10 text-white">
              <h1 className="text-3xl font-bold headFont">
                {category.heading}
              </h1>
              <h2 className="text-lg paraFont">{category.subheading}</h2>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
