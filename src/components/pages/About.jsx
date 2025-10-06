import React from "react";
import Work from "../ui/Work";
import Stripes from "../ui/Stripes";
import Products from "../ui/Products";
import Marquees from "../ui/Marquees";
import OurStory from "../ui/OurStory";
import OurValues from "../ui/OurValues";

export default function About() {
  return (
    <div className='bg-black w-full font-["SF_PRO"] text-white'>
      <Work />
      <Stripes />
      <OurStory />
      <OurValues />
      <Products />
      <Marquees />
    </div>
  );
}
