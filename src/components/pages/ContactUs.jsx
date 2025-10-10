import React from "react";

export default function ContactUs() {
  return (
    <div className="h-[100vh] mb-40 w-full grey-bg flex flex-col items-center">
      <div className="min-h-screen w-[70%]  text-white px-6 py-12 md:px-16 lg:px-24 mt-30">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Let’s create together
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="flex-1">
            {/* Address & Email */}
            <div className="flex flex-col md:flex-row gap-6 bg-neutral-900 rounded-xl p-6 mb-10">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">Address</h2>
                <p className="text-gray-300">410 Sandtown, California</p>
                <p className="text-gray-300">94001, USA</p>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">Email</h2>
                <p className="text-gray-300">info@example.com</p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm mb-2">Your name*</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-2">Email address*</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm mb-2">Phone number</label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-2">Type message*</label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2"
                  required
                ></textarea>
              </div>

              {/* Terms */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-white" />
                <label className="text-sm text-gray-400">
                  I agree to the terms and conditions.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center gap-2 bg-transparent border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition"
              >
                Submit message ↗
              </button>
            </form>
          </div>

          {/* Right Section - Image */}
          <div className="flex-1 flex justify-center">
            <img src="/images/2.png" alt="Contact" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
