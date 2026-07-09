import { Link,useNavigate } from "react-router-dom";
import { useContext, useRef, useState, useEffect } from "react";
// import { userContext } from "./Auth/Login";
import Counter from "./Counter.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import gsap from "gsap";
import { TasksContext, TasksProvider } from "./TaskList/AllTasks.jsx";

import { AuthContext } from "../context/AuthContext.jsx";
import { auth } from "../firebase.js";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import {db} from "../firebase.js"
import {collection, getDocs, getFirestore, getDoc, doc, updateDoc} from "firebase/firestore"
import { ChevronDownSquare } from "lucide-react";

function Navbar() {
  const { dark, setDark, toggleTheme } = useTheme();
 const navigate = useNavigate();
 const videoRef = useRef(null);

 // Add this near your other context calls
const sessionId = sessionStorage.getItem("sessionId");

  const pricing = () => {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
  };
  const home = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };
  const features = () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  };

  // const handleThemeTransition = () => {
  //   const video = document.querySelector(".hand");

  //   const tl = gsap.timeline();

  //   tl
  //     // show overlay
  //     .add(() => {
  //       const v = videoRef.current;

  //       v.currentTime = 0;
  //       v.play();
  //     })

  //     .to(".overlay", {
  //       display: "flex",
  //     })

  //     .to(".overlay", {
  //       scaleY: 1,
  //       // duration: 0.48,
  //       ease: "power4.inOut",
  //     })

  //     .add(() => {
  //       video.currentTime = 0;
  //       video.play();
  //     })

  //     .to({}, { duration: 1.2 })

  //     .add(() => {
  //       setDark((prev) => !prev);
  //     })

  //     .to(".overlay", {
  //       opacity: 20,
  //     })

  //     .to(".overlay", {
  //       opacity: 5,
  //     })

  //     .to(".overlay", {
  //       display: "none",
  //     });

  //   // hide overlay
  // };

  const handleThemeTransition = () => {
  const video = document.querySelector(".hand");

  const tl = gsap.timeline();

  tl
    .to(".overlay", { display: "flex" })
    .to(".overlay", { scaleY: 1, ease: "power4.inOut" })
    .add(() => {
      video.currentTime = 0;
      video.play();          
    })
    .to({}, { duration: 1.2 })
    .add(() => { setDark((prev) => !prev); })
    .to(".overlay", { opacity: 20 })
    .to(".overlay", { opacity: 5 })
    .to(".overlay", { display: "none" });
};

    const { user} = useContext(AuthContext);
  const handleLogout = async () => 
    {
    if (user?.uid) {
    await updateDoc(doc(db, "Users", user.uid), { login: false });
  }
  sessionStorage.removeItem("sessionId");
    await signOut(auth);
    navigate("/")
    }



 const {haslogin} = useContext(TasksContext)

// const auth = getAuth();
// const db = getFirestore();

// const getUserData = async () => {
//      try {
//         const docRef = doc(db, "Users");
       
//         const docSnap = await getDoc(docRef);
//         console.log(docSnap);
//       } catch (error) {
//         console.log(error.code);
//       }
// }


// getUserData();

const {aura_count} = useContext(TasksContext)

// const [useraura,setuseraura] = useState(aura);



// const fetchData = async () => {
//   const auth = getAuth();
//   const user = auth.currentUser;
  
//   if (!user) {
//     console.log("User not logged in");
//     return;
//   }

//   const userDocRef = doc(db, "Users", user.uid); // Reference to user doc
  
//   try {
//     const userDoc = await getDoc(userDocRef); // Get the single document
    
//     if (userDoc.exists()) 
//       {
      
//         console.log("User data:", userDoc.data());
//         // console.log(userDoc.data().aura)
//         // console.log(userDoc.data().gif_Name)
       

//     } 
    
//     else 
//       {
//       console.log("No user document found");
//     }
//   } catch (err) {
//     console.log(err);
//     alert("Aura cannot be updated");
//   }
// };

// useEffect(() => {
//   const auth = getAuth();
  
//   // Wait for auth to load
//   const unsubscribe = auth.onAuthStateChanged((user) => {
//     // if (user) {
//     //   fetchData(); // Only call after user is confirmed
//     // }
//   });

