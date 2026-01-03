import { useContext, useState, useEffect } from "react";
import { Context } from "./../Context/Context.js";
import DarkMode from "./DarkMode.js";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

export default function Nav() {
    const context = useContext(Context);
    const navList = {
        "intro": "Home",
        "about": "About me",
        "project0": "Projects",
        "contact": "Get in touch"
    }
    const [highlightNav, setHighlightNav] = useState("intro");

    useEffect(()=>{
        if(navList[context.scrollView]){
            setHighlightNav(context.scrollView)
        }else{
            //Accounts for all other project pages besides the first one
            setHighlightNav("project0")
        }
    },[context])

    const handleScrollButton = (direction) =>{
        let currIndex = 0;
        context.scrollList.forEach((item, index)=>{
            if(item === context.scrollView){
                currIndex = index;
            }
        })
        if(currIndex > 0 && direction === -1){
            document.getElementById(context.scrollList[currIndex-1]).scrollIntoView({ behavior: "smooth" })
            context.setScrollView(context.scrollList[currIndex-1]) 
        }else if(currIndex < context.scrollList.length-1 && direction === 1){
            document.getElementById(context.scrollList[currIndex+1]).scrollIntoView({ behavior: "smooth" })
            context.setScrollView(context.scrollList[currIndex+1])
        }
    }

    return (
        <>
            <nav>
                {Object.keys(navList).map((key) => (
                    <div
                        key={key}
                        style={highlightNav === key ? { color: "var(--currentNavHighlight)" } : {}}
                        onClick={() => { document.getElementById(key).scrollIntoView({ behavior: "smooth" }) }}
                    >{navList[key]}
                    </div>
                ))}
                <DarkMode />
            </nav>
            <button
                id="scrollUp"
                className="scrollButton"
                style={{ opacity: context.scrollView === "intro" ? 0 : 1 }}
                onClick={()=>handleScrollButton(-1)}
            >
                <FaAngleDoubleUp />
            </button>
            <button
                id="scrollDown"
                className="scrollButton"
                style={{ opacity: context.scrollView === "contact" ? 0 : 1 }}
                onClick={()=>handleScrollButton(1)}
            >
                <FaAngleDoubleDown />
            </button>
        </>
    );
}

