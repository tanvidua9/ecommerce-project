import { createContext } from "react";

export const UserContext = createContext({
     user: undefined,
     setUser: () => {},
});


export const AlertContext= createContext();
