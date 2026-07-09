import React, { useEffect } from "react";
import chat from "../../assets/admin/chat6.png";
import try1 from "../../assets/conv/try1.png";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

import f1 from "../../assets/conv/1.png";
import i2 from "../../assets/conv/New folder/2.png";
import f3 from "../../assets/conv/New folder/i3.png";
import f4 from "../../assets/conv/New folder/i4.png";
import f5 from "../../assets/conv/New folder/i5.png";
import f6 from "../../assets/conv/New folder/i6.png";
import f7 from "../../assets/conv/New folder/i7.png";
import f8 from "../../assets/conv/New folder/i8.png";
import f9 from "../../assets/conv/New folder/i9.png";
import f10 from "../../assets/conv/New folder/i10.png";
import f11 from "../../assets/conv/New folder/i11.png";
import f12 from "../../assets/conv/New folder/i12.png";
import f13 from "../../assets/conv/New folder/i13.png";
import i1 from "../../assets/conv/New folder/img1.png";
import { useRef } from "react";

const Chatting = () => {
  const btnRef = useRef(null);
  const textL = document.getElementById("cont");
  // console.log(textL.textContent)
  // const letters = text.textContent.split("");
  // text.textContent="";

  // letters.forEach((letter,index) => {
  //   let span = document.createElement("span")
  //   span.textContent= letter
  //   span.classList.add("text")
  //   text.appendChild(span)
  // })

  useEffect(() => {
    const btn = btnRef.current;
    btn.addEventListener("click", () => {
      const t1 = gsap.timeline();
      t1.to(".text", {
        opacity:1,
        duration:1,
        stagger:0.1,

      })
      
      t1.to(".chilli", 
        {
          
        width:"200px",
        duration: 3,
        ease:"power4.out",
       } 
          )
      
       
    });
  });
  // useEffect(() => {
  //   const btn = btnRef.current;
  //   btn.addEventListener("click", () => {
  //     const t1 = gsap.timeline();
  //     t1.to(".chilli", { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 })
  //       .to(".yum",   { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".flow",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".juno",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".dot",   { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".kiki",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".jax",   { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".nell",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".chip",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".pippa", { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".shin",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".kawa",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
  //       .to(".tod",   { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1");
  //   });
  // });

  return (
    <>
      <div className="w-full lg:block hidden relative">
        <div className="flex w-full justify-center">
          <button ref={btnRef}  className="anim mb-20">Play</button>
        </div>
        

        <div className="flex flex-row w-full overflow-x-hidden shrink" style={{ alignItems: 'flex-end' }}>

          {/* CHILLI - tall */}
          <div className="flex flex-col flex-grow-1 min-w-0 justify-center items-center chilli" style={{ position: 'relative' }}>
            <div className="absolute z-50  w-[200px] grid place-content-center" style={{bottom:"100%",fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 id="cont" className="play text-[10px] ">Can we eat the castle? Its made of sand!</h1>
            </div>
            <div className="bg-rose-400 flex flex-col   justify-between items-center rounded-t-full border-t-1 border-l-4 border-rose-800 w-full"
              style={{ height: 'clamp(100px, 13vw, 180px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={i1} alt="" style={{ width: 'clamp(28px, 4vw, 60px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#f7f4f4]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>CHILLI</h1>
            </div>
          </div>

          {/* YUM - short */}
          <div className="flex flex-col  flex-grow-1 min-w-0 yum" style={{ position: 'relative' }}>
            <div className="absolute z-99 flex flex-wrap" style={{ bottom: '80%', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px] ">"Hi"</h1>
            </div>
            <div className="bg-[#42B37B] flex flex-col justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#22672a] w-full"
              style={{ height: 'clamp(80px, 10vw, 160px)', marginTop: 'clamp(10px, 2.5vw, 40px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={i2} alt="" style={{ width: 'clamp(28px, 4vw, 60px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#59ff0dfb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>YUM</h1>
            </div>
          </div>

          {/* FLOW - tall */}
          <div className="flex flex-col flex-grow-1 min-w-0 flow" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom:"100%", left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#2871cb] flex flex-col justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#0e4588] w-full"
              style={{ height: 'clamp(100px, 13vw, 180px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f3} alt="" style={{ width: 'clamp(32px, 5vw, 80px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#24d0fffb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>FLOW</h1>
            </div>
          </div>

          {/* JUNO - short */}
          <div className="flex flex-col flex-grow-1 min-w-0 juno" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom: '85%', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#B33C81] flex flex-col justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#89185a] w-full"
              style={{ height: 'clamp(80px, 10vw, 160px)', marginTop: 'clamp(10px, 2.5vw, 40px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f4} alt="" style={{ width: 'clamp(28px, 4vw, 60px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#e288f1fb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>JUNO</h1>
            </div>
          </div>

          {/* DOT - tall */}
          <div className="flex flex-col flex-grow-1 min-w-0 dot" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom:"100%", left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#14b5cd] flex flex-col justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#0a7a8b] w-full"
              style={{ height: 'clamp(100px, 13vw, 180px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f5} alt="" style={{ width: 'clamp(32px, 5vw, 80px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#005089fb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>DOT</h1>
            </div>
          </div>

          {/* KIKI - short */}
          <div className="flex flex-col flex-grow-1 min-w-0 kiki" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom: '85%', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#ff9602] flex flex-col justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#a86802] w-full"
              style={{ height: 'clamp(80px, 10vw, 160px)', marginTop: 'clamp(10px, 2.5vw, 40px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f6} alt="" style={{ width: 'clamp(28px, 4vw, 60px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#fde2befb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>KIKI</h1>
            </div>
          </div>

          {/* JAX - tall */}
          <div className="flex flex-col flex-grow-1 min-w-0 jax" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom:"100%", left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#f05927] flex flex-col justify-between items-center rounded-t-full border-t-2 border-orange-800 w-full"
              style={{ height: 'clamp(100px, 13vw, 180px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f7} alt="" style={{ width: 'clamp(32px, 5vw, 80px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#872900fb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>JAX</h1>
            </div>
          </div>

          {/* NELL - short */}
          <div className="flex flex-col flex-grow-1 min-w-0 nell" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom: '85%', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#c62ad4] flex flex-col justify-between items-center rounded-t-full border-t-1 border-r-4 border-[#700d79] w-full"
              style={{ height: 'clamp(80px, 10vw, 160px)', marginTop: 'clamp(10px, 2.5vw, 40px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f8} alt="" style={{ width: 'clamp(28px, 4vw, 60px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#e8a2fdfb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>NELL</h1>
            </div>
          </div>

          {/* CHIP - tall */}
          <div className="flex flex-col flex-grow-1 min-w-0 chip" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom:"100%", left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#c3de41] flex flex-col justify-center items-center rounded-t-full border-t-1 border-r-4 border-[#728803] w-full"
              style={{ height: 'clamp(100px, 13vw, 180px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f9} alt="" style={{ width: 'clamp(32px, 5vw, 80px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#035609fb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>CHIP</h1>
            </div>
          </div>

          {/* PIPPA - short */}
          <div className="flex flex-col flex-grow-1 min-w-0 pippa" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom: '85%', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#c1be5a] flex flex-col justify-between items-center rounded-t-full border-t-1 border-r-4 border-[#535007] w-full"
              style={{ height: 'clamp(80px, 10vw, 160px)', marginTop: 'clamp(10px, 2.5vw, 40px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f10} alt="" style={{ width: 'clamp(24px, 3.5vw, 52px)', objectFit: 'contain', marginBottom: 'clamp(4px, 1vw, 12px)' }} />
              <h1 className="play text-[#453f02fb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>PIPPA</h1>
            </div>
          </div>

          {/* SHIN - tall */}
          <div className="flex flex-col flex-grow-1 min-w-0 shin" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom:"100%", left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#c82a41] flex flex-col justify-center items-center rounded-t-full border-t-1 border-r-4 border-[#a41212] w-full"
              style={{ height: 'clamp(100px, 13vw, 180px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f11} alt="" style={{ width: 'clamp(32px, 5vw, 80px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#ed8d78fb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>SHIN</h1>
            </div>
          </div>

          {/* KAWAI - short */}
          <div className="flex flex-col flex-grow-1 min-w-0 kawa" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom: '90%', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-[#c58e78] flex flex-col justify-between items-center rounded-t-full border-r-4 border-[#7b2e10] w-full"
              style={{ height: 'clamp(80px, 10vw, 160px)', marginTop: 'clamp(10px, 2.5vw, 40px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f12} alt="" style={{ width: 'clamp(28px, 4vw, 60px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#381405fb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>KAWAI</h1>
            </div>
          </div>

          {/* TOD - tall */}
          <div className="flex flex-col flex-grow-1 min-w-0 tod" style={{ position: 'relative' }}>
            <div className="absolute z-50" style={{ bottom:"100%", left: '45%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              <h1 className="play text-[10px]">  "Hi"</h1>
            </div>
            <div className="bg-slate-400 flex flex-col justify-between items-center rounded-t-full border-t-1 border-r-4 border-slate-700 w-full"
              style={{ height: 'clamp(100px, 13vw, 180px)', paddingTop: 'clamp(8px, 1.5vw, 20px)', paddingBottom: 'clamp(6px, 1vw, 14px)' }}>
              <img src={f13} alt="" style={{ width: 'clamp(32px, 5vw, 80px)', objectFit: 'contain', marginBottom: 'clamp(8px, 2.5vw, 40px)' }} />
              <h1 className="play text-[#eaeaeafb]" style={{ fontSize: 'clamp(7px, 0.7vw, 11px)' }}>TOD</h1>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Chatting;