import "./Statistics.scss";

import { useMemo } from "react";
import CountUp from "react-countup";

import { Information } from "../../components";

export function Statistics () {
    const experience = useMemo(() => new Date().getFullYear() - 2018, []);
    const hardskills = [
        "mRemote", "VMware", "ESXI", "Gantt Project", "VMware ESXI", "Gantt Project", "Veeam", "Gantt Project", "Veeam"
    ];
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
                        +<CountUp end={15} duration={1} />
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
                    <span className="section-statistics__list-item__count">Softkills</span>
                    + <CountUp end={softskills.length} duration={1} /> qualités
                    <Information content={ softskills.join(", ")+"..." }/>
                </li>
            </ul>
        </section>
    );
}
