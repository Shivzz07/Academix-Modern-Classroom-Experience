import React, { useContext } from "react";
import HTMLFlipBook from "react-pageflip";
import coverbg from "../../assets/blog/coverbg_final2.jpg";
import first from "../../assets/doc/1.png";
import second from "../../assets/doc/2.png";
import third from "../../assets/doc/3.png";
import { TasksContext } from "../TaskList/AllTasks";

const Book = () => {
  const { blogdialog, setblogdialog } = useContext(TasksContext);
  return (
    <>
      {blogdialog && (
        <>
          <div className="hidden md:flex justify-center items-center fixed inset-0 z-999 ">
            <HTMLFlipBook
              width={600}
              height={700}
              maxShadowOpacity={0.5}
              drawShadow={true}
              showCover={true}
              size="fixed"
            >
              <div className="page1  bg-amber-200 flex h-full w-full justify-center items-center">
                <div className="page-content cover w-full h-full flex justify-center items-center">
                  <div
                    className=" flex flex-col justify-center items-center w-full h-full bg-black absolute "
                    style={{
                      backgroundImage: `url(${coverbg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex flex-row justify-start items-start">
                      <h1 className="float rain text-4xl right-35 rotate-[-10deg] top-2 bg-[#5162FC] text-[#B6F800] px-2 text- relative z-99  shadow-amber-300 drop-shadow-4xl">
                        #3
                      </h1>
                      <h1> </h1>
                    </div>
                    <div>
                      <h1 className="zol text-7xl relative bg-pink-400 wavy-container text-white px-4">
                        mistakes
                      </h1>
                    </div>
                    <h1 className="float relative z-999 left-32  rain  text-2xl px-2 text-[#FFF085] bg-[#00BCC8] bottom-1">
                      I did while
                    </h1>

                    <h1 className="text-6xl zol relative z-99 bottom-8 text-[#F0C986] bg-[#800f4d] pt-4 pb-2 px-4 wavy-container ">
                      CrEaTiNgGgGgGg
                    </h1>

                    <h1 className="float relative z-99 right-45 px-2 rain text-2xl bottom-10  bg-[#C80203] text-pink-300">
                      This{" "}
                    </h1>
                    <h1 className="relative bottom-16  wavy-container  px-15 cart  text-6xl   bg-[#F7873F] text-[#ffe65c]">
                      Project
                    </h1>
                    <h1 className="float relative z-99 bg-[#50e04b] text-[#048573] rain px-4 text-2xl bottom-18 left-26">
                      from scratch
                    </h1>

                    <div className="text-[#F0C986] text-4xl absolute z-99 top-5/6 left-4/5 cursor-pointer bg-[#5162FC] hover:bg-[#F0C986] px-4 pb-2 rounded-full hover:text-[#5162FC] animate-pulse">
                      {">"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="page2 bg-[#5162FC] text-white">
                <div className="flex flex-row gap-5 py-4 px-4 text-[#B6F800]">
                  <h1 className="play bg-[#323da0] px-4 wavy-container text-3xl">
                    #1{" "}
                  </h1>
                  <h1 className="tracking-wider text-4xl play underline">
                    Architecture{" "}
                  </h1>
                </div>
                <div className="px-8 text-3xl rain text-[#B6F800] flex flex-col gap-4">
                  <p>
                    Honestly I don't know where to start, this is one of the
                    most skipped topic and most underrated one as well. Well, I
                    want to admit{" "}
                    <span className="bg-[#fff280] px-1 rain text-2xl  text-[#323da0]">
                      I heard this term while reading an article on medium
                    </span>{" "}
                    and thought its a cool tech word.
                  </p>

                  <p>
                    Welp, I moved on and started this project knowing absolutely
                    nothing of what has to been done first, I thought I know
                    better
                  </p>
                  <p>
                    And started writing code, you might be wondering that
                    doesn't sound bad?{" "}
                    <span className="bg-pink-400 px-2  text-white text-2xl">
                      Well the files started to look like this......
                    </span>{" "}
                  </p>
                </div>
                <div></div>
              </div>
              <div className="page3 bg-[#B6F800] flex">
                <h1 className="text-[#5162FC] py-4 px-4 text-3xl rain">
                  Repetitive...
                </h1>
                <img
                  src={first}
                  alt="12+ repeating divs with slight changes"
                  className="px-2 pb-2 h-55"
                />
                <div className="flex flex-row text-[#5162FC] px-4">
                  <p className="text-3xl rain pt-2 ">
                    And? complicated code, I thought everything was fine, until
                    the{" "}
                    <span className="bg-[#fff280] px-2 text-[#323da0] text-2xl">
                      code crashed.
                    </span>
                  </p>
                  <img
                    src={second}
                    alt="530 lines of code handling everything inside a dashboard "
                    className="h-50"
                  />
                </div>
                <p className="px-4 py-4  rain text-3xl  text-[#5162FC]">
                  Yeah, you heard it right, I spent another 5 days fixing....{" "}
                  <br />
                  <span className="text-white bg-pink-400 px-3 text-2xl play ">
                    I wish I had built the architecture beforehand
                  </span>
                </p>
              </div>
              <div className="page3 bg-pink-400">
                <div className="flex flex-row gap-5 py-4 px-4 text-white">
                  <h1 className="play bg-pink-700 px-4 wavy-container text-3xl text-red-900">
                    #2{" "}
                  </h1>
                  <h1 className="tracking-wider text-4xl play underline text-red-900">
                    Fundamentals{" "}
                  </h1>
                </div>
                <div className="rain text-white px-4 text-3xl flex flex-col gap-10">
                  <p>
                    I learned{" "}
                    <span className="bg-blue-400 px-2 text-white">React</span>{" "}
                    back in 2025, from a yt channel named "chai aur code". I
                    made notes and followed the tutorials while coding
                    parallely{" "}
                  </p>
                  <p>
                    I made few projects on the way too, different from those in
                    the videos but these projects had same code implemented in a
                    different design
                  </p>
                  <p className="text-[1.8rem]">
                    Since I completed those tuts, I started to code this one and
                    then I hit the rock bottom. Not because I didn't learn those
                    concepts but the problem lied in the fact that{" "}
                    <span className="bg-[#00BCC8] text-yellow-200 px-1 text-2xl">
                      {" "}
                      I wasn't able to understand those concepts for different
                      scennarios
                    </span>
                  </p>
                </div>
              </div>
              <div className="page4 bg-white rain text-pink-400 px-4 text-3xl flex flex-col gap-10 py-4">
                <div className="flex flex-col justify-center items-center gap-4">
                  <p>
                    But Shivam, you are talking about async and promises right?
                    right???{" "}
                  </p>
                  <p className="text-4xl bg-red-400 px-4 text-pink-800">Nope</p>
                </div>
                <p>I am talking about much simpler things like......</p>
                <div className="flex flex-col justify-center items-center text-yellow-400 zol">
                  <h1 className="relative text-xl tracking-wide">map</h1>
                  <h1 className="relative text-2xl tracking-wider">props</h1>
                  <h1 className="relative text-3xl tracking-widest">filter</h1>
                  <h1 className="relative text-4xl">toast</h1>
                  <h1 className="relative text-5xl">useEffect</h1>
                  <h1 className="relative text-6xl">useState</h1>
                  <h1 className="relative text-7xl">useContext</h1>
                </div>
                <div className="flex gap-4">
                  <p>
                    Had to learn each thing step by step but this time using no
                    external help
                  </p>
                  <p className="text-2xl px-4 wavy-container play bg-pink-800 text-white">
                    I wonder if tests or assignments could have corrected this.
                  </p>
                </div>
              </div>
              <div className="page5 bg-[#800f4d] ">
                <div className="flex flex-row gap-5 py-4 px-4 text-white">
                  <h1 className="play bg-[#F0C986] px-4 wavy-container text-3xl text-[#7c5107]">
                    #3{" "}
                  </h1>
                  <h1 className="tracking-wider text-4xl play underline text-[#F0C986] ">
                    Design{" "}
                  </h1>
                </div>
                <div className="px-4 text-3xl rain  flex flex-col gap-10 text-[#F0C986] ">
                  <p>
                    Most neglected part I would say is designing. Since you need
                    to do something different and acquire a{" "}
                    <span className="bg-[#5162FC] text-[#B6F800] px-2 text-2xl">
                      {" "}
                      taste of it.
                    </span>
                  </p>
                  <p>
                    If you are reading this, you might have visited the website,
                    you might question this instantly that the design is decent,
                    so how it is a counted as a mistake?
                  </p>
                  <p>
                    Well here comes the part where I almost lost my mind fixing
                    the great & grand{" "}
                    <span className="bg-amber-500 text-yellow-300 px-4 text-2xl">
                      flexbox issues
                    </span>{" "}
                    Lemme show you what I am talking about....
                  </p>
                </div>
              </div>
              <div className="page3 bg-[#F0C986]">
                <div className="px-4 py-4 flex flex-col gap-8 rain text-3xl text-[#800f4d] ">
                  <img src={third} alt="" />
                  <p>
                    Here we can see how the content is overflowing, and here me
                    out this is one of the most annoying thing in flexbox.
                  </p>
                  <p>
                    Another thing,{" "}
                    <span className="text-[#24e2f0] bg-yellow-200 px-2">
                      {" "}
                      responsive design!
                    </span>{" "}
                    One of the most painful thing if not handled with each
                    screen build on desktops. This is another reason why this
                    project has such an <br></br>
                    <span className="bg-pink-400 px-2 text-white play text-2xl">
                      {" "}
                      average mobile experience {":("}{" "}
                    </span>
                  </p>
                </div>
                <div className="relative left-3/4 bg-[#800f4d] w-30 text-white px-5 rounded-2xl ">
                  <button
                    onClick={() => {
                      setblogdialog(false);
                    }}
                    className="hover:text-[#F0C986] cursor-pointer"
                  >
                    Close Blog
                  </button>
                </div>
              </div>
            </HTMLFlipBook>
          </div>
        </>
      )}
    </>
  );
};

export default Book;
