import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You need to import the CSS

 

function Counter({ to = 0, duration = 2000, suffix }) {
  const [value, setValue] = useState(0);
  const elRef = useRef(null);
  const started = useRef(false);

   useEffect(() => {
  AOS.init({
    duration: 1000, // Smooth speed (in ms)
    easing: 'ease-in-out', // Smooth easing function
    offset: 100, // Trigger point before element is in view
    delay: 50, // Small delay for sequencing
    once: true, // Animate only once
    mirror: false, // Don't repeat animation on scroll up
  });
}, []);

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;

            const start = performance.now();
            let rafId = null;

            const step = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.floor(progress * to);
              setValue(current);
              if (progress < 1) rafId = requestAnimationFrame(step);
            };

            rafId = requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  // Format display: support percent, plus, and K (thousands)
  const format = (v) => {
    if (suffix === "%") return `${v}%`;
    if (suffix === "+") return `${v}+`;
    if (to >= 1000) {
      if (v >= 1000) {
        const k = v / 1000;
        // show one decimal for values < 10K, otherwise integer K
        return k >= 10 ? `${Math.round(k)}K` : `${parseFloat(k.toFixed(1))}K`;
      }
      return `${v}`;
    }
    return `${v}`;
  };

  useEffect(() => {
    // When animation finishes, ensure it snaps to exact target (to avoid rounding issues)
    if (value === to) setValue(to);
  }, [value, to]);

  return (
    <h3 ref={elRef} className="text-5xl font-bold">
      {format(value)}
    </h3>
  );
}

function Who() {
  return (
    <section className=" w-[1200px] py-20">
      <div className="w-full flex flex-col  gap-15 items-center">
        {/* Left Side Text */}
        <div>
          <h2 data-aos="fade-up" className="text-2xl md:text-3xl lg:text-4xl paraFont font-bold w-[40%] leading-[50px] text-white">
            We blend art, tech, and storytelling to create powerful digital
            identities that resonate
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex justify-between w-full">
          {/* Image */}
          <div className="flex">
            <img
              src="/images/3.png"
              alt="Creative Portrait"
              className="rounded-xl w-full max-w-sm object-cover"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 divide-x divide-y divide-[#2a2a2a] border border-[#2a2a2a] rounded-xl overflow-hidden text-white paraFont">
            <div className="flex flex-col items-center justify-center py-8 px-25">
              <Counter to={4000} duration={2000} />
              <p className="text-xl text-gray-400 mt-2">Happy customers</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-25">
              <Counter to={95} duration={2000} suffix="%" />
              <p className="text-xl text-gray-400 mt-2">Satisfaction score</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-25">
              <Counter to={15} duration={2000} suffix="+" />
              <p className="text-xl text-gray-400 mt-2">Years of experience</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-25">
              <Counter to={458} duration={2000} />
              <p className="text-xl text-gray-400 mt-2">Complete projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;
