import React from "react";

export default function Footer() {
  return (
    <div className="text-white flex justify-around items-center border-t border-gray-700 h-30 w-full">
      <h1 className="text-3xl">PULSEHIVE</h1>
      <div className="flex gap-10">
        <div>Privacy</div>
        <div>Terms</div>
        <div>Contact</div>
      </div>
      <div>@Copyright 2025 Designed & Developed by <a className="text-green-400" href="/" target="_blank" rel="noopener noreferrer">Pulsehive</a></div>
    </div>
  );
}
