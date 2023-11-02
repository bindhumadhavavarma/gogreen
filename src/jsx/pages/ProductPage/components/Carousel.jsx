import React, { useCallback, useRef, useState } from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
} from "mdb-react-ui-kit";

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselInner = useRef(null);

    const slideChanged = useCallback(() => {
        const activeItem = carouselInner.current.querySelector(".active");
        setCurrentSlide(
            Array.from(carouselInner.current.children).indexOf(activeItem)
        );
    }, []);

    const changeSlide = useCallback((position) => {
        Array.from(carouselInner.current.children).forEach((el, i) => {
            if (i !== position) {
                el.classList.remove("active");
            } else {
                el.classList.add("active");
                slideChanged();
            }
        });
    }, []);

    return (
        <MDBContainer className="mt-5">
            <MDBCarousel
                id="carouselExampleIndicators"
                showControls
                fade
                onSlide={slideChanged}
            >
                <div ref={carouselInner} className="rounded-3 shadow-1-strong">
                    <MDBCarouselItem className="active">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).webp"
                            alt="..."
                        />
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).webp"
                            alt="..."
                        />
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
                            alt="..."
                        />
                    </MDBCarouselItem>
                </div>

                <div className="carousel-indicators" style={{ marginBottom: "-20px" }}>
                    <button
                        className={`carousel-indicator ${currentSlide === 0 ? "active" : ""}`}
                        onClick={() => changeSlide(0)}
                        style={{ width: "100px" }}
                    >
                        <img
                            className="d-block w-100 img-fluid shadow-1-strong rounded"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).webp"
                        />
                    </button>
                    <button
                        className={`carousel-indicator ${currentSlide === 1 ? "active" : ""}`}
                        onClick={() => changeSlide(1)}
                        style={{ width: "100px" }}
                    >
                        <img
                            className="d-block w-100 img-fluid shadow-1-strong rounded"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).webp"
                        />
                    </button>
                    <button
                        className={`carousel-indicator ${currentSlide === 2 ? "active" : ""}`}
                        onClick={() => changeSlide(2)}
                        style={{ width: "100px" }}
                    >
                        <img
                            className="d-block w-100 img-fluid shadow-1-strong rounded"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
                        />
                    </button>
                </div>
            </MDBCarousel>
        </MDBContainer>
    );
}