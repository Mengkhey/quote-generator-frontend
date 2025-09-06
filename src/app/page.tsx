// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Home() {
//   const demoQuotes = [
//     { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
//     { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
//     { text: "Happiness depends upon ourselves.", author: "Aristotle" },
//     { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
//   ];

//   const [quote, setQuote] = useState(demoQuotes[0]);
//   const [key, setKey] = useState(0);

//   const getRandomQuote = () => {
//     const randomIndex = Math.floor(Math.random() * demoQuotes.length);
//     setQuote(demoQuotes[randomIndex]);
//     setKey((prev) => prev + 1);
//   };

//   return (
//     <main className="flex flex-col md:flex-row items-center justify-center overflow-hidden h-screen bg-white">
//       <div>
//         <img className="p-10 md:w-130" src="/images/accient.jpg" alt="accient_image" />
//       </div>

//       <section className="flex flex-col max-w-lg">
//         <article className="p-6">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 md:text-left">
//             Welcome to Quote Generator
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mb-6 text-center md:text-left">
//             Discover inspiring quotes and Cambodian heritage.
//           </p>

//           {/* Quote Section with Neon Glow */}
//           <div className="relative p-6 rounded-2xl shadow-md text-center overflow-hidden bg-gray-100">
//             {/* Pulsing Neon Glow Background */}
//             <motion.div
//               className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-blue-400 to-cyan-400 opacity-40 blur-2xl"
//               animate={{ opacity: [0.3, 0.55, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* Quote + Button */}
//             <div className="relative z-10">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={key}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <p className="text-xl italic text-gray-800 mb-4">"{quote.text}"</p>
//                   <p className="text-lg font-semibold text-gray-600 mb-6">— {quote.author}</p>
//                 </motion.div>
//               </AnimatePresence>

//               <button
//                 onClick={getRandomQuote}
//                 className="px-6 py-2 bg-black text-white rounded-xl shadow hover:bg-blue-700 transition"
//               >
//                 Random Quote
//               </button>
//             </div>
//           </div>
//         </article>
//       </section>
//     </main>
//   );
// }=============================================

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { fetchRandomQuote } from "../lib/api";

// type Quote = {
//   text: string;
//   owner: string;
// };

// export default function Home() {
//   const [quote, setQuote] = useState<Quote | null>(null);
//   const [key, setKey] = useState(0);

//   const getRandomQuote = async () => {
//     const newQuote = await fetchRandomQuote();
//     if (newQuote) {
//       setQuote(newQuote);
//       setKey((prev) => prev + 1);
//     }
//   };

//   return (
//     <main className="flex flex-col md:flex-row items-center justify-center overflow-hidden h-auto bg-white">
//       <div>
//         <img
//           className="p-10 md:w-120"
//           src="/images/accient.jpg"
//           alt="accient_image"
//         />
//       </div>

//       <section className="flex flex-col max-w-lg">
//         <article className="p-6">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 md:text-left">
//             Welcome to Quote Generator
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mb-6 text-center md:text-left">
//             Discover inspiring quotes and Cambodian heritage.
//           </p>

//           {/* Quote Section */}
//           <div className="relative p-6 rounded-2xl shadow-md text-center overflow-hidden bg-gray-100">
//             {/* Pulsing Neon Glow Background */}
//             <motion.div
//               className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-blue-400 to-cyan-400 opacity-40 blur-2xl"
//               animate={{ opacity: [0.3, 0.55, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* Quote + Button */}
//             <div className="relative z-10">
//               <AnimatePresence mode="wait">
//                 {quote && (
//                   <motion.div
//                     key={key}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <p className="text-xl italic text-gray-800 mb-4">
//                       "{quote.text}"
//                     </p>
//                     <p className="text-lg font-semibold text-gray-600 mb-6">
//                       — {quote.owner}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <button
//                 onClick={getRandomQuote}
//                 className="px-6 py-2 bg-black hover:cursor-pointer text-white rounded-xl shadow hover:bg-blue-700 transition"
//               >
//                 Random Quote
//               </button>
//             </div>
//           </div>
//         </article>
//       </section>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchRandomQuote, fetchAIQuote } from "../lib/api";

type Quote = {
  text: string;
  owner?: string;
};

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [key, setKey] = useState(0);

  // Random DB Quote
  const getRandomQuote = async () => {
    const newQuote = await fetchRandomQuote();
    if (newQuote) {
      setQuote(newQuote);
      setKey((prev) => prev + 1);
    }
  };

  // AI-Generated Quote
  const getAIQuote = async () => {
    const newQuote = await fetchAIQuote();
    if (newQuote) {
      setQuote({ text: newQuote.text, owner: "AI (Gemini)" });
      setKey((prev) => prev + 1);
    }
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-center overflow-hidden h-auto bg-white">
      <div>
        <img
          className="p-10 md:w-120"
          src="/images/accient.jpg"
          alt="accient_image"
        />
      </div>

      <section className="flex flex-col max-w-lg">
        <article className="p-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:text-left">
            Welcome to Quote Generator
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center md:text-left">
            Discover inspiring quotes and Cambodian heritage.
          </p>

          {/* Quote Section */}
          <div className="relative p-6 rounded-2xl shadow-md text-center overflow-hidden bg-gray-100">
            {/* Pulsing Neon Glow Background */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-blue-400 to-cyan-400 opacity-40 blur-2xl"
              animate={{ opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Quote + Buttons */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {quote && (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-xl italic text-gray-800 mb-4">
                      "{quote.text}"
                    </p>
                    {quote.owner && (
                      <p className="text-lg font-semibold text-gray-600 mb-6">
                        — {quote.owner}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Two Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={getRandomQuote}
                  className="px-6 py-2 bg-black hover:cursor-pointer text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                  Random Quote
                </button>

                <button
                  onClick={getAIQuote}
                  className="px-6 py-2 bg-green-600 hover:cursor-pointer text-white rounded-xl shadow hover:bg-green-700 transition"
                >
                  AI Quote
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
