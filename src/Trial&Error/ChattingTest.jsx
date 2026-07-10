// import React, { useEffect, useState } from "react";
// // import chat from "../../assets/admin/chat6.png";
// // import try1 from "../../assets/conv/try1.png";
// import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);

// // import f1 from "../../assets/conv/1.png";
// // import i2 from "../../assets/conv/New folder/2.png";
// // import f3 from "../../assets/conv/New folder/i3.png";
// // import f4 from "../../assets/conv/New folder/i4.png";
// // import f5 from "../../assets/conv/New folder/i5.png";
// // import f6 from "../../assets/conv/New folder/i6.png";
// // import f7 from "../../assets/conv/New folder/i7.png";
// // import f8 from "../../assets/conv/New folder/i8.png";
// // import f9 from "../../assets/conv/New folder/i9.png";
// // import f10 from "../../assets/conv/New folder/i10.png";
// // import f11 from "../../assets/conv/New folder/i11.png";
// // import f12 from "../../assets/conv/New folder/i12.png";
// // import f13 from "../../assets/conv/New folder/i13.png";
// // import i1 from "../../assets/conv/New folder/img1.png";
// import { useRef } from "react";

// const Chatting = () => {
//   const btnRef = useRef(null);
//   const [chilltxt, setchilltxt] = useState(
//     "Hi, my name is Chilli! am a bit slow & dumb",
//   );

//   const [yumtxt, setyumtxt] = useState(
//     "Hi, my name is Yum! I eat everything I see",
//   );
//   const [flowtxt, setflowtxt] = useState(
//     "Hi, my name is Flow! I am bit anxious",
//   );
//   const [junotxt, setjunotxt] = useState(
//     "Hi, my name is Juno! I like music and  rythm ",
//   );
//   const [jaxtxt, setjaxtxt] = useState(
//     "Hi, my name is Jax! I am nerdy and smart",
//   );
//   const [nelltxt, setnelltxt] = useState(
//     "Hi, my name is Nell! I won't tell you who am I",
//   );
//   const [chiptxt, setchiptxt] = useState(
//     "Hi, my name is Chip! I am happy to be alive ",
//   );
//   const [pippatxt, setpippatxt] = useState(
//     "Hi, my name is Pippa! I am lost so pls excuse",
//   );

//   useEffect(() => {
//     const btn = btnRef.current;
//     btn.addEventListener("click", () => {
//       const t1 = gsap.timeline();

//       t1.to(".chilli", {
//         onComplete: () => setchilltxt("Hii"),
//       });

//       // t1.to(".chilli", { keyframes: { "0%": { y: 0 }, "50%": { y: -20, onComplete : () => setchilltxt("Hii") }, "100%": { y: 0 } }, duration: 1 })
//       //   .to(".yum",   { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
//       //   .to(".flow",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
//       //   .to(".juno",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")

//       //   .to(".jax",   { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
//       //   .to(".nell",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
//       //   .to(".chip",  { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
//       //   .to(".pippa", { keyframes: { "0%": { y: 0 }, "50%": { y: -20 }, "100%": { y: 0 } }, duration: 1 }, "+=0.1")
//     });
//   });

//   return (
//     <>
//       <div className="w-full lg:block hidden relative">
//         <div className="flex w-full justify-center">
//           <button ref={btnRef} className="anim mb-20">
//             Play
//           </button>
//         </div>

//         <div className="flex flex-row justify-center items-center w-full shrink dark:text-white">
//           {/* CHILLI - div 1 */}
//           <div className="flex flex-col w-full flex-grow-1 justify-center items-center gap-4 chilli relative top-[20px]">
//             <div className=" flex justify-center items-center w-full px-4 ">
//               <h1 className="play text-sm w-full text-rose-600 dark:text-white ">
//                 {chilltxt}
//               </h1>
//             </div>

//             <div
//               className="bg-rose-400 flex flex-col  justify-between items-center rounded-t-full border-t-1 border-l-4 border-rose-800 w-full"
//               style={{
//                 height: "clamp(100px, 15vw, 240px)",
//                 paddingTop: "clamp(8px, 1.5vw, 20px)",
//                 paddingBottom: "clamp(6px, 1vw, 14px)",
//               }}
//             >
//               <img
//                 src={i1}
//                 alt=""
//                 style={{
//                   width: "clamp(28px, 4vw, 60px)",
//                   objectFit: "contain",
//                   marginBottom: "clamp(8px, 2.5vw, 40px)",
//                 }}
//               />
//               <h1
//                 className="play text-[#f7f4f4]"
//                 style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
//               >
//                 CHILLI
//               </h1>
//             </div>
//           </div>

