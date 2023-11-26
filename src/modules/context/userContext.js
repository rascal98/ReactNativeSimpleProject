import React, { createContext, useState } from "react";


export const UserContext= createContext();

export const UserProvider = ({ children }) => {
    const [user, setUserInfo] = useState(null);
  
    return (
      <UserContext.Provider value={{ user, setUserInfo }}>
        {children}
      </UserContext.Provider>
    );
  };