//   return unsubscribe; // Cleanup
// }, []);


  return (
    <>
      <header className="w-full px-4">
        <div className="mx-auto max-w-8xl rounded-4xl dark:bg-black   dark:border-gray-600   bg-no-repeat bg-yellow-300 px-3 flex justify-between  py-4 my-2 sm:px-8 border-1 border-blue-600 ">
          <div className=" text-red-600">
            <h1 className="text sm:block tracking-wide text-sm sm:text-xl md:text-2xl dark:text-pink-400 md:my-0 ">
              Academix
            </h1>
          </div>

          {(!user || user?.login == false) && (
            <>
              <div className="md:flex flex-row gap-4 text mt-2 hidden">
                <Link
                  className="bg-[#1B9FF6]  px-4 rounded-xl text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer"
                  to="/"
                  onClick={home}
                >
                  Home
                </Link>
                <Link
                  className="bg-[#1B9FF6]   px-4 rounded-full text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer "
                  to="/"
                  onClick={features}
                >
                  Features
                </Link>
                <Link
                  className="bg-[#1B9FF6]   px-4 rounded-full text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer"
                  to="/"
                  onClick={pricing}
                >
                  Pricing
                </Link>
              </div>

              <div className="flex flex-row gap-4">
                <button
                  onClick={handleThemeTransition}
                  className="md:block hidden xl:px-3 py-1 rounded text-xs duration-200 px-1 xl:text-sm bg-blue-400 play text-white dark:bg-gray-600 cursor-pointer hover:scale-90 "
                >
                  {dark ? "Corporate Dark" : "Colorful Light"}
                </button>
                <button
                  onClick={handleThemeTransition}
                  className="md:hidden duration-200 px-2 rounded-xl bg-white play text-white dark:bg-gray-600 cursor-pointer hover:scale-90 "
                >
                  {dark ? "⏾" : "☀️"}
                </button>

                <Link
                  className="text-[#336db5] hover:text-[#1B9FF6] hover:underline dark:text-white"
                  to="/login"
                  onClick={() => setaura(0)}
                >
                  Login
                </Link>
              </div>
            </>
          )}

          {(user?.role === "employee" && user?.login==true) && (
            <>
              <div className="md:flex justify-between gap-4 text mt-2 hidden">
                <Link
                  className="bg-[#1B9FF6]   px-4 rounded-xl text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer"
                  to={`/app/${sessionId}`}
                >
                  Dashboard
                </Link>
                <Link
                  className="bg-[#1B9FF6]   px-4 rounded-xl text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer"
                 to={`/app/${sessionId}/leaderboards`}
                >
                  Leaderboards
                </Link>
              </div>

              <div className="flex flex-row gap-5">
                <button
                  onClick={handleThemeTransition}
                  onMouseEnter={() => {           
    const v = document.querySelector(".hand");
    if (v) {
      v.load();
      v.play().then(() => {
        v.pause();
        v.currentTime = 0;
      }).catch(() => {});
    }
  }}
                  className="hidden md:block xl:px-3  rounded text-xs duration-200 px-1 xl:text-sm bg-blue-400 play text-white dark:bg-gray-600 cursor-pointer hover:scale-90 "
                >
                  {dark ? "Corporate Dark" : "Colorful Light"}
                </button>
                <button
                  onClick={handleThemeTransition}
                  onMouseEnter={() => {           
    const v = document.querySelector(".hand");
    if (v) {
      v.load();
      v.play().then(() => {
        v.pause();
        v.currentTime = 0;
      }).catch(() => {});
    }
  }}
                  className="md:hidden duration-200 px-2 rounded-xl bg-white play text-white dark:bg-gray-600 cursor-pointer hover:scale-90 "
                >
                  {dark ? "⏾" : "☀️"}
                </button>

                <div className=" bg-red-400  md:py-0 py-2  px-2 rounded-sm flex flex-row ">
                  <h1 className=" lg:flex px-2 pt-2 text-white bold text-sm  ">
                    AURA &nbsp;
                  </h1>
                  <div className="pt-1">
                    <Counter
                      value={aura_count}
                      places={[100, 10, 10]}
                      fontSize={20}
                      padding={15}
                      gap={4}
                      textColor="white"
                      fontWeight={200}
                      digitPlaceHolders
                    />
                  </div>
                </div>

                <Link
                  className="text-[#336db5] md:py-0 py-4 hover:text-[#1B9FF6] hover:underline dark:text-white"
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </>
          )}

          {(user?.role === "admin" && user?.login==true) && (
            <>
              <div className="md:flex flex-row gap-4 text mt-2 hidden">
                <Link
                  className="bg-[#1B9FF6] px-4 rounded-xl text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer"
                  to={`/dashboard/${sessionId}`}
                >
                  Dashboard
                </Link>
                <Link
                  className="bg-[#1B9FF6]  px-4 rounded-xl text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer"
                  to={`/dashboard/${sessionId}/leaderboards`} 
                  
                >
                  Leaderboards
                </Link>
              </div>

              <div className="flex flex-row gap-4">
                <button
                  onClick={handleThemeTransition}
                  onMouseEnter={() => {        
    const v = document.querySelector(".hand");
    if (v) {
      v.load();
      v.play().then(() => {
        v.pause();
        v.currentTime = 0;
      }).catch(() => {});
    }
  }}
                  className="md:block hidden xl:px-3 py-1 rounded text-xs duration-200 px-1 xl:text-sm bg-blue-400 play text-white dark:bg-gray-600 cursor-pointer hover:scale-90 "
                >
                  {dark ? "Corporate Dark" : "Colorful Light"}
                </button>
                <button
                  onClick={handleThemeTransition}
                  onMouseEnter={() => {             
    const v = document.querySelector(".hand");
    if (v) {
      v.load();
      v.play().then(() => {
        v.pause();
        v.currentTime = 0;
      }).catch(() => {});
    }
  }}
                  className="md:hidden duration-200 px-2 rounded-xl bg-white play text-white dark:bg-gray-600 cursor-pointer hover:scale-90 "
                >
                  {dark ? "⏾" : "☀️"}
                </button>

                <Link
                  className="text-[#336db5] md:py-0 py-4 hover:text-[#1B9FF6] hover:underline dark:text-white"
                  to="/"
                   onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
export default Navbar;
