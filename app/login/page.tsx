"use client";

import React, { useState } from "react";
import Button from "@/components/button/button";
import { createUserDoc, signInWithGooglePopup } from "@/firebase/firebase";

const LoginPage = () => {
  const [name, setName] = useState("Sign in");

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const doc = await createUserDoc(user);
    setName(user.displayName || "Didn't work");
    console.log("User document created: ", doc);
  };

  return (
    <div className="mt-20">
      <Button onClick={logGooglePopupUser}>Sign In</Button>
      <div className="text-xl font-medium">{name}</div>
    </div>
  );
};

export default LoginPage;
