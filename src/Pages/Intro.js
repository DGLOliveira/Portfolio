import { useEffect, useState } from "react";

export default function Intro() {
    const [introIndex, setIntroIndex] = useState(-1)
    const [introText, setIntroText] = useState("")
    const [welcomeOpacity, setWelcomeOpacity] = useState(0)
    const INTRO = "My name is Davide, I'm an aspiring, self-taught web developer."

    useEffect(() => {
        console.log(welcomeOpacity)
        if (introIndex === -1) {
            if (welcomeOpacity < 1) {
                setTimeout(() => {
                    setWelcomeOpacity(welcomeOpacity => welcomeOpacity + 0.05)
                }, 30)
            } else {
                setTimeout(() => {
                    setIntroIndex(0)
                }, 1000)
            }
        }
    }, [welcomeOpacity])

    useEffect(() => {
        console.log(introIndex)
        if (introIndex > -1 && introIndex < INTRO.length) {
            const interval = setInterval(() => {
                setIntroText(INTRO.substring(0, introIndex + 1))
                setIntroIndex(introIndex => introIndex + 1)
            }, 30);
            return () => clearInterval(interval)
        }
    }, [introIndex])

    return (
        <div id="intro">
            <div>
                <h1 style={{ opacity: welcomeOpacity }}>Welcome</h1>
                <span />
                <p>{introText}</p>
            </div>
        </div >
    );
}