import { useContext } from "react";
import { Context } from "./../Context/Context.js";
import HTML from "./../Assets/HTML5.svg";
import CSS from "./../Assets/CSS3.svg";
import JS from "./../Assets/JS.svg";
import CHash from "./../Assets/CHash.svg";
import React from "./../Assets/React.svg";
import VSCode from "./../Assets/VSCode.svg";
import { FaGithub } from "react-icons/fa";
import Figma from "./../Assets/Figma.svg";
//import ThreeJS from "./../Assets/ThreeJS.svg";
import { SiThreedotjs } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
//import Unity from "./../Assets/Unity.svg";
//import UnityWhite from "./../Assets/UnityWhite.svg";
import Blender from "./../Assets/Blender.svg";
import Cura from "./../Assets/Cura.png";

export default function About() {
    const context = useContext(Context);
    const languages = [
        ["HTML", HTML, "HTML 5"],
        ["CSS", CSS, "CSS 3"],
        ["JS", JS, "Javascript"]
    ];
    const frameworks = [
        ["React", React, "React"],
        ["ThreeJS", SiThreedotjs, "Three.js"]
    ];
    const tools = [
        ["VSCode", VSCode, "VS Code"],
        ["GitHub", FaGithub, "GitHub"],
        ["Figma", Figma, "Figma"],
        ["Unity", FaUnity, "Unity"],
        ["Blender", Blender, "Blender"],
        ["Cura", Cura, "Cura"]
    ];

    const aboutText = ["I’m a passionate, self taught, web developer with a focus in front-end and 3D technologies.",
        "I've started this journey in order to solve my own personal problems and desires, and eventually grew to love coding as more than just a tool or formula, but as an art form. I'm excited by the challenge of tackling complex problems and creating unique and versatile solutions, with a touch of style.",
        "I'm currently looking for work as a web developer, and I'm open to remote work."
    ];



    return (
        <div id="about">
            <div id="skills">
                <div>
                    <h5>Languages</h5>
                    <div>
                        {languages.map((language) => (
                            <div key={language[0]} className="skillCard">
                                <img src={language[1]} />
                                <p>{language[2]}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h5>Frameworks</h5>
                    <div>
                        {frameworks.map((framework) => (
                            <div key={framework[0]} className="skillCard">
                                {framework[0] === "ThreeJS" ? <SiThreedotjs style={{ color: "var(--currentPrimaryFontColor)", fontSize: "5vh" }} /> :
                                    <img src={framework[1]} />}
                                <p>{framework[2]}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h5>Tools</h5>
                    <div>
                        {tools.map((tool) => (
                            <div key={tool[0]} className="skillCard">
                                {tool[0] === "Unity" ? <FaUnity style={{ color: "var(--currentPrimaryFontColor)", fontSize: "5vh" }} /> :
                                    tool[0] === "GitHub" ? <FaGithub style={{ color: "var(--currentPrimaryFontColor)", fontSize: "5vh" }} /> :
                                        <img src={tool[1]} />}
                                <p>{tool[2]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="aboutText">
                {aboutText.map((text, index) => (<p key={index}>{text}</p>))}
            </div>
        </div>
    );
}