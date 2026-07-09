import { createContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    let firestoreUnsub = null;

    const authUnsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firestoreUnsub) {
        firestoreUnsub();
        firestoreUnsub = null;
      }

      if (!firebaseUser) {
        setuser(null);
        return;
      }

      const docRef = doc(db, "Users", firebaseUser.uid);
      firestoreUnsub = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setuser({
            uid: firebaseUser.uid,
            role: docSnap.data().role,
            login: docSnap.data().login,
          });
        } else {
          setuser(null);
        }
      });
    });

    return () => {
      authUnsub();
      if (firestoreUnsub) firestoreUnsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
