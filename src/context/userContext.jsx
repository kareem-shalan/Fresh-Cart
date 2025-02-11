import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let userContext = createContext();

export default function UserContextProvider(prop) {
  const [userLogin, setuserLogin] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("UserToken")) {
      setuserLogin(localStorage.getItem("UserToken"));
    }
  }, []);

  return (
    <>
      <userContext.Provider value={{ userLogin, setuserLogin }}>
        {prop.children}
      </userContext.Provider>
    </>
  );
}