//           {/* YUM - div 2 */}
//           <div className="flex flex-col w-full flex-grow-2 justify-between items-center gap-4  yum">
//             <div className=" flex justify-center items-center w-full px-4 mt-10">
//               <h1 className="play text-sm w-full text-teal-600 dark:text-white">
//                 {
//                  yumtxt
//                 }
//               </h1>
//             </div>
//             <div
//               className="bg-[#42B37B] flex flex-col justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#22672a] w-full"
//               style={{
//                 height: "clamp(100px,15vw, 240px)",
//                 paddingTop: "clamp(8px, 1.5vw, 20px)",
//                 paddingBottom: "clamp(6px, 1vw, 14px)",
//               }}
//             >
//               <img
//                 src={i2}
//                 alt=""
//                 style={{
//                   width: "clamp(28px, 4vw, 60px)",
//                   objectFit: "contain",
//                   marginBottom: "clamp(8px, 2.5vw, 40px)",
//                 }}
//               />
//               <h1
//                 className="play text-[#59ff0dfb]"
//                 style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
//               >
//                 YUM
//               </h1>
//             </div>
//           </div>

//           {/* FLOW - div 3 */}
//           <div className="flex flex-col w-full flex-grow-3 justify-center items-center gap-4 flow">
//             <div className=" flex justify-center items-center w-full px-4 mt-10">
//               <h1 className="play text-sm w-full text-[#24d0fffb] dark:text-white">
//                {
//                 flowtxt
//                }
//               </h1>
//             </div>
//             <div
//               className="bg-[#2871cb] flex flex-col   justify-between items-center rounded-t-full border-t-1 border-l-4 border-[#0e4588] w-full"
//               style={{
//                 height: "clamp(100px,15vw, 240px)",
//                 paddingTop: "clamp(8px, 1.5vw, 20px)",
//                 paddingBottom: "clamp(6px, 1vw, 14px)",
//               }}
//             >
//               <img
//                 src={f3}
//                 alt=""
//                 style={{
//                   width: "clamp(28px, 4vw, 60px)",
//                   objectFit: "contain",
//                   marginBottom: "clamp(8px, 2.5vw, 40px)",
//                 }}
//               />
//               <h1
//                 className="play text-[#24d0fffb]"
//                 style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
//               >
//                 FLOW
//               </h1>
//             </div>
//           </div>

//           {/* JUNO - div 4 */}
//           <div className="flex flex-col w-full flex-grow-4 justify-center items-center gap-4 juno">
//             <div className=" flex justify-center items-center w-full px-4 mt-10">
//               <h1 className="play text-sm w-full text-[#cf8943] dark:text-white">
//                 {
//                  junotxt
//               }
//               </h1>
//             </div>
//             <div
//               className="bg-[#b87532] flex flex-col   justify-between items-center rounded-t-full border-1 border-l-4 border-[#5f3e0d] w-full"
//               style={{
//                 height: "clamp(100px,15vw, 240px)",
//                 paddingTop: "clamp(8px, 1.5vw, 20px)",
//                 paddingBottom: "clamp(6px, 1vw, 14px)",
//               }}
//             >
//               <img
//                 src={f4}
//                 alt=""
//                 style={{
//                   width: "clamp(28px, 4vw, 60px)",
//                   objectFit: "contain",
//                   marginBottom: "clamp(8px, 2.5vw, 40px)",
//                 }}
//               />
//               <h1
//                 className="play text-[#312308fb]"
//                 style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
//               >
//                 JUNO
//               </h1>
//             </div>
//           </div>

