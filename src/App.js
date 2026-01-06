import { useEffect, useContext } from "react";
import { Context } from "./Context/Context.js";
import Layout from "./Components/Layout.js";
import Intro from "./Pages/Intro.js";
import About from "./Pages/About.js";
import Projects from "./Pages/Projects.js";
import Contacts from "./Pages/Contacts.js";
import "./Styles/App.css"

export default function App() {
    const context = useContext(Context);

    //Gets allowed maximum scroll height
    useEffect(() => {
        //Warning: Do not use scrollTopMax, as this paramenter is implemented in Firefox, but not in Chrome or Safari
        //instead calculate value as scrollHeight - clientHeight
        context.setScrollTopMax(document.getElementById("app").scrollHeight-document.getElementById("app").clientHeight);
    }, [window.innerHeight]);

    //Gets scroll position and current section in view, to update nav highlight and background sun position
    //Warning: document.getElementFromPoint is not the best solution, as it may target children and fail the if check
    // for now, it relies on the previous valid value, causing issues where a new page is being displayed but the previous is indicated 
    const scrollHandler = (y) => {
        context.setScrollTop(y);
        let middleDiv = document.elementFromPoint(0, window.innerHeight/2);
        context.scrollList.forEach((item)=>{
            if(middleDiv.id === item && middleDiv.id !== context.scrollView){
                context.setScrollView(item)
            }
        })
    };

    return (
        <>
            <div
                id="app"
                onScroll={(e) => { scrollHandler(e.target.scrollTop); }}
            >
                <Layout />
                <Intro />
                <About />
                <Projects />
                <Contacts />
            </div>
        </>
    );
}