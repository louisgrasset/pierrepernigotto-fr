import "./Experiences.scss";

import { useCallback, useMemo, useState } from "react";

import { Header } from "../../components";
import { fivescryo, regiongrandest } from "../../data";
import { Experience, Position } from "../../types";
import { getPeriodDuration } from "../../utils";

interface ExperienceItemProps {
    position: Position
}

export function ExperienceItem ({ position }: ExperienceItemProps) {
    const [toggle, setToggle] = useState(false);

    return (
        <li className="experience__position-item">
            <h5 className="experience__position-label">{position.label}</h5>
            <p className="experience__position-dates">{position.start.toLocaleString("fr-fr", { year: "numeric", month:"long" })} à {position.end ? position.end.toLocaleString("fr-fr", { year: "numeric", month:"long" }) : "maintenant"} {}</p>
            {
                position.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>{tag}</span>
                ))
            }
            <button className="experience__position-detail__toggle" onClick={() => setToggle(! toggle)} title="Voir le detail">
                {"Voir " +  (toggle ? "moins" : "plus") }
            </button>
            {
                toggle && (
                    <article className="experience__position-detail__content">
                        <ul>
                            {position.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                    </article>
                )
            }
        </li>
    );
}

export function Experiences () {
    const data: Experience[] = useMemo(()=> [
        {
            company: fivescryo,
            positions: [
                {
                    label: "Chargé de Missions IT",
                    start: new Date(2021, 9),
                    details: ["Sensibilisation des Utilisateurs sur la cybersécurité", "Administration du SI Fives Cryo (voir plus bas pour les tâches d'administration)", "Mise en oeuvre de la politique SI groupe au sein de la société"],
                    tags: ["Apprentissage"],
                },
                {
                    label: "Administrateur Systèmes & Réseaux",
                    start: new Date(2020, 9),
                    end: new Date(2021, 8),
                    details: ["Supervision & accompagnement d'un apprenti Technicien IT", "Administration GED & GED Technique", "Administration Serveurs (migration, gestion hyperviseur)", "Administration AD et Serveur de fichiers", "Administration MDM", "Administration Systèmes", "Administration réseaux"],
                    tags: ["Apprentissage"],
                },
                {
                    label: "Technicien Informatique",
                    start: new Date(2020, 7),
                    end: new Date(2021, 8),
                    details: ["Gestion de Parc", "Accompagnement Utilisateurs", "Gestion & achats des consommables IT \n  - Administration Serveurs (migration, gestion hyperviseur)", "Administration AD et Serveur de fichiers", "Formation Utilisateurs (Outils M365, Cybersécurité, Gestion de mdp...)"],
                    tags: ["CDD"],
                },
                {
                    label: "Technicien Informatique",
                    start: new Date(2018, 7),
                    end: new Date(2020, 6),
                    details: ["Gestion de Parc", "Accompagnement Utilisateurs", "Gestion & achats des consommables IT", "Implémentation d'un serveur de stratégies réseaux", "Implémentation d'un serveur de déploiement de postes"],
                    tags: ["Apprentissage"],
                }
            ]
        },
        {
            company: regiongrandest,
            positions: [
                {
                    label: "Conseiller régional des jeunes",
                    start: new Date(2020, 0),
                    end: new Date(2022, 0),
                    details: ["Attribution de subvention après délibération en comité sur les dossiers présentés", "Participation à des actions de sensibilisations centrés sur la politique Jeunesse de la région"],
                    tags: ["Bénévolat"],
                }
            ]
        }
    ], []);

    const getExperienceDuration = useCallback((startPosition: Position, endPosition: Position) =>
        getPeriodDuration(startPosition.start, endPosition.end)
    , []);

    const experiences = useMemo(() =>
        data.map(({ company, positions }) =>
            <div className="experience" key={company.id}>
                <div className="experience__company">
                    <img height="60" width="60" className="experience__company-logo" src={`/images/companies/${company.id}.svg`} alt={company.name} />
                    <div>
                        <h4 className="experience__company-name">{company.name}</h4>
                        <p className="experience__company-location">{company.location} - {getExperienceDuration(positions[positions.length - 1], positions[0])}</p>
                    </div>
                </div>
                <ul className="experience__positions">
                    {
                        positions.map((position, positionIndex)=> (
                            <ExperienceItem key={positionIndex} position={ position }/>
                        ))
                    }
                </ul>
            </div>
        ), [data, getExperienceDuration]
    );

    return (
        <section className="section-experiences" id="experiences">
            <Header content="Experiences professionnelles" />
            <div className="section-experiences__wrapper">
                { experiences }
            </div>
        </section>
    );
}
