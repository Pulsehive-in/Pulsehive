import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CTAbanner() {
  return (
    <>
      <div className="mb-30 w-[1200px]">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 justify-center px-20"
          >
            <h1 className="text-7xl w-[50%] font-bold text-white">
              Let's create something extraordinary
            </h1>
            <p className="text-2xl text-[#737373]">
              Ready to transform your marketing? Book a free strategy session
              and let's discuss your goals.
            </p>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white flex items-center space-x-2 cursor-pointer"
            >
              <span className="flex justify-center items-center gap-2">
                Start your Project <ArrowForwardIcon />{" "}
              </span>
            </HoverBorderGradient>
          </motion.div>
        </AuroraBackground>
      </div>
    </>
  );
}
