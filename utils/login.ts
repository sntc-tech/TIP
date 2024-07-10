import { createUserDoc, signInWithGooglePopup } from "@/firebase/firebase";

export const loginUser = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDoc(user);
};
