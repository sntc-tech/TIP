import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const createUserDoc = async (userDoc: User) => {
  const userDocRef = doc(db, "users", userDoc.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userDoc;
    let registeredEvents: string[] = [];

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        registeredEvents,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return userDocRef;
};

export const getUserDoc = async (userID: string) => {
  const userDocRef = doc(db, "users", userID);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    throw new Error("User not found!");
  }
  return userSnapshot.data();
};
