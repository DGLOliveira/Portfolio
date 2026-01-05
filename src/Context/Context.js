import { useState, createContext } from "react";

export const Context = createContext({
    darkMode: false,
    setDarkMode: () => { },
    scrollView: "intro",
    setScrollView: () => { },
    scrollTop: 0,
    setScrollTop: () => { },
    scrollTopMax: 0,
    setScrollTopMax: () => { },
    scrollList: [],
    setScrollList: () => { },
    maximizedCarousel: false,
    setMaximizedCarousel: () => { },
    carouselData: {},
    setCarouselData: () => { },
});

export default function ContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [scrollView, setScrollView] = useState("intro");
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollTopMax, setScrollTopMax] = useState(0);
    const [scrollList, setScrollList] = useState([]);
    const [maximizedCarousel, setMaximizedCarousel] = useState(false);
    const [carouselData, setCarouselData] = useState({
        slides: [],
        slide: 0,
        totalSlides: 0,
        projectIndex: 0,
        handleSlideButton: () => { },
        handleSlideInput: () => { }

    });

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
        setScrollList,
        maximizedCarousel,
        setMaximizedCarousel,
        carouselData,
        setCarouselData
    };

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    );
}