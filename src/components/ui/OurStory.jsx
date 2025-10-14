import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

export default function OurStory() {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 mt-12 min-h-[60vh] paraFont px-4 py-12">
      <h1 className="headFont w-full max-w-6xl xl:max-w-[1400px] mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-center xl:text-left">
        Our Story
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-14 xl:gap-20 w-full max-w-6xl xl:max-w-[1400px] items-start md:items-center xl:items-start mx-auto">
        <div className="flex-1 xl:max-w-[720px] md:pr-6 xl:pr-12">
          <TextGenerateEffect words={words} />
        </div>

        <div className="w-full md:w-72 lg:w-96 xl:w-[640px] flex-shrink-0">
          <img
            src="/images/1.png"
            alt="Our story illustration"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
