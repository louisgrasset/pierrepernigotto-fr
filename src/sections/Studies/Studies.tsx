import "./Studies.scss";
import "keen-slider/keen-slider.min.css";

import { Header, Slider } from "../../components";
import { studies } from "../../data";
import { Study } from "../../types";
import { getPeriodDuration } from "../../utils/date";

interface StudyItemProps {
    study: Study
}

export function StudyItem ({ study }: StudyItemProps) {
    return (
        <div className="study">
            <div className="study__wrapper">
                <header className="study__header">
                    <img width="40" height="40" src={`/images/companies/${study.company.id}.svg`} alt={study.company.name} />
                    <h4>{study.company.name} <span style={{ color: study.company?.color }}>({study.company.location})</span>
                        <span className="study__tag" style={{ backgroundColor: study.company?.color }}>{study.tag}</span>
                    </h4>
                </header>
                <h5 className="study__label">
                    {study.label}
                </h5>
                <ul className="study__details">
                    {study.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
            <footer className="study__footer" style={{ backgroundColor: study.company?.color }}>
                <span>{study.start.toLocaleString("fr-fr", { year: "numeric", month:"long" })} à {study.end.toLocaleString("fr-fr", { year: "numeric", month:"long" })}</span>
                <span>{getPeriodDuration(study.start, study.end)}</span>
            </footer>
        </div>
    );
}

export function Studies () {
    return (
        <section className="section-studies" id="formation">
            <Header content="Formation &amp; Alternance" />
            <Slider slides={
                studies.map((studyPair, studyPairIndex) => (
                    <div key={studyPairIndex} className="section-studies__slide keen-slider__slide">
                        <StudyItem study={studyPair[0]}/>
                        <StudyItem study={studyPair[1]}/>
                    </div>
                ))
            } />
        </section>
    );
}
