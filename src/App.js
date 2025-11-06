import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [images] = useState([
    { src: "/1.jpg", caption: "Wedding day — 7th November 2000" },
    { src: "/2.jpg", caption: "Smiles that say everything" },
    { src: "/3.jpg", caption: "Love captured in a frame" },
    { src: "/4.jpg", caption: "Together, always" },
    { src: "/5.jpg", caption: "Laughter that never fades" },
    { src: "/6.jpg", caption: "Endless love and warm memories" },
    { src: "/7.jpg", caption: "Just the two of us" },
    { src: "/8.jpg", caption: "Timeless bond" },
    { src: "/9.jpg", caption: "Cherished forever" },
    { src: "/10.jpg", caption: "Every picture tells a story" },
    { src: "/11.jpg", caption: "A journey of love and togetherness" },
    { src: "/12.jpg", caption: "25 years of magic moments" },
  ]);

  useEffect(() => {
    document.title = "Amit & Kajal — 25 Years of Love";
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setReveal(true), 200);
    }, 4000);
    return () => clearTimeout(introTimer);
  }, []);

  return (
    <div className="min-h-screen text-gray-900 font-sans relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-200 to-pink-100 animate-gradient-slow"></div>

      {/* Infinite memory reel */}
      <div className="absolute top-0 w-full overflow-hidden">
        <div className="scroll-wrapper flex w-max animate-scroll">
          {[...images, ...images, ...images].slice(0, 24).map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt="memory"
              className="h-20 sm:h-24 md:h-28 w-auto rounded-xl shadow-lg opacity-80 hover:opacity-100 transition mx-1 sm:mx-2"
            />
          ))}
        </div>
      </div>

      {/* Floating pink hearts on main page (up & down) */}
      <div className="hearts-container">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`heart ${i % 2 === 0 ? "up" : "down"}`}
            style={{ "--i": i }}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <AnimatePresence>
        {showIntro ? (
          // 🎬 Cinematic Intro Page
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-50 overflow-hidden"
          >
            {/* 🌟 Denser white floating hearts */}
            <div className="intro-hearts absolute inset-0">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="intro-heart" style={{ "--i": i }}></div>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg"
            >
              25 Years of Love
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="mt-4 text-lg md:text-2xl text-gray-300"
            >
              Amit ❤️ Kajal
            </motion.p>
          </motion.div>
        ) : (
          // ✨ Main page
          <motion.div
            key="main"
            className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-10"
            initial={{ opacity: 0 }}
            animate={reveal ? { opacity: 1 } : {}}
            transition={{ duration: 2 }}
          >
            {!reveal && (
              <motion.div
                className="fixed inset-0 bg-white z-40"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              />
            )}

            {/* Glowing Title */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] via-[#c71585] to-[#8b008b] drop-shadow-[0_0_25px_rgba(255,105,180,0.9)] glow-pulse"
            >
              Amit ❤️ Kajal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-2 text-base sm:text-lg text-gray-700"
            >
              Together since <strong>7th November 2000</strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-4 italic text-gray-800 text-base sm:text-lg max-w-2xl"
            >
              Celebrating 25 years of love, laughter, and a lifetime of memories.
            </motion.p>

            {/* Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 1 }}
              className="max-w-5xl w-full mt-10 sm:mt-16 bg-white/60 backdrop-blur-lg p-4 sm:p-6 rounded-3xl shadow-2xl"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Your Silver Journey
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Tap any photo to view full size 💫
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {images.map((img, idx) => (
                  <motion.figure
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="group relative rounded-xl overflow-hidden shadow-md border border-white/50 cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-32 sm:h-40 object-cover"
                    />
                    <figcaption className="absolute bottom-0 w-full bg-white/70 text-xs sm:text-sm text-gray-800 py-1">
                      {img.caption}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={reveal ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8, duration: 1 }}
                className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl bg-white/70 border border-white/40 shadow-inner"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                  A message from your son ❤️
                </h4>
                <div className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
                  <p className="whitespace-pre-line">
                    You’ve shown me that real love isn’t perfect — it’s patient, forgiving, and always full of faith.

                    Every time you laugh together or lift each other up, it reminds me what true love looks like. You’ve built a world of warmth and joy around me, and I can’t thank you enough for that.

                    You’re my safe place, my biggest inspiration, and my forever heroes.
                  </p>
                  <p className="mt-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-pink-400">
                    – Raghav
                  </p>
                </div>
              </motion.div>
            </motion.section>

            <motion.footer
              initial={{ opacity: 0, y: 40 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.2, duration: 1 }}
              className="mt-8 sm:mt-10 text-xs sm:text-sm text-gray-700"
            >
              Made by Raghav — Happy Silver Jubilee, Mummy and Papa
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enlarged Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="popup"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-[90%] max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-white mt-4 text-sm sm:text-lg italic">
              {selectedImage.caption}
            </p>
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded-full font-semibold shadow text-sm sm:text-base"
            >
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow { background-size: 200% 200%; animation: gradient-slow 12s ease infinite; }

        /* Glowing Text Pulse */
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 15px rgba(255,182,193,0.8), 0 0 30px rgba(186,85,211,0.6); }
          50% { text-shadow: 0 0 25px rgba(255,182,193,1), 0 0 50px rgba(186,85,211,0.9); }
        }
        .glow-pulse { animation: glowPulse 4s ease-in-out infinite; }

        /* Infinite memory reel */
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        .scroll-wrapper { display: flex; animation: scroll 60s linear infinite; }

        /* Floating hearts on main */
        .hearts-container { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 1; }
        .heart {
          position: absolute; width: 30px; height: 30px;
          clip-path: path("M10 30 A10 10 0 0 1 30 30 Q30 45 10 60 Q-10 45 -10 30 A10 10 0 0 1 10 30 Z");
          opacity: 0.8; filter: drop-shadow(0 0 10px rgba(255,150,200,0.9));
          animation-duration: 14s; animation-timing-function: ease-in; animation-iteration-count: infinite;
        }
        .heart.up { bottom: -10px; animation-name: floatHeartUp; }
        .heart.down { top: -10px; animation-name: floatHeartDown; }
        .heart:nth-child(odd) { background: rgba(255,182,193,0.9); }
        .heart:nth-child(even) { background: rgba(221,160,221,0.9); }
        .heart:nth-child(3n) { background: rgba(255,255,255,0.95); }
        .heart { animation-delay: calc(var(--i, 1) * -0.8s); left: calc(var(--i, 1) * 3%); }
        @keyframes floatHeartUp { 0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.7; } 25% { opacity: 1; } 100% { transform: translateY(-120vh) scale(1.2) rotate(45deg); opacity: 0; } }
        @keyframes floatHeartDown { 0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.7; } 25% { opacity: 1; } 100% { transform: translateY(120vh) scale(1.2) rotate(-45deg); opacity: 0; } }

        /* White floating hearts on intro */
        .intro-hearts { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
        .intro-heart {
          position: absolute;
          bottom: -10px;
          width: 25px;
          height: 25px;
          background: rgba(255,255,255,0.95);
          clip-path: path("M10 30 A10 10 0 0 1 30 30 Q30 45 10 60 Q-10 45 -10 30 A10 10 0 0 1 10 30 Z");
          animation: introFloat 12s ease-in infinite;
          opacity: 0.9;
          filter: drop-shadow(0 0 12px rgba(255,255,255,0.9));
          animation-delay: calc(var(--i, 1) * -0.5s);
          left: calc(var(--i, 1) * 1.5%);
        }
        @keyframes introFloat {
          0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.7; }
          50% { opacity: 1; transform: translateY(-60vh) scale(1.3) rotate(30deg); }
          100% { transform: translateY(-120vh) scale(1.1) rotate(-25deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
















