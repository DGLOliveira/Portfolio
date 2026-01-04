import { useState } from "react";
import { FaGithub, FaLink, FaFilePdf } from "react-icons/fa";
export default function Projects({ project, index }) {
    const [slide, setSlide] = useState(0);

    return (
        <div key={index} id={"project" + index} className="project">
            <div>
                <h2 className="projectName">{project.name}</h2>
                <div>
                    <div className="projectSlides">
                        <div className="projectSlideContainer">
                            {project.slides.map((slide, index) => {
                                return (
                                    <img
                                        key={index}
                                        onClick={() => {
                                            setSlide(index);
                                        }}
                                        src={slide.url}
                                        className={slide.type === "image" ? "projectSlideImage" : "projectSlideVideo"}
                                        alt={slide.title}
                                    />
                                )
                            })}
                        </div>
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
}