import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLink, FaFilePdf } from "react-icons/fa";

export default function Projects({ project, projectIndex }) {
    const totalSlides = project.slides.length;
    const slideContainer = useRef(null)
    const [slide, setSlide] = useState(0);

    const handleSlideButton = (direction) => {
        if (direction === 1 && slide < totalSlides - 1) {
            setSlide(slide => slide + 1)
        } else if (direction === -1 && slide > 0) {
            setSlide(slide => slide - 1)
        }
    }

    useEffect(() => {
        if (slideContainer) {
            slideContainer.current.children[slide].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
        }
    }, [slide])

    return (
        <div key={projectIndex} id={"project" + projectIndex} className="project">
            <div>
                <h2 className="projectName">{project.name}</h2>
                <div>
                    <div className="projectSlides">
                        <div ref={slideContainer} className="projectSlideContainer">
                            {project.slides.map((slide, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={slide.url}
                                        alt={slide.title}
                                    />
                                )
                            })}
                        </div>
                        <div clssName="projectSlideNav">
                            <button onClick={() => handleSlideButton(-1)} disabled={slide === 0}>{"<<"}</button>
                            <div>
                                {project.slides.map((_slide, index)=>{
                                    return <input type="radio" name={projectIndex} value={index} checked={index===slide} onClick={()=>setSlide(index)} />
                                })}
                            </div>
                            <button onClick={() => handleSlideButton(1)} disabled={slide === totalSlides-1}>{">>"}</button>
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