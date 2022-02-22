import './Slider.scss';

import { useKeenSlider } from "keen-slider/react"
import { useState, PropsWithChildren } from 'react';
import { Arrow } from '../Arrow';

export function Slider ({ children }: PropsWithChildren<any>) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })
    return (
        <>
        <div className="slider">
                <div ref={sliderRef} className="keen-slider">
                    {
                        children
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
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next() }
                        disabled={ currentSlide === instanceRef.current.track.details.slides.length - 1}
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
                            key={idx}
                            onClick={() => {
                            instanceRef.current?.moveToIdx(idx)
                            }}
                            className={"slider__dot" + (currentSlide === idx ? " active" : "")}
                        ></button>
                        )
                    })}
                </div>
            )}
    </>
    )
}