import React from "react";
import Work from "../ui/Work";
import Stripes from "../ui/Stripes";
import Products from "../ui/Products";
import Marquees from "../ui/Marquees";

export default function About() {
  return (
    <div className='bg-black w-full font-["SF_PRO"] text-white'>
      <Work />
      <Stripes />
      <Products />
      <Marquees />
    </div>
  );
}
