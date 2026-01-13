import { useState, useContext, useRef, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright, IoIosCloseCircleOutline } from "react-icons/io";
import { Context } from "../Context/Context.js";
import "../Styles/MaximizedCarousel.css"

export default function MaximizedCarousel() {
    const maxSlideContainer = useRef(null);
    const context = useContext(Context);
    const [currSlide, setCurrSlide] = useState(0); //Must be used in order to update radio inputs correctly
    const slide = context.maximizedCarouselSlide;
    const { slides, totalSlides, projectIndex, handleSlideInput } = context.carouselData;
    //Scrolls the slide container to the current slide
    useEffect(() => {
        setCurrSlide(slide)
        if (maxSlideContainer && maxSlideContainer.current.children[slide]) {
            maxSlideContainer.current.scrollTo(maxSlideContainer.current.children[slide].scrollWidth * slide, 0)
        }
    }, [slide, context.maximizedCarousel])

    //Closes the maximized carousel and clears the context data
    const closeMaximizedCarousel = () => {
        context.setMaximizedCarousel(false)
        context.setMaximizedCarouselSlide(0)
        handleSlideInput(currSlide)
        context.setCarouselData({
            slides: [],
            totalSlides: 0,
            projectIndex: 0,
            handleSlideInput: () => { }
        })
    }

    //Handles slide navigation radio input, scrolling to the correct slide
    const handleInput = (index) => {
        if (maxSlideContainer) {
            maxSlideContainer.current.children[index].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
        }
    }

    //Handles slide navigation buttons, scrolling to the correct slide
    const handleButton = (direction, currSlide) => {
        if (direction === 1 && currSlide < totalSlides - 1) {
            if (maxSlideContainer) {
                maxSlideContainer.current.children[currSlide + 1].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
            }
        } else if (direction === -1 && currSlide > 0) {
            if (maxSlideContainer) {
                maxSlideContainer.current.children[currSlide - 1].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
            }
        }
    }

    //Updates current slide index when the slide container is scrolled
    const handleScrolling = (e) => {
        const scrollPercentage = e.target.scrollLeft / e.target.scrollWidth;
        setCurrSlide(Math.round(scrollPercentage * totalSlides))
    }

    //Corrects the scroll to the current slide when the window is resized
    const resizeAdjustScroll = () => {
        if (maxSlideContainer && maxSlideContainer.current.children[slide]) {
            maxSlideContainer.current.scrollTo(maxSlideContainer.current.children[slide].scrollWidth * slide, 0)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeAdjustScroll)
        return () => {
            window.removeEventListener("resize", resizeAdjustScroll)
        }
    }, [slide])

    return (
        <div id="maximizedCarousel" style={{ display: context.maximizedCarousel ? "block" : "none" }}>
            <button id="closeMaximizedCarousel" onClick={closeMaximizedCarousel} >
                <IoIosCloseCircleOutline />
            </button>
            <div id="MaxProjectSlides">
                <div ref={maxSlideContainer} id="MaxSlideContainer" onScroll={(e) => handleScrolling(e)}>
                    {slides.map((slide, index) => {
                        return (
                            <>
                                {slide.type === "image" && <img
                                    key={index}
                                    src={slide.url}
                                    alt={slide.title}
                                />}
                                {slide.type.slice(0, 5) === "video" && <video
                                    controls
                                    muted
                                    key={index}
                                    src={slide.url}
                                    alt={slide.title}
                                    poster={slide.cover}
                                    type={slide.type}
                                >
                                    Your browser does not support the video tag.
                                </video>}
                            </>
                        )
                    })}
                </div>
                <div id="MaxSlideNav">
                    <button onClick={() => handleButton(-1, currSlide)} disabled={currSlide === 0}><IoIosArrowDropleft /></button>
                    <div>
                        {slides.map((_slide, index) => {
                            return <input type="radio" name={projectIndex} value={index} key={index} checked={index === currSlide} onChange={() => handleInput(index)} />
                        })}
                    </div>
                    <button onClick={() => handleButton(1, currSlide)} disabled={currSlide === totalSlides - 1}><IoIosArrowDropright /></button>
                </div>
            </div>
        </div>
    )
}