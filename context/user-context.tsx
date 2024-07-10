"use client";

import React, { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export const UserContext = createContext<{
  currentUserID: string | null;
  setCurrentUserID: (userID: string) => void;
}>({
  currentUserID: null,
  setCurrentUserID: () => null,
});

const UserProvider = ({ children }: Props) => {
  const [currentUserID, setCurrentUserID] = useState<string | null>(null);
  const value = { currentUserID, setCurrentUserID };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
