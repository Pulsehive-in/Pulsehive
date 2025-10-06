import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export default function OurStory() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-10 mt-30 h-[90vh] paraFont">
      <h1 className="headFont w-[1400px] text-6xl font-bold">Our Story</h1>
      <div className="flex gap-20 w-[1400px]">
        <TextGenerateEffect words={words} />
        <img src="/images/1.png" alt="" />
      </div>
    </div>
  );
}
