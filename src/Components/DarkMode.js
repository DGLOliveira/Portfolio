import { useContext, useEffect } from "react";
import { Context } from "./../Context/Context.js";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkMode() {
    const context = useContext(Context);
    const currentThemeVar = [
        "--currentPrimaryFontColor",
        "--currentSecondaryFontColor",
        "--currentFontShadow",
        "--currentBorderColor",
        "--currentNavBackground",
        "--currentNavHighlight",
        "--currentBackgroundOverlay"
    ]
    const darkTheme = [
        getComputedStyle(root).getPropertyValue("--darkPrimaryFontColor"),
        getComputedStyle(root).getPropertyValue("--darkSecondaryFontColor"),
        getComputedStyle(root).getPropertyValue("--darkFontShadow"),
        getComputedStyle(root).getPropertyValue("--darkBorderColor"),
        getComputedStyle(root).getPropertyValue("--darkNavBackground"),
        getComputedStyle(root).getPropertyValue("--darkNavHighlight"),
        getComputedStyle(root).getPropertyValue("--darkBackgroundOverlay")
    ];
    const lightTheme = [
        getComputedStyle(root).getPropertyValue("--lightPrimaryFontColor"),
        getComputedStyle(root).getPropertyValue("--lightSecondaryFontColor"),
        getComputedStyle(root).getPropertyValue("--lightFontShadow"),
        getComputedStyle(root).getPropertyValue("--lightBorderColor"),
        getComputedStyle(root).getPropertyValue("--lightNavBackground"),
        getComputedStyle(root).getPropertyValue("--lightNavHighlight"),
        getComputedStyle(root).getPropertyValue("--lightBackgroundOverlay")
    ];

    //Gets dark mode value from browser
    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? context.setDarkMode(true)
            : context.setDarkMode(false);
    }, []);

    //Observes changes to dark mode
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        event.matches ? context.setDarkMode(true) : context.setDarkMode(false);
    });

    //Updates color scheme
    useEffect(() => {
        if (context.darkMode) {
            currentThemeVar.forEach((value, index) => document.querySelector(":root").style.setProperty(value, darkTheme[index]));
        } else {
            currentThemeVar.forEach((value, index) => document.querySelector(":root").style.setProperty(value, lightTheme[index]));
        }
    }, [context.darkMode]);


    return (
        <div style={{ fontSize: "3vh", fontWeight: "normal", justifyContent: "center", alignItems: "center", display: "flex" }} onClick={() => context.setDarkMode(!context.darkMode)}>
            {context.darkMode ? (
                <FaSun />
            ) : (
                <FaMoon />
            )}
        </div>
    );
}