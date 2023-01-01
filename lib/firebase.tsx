import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useUser } from "./context";
import { PostStruct } from "./../types/posts";

// TODO This needs to be stored in a config file that is NOT pushed to github
const firebaseConfig = {
  apiKey: "AIzaSyCwZl0EPoG9hLNYfeioMbHb5oGg_LZiVQ4",
  authDomain: "art-finder-a0157.firebaseapp.com",
  projectId: "art-finder-a0157",
  storageBucket: "art-finder-a0157.appspot.com",
  messagingSenderId: "3342824917",
  appId: "1:3342824917:web:893449f2bc8246f8beb95c",
  measurementId: "G-NZ8K59K9V4",
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const provider = new GoogleAuthProvider();

export const increment = firebase.firestore.FieldValue.increment;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username: String) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export async function getUserWithEmail(email: String) {}

export async function logOutUser() {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(
  doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data!.createdAt.toMillis(),
    updatedAt: data!.updatedAt.toMillis(),
  };
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToPostStruct(
  doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
): PostStruct {
  const data = doc.data();

  const postStruct: PostStruct = {
    title: data!.title,
    content: data!.content,
    published: data!.published,
    createdAt: data!.createdAt.toMillis(),
    updatedAt: data!.updatedAt.toMillis(),
  };
  return postStruct;
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
