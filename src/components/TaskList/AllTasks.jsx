import React, { useEffect, useState, useContext } from "react";
import { createContext } from "react";
import { db } from "../../firebase";
import { collection, getDocs,getDoc, doc, setDoc, updateDoc, increment } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

 
 const colors = ["#FF5733","#33FF57","#3357FF","#FF33A8","#A833FF","#33FFF6","#FFC300","#FF8D1A","#8DFF1A","#1AFF8D","#1A8DFF","#8D1AFF","#FF1A8D","#4CAF50","#2196F3","#9C27B0","#E91E63","#FF9800","#795548","#607D8B","#00BCD4","#CDDC39","#F44336","#3F51B5","#009688","#673AB7","#FFEB3B","#03A9F4","#8BC34A","#FF5722","#1ABC9C","#2ECC71","#3498DB","#9B59B6","#34495E","#16A085","#27AE60","#2980B9","#8E44AD","#2C3E50","#F1C40F","#E67E22","#E74C3C","#95A5A6","#D35400","#C0392B","#BDC3C7","#7F8C8D","#FF6F61","#6B5B95","#88B04B","#F7CAC9","#92A8D1","#955251","#B565A7","#009B77","#DD4124","#D65076","#45B8AC","#EFC050","#5B5EA6","#9B2335","#DFCFBE","#55B4B0","#E15D44","#7FCDCD","#BC243C","#C3447A","#98B4D4","#FFB7B2","#91A8D0","#034F84","#F7786B","#9896A4","#DD4132","#BFD641","#7BC4C4","#FFA500","#40E0D0","#8A2BE2","#20B2AA","#DC143C","#00FA9A","#4682B4","#D2691E","#9ACD32","#FF4500","#6A5ACD","#2E8B57","#483D8B"];
    
      const [random_color] = useState(() => colors[Math.floor(Math.random() * colors.length)]);


  const [task_stat, settask_stat] = useState([]);          
  const [user_task_states, setUserTaskStates] = useState([]);

   const [accept, setaccept] = useState(0);
   const [totalquests,settotalquests] = useState(0);
  const [reject, setreject] = useState(0);
  const [complete, setcomplete] = useState(0);
  const [aura_count, setaura] = useState(0);
  const [gif, setgif] = useState("");
  const [open, setopen] = useState(true);
  const [blogdialog, setblogdialog] = useState(false);
  const [haslogin , sethaslogin] = useState(false);

  const fetchAdminQuests = async () => {
    const adminUID = "SfWRHj0TdHUWyydqkhWdx1HPRYR2";
    const questsRef = collection(db, "Users", adminUID, "tasks");
    try {
      const querySnapshot = await getDocs(questsRef);
      const quests = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      settask_stat(quests);
      settotalquests(Object.keys(quests).length>0 ? Object.keys(quests).length-1 : 0)
    } catch (err) {
    }
  };

  const fetchUserTaskStates = async (userId) => {
    try {
      const ref = collection(db, "Users", userId, "tasks");
      const snapshot = await getDocs(ref);
      const states = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUserTaskStates(states);
    } catch (err) {
    }
  };

  // Merge admin task content with user's personal status for that task
  const merged_tasks = task_stat.map(adminTask => {
    const userState = user_task_states.find(ut => ut.id === adminTask.id);
    return {
      ...adminTask,
      accepted_status: userState?.accepted_status || "pending"
    };
  });

  // Call this on Accept / Reject / Complete
  const updateTaskStatus = async (adminTaskId, newStatus, auraChange = 0) => {
    try {
      const taskRef = doc(db, "Users", user.uid, "tasks", adminTaskId);
      await setDoc(taskRef, 
        { 
          accepted_status: newStatus 
        }, 
        { 
          merge: true 
        });

      setUserTaskStates(prev => 
        {
        const exists = prev.find(t => t.id === adminTaskId);
        if (exists) 
        {
          return prev.map(t => t.id === adminTaskId ? 
            { 
              ...t, accepted_status: newStatus 
            } 
            : t);
        }
        return [...prev, { id: adminTaskId, accepted_status: newStatus }];
      });

      if (auraChange !== 0) 
      {
        const userRef = doc(db, "Users", user.uid);
        await updateDoc(userRef, 
          { 
            aura: increment(auraChange) 
          });
      }
    } catch (err) {
    }
  };

  const addTaskOptimistic = (newTask) => {
  settask_stat(prev => [...prev, newTask]);
};


const rejectchange = async(rejectchange) => {
if (rejectchange !== 0) {
        const userRef = doc(db, "Users", user.uid);
        await updateDoc(userRef, 
          { 
          failed: increment(rejectchange) 
          
        });
      }
    }
  const acceptchange = async(acceptchange) => {

      if (acceptchange !== 0) {
        const userRef = doc(db, "Users", user.uid);
        await updateDoc(userRef, 
          { 
          accepted: increment(acceptchange) 
          
        });
      }
    }
  const completechange = async(completechange) => {
      if (completechange !== 0) {
        const userRef = doc(db, "Users", user.uid);
        await updateDoc(userRef, 
          { 
          completed: increment(completechange) 
          
        });
      }
}

const fetchData = async () => {

  if (!user) {
    return;
  }

  const userDocRef = doc(db, "Users", user.uid); // refers to user doc
  
  try {
    const userDoc = await getDoc(userDocRef); // fetch the single document
    
    if (userDoc.exists()) 
      {
      
        // console.log("User data:", userDoc.data());
        setaccept(userDoc.data().accepted)
        setcomplete(userDoc.data().completed)
        setreject(userDoc.data().failed)
        setgif(userDoc.data().gif_Name.toString())
        setaura(userDoc.data().aura)
        
    } 
    
    else 
      {
    }
  } catch (err) {
    alert("Aura cannot be updated");
  }
};

useEffect(() => {
  if(user)
  {
    fetchData()
  }
},[user])

  useEffect(() => {
    const init = async () => {
      await fetchAdminQuests();
      if (user) {
        await fetchUserTaskStates(user.uid);
      }
    };
    init();
  }, [user]);

 

  return (
    <TasksContext.Provider
      value={{
       
        task_stat,
        merged_tasks,
        totalquests,
        random_color,
        fetchData,
        acceptchange,
        rejectchange,
        completechange,
        updateTaskStatus,
         addTaskOptimistic,
        aura_count, setaura,
        accept, setaccept,
        reject, setreject,
        complete, setcomplete,
        gif, setgif,
        open, setopen,
        blogdialog, setblogdialog,
        
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};