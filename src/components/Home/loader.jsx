import { useState, useEffect } from "react";

import Shuffle from "./Shuffle";

const Loader = () => {
  const [show, setShow] = useState(false);

  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0]?.type;

    const hasSeenLoader = sessionStorage.getItem("loaderShown");

    if (navType === "reload" || !hasSeenLoader) {
      sessionStorage.setItem("loaderShown", "true");

      setShow(true);

      const timer = setTimeout(() => {
        setSlideOut(true);
        setskip(false);
      }, 13500);

      return () => clearTimeout(timer);
    }
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);
  const [skip, setskip] = useState(true);

  useEffect(() => {
    if (!show) return;
    // fire at each slide's animationDelay
    const timers = [
      setTimeout(() => setActiveSlide(1), 0),
      setTimeout(() => setActiveSlide(2), 3000),
      setTimeout(() => setActiveSlide(3), 6000),
      setTimeout(() => setActiveSlide(4), 9000),
      setTimeout(() => setActiveSlide(5), 12000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [show]);

  if (!show) return null;

  return (
    <>
      <style>{`

        @keyframes slide {

          0%   { opacity: 0; }

          15%  { opacity: 1; }

          85%  { opacity: 1; }

          100% { opacity: 0; }

        }

        @keyframes bgChange {
  0%    { background-color: #1a1a2e; }
  24.9% { background-color: #1a1a2e; }  /* holds until just before slide 2 */
  25%   { background-color: #E75C5F; }
  49.9% { background-color: #E75C5F; }
  50%   { background-color: #E8006C; }
  74.9% { background-color: #E8006C; }
  75%   { background-color: #FFDF20; }
  84.9% { background-color: #FFDF20; }
  100%  { background-color: #FFDF20; }
}

        .slide {

          position: absolute;

          opacity: 0;

          animation: slide 3s ease forwards;

        }

      `}</style>

      <div
        className="fixed w-full h-full z-[999] flex items-center justify-center bg-[#F7F7F7] transition-all duration-[800ms] ease-in-out"
        style={{
          top: slideOut ? "-100%" : "0",
          animation: show ? "bgChange 12s ease forwards" : "none",
        }}
      >
        {/* Slide 1 */}
        <div className="slide" style={{ animationDelay: "0s" }}>
          {activeSlide >= 1 && (
            <Shuffle
              text="QUESTS?"
              style={{ fontFamily: "Joy", fontSize: "8vw", color: "#7BF1A8" }}
              shuffleDirection="right"
              duration={1.5}
              animationMode="evenodd"
              stagger={0.03}
              triggerOnce={true}
              loop={false}
            />
          )}
        </div>

        {/* Slide 2 */}
        <div className="slide" style={{ animationDelay: "3s" }}>
          {activeSlide >= 2 && (
            <Shuffle
              text="EMOTES?"
              style={{ fontFamily: "Joy", fontSize: "8vw", color: "#FEF3C6" }}
              shuffleDirection="up"
              duration={2}
              animationMode="evenodd"
              stagger={0.03}
              triggerOnce={true}
              loop={false}
            />
          )}
        </div>

        {/* Slide 3 */}
        <div className="slide" style={{ animationDelay: "6s" }}>
          {activeSlide >= 3 && (
            <Shuffle
              text="AURA?"
              style={{ fontFamily: "Joy", fontSize: "8vw", color: "#FDA5D5" }}
              shuffleDirection="down"
              duration={2}
              animationMode="evenodd"
              stagger={0.03}
              triggerOnce={true}
              loop={false}
            />
          )}
        </div>

        {/* Slide 4 */}
        <div className="slide" style={{ animationDelay: "9s" }}>
          {activeSlide >= 4 && (
            <h1 style={{ fontSize: "6vw", color: "white", fontWeight: "bold" }}>
              Presenting
            </h1>
          )}
        </div>
        <div className="slide" style={{ animationDelay: "12s" }}>
          {activeSlide >= 5 && (
            <h1 className="text" style={{ fontSize: "6vw", color: "#E7000B" }}>
              Academix
            </h1>
          )}
        </div>
        {/* Skip Button */}
        {skip && (
          <button
            onClick={() => {
              setSlideOut(true);
              setskip(false);
            }}
            style={{
              position: "fixed",
              bottom: "24px",
              right: "24px",
              background: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "black",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "0.75rem",
              cursor: "pointer",
              letterSpacing: "0.05em",
              backdropFilter: "blur(4px)",
            }}
          >
            SKIP →
          </button>
        )}
      </div>
    </>
  );
};

export default Loader;
