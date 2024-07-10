"use client";

import React, { createContext, ReactNode, useState } from "react";
import { User } from "firebase/auth";

interface Props {
  children: ReactNode;
}

export const UserContext = createContext<{
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}>({
  currentUser: null,
  setCurrentUser: (user) => null,
});

const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
