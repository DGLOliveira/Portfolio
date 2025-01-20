import { useContext } from "react";
import { Context } from "./../Context/Context.js";
import DarkMode from "./DarkMode.js";

export default function Nav() {
    const context = useContext(Context);
    const navList = {
        "intro": "Home",
        "about": "About me",
        "project0": "Projects",
        "contact": "Get in touch"
    }

    return (
        <nav>
            {Object.keys(navList).map((key) => (
                <div
                    key={key}
                    style={context.scrollView === key ? { color: "var(--currentNavHighlight)" } : {}}
                    onClick={() => { document.getElementById(key).scrollIntoView({ behavior: "smooth" }) }}
                >{navList[key]}
                </div>
            ))}
            <DarkMode />
        </nav>
    );
}

