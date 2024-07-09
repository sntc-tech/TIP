"use client";

import React from "react";
import Button from "@/components/button/button";
import { createUserDoc, signInWithGooglePopup } from "@/firebase/firebase";

const LoginPage = () => {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const doc = await createUserDoc(user);
    console.log("User document created: ", doc);
  };

  return (
    <div className="mt-20">
      <Button onClick={logGooglePopupUser}>Sign In</Button>
    </div>
  );
};

export default LoginPage;
