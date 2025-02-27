import { FaGithub, FaLink, FaFilePdf } from "react-icons/fa";

export default function Projects() {

    const VIRTUAL_DESKTOP = {
        name: "Virtual Desktop",
        image: "https://github.com/DGLOliveira/Virtual-Desktop/blob/main/docs/start_screen.jpg?raw=true",
        description: [
            "A web app that replicates the GUI of a typical Operating System.",
            "This project was inspired by the old promises of the 2000s and 2010s, with the idea of creating a GUI that is both functional and highly customizable, and presenting a variety of styles and features, such as animated backgrounds, dynamic windows and taskbar widgets.",
            "This is a front-end app, and was made using React, along with a variety of third-party libraries and APIs, is hosted on GitHub Pages.",
            "This project is not meant to have an end, it acts as both a repository for smaller projects and as a portfolio. It is meant to grow with time in both features and functionality, as well as show some of my skills and habilities. There are many plans for it, ranging from more customizability, applications and features, and eventually become a full stack OS that allows for connecting multiple users for shared work or multiplayer games, among others, without resorting to exposing users to security risks that come with screen sharing."
        ],
        github: "https://github.com/DGLOliveira/Virtual-Desktop",
        link: "https://dgloliveira.github.io/Virtual-Desktop/",
    }

    const THREE_PRINT_SHOP = {
        name: "3D Print Shop",
        image: "https://raw.githubusercontent.com/DGLOliveira/3D-Print-Shop/refs/heads/main/docs/Home_Light.jpg",
        description: [
            "A E-Commerce Website for a fake 3D Print Shop.",
            "The project is inspired by my passion for 3D printing and the idea of creating a platform where people can buy 3D models. It follows a standard E-Commerce website structure, with a unique design meant to be both functional and aesthetically pleasing, utilizing a minimalistic approach with a touch of modern style, and is limited to neutral colours.",
            "The website is strictly a front-end app, using React and React Router, it is hosted on GitHub Pages, and does not utilize modern payment methods, instead it relies on a google form system that submits the order to a google sheet.",
            "All the models were printed by me, and with exception to one, all 3D models are available for download for free, with links to the original files and creators, these are utilized under the Creative Commons Attribution 4.0 International License."
        ],
        github: "https://github.com/DGLOliveira/3D-Print-Shop",
        link: "https://dgloliveira.github.io/3D-Print-Shop/",
    }

    const projects = [
        VIRTUAL_DESKTOP,
        THREE_PRINT_SHOP,
    ]

    return (
        <>
            {projects.map((project, index) => {
                return (
                    <div key={index} id={"project" + index} className="project">
                        <div>
                            <h2 className="projectName">{project.name}</h2>
                            <div>
                                <div className="projectImage">
                                    <img src={project.image} />
                                </div>
                                <div>
                                    <div className="projectDescription">
                                        {project.description.map((paragraph, index) => {
                                            return (
                                                <p key={index}>{paragraph}</p>
                                            )
                                        })}
                                    </div>
                                    <div className="projectLinks">
                                        <a
                                            target="_blank"
                                            href={project.link}
                                            style={{ backgroundColor: "royalblue" }}>
                                            <FaLink />
                                            Website
                                        </a>
                                        {/*<a 
                                            target="_blank"
                                            href={project.docs}
                                            style={{ backgroundColor: "red" }}>
                                            <FaFilePdf />
                                            Docs
                                        </a>*/}
                                        <a
                                            target="_blank"
                                            href={project.github}
                                            style={{ backgroundColor: "black" }}>
                                            <FaGithub />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}