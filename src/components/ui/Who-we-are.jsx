import React from "react";

function Who() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left side */}
          <div className="md:w-1/2">
            <h5 className="text-gray-500 uppercase tracking-wide text-sm mb-4">
              Who we are
            </h5>
            <h1 className="text-5xl font-bold text-white leading-tight">
              A team obsessed with results
            </h1>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 flex items-center">
            <p className="text-gray-500 text-lg leading-relaxed">
              PulseHive is where creativity meets analytics. We're not your
              typical agency—we're growth partners who eat, sleep, and breathe
              performance marketing.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          <div>
            <h2 className="text-4xl font-bold text-white">150+</h2>
            <p className="text-gray-500 mt-2">Projects launched</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">98%</h2>
            <p className="text-gray-500 mt-2">Client retention</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">$50M+</h2>
            <p className="text-gray-500 mt-2">Revenue generated</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">5+</h2>
            <p className="text-gray-500 mt-2">Years running</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;
