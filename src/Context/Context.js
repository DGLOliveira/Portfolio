import {useState, createContext} from "react";

export const Context = createContext({
    darkMode: false,
    setDarkMode: () => {},
    scrollView: "intro",
    setScrollView: () => {},
    scrollTop: 0,
    setScrollTop: () => {},
    scrollTopMax: 0,
    setScrollTopMax: () => {},
    scrollList: [],
    setScrollList: () => {}
});

export default function ContextProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const [scrollView, setScrollView] = useState("intro");
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollTopMax, setScrollTopMax] = useState(0);
    const [scrollList, setScrollList] = useState([]);


    const contextValue = {
        darkMode, 
        setDarkMode,
        scrollView,
        setScrollView,
        scrollTop,
        setScrollTop,
        scrollTopMax,
        setScrollTopMax,
        scrollList,
        setScrollList
    };

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    );
}