import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

import i2 from "../../assets/conv/New folder/2.png";
import f3 from "../../assets/conv/New folder/i3.png";
import f4 from "../../assets/conv/New folder/i4.png";
import f7 from "../../assets/conv/New folder/i7.png";
import f8 from "../../assets/conv/New folder/i8.png";
import f9 from "../../assets/conv/New folder/i9.png";
import f10 from "../../assets/conv/New folder/i10.png";
import i1 from "../../assets/conv/New folder/img1.png";
import disk from "../../assets/conv/disk1.png";
import { useRef } from "react";
import OpenAI from "openai";

const Chatting = ({ setnewscontent }) => {
  const [script, setScript] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    const MAX_DAILY_GENERATIONS = 3;

 
 const generateScript = async () => {
    const today = new Date().toDateString();
    const stored = JSON.parse(localStorage.getItem("scriptGenLimit") || "{}");

    if (stored.date === today && stored.count >= MAX_DAILY_GENERATIONS) {
      setError("You've hit today's limit (3). Come back tomorrow!");
      return;
    }

    localStorage.setItem("scriptGenLimit", JSON.stringify({
      date: today,
      count: stored.date === today ? stored.count + 1 : 1,
    }));

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/generateScript", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setScript(data.script);
      setnewscontent(data.newsText);
      console.log("Script ready:", data.script);
    } catch (err) {
      console.error(err);
      setError("Something went wrong, try again");
    } finally {
      setLoading(false);
    }
  };

  const btnRef = useRef(null);
  const btnRef1 = useRef(null);
  const [tapecolor, settapecolor] = useState("#E13C43");
  const [chilltxt, setchilltxt] = useState(
    "Hi, my name is Chilli! am a bit slow & dumb",
  );

  const [yumtxt, setyumtxt] = useState(
    "Hi, my name is Yum! I eat everything I see",
  );
  const [flowtxt, setflowtxt] = useState(
    "Hi, my name is Flow! I am bit anxious",
  );
  const [junotxt, setjunotxt] = useState(
    "Hi, my name is Juno! I like music and  rythm ",
  );
  const [jaxtxt, setjaxtxt] = useState(
    "Hi, my name is Jax! I am nerdy and smart",
  );
  const [nelltxt, setnelltxt] = useState(
    "Hi, my name is Nell!, I am angry already ",
  );
  const [chiptxt, setchiptxt] = useState(
    "Hi, my name is Chip! I am happy to be alive ",
  );
  const [pippatxt, setpippatxt] = useState(
    "Hi, my name is Pippa! I am lost so pls excuse",
  );

  useEffect(() => {}, []);

  const conv = script;

  const [currentIndex, setCurrentIndex] = useState(null);
  const [clicked, setclicked] = useState(false);
  const [hi, sethi] = useState(true);
  const [start, setstart] = useState(false);
  const [check, setcheck] = useState(false);
  const [counter, setcounter] = useState(0);
  const [play, setplay] = useState("Action! Take : 0");

  useEffect(() => {
    if (currentIndex === null) return;
    if (currentIndex == conv.length) {
      setclicked(false);
      setstart(false);
      setcheck(false);
      sethi(true);

      setplay("Action! Take :" + counter);
    }

    const timer = setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, 1800);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  function handleconv() {
    if (check && script.length > 0 && !loading) {
      setCurrentIndex(0);
      setclicked(true);
      setplay("Restart");
      setcounter(counter + 1);
    }
  }

  function handlehi() {
    generateScript();
    if (!clicked) {
      gsap.to(".disk", {
        rotateZ: 360,
        duration: 12,
        repeat: -1,
        ease: "easeInOut",
      });
      sethi(false);
      setstart(true);

      const delay = 1000;

      setTimeout(() => setchilltxt("Hii"), 0);
      setTimeout(() => setyumtxt("Hii"), delay);
      setTimeout(() => setflowtxt("Hii"), delay * 2);
      setTimeout(() => setjunotxt("Hii"), delay * 3);

      setTimeout(() => setjaxtxt("Hii"), delay * 4);
      setTimeout(() => setnelltxt("Hii"), delay * 5);
      setTimeout(() => setchiptxt("Hii"), delay * 6);
      setTimeout(() => {
        setpippatxt("Hii");
        setcheck(true);
      }, delay * 7);
    }
  }

  useEffect(() => {
    if (clicked) {
      let p = conv[currentIndex];
      
      setchilltxt("");
      setyumtxt("");
      setflowtxt("");
      setjunotxt("");
      setjaxtxt("");
      setnelltxt("");
      setchiptxt("");
      setpippatxt("");
      settapecolor("#E13C43");
      if (p?.character == "Chilli") {
        setchilltxt(p?.line);
        settapecolor("#FF637E");
      } else if (p?.character == "Yum") {
        setyumtxt(p?.line);
        settapecolor("#42B37B");
      } else if (p?.character == "Flow") {
        setflowtxt(p?.line);
        settapecolor("#2871CB");
      } else if (p?.character == "Juno") {
        setjunotxt(p?.line);
        settapecolor("#B87532");
      } else if (p?.character == "Jax") {
        setjaxtxt(p?.line);
        settapecolor("#F05927");
      } else if (p?.character == "Nell") {
        setnelltxt(p?.line);
        settapecolor("#F05927");
      } else if (p?.character == "Chip") {
        setchiptxt(p?.line);
        settapecolor("#F05927");
      } else if (p?.character == "Pippa") {
        setpippatxt(p?.line);
        settapecolor("#DB4040");
      }
    }
  });

  return (
    <>
      <div className="w-full lg:block hidden relative">
        <div className="flex w-full justify-center items-center mx-auto mb-20 mt-10">
          <div
            className="rounded-sm px-20 py-5 flex flex-row justify-evenly border-1 dark:border-white"
            style={{ backgroundColor: tapecolor }}
          >
            <div className="relative bottom-4 right-1/5  w-10 h-10 scale-240 rounded-full mx-auto  ">
              <img src={disk} alt="" className="disk mx-auto" />
            </div>
            <div className="flex flex-row justify-center items-center gap-5">
              <div></div>
              {hi && (
                <>
                  <button
                    onClick={handlehi}
                    className="anim text-white bg-red-300 hover:bg-red-500 duration-300 cursor-pointer px-4 py-1 play rounded-xl"
                  >
                    Say hii
                  </button>
                </>
              )}

              {start && (
                <button
                  className={`text-white duration-300 px-4 py-1 play rounded-xl ${
                    script.length > 0 && !loading
                      ? "bg-red-300 hover:bg-red-500 cursor-pointer"
                      : "bg-red-300 cursor-not-allowed"
                  }`}
                  onClick={handleconv}
                  disabled={!(script.length > 0 && !loading)}
                >
                  {script.length > 0 && !loading ? play : "Generating..."}
                </button>
              )}
              <div className="text-white"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center px-2 w-full mb-5 mt-15">
          <div className=" flex justify-center items-center w-full px-4 ">
            <h1 className="play flex justify-center text-sm w-full text-rose-300  ">
              {chilltxt}
            </h1>
          </div>
          <div className=" flex justify-center items-center w-full px-4 ">
            <h1 className="play flex justify-center text-sm w-full text-teal-600 ">
              {yumtxt}
            </h1>
          </div>
          <div className=" flex justify-center items-center w-full px-4   ">
            <h1 className="play flex justify-center text-sm w-full text-[#24d0fffb] ">
              {flowtxt}
            </h1>
          </div>
          <div className=" flex justify-center items-center w-full px-4   ">
            <h1 className="play flex justify-center text-sm w-full text-[#cf8943] ">
              {junotxt}
            </h1>
          </div>
          <div className=" flex justify-center items-center w-full px-4   ">
            <h1 className="play flex justify-center text-sm w-full text-[#f67348] ">
              {jaxtxt}
            </h1>
          </div>
          <div className=" flex justify-center items-center w-full px-4   ">
            <h1 className="play flex justify-center text-sm w-full text-purple-400 ">
              {nelltxt}
            </h1>
          </div>
          <div className=" flex justify-center items-center w-full px-4   ">
            <h1 className="play flex justify-center text-sm w-full text-lime-600 ">
              {chiptxt}
            </h1>
          </div>
          <div className=" flex justify-center items-center w-full px-4   ">
            <h1 className="play flex justify-center text-sm w-full text-red-400 ">
              {pippatxt}
            </h1>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center w-full shrink ">
          {/* CHILLI - div 1 */}

          <div className="flex flex-col w-full flex-grow-1 justify-center items-center gap-4 chilli ">
            <div
              className="bg-rose-400 flex flex-col  justify-between items-center rounded-t-full border-t-1 border-l-4 border-rose-800 w-full"
              style={{
                height: "clamp(100px, 15vw, 240px)",
                paddingTop: "clamp(8px, 1.5vw, 20px)",
                paddingBottom: "clamp(6px, 1vw, 14px)",
              }}
            >
              <img
                src={i1}
                alt=""
                style={{
                  width: "clamp(28px, 4vw, 60px)",
                  objectFit: "contain",
                  marginBottom: "clamp(8px, 2.5vw, 40px)",
                }}
              />
              <h1
                className="play text-[#f7f4f4]"
                style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
              >
                CHILLI
              </h1>
            </div>
          </div>

          {/* YUM - div 2 */}
          <div className="flex flex-col w-full flex-grow-2 justify-between items-center gap-4  yum">
            <div
              className="bg-[#42B37B] flex flex-col justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#22672a] w-full"
              style={{
                height: "clamp(100px,15vw, 240px)",
                paddingTop: "clamp(8px, 1.5vw, 20px)",
                paddingBottom: "clamp(6px, 1vw, 14px)",
              }}
            >
              <img
                src={i2}
                alt=""
                style={{
                  width: "clamp(28px, 4vw, 60px)",
                  objectFit: "contain",
                  marginBottom: "clamp(8px, 2.5vw, 40px)",
                }}
              />
              <h1
                className="play text-[#59ff0dfb]"
                style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
              >
                YUM
              </h1>
            </div>
          </div>

          {/* FLOW - div 3 */}
          <div className="flex flex-col w-full flex-grow-3 justify-center items-center gap-4 flow">
            <div
              className="bg-[#2871cb] flex flex-col   justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#0e4588] w-full"
              style={{
                height: "clamp(100px,15vw, 240px)",
                paddingTop: "clamp(8px, 1.5vw, 20px)",
                paddingBottom: "clamp(6px, 1vw, 14px)",
              }}
            >
              <img
                src={f3}
                alt=""
                style={{
                  width: "clamp(28px, 4vw, 60px)",
                  objectFit: "contain",
                  marginBottom: "clamp(8px, 2.5vw, 40px)",
                }}
              />
              <h1
                className="play text-[#24d0fffb]"
                style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
              >
                FLOW
              </h1>
            </div>
          </div>

          {/* JUNO - div 4 */}
          <div className="flex flex-col w-full flex-grow-4 justify-center items-center gap-4 juno">
            <div
              className="bg-[#b87532] flex flex-col   justify-between items-center rounded-t-full border-1 border-l-4 border-[#5f3e0d] w-full"
              style={{
                height: "clamp(100px,15vw, 240px)",
                paddingTop: "clamp(8px, 1.5vw, 20px)",
                paddingBottom: "clamp(6px, 1vw, 14px)",
              }}
            >
              <img
                src={f4}
                alt=""
                style={{
                  width: "clamp(28px, 4vw, 60px)",
                  objectFit: "contain",
                  marginBottom: "clamp(8px, 2.5vw, 40px)",
                }}
              />
              <h1
                className="play text-[#312308fb]"
                style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
              >
                JUNO
              </h1>
            </div>
          </div>

          {/* JAX - div 5 */}
          <div className="flex flex-col w-full flex-grow-5 justify-center items-center gap-4 jax">
            <div
              className="bg-[#f05927] flex flex-col   justify-between items-center rounded-t-full  border-1 border-r-4 border-[#d46521] border-orange-800 w-full"
              style={{
                height: "clamp(100px,15vw, 240px)",
                paddingTop: "clamp(8px, 1.5vw, 20px)",
                paddingBottom: "clamp(6px, 1vw, 14px)",
              }}
            >
              <img
                src={f7}
                alt=""
                style={{
                  width: "clamp(28px, 4vw, 60px)",
                  objectFit: "contain",
                  marginBottom: "clamp(8px, 2.5vw, 40px)",
                }}
              />
              <h1
                className="play text-[#872900fb]"
                style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
              >
                JAX
              </h1>
            </div>
          </div>

          {/* NELL - div 6 */}
          <div className="flex flex-col w-full flex-grow-6 justify-center items-center gap-4 nell">
            <div
              className="bg-[#c62ad4] flex flex-col   justify-between items-center rounded-t-full border-t-1 border-r-4 border-[#700d79] w-full"
              style={{
                height: "clamp(100px,15vw, 240px)",
                paddingTop: "clamp(8px, 1.5vw, 20px)",
                paddingBottom: "clamp(6px, 1vw, 14px)",
              }}
            >
              <img
                src={f8}
                alt=""
                style={{
                  width: "clamp(28px, 4vw, 60px)",
                  objectFit: "contain",
                  marginBottom: "clamp(8px, 2.5vw, 40px)",
                }}
              />
              <h1
                className="play text-[#e8a2fdfb]"
                style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
              >
                NELL
              </h1>
            </div>
          </div>

          {/* CHIP - div 7 */}
          <div className="flex flex-col w-full flex-grow-7 justify-center items-center gap-4 chip">
            <div
              className="bg-[#c3de41] flex flex-col   justify-between items-center rounded-t-full border-t-1 border-r-4 border-[#728803] w-full"
              style={{
                height: "clamp(100px,15vw, 240px)",
                paddingTop: "clamp(8px, 1.5vw, 20px)",
                paddingBottom: "clamp(6px, 1vw, 14px)",
              }}
            >
              <img
                src={f9}
                alt=""
                style={{
                  width: "clamp(28px, 4vw, 60px)",
                  objectFit: "contain",
                  marginBottom: "clamp(8px, 2.5vw, 40px)",
                }}
              />
              <h1
                className="play text-[#035609fb]"
                style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
              >
                CHIP
              </h1>
            </div>
          </div>

          {/* PIPPA - div 8 */}
          <div className="flex flex-col w-full flex-grow-8 justify-center items-center gap-4 pippa">
            <div
              className="bg-[#db4040] flex flex-col   justify-between items-center rounded-t-full border-t-1 border-r-4 border-[#940707] w-full"
              style={{
                height: "clamp(100px,15vw, 240px)",
                paddingTop: "clamp(8px, 1.5vw, 20px)",
                paddingBottom: "clamp(6px, 1vw, 14px)",
              }}
            >
              <img
                src={f10}
                alt=""
                style={{
                  width: "clamp(24px, 3.5vw, 52px)",
                  objectFit: "contain",
                  marginBottom: "clamp(4px, 1vw, 12px)",
                }}
              />
              <h1
                className="play text-[#710a0afb]"
                style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
              >
                PIPPA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatting;
