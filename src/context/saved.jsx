import Item from "antd/es/list/Item";
import { Children, useEffect } from "react";
import { createContext } from "react";
import useLocalStorage from "react-use-localstorage";

const SavedContext = createContext();

const SavedProvider = ({children}) => {
    const [SavedLocal, setSavedLocal] = useLocalStorage("saved", []);

    // useEffect(() => {
    //     setSaved([])
    // }, [])

    const handleSaved = ( item ) => {
      setSavedLocal(JSON.stringify([{ ...item, saved: true}, ...SavedLocal]))
    }
    
    const contextValue = {SavedLocal, setSavedLocal, handleSaved};

    return <SavedContext.Provider value={contextValue}>
        {children}
    </SavedContext.Provider>
}

export {SavedContext, SavedProvider};