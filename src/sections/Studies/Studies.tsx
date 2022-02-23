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
                    <img width="auto" height="40" src={`/images/companies/${study.company.id}.svg`} alt={study.company.name} />
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
    );
}
