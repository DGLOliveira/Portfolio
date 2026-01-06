import { useState, useContext, useRef, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright, IoIosCloseCircleOutline } from "react-icons/io";
import { Context } from "../Context/Context.js";
import "../Styles/MaximizedCarousel.css"

export default function MaximizedCarousel() {
    const maxSlideContainer = useRef(null);
    const context = useContext(Context);
    const [currSlide, setCurrSlide] = useState(0); //Must be used in order to update radio inputs correctly
    const slide = context.maximizedCarouselSlide;
    const { slides, totalSlides, projectIndex, handleSlideButton, handleSlideInput } = context.carouselData;
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
        context.setCarouselData({
            slides: [],
            totalSlides: 0,
            projectIndex: 0,
            handleSlideButton: () => { },
            handleSlideInput: () => { }
        })
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
                <div ref={maxSlideContainer} id="MaxSlideContainer">
                    {slides.map((slide, index) => {
                        return (
                            <img
                                key={index}
                                src={slide.url}
                                alt={slide.title}
                            />
                        )
                    })}
                </div>
                <div id="MaxSlideNav">
                    <button onClick={() => handleSlideButton(-1, slide)} disabled={slide === 0}><IoIosArrowDropleft /></button>
                    <div>
                        {slides.map((_slide, index) => {
                            return <input type="radio" name={projectIndex} value={index} key={index} checked={index === currSlide} onChange={() => handleSlideInput(index)} />
                        })}
                    </div>
                    <button onClick={() => handleSlideButton(1, slide)} disabled={slide === totalSlides - 1}><IoIosArrowDropright /></button>
                </div>
            </div>
        </div>
    )
}