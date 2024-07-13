import "./Slider.scss";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

import { Arrow } from "../Arrow";

interface SliderProps {
    withBreakpoints?: boolean;
    slides: JSX.Element[]
}

export function Slider ({ withBreakpoints = false, slides }: SliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
        breakpoints: withBreakpoints ? (
            {
                "(min-width: 768px)": {
                    slides: { perView: 2, spacing: 5 },
                },
                "(min-width: 1380px)": {
                    slides: { perView: 3, spacing: 10 },
                },
            }
        ) : undefined,
        slides: withBreakpoints ? ({ perView: 1 }) : undefined,
        renderMode: "performance"
    });
    return (
        <>
            <div className="slider">
                <div ref={sliderRef} className="keen-slider">
                    {
                        slides
                    }
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="slider__dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                aria-label={`Diapositive numéro ${idx}`}
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                                className={"slider__dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        );
                    })}
                </div>
            )}
        </>
    );
}
