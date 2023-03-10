import {
  createContext,
  ReactElement,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
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
import { onAuthStateChanged } from "firebase/auth";

interface UserData {
  email: String;
  username: String;
}

interface UserContextType {
  user: UserData | null;
  setUser: Dispatch<SetStateAction<UserData | null>>;
}

interface Props {
  children: React.ReactElement;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<UserData | null>(null);

  // On load check if the user is logged in
  useEffect(() => {
    // checkUser();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        getUserDetails(uid);
        // ...
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    setUser(user);
  }, [user]);

  async function getUserDetails(uid: String) {
    const db = getFirestore();
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let tmp: UserData = {
        email: doc.data().email,
        username: doc.data().username,
      };
      setUser(tmp);
    });
  }

  async function checkUser() {
    auth;
    const db = getFirestore();
    const q = query(
      collection(db, "users"),
      where("uid", "==", "Rw0BDsOK6wZtx48q3Sfp33zIoU43")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let tmp: UserData = {
        email: doc.data().email,
        username: doc.data().username,
      };
      setUser(tmp);
    });
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
