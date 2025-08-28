import React from "react";
import { Typography } from "@material-tailwind/react";

const WelcomeSection = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-8 mt-4 md:mt-10 text-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
        <span className="text-white text-2xl font-bold">DS</span>
      </div>
      <Typography
        variant="h4"
        color="blue-gray"
        className="mb-2 text-lg sm:text-2xl md:text-3xl"
      >
        How can I help you today?
      </Typography>
      <Typography
        variant="paragraph"
        color="gray"
        className="text-center max-w-md text-sm sm:text-base"
      >
        Ask me anything, from creative ideas to technical explanations.
      </Typography>
    </div>
  );
};


export default WelcomeSection;