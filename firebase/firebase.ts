import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  User,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuMJD0yKrtBVmd1fddPmI0NkDvuQeDq-k",
  authDomain: "test-project-e804f.firebaseapp.com",
  projectId: "test-project-e804f",
  storageBucket: "test-project-e804f.appspot.com",
  messagingSenderId: "978336391253",
  appId: "1:978336391253:web:6b036311742326ec63b4dc",
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDoc = async (userDoc: User) => {
  const userDocRef = doc(db, "users", userDoc.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userDoc;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
      console.log("User document created/updated successfully!");
    } catch (e) {
      console.log(e);
    }
  }

  return userDocRef;
};
