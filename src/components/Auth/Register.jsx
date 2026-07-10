import React, { createContext, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import loginbg from "../../assets/login_asset/login.png";
import cat from "../../assets/character/cat.gif";
import Stickman from "../../assets/character/classic.gif";
import Bear from "../../assets/character/bear.gif";
import select from "../../assets/character/select.gif";
import { TasksContext } from "../TaskList/AllTasks";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

const Register = ({ setUser, setfirstName, setlastName, setuserName }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, SetuserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [auradialogcolor, setauradialogcolor] = useState("#E29294");
  const [auradialogbordercolor, setauradialogbordercolor] = useState("#FFD98F");
  const navigate = useNavigate();
  const { aura_count, setgif } = useContext(TasksContext);

  const handleinput = (e) => {
    var s = e.target.value;
    if (s.length > 10) {
      alert("username should be less than 10 characters");
    } else {
      SetuserName(e.target.value);
    }
  };

  const [selected, setSelected] = useState("Choose your Emote :");
  const [gif, setGif] = useState(select);
  const [open, setOpen] = useState(false);

  const options = [
    {
      name: "Stickman",
      gif: Stickman,
      color: "#DCECFF",
      border: "#50A2FF",
    },
    {
      name: "Bear",
      gif: Bear,
      color: "#3BA8AD",
      border: "#154f52",
    },
    {
      name: "Cat",
      gif: cat,
      color: "#FADF80",
      border: "#f49d11",
    },
  ];

  const handleSelect = (option) => {
    setSelected(option.name);
    setauradialogcolor(option.color);
    setauradialogbordercolor(option.border);
    setGif(option.gif);
    setOpen(false);
  };

  const [wait, setwait] = useState(true);

  const SubmitForm = async (e) => {
    e.preventDefault();

    setwait(false);
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      const user = auth.currentUser;

      {
        await setDoc(doc(db, "Users", user.uid), {
          first_Name: firstName,
          last_Name: lastName,
          user_name: userName,
          gif_Name: selected,
          aura: aura_count,
          role: "employee",
          accepted: 0,
          completed: 0,
          failed: 0,
          login: false,
        });

        await addDoc(collection(db, "Users", user.uid, "tasks"), {
          accepted_status: "completed",
        });
        // const collectionRef = collection(db, "tasks", user.uid);
        // // 2. Add a document to trigger the collection creation
        //  const docRef = await addDoc(collectionRef, {
        // firstField: "Hello World",
        // createdAt: new Date()
        //   });
      }
      toast.success("You have been registered successfully!", {
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  const [register, setregister] = useState(false);

  return (
    <>
      <div
        className={`h-150 mx-5 rounded-2xl mt-5 mb-10 `}
        style={{ backgroundImage: `url(${loginbg})` }}
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl hee text-amber-300 pt-5">
            Signup
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center play ">
            <div
              className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center   w-70 border-2  rounded-3xl"
              style={{
                backgroundColor: auradialogcolor,
                borderColor: auradialogbordercolor,
              }}
            >
              <div className="flex flex-col">
                {gif && (
                  <div className="">
                    <img
                      src={gif}
                      alt="?!"
                      placeholder="?"
                      className="w-full rounded-t-2xl "
                      style={{ borderColor: auradialogbordercolor }}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col   w-full">
                <div className="relative w-full flex flex-col">
                  <div
                    onClick={() => setOpen(!open)}
                    className="dropdown cursor-pointer w-full flex border-b   text-black duration-200 px-3"
                    style={{ borderColor: auradialogbordercolor }}
                  >
                    {selected == "Choose your Emote :" ? (
                      <div className="flex flex-row">
                        <h1>{selected}</h1>
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <rect
                              x="0"
                              fill="none"
                              width="24"
                              height="24"
                            ></rect>{" "}
                            <g>
                              {" "}
                              <path d="M7 10l5 5 5-5"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                    ) : (
                      <div className="flex flex-row">
                        <h1>Emote : {selected}</h1>
                        <svg
                          className="pt-1"
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <rect
                              x="0"
                              fill="none"
                              width="24"
                              height="24"
                            ></rect>{" "}
                            <g>
                              {" "}
                              <path d="M7 10l5 5 5-5"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>

                  {open && (
                    <div className="absolute right-1/10 top-2/3 text-gray-500 border bg-gray-100 mt-1  shadow-lg">
                      {options.map((option) => (
                        <div
                          key={option.name}
                          onClick={() => handleSelect(option)}
                          className="p-3 border border-gray-300 cursor-pointer hover:bg-blue-200 hover:text-white"
                        >
                          <h1>{option.name}</h1>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-full flex flex-col  ">
                  <h1
                    className=" text-black  w-full flex  items-center border-b   pt-2 px-4 e text-capitalize"
                    style={{ borderColor: auradialogbordercolor }}
                  >
                    Aura : {aura_count}
                  </h1>
                  <h1 className=" w-full flex  items-center pt-2  px-4 pb-2 capitalize rounded-bl-3xl rounded-br-3xl">
                    {userName == "" ? "username_losiento_Wilson" : userName}
                  </h1>
                </div>
              </div>
            </div>
            <div
              className={`bg-amber-300 text-black flex justify-center items-center  rounded-3xl ${register ? "px-8" : "px-20"} py-8 w-auto mx-auto h-100  border-4`}
              style={{ borderColor: auradialogbordercolor }}
            >
              <form
                onSubmit={(e) => {
                  SubmitForm(e);
                }}
                action=""
                id="form"
                className="flex flex-col w-full  items-center justify-center h-auto gap-4"
              >
                <div className="flex md:gap-4 gap-1 w-full">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    placeholder="First name"
                    required
                    className="border-b-2 border-white w-1/2 h-10 bg-transparent outline-none px-2"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    placeholder="Last name"
                    required
                    className="border-b-2 border-white w-1/2 h-10 bg-transparent outline-none px-2"
                  />
                </div>

                <input
                  type="text"
                  value={userName}
                  onChange={handleinput}
                  placeholder="Username"
                  required
                  className="border-b-2 border-white w-full h-10 bg-transparent outline-none px-2"
                />

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
                    {wait ? "Signup!" : "Please wait!"}
                  </button>
                  <div className="flex flex-row gap-2">
                    <h1 className="text-[#207B52] ">
                      Already have an account?
                    </h1>
                    <Link
                      to="/login"
                      className=" text-white bg-blue-400 px-2 rounded-xl cursor-pointer"
                    >
                      {" "}
                      &nbsp;Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
