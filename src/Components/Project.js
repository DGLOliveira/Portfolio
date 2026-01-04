import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLink, FaFilePdf } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function Projects({ project, projectIndex }) {
    const totalSlides = project.slides.length;
    const slideContainer = useRef(null)
    const [slide, setSlide] = useState(0);

    //Handles slide navigation buttons
    const handleSlideButton = (direction) => {
        if (direction === 1 && slide < totalSlides - 1) {
            setSlide(slide => slide + 1)
            if (slideContainer) {
                slideContainer.current.children[slide + 1].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
            }
        } else if (direction === -1 && slide > 0) {
            setSlide(slide => slide - 1)
            if (slideContainer) {
                slideContainer.current.children[slide - 1].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
            }
        }
    }

    const handleSlideInput = (index) => {
        setSlide(index)
        if (slideContainer) {
            slideContainer.current.children[index].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
        }
    }

    //Corrects the scroll to the current slide when the window is resized
    const resizeAdjustScroll = () => {
        console.log("resized")
        if (slideContainer) {
            slideContainer.current.scrollTo(slideContainer.current.children[slide].scrollWidth * slide, 0)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeAdjustScroll)
        return () => {
            window.removeEventListener("resize", resizeAdjustScroll)
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
                        <div className="projectSlideNav">
                            <button onClick={() => handleSlideButton(-1)} disabled={slide === 0}><IoIosArrowDropleft /></button>
                            <div>
                                {project.slides.map((_slide, index) => {
                                    return <input type="radio" name={projectIndex} value={index} checked={index === slide} onChange={() => handleSlideInput(index)} />
                                })}
                            </div>
                            <button onClick={() => handleSlideButton(1)} disabled={slide === totalSlides - 1}><IoIosArrowDropright /></button>
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