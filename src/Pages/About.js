import {useContext} from "react";
import {Context} from "./../Context/Context.js";
import HTML from "./../Assets/HTML5.svg";
import CSS from "./../Assets/CSS3.svg";
import JS from "./../Assets/JS.svg";
import CHash from "./../Assets/CHash.svg";
import React from "./../Assets/React.svg";
import VSCode from "./../Assets/VSCode.svg";
import { FaGithub } from "react-icons/fa";
//import Figma from "./../Assets/Figma.svg";
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
        ["JS", JS, "Javascript"],
        ["C#", CHash, "C#"]
    ];
    const frameworks = [
        ["React", React, "React"],
        ["ThreeJS", SiThreedotjs, "Three.js"]
    ];
    const tools = [
        ["VSCode", VSCode, "VS Code"],
        ["GitHub", FaGithub , "GitHub"],
        ["Unity", FaUnity, "Unity"],
        ["Blender", Blender, "Blender"],
        ["Cura", Cura, "Cura"]
    ];



    return (
        <div id="about">
            <div id="skills">
                <div>
                    <h5>Languages</h5>
                    <div>
                        {languages.map((language) => (
                            <div key={language[0]} className="skillCard">
                                <img src={language[1]}/>
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
                                {framework[0] === "ThreeJS" ? <SiThreedotjs style={{color: "var(--currentPrimaryFontColor)", fontSize: "5vh"}}/> :
                                <img src={framework[1]}/>}
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
                                {tool[0] === "Unity" ? <FaUnity style={{color: "var(--currentPrimaryFontColor)", fontSize: "5vh"}}/> :
                                tool[0] === "GitHub" ? <FaGithub style={{color: "var(--currentPrimaryFontColor)", fontSize: "5vh"}}/> :
                                <img src={tool[1]}/> }
                                <p>{tool[2]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="aboutText">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis ante. Quisque dapibus erat nec sagittis tempor. Sed ex felis, condimentum et lacus sit amet, iaculis volutpat arcu. Nam vel fermentum elit. Quisque condimentum magna nec mollis congue. Fusce maximus, nisl ac venenatis vestibulum, metus lacus rutrum felis, ac vehicula mauris odio at leo. Suspendisse ac accumsan eros. Nam et sollicitudin mauris. Proin eget dolor leo. </p>
            </div>
        </div>
    );
}