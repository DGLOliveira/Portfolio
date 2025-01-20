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
    
    const navList = {
        "intro": {"title":"Home", "targetID": "intro" },
        "about": {"title":"About me", "targetID": "about" },
        "projects": {"title":"Projects", "targetID": "project0"},
        "contact": {"title":"Get in touch", "targetID": "contact"}
    };

    useEffect(() => {
        context.setScrollTopMax(document.getElementById("app").scrollTopMax);
    }, [window.innerHeight]);

    const scrollHandler = (y) => {
        context.setScrollTop(y);
        let middleDiv = document.elementFromPoint(0, window.innerHeight/2);
        console.log(middleDiv);
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