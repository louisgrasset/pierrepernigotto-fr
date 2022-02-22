import "./Studies.scss";
import "keen-slider/keen-slider.min.css";

import { Arrow, Header, Slider } from "../../components";
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react";
import { Study } from "../../types";
import { cesi, fivescryo } from "../../data";
import { getPeriodDuration } from '../../utils/date';

interface StudyItemProps {
    study: Study
}

export function StudyItem ({ study }: StudyItemProps) {
    return (
        <div className="study">
            <div className="study__wrapper">
                <header className="study__header">
                    <img src={`/images/companies/${study.company.id}.svg`} alt={study.company.name} />
                    <h4>{study.company.name} <span>({study.company.location})</span></h4>
                </header>
                <h5 className="study__label">
                    {study.label}
                </h5>
                <ul className="study__details">
                    {study.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                <span className="study__tag">{study.tag}</span>
            </div>
            <footer className="study__footer">
                <span>{study.start.toLocaleString("fr-fr", {year: "numeric", month:"long"})} à {study.end.toLocaleString("fr-fr", {year: "numeric", month:"long"})}</span>
                <span>{getPeriodDuration(study.start, study.end)}</span>
            </footer>
        </div>
    )
}

export function Studies () {
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

    const studies : [Study, Study][] = [
        [
            {
                company: fivescryo,
                label: "Technicien Informatique",
                details: [
                    "Lorem",
                    "Lorem"
                ],
                tag: "Apprentissage",
                start: new Date(2018, 7),
                end: new Date(2020, 6)
            },
            {
                company: cesi,
                label: "Technicien systeme réseau",
                details: [
                    "Lorem",
                    "Lorem"
                ],
                tag: "BAC + 2",
                start: new Date(2018, 8),
                end: new Date(2020, 6)
            },
        ],

        [
            {
                company: fivescryo,
                label: "Technicien Informatique",
                details: [
                    "Lorem",
                    "Lorem"
                ],
                tag: "Apprentissage",
                start: new Date(2018, 7),
                end: new Date(2020, 6)
            },
            {
                company: cesi,
                label: "Technicien systeme réseau",
                details: [
                    "Lorem",
                    "Lorem"
                ],
                tag: "BAC + 2",
                start: new Date(2018, 8),
                end: new Date(2020, 6)
            },
        ],
        [
            {
                company: fivescryo,
                label: "Technicien Informatique",
                details: [
                    "Lorem",
                    "Lorem"
                ],
                tag: "Apprentissage",
                start: new Date(2018, 7),
                end: new Date(2020, 6)
            },
            {
                company: cesi,
                label: "Technicien systeme réseau",
                details: [
                    "Lorem",
                    "Lorem"
                ],
                tag: "BAC + 2",
                start: new Date(2018, 8),
                end: new Date(2020, 6)
            },
        ]
    ] 

    return (
        <section className="section-studies" id="formation">
            <Header content="Formation &amp; Alternance" />
            <Slider>
                {
                    studies.map((studyPair, studyPairIndex) => (
                        <div key={studyPairIndex} className="section-studies__slide keen-slider__slide">
                                <StudyItem study={studyPair[0]}/>
                                <StudyItem study={studyPair[1]}/>
                        </div>
                        ))
                }
            </Slider>
        </section>
    )
}