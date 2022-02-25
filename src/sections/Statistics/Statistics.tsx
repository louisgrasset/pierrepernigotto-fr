import "./Statistics.scss";

import { useMemo } from "react";
import CountUp from "react-countup";

import { Information } from "../../components";
import { skills } from "../../data";
import { bacPlus2Projects, bacPlus3Projects, bacPlus5Projects, endOfStudyProjects } from "../../data/portfolio";

export function Statistics () {
    const projectsCount = useMemo(()=> bacPlus2Projects.length + bacPlus3Projects.length + bacPlus5Projects.length + endOfStudyProjects.length, []);
    const experience = useMemo(() => new Date().getFullYear() - 2018, []);
    const hardskills = useMemo(()=> skills.map(skill => skill.name), []);
    const softskills = [
        "Proactif", "Organisé", "Polyvalent", "Autodidacte", "Passionné", "Attentif"
    ];

    return (
        <section className="section-statistics">
            <ul className="section-statistics__list">
                <li className="section-statistics__list-item">
                    <span className="section-statistics__list-item__count">
                        +<CountUp start={1} end={experience} duration={0.4}/>
                    </span>
                    Années d'experiences
                </li>
                <li className="section-statistics__list-item">
                    <span className="section-statistics__list-item__count">
                        +<CountUp end={projectsCount} duration={1} />
                    </span>
                    Projets réalisés
                </li>
                <li className='section-statistics__list-item section-statistics__list-item--separator' aria-hidden>/</li>
                <li className="section-statistics__list-item">
                    <span className="section-statistics__list-item__count">Hardskills</span>
                    + <CountUp end={hardskills.length} duration={1} /> technologies maitrisées
                    <Information content={ hardskills.join(", ")+"..." }/>
                </li>
                <li className='section-statistics__list-item section-statistics__list-item--separator' aria-hidden>/</li>
                <li className="section-statistics__list-item">
                    <span className="section-statistics__list-item__count">Softskills</span>
                    + <CountUp end={softskills.length} duration={1} /> qualités
                    <Information content={ softskills.join(", ")+"..." }/>
                </li>
            </ul>
        </section>
    );
}
