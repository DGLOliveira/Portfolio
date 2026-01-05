import { useState, useEffect, useRef, useContext } from "react";
import { FaGithub, FaLink, FaFilePdf } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Context } from "../Context/Context.js";

export default function Projects({ project, projectIndex }) {
    const totalSlides = project.slides.length;
    const slideContainer = useRef(null)
    const [slide, setSlide] = useState(0);
    const context = useContext(Context);
    const { maximizedCarousel, setMaximizedCarousel, maximizedCarouselSlide, setMaximizedCarouselSlide, carouselData, setCarouselData } = context;

    //Handles slide navigation buttons
    //Note: For function to work outside of this component, the current slide must be passed as a parameter
    const handleSlideButton = (direction, currSlide) => {
        if (direction === 1 && currSlide < totalSlides - 1) {
            setSlide(currSlide + 1)
            setMaximizedCarouselSlide(currSlide + 1)
            if (slideContainer) {
                slideContainer.current.children[currSlide + 1].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
            }
        } else if (direction === -1 && currSlide > 0) {
            setSlide(currSlide - 1)
            setMaximizedCarouselSlide(currSlide - 1)
            if (slideContainer) {
                slideContainer.current.children[currSlide - 1].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
            }
        }
    }

    //Handles slide navigation radio input
    const handleSlideInput = (index) => {
        setSlide(index)
        setMaximizedCarouselSlide(index)
        if (slideContainer) {
            slideContainer.current.children[index].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
        }
    }

    //Displays the maximized carousel with the current project slides, when a slide is clicked
    const handleMaximizeCarousel = () => {
        setMaximizedCarousel(true)
        setMaximizedCarouselSlide(slide)
        setCarouselData({
            slides: project.slides,
            totalSlides: totalSlides,
            projectIndex: projectIndex,
            handleSlideButton: handleSlideButton,
            handleSlideInput: handleSlideInput
        })
    }

    //Corrects the scroll to the current slide when the window is resized
    const resizeAdjustScroll = () => {
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
                        <div ref={slideContainer} className="projectSlideContainer" onClick={() => handleMaximizeCarousel()}>
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
                            <button onClick={() => handleSlideButton(-1, slide)} disabled={slide === 0}><IoIosArrowDropleft /></button>
                            <div>
                                {project.slides.map((_slide, index) => {
                                    return <input type="radio" name={projectIndex} value={index} checked={index === slide} onChange={() => handleSlideInput(index)} />
                                })}
                            </div>
                            <button onClick={() => handleSlideButton(1, slide)} disabled={slide === totalSlides - 1}><IoIosArrowDropright /></button>
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
                                            Docs //Currently unavailable
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