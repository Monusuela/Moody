import { createContext, useEffect, useState } from "react";
import useLocalStorage from "react-use-localstorage";

export const BuyContext = createContext();

export const BuyProvider = ({ children }) => {
    const [User, setUser] = useState("");
    const [Auth, setAuth] = useLocalStorage("auth", "");

    useEffect(() => {
        if (
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(User)
        ) {
            setAuth(User)
        }
    }, [User])


    const contextValues = { User, setAuth, setUser, Auth }

    return <BuyContext.Provider value={contextValues}>
        {children}
    </BuyContext.Provider>
}