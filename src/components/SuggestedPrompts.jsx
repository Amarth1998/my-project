// import React from "react";
// import { Typography} from "@material-tailwind/react";

// const SuggestedPrompts = ({ setMessage }) => {
//     const prompts = [
//       "Explain quantum computing in simple terms",
//       "How to make a website responsive?",
//       "Write a poem about the ocean",
//       "What's the best way to learn machine learning?",
//       "Explain quantum computing in simple terms",
//       "How to make a website responsive?",
//     ];
  
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6 md:mb-10 w-full px-2">
//         {prompts.map((prompt, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 text-sm sm:text-base"
//             onClick={() => setMessage(prompt)}
//           >
//             <Typography variant="paragraph" className="text-gray-700">
//               {prompt}
//             </Typography>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   export default SuggestedPrompts;


// import React, { useEffect, useState } from "react";
// import { Typography } from "@material-tailwind/react";

// const SuggestedPrompts = ({ setMessage }) => {
//   const [prompts, setPrompts] = useState([]);

//   useEffect(() => {
//     const fetchPrompts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/prompts");
//         const data = await res.json();
//         setPrompts(data);
//       } catch (error) {
//         console.error("Error fetching prompts:", error);
//       }
//     };

//     fetchPrompts();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6 md:mb-10 w-full px-2">
//       {prompts.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 text-sm sm:text-base"
//           onClick={() => setMessage(item.text)}
//         >
//           <Typography variant="paragraph" className="text-gray-700">
//             {item.text}
//           </Typography>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SuggestedPrompts;


import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";

const SuggestedPrompts = ({ setMessage }) => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        // fetch directly from /db.json (public folder)
        const res = await fetch("/db.json");
        const data = await res.json();
        // If your structure is { "prompts": [...] }
        setPrompts(data.prompts);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };

    fetchPrompts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6 md:mb-10 w-full px-2">
      {prompts.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 text-sm sm:text-base"
          onClick={() => setMessage(item.text)}
        >
          <Typography variant="paragraph" className="text-gray-700">
            {item.text}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default SuggestedPrompts;
