import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { firestore, auth } from "../lib/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  DocumentData,
  Query,
} from "firebase/firestore";

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      // Define async function
      // TODO I DONT LOVE THIS QUERY
      const fetchData = async (q: Query<unknown> | Query<DocumentData>) => {
        const data = await getDocs(q);
        if (data.empty) {
          setUsername("");
        } else {
          setUsername(data.docs[0].id);
        }
      };

      // Set up Database
      const db = getFirestore();
      const usersRef = collection(db, "usernames");
      const q = query(usersRef, where("uid", "==", user.uid));
      fetchData(q);
    } else {
      setUsername("");
    }
  }, [user]);

  return { user, username, setUsername };
}
