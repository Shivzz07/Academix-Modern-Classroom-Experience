import React, { createContext, useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import loginbg from "../../assets/login_asset/login.png";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { TasksContext } from "../TaskList/AllTasks";
// Add updateDoc to your existing firestore import
import { updateDoc } from "firebase/firestore";

const Login = () => {
  const {sethaslogin} = useContext(TasksContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [wait, setwait] = useState(true);
  const navigate = useNavigate();

  // const SubmitForm = async (e) => 
  //   {
  //     setwait(false)
  //   e.preventDefault();
  //   try {
  //     await setPersistence(auth, browserSessionPersistence);
  //     const credential = await signInWithEmailAndPassword(auth, email, pass);
  //     const docRef = doc(db, "Users", credential.user.uid);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       const role = docSnap.data().role;

        
  //       toast.success("Logged in successfully!", 
  //         { 
  //           position: "top-center" 
  //         });
  //          await updateDoc(docRef, { login: true });
  //         navigate(role === "admin" ? "/login/admin" : "/login/employee");
       
        
        
  //     }
  //   } 
  //   catch (error) 
  //   {
  //      setwait(true)
  //     toast.error(error.message, { position: "top-center" });
  //   }
  // };
const SubmitForm = async (e) => {
  setwait(false);
  e.preventDefault();
  try {
    await setPersistence(auth, browserSessionPersistence);
    const credential = await signInWithEmailAndPassword(auth, email, pass);
    const docRef = doc(db, "Users", credential.user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const role = docSnap.data().role;

      await updateDoc(docRef, { login: true });

      
      const randomId = crypto.randomUUID();
      sessionStorage.setItem("sessionId", randomId);

      toast.success("Logged in successfully!", { position: "top-center" });

    
      navigate(role === "admin"
        ? `/dashboard/${randomId}`
        : `/app/${randomId}`
      );
    }
  } catch (error) {
    setwait(true);
    toast.error(error.message, { position: "top-center" });
  }
};


  return (
    <>
      <div
        className={`h-150 mx-5 rounded-2xl mt-5 mb-10 `}
        style={{ backgroundImage: `url(${loginbg})` }}
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl hee text-amber-300 pt-5">
            Login
          </h1>

          <div
            className={`bg-amber-300 text-black play flex justify-center items-center  rounded-3xl px-20 py-8 w-auto mx-auto h-100  border-l-4 border-white`}
          >
            <form
              onSubmit={(e) => {
                SubmitForm(e);
              }}
              action=""
              className="flex flex-col w-full  items-center justify-center h-auto gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                required
                className="border-b-2 border-white w-full h-10 bg-transparent outline-none px-2"
              />

              <input
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                placeholder="Pass"
                required
                className="border-b-2 border-white w-full h-10 bg-transparent outline-none px-2"
              />

              <div className="flex flex-col justify-center items-center gap-2">
                <button className="bg-[#207B52] px-4 py-2 text-white hover:bg-green-300 duration-500 play cursor-pointer rounded-md ">
                 {wait ? "Let's go!" : "Please wait..."}
                </button>
                <div className="flex flex-row gap-2">
                  <h1 className="text-[#207B52] ">New here?</h1>
                  <Link
                    to="/register"
                    className=" text-white bg-blue-400 px-2 rounded-xl cursor-pointer"
                  >
                    {" "}
                    &nbsp;Register
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
