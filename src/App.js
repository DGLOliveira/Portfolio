import { useState, useEffect, useContext } from "react";
import { Context } from "./Context/Context.js";
import Nav from "./Components/Nav.js";
import Intro from "./Pages/Intro.js";
import About from "./Pages/About.js";
import Projects from "./Pages/Projects.js";
import Contacts from "./Pages/Contacts.js";
import "./style.css";

export default function App() {
    const context = useContext(Context);

    //Gets allowed maximum scroll height
    useEffect(() => {
        //do not use scrollTopMax, as this paramenter is implemented in Firefox, but not in Chrome or Safari
        //instead calculate value as scrollHeight - clientHeight
        context.setScrollTopMax(document.getElementById("app").scrollHeight-document.getElementById("app").clientHeight);
    }, [window.innerHeight]);

    //Gets scroll position and current section in view, to update nav highlight and background sun position
    const scrollHandler = (y) => {
        context.setScrollTop(y);
        let middleDiv = document.elementFromPoint(0, window.innerHeight/2);
        if(middleDiv.id === "intro") {
            context.setScrollView("intro");
        }
        else if(middleDiv.id === "about") {
            context.setScrollView("about");
        }
        else if(middleDiv.id === "contact") {
            context.setScrollView("contact");
        }
        else{
            context.setScrollView("project0");
        }
    };

    return (
        <>
            <div
                id="app"
                onScroll={(e) => { scrollHandler(e.target.scrollTop); }}
            >
                <Nav />
                <Intro />
                <About />
                <Projects />
                <Contacts />
            </div>
        </>
    );
}