//           {/* JAX - div 5 */}
//           <div className="flex flex-col w-full flex-grow-5 justify-center items-center gap-4 jax">
//             <div className=" flex justify-center items-center w-full px-4 mt-10">
//               <h1 className="play text-sm w-full text-[#f67348] dark:text-white">
//                 {
//                   jaxtxt
//                 }
//               </h1>
//             </div>
//             <div
//               className="bg-[#f05927] flex flex-col   justify-between items-center rounded-t-full  border-1 border-r-4 border-[#d46521] border-orange-800 w-full"
//               style={{
//                 height: "clamp(100px,15vw, 240px)",
//                 paddingTop: "clamp(8px, 1.5vw, 20px)",
//                 paddingBottom: "clamp(6px, 1vw, 14px)",
//               }}
//             >
//               <img
//                 src={f7}
//                 alt=""
//                 style={{
//                   width: "clamp(28px, 4vw, 60px)",
//                   objectFit: "contain",
//                   marginBottom: "clamp(8px, 2.5vw, 40px)",
//                 }}
//               />
//               <h1
//                 className="play text-[#872900fb]"
//                 style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
//               >
//                 JAX
//               </h1>
//             </div>
//           </div>

//           {/* NELL - div 6 */}
//           <div className="flex flex-col w-full flex-grow-6 justify-center items-center gap-4 nell">
//             <div className=" flex justify-center items-center w-full px-4 mt-10">
//               <h1 className="play text-sm w-full text-purple-400 dark:text-white">
//                 {
//                  nelltxt
//                 }
//               </h1>
//             </div>
//             <div
//               className="bg-[#c62ad4] flex flex-col   justify-between items-center rounded-t-full border-t-1 border-r-4 border-[#700d79] w-full"
//               style={{
//                 height: "clamp(100px,15vw, 240px)",
//                 paddingTop: "clamp(8px, 1.5vw, 20px)",
//                 paddingBottom: "clamp(6px, 1vw, 14px)",
//               }}
//             >
//               <img
//                 src={f8}
//                 alt=""
//                 style={{
//                   width: "clamp(28px, 4vw, 60px)",
//                   objectFit: "contain",
//                   marginBottom: "clamp(8px, 2.5vw, 40px)",
//                 }}
//               />
//               <h1
//                 className="play text-[#e8a2fdfb]"
//                 style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
//               >
//                 NELL
//               </h1>
//             </div>
//           </div>

//           {/* CHIP - div 7 */}
//           <div className="flex flex-col w-full flex-grow-7 justify-center items-center gap-4 chip">
//             <div className=" flex justify-center items-center w-full px-4 mt-10">
//               <h1 className="play text-sm w-full text-lime-600 dark:text-white">
//                 {
//                  chiptxt
//                 }
//               </h1>
//             </div>
//             <div
//               className="bg-[#c3de41] flex flex-col   justify-between items-center rounded-t-full border-t-1 border-r-4 border-[#728803] w-full"
//               style={{
//                 height: "clamp(100px,15vw, 240px)",
//                 paddingTop: "clamp(8px, 1.5vw, 20px)",
//                 paddingBottom: "clamp(6px, 1vw, 14px)",
//               }}
//             >
//               <img
//                 src={f9}
//                 alt=""
//                 style={{
//                   width: "clamp(28px, 4vw, 60px)",
//                   objectFit: "contain",
//                   marginBottom: "clamp(8px, 2.5vw, 40px)",
//                 }}
//               />
//               <h1
//                 className="play text-[#035609fb]"
//                 style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
//               >
//                 CHIP
//               </h1>
//             </div>
//           </div>

//           {/* PIPPA - div 8 */}
//           <div className="flex flex-col w-full flex-grow-8 justify-center items-center gap-4 pippa">
//             <div className=" flex justify-center items-center w-full px-4 mt-10">
//               <h1 className="play text-sm w-full text-red-400 dark:text-white">
//                {
//                 pippatxt
//                }
//               </h1>
//             </div>
//             <div
//               className="bg-[#db4040] flex flex-col   justify-between items-center rounded-t-full border-t-1 border-r-4 border-[#940707] w-full"
//               style={{
//                 height: "clamp(100px,15vw, 240px)",
//                 paddingTop: "clamp(8px, 1.5vw, 20px)",
//                 paddingBottom: "clamp(6px, 1vw, 14px)",
//               }}
//             >
//               <img
//                 src={f10}
//                 alt=""
//                 style={{
//                   width: "clamp(24px, 3.5vw, 52px)",
//                   objectFit: "contain",
//                   marginBottom: "clamp(4px, 1vw, 12px)",
//                 }}
//               />
//               <h1
//                 className="play text-[#710a0afb]"
//                 style={{ fontSize: "clamp(7px, 0.7vw, 11px)" }}
//               >
//                 PIPPA
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chatting;
