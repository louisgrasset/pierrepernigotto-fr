import "./Skills.scss";

import { useCallback, useMemo, useState } from "react";

import { Header } from "../../components";
import { skills } from "../../data";
import { Skill } from "../../types";

export function Skills () {
    const filters = useMemo(()=> {
        return [...new Set(skills.reduce((tags: string[], skill) => ([...tags, ...skill.tags]), []))];
    }, []);
    const [activeFilter, setActiveFilter] = useState<string | undefined>("cybersécurité");
    const filteredSkills = useMemo(()=> {
        if (! activeFilter) {
            return skills;
        }
        return [...new Set(skills)].reduce((filtered: Skill[], skill) => {
            return skill.tags.includes(activeFilter) ? [...filtered, skill] : filtered;
        }, []);
    }, [activeFilter]);

    const onFilterClickHandler = useCallback((filter: string) => {
        if (activeFilter === filter) {
            setActiveFilter(undefined);
        } else {
            setActiveFilter(filter);
        }
    }, [activeFilter]);

    return (
        <section className="section-skills" id="competences">
            <Header content="Compétences" />
            <ul className="section-skills__filters">
                {filters.map(filter => (
                    <li key={filter} className={`section-skills__filters-item ${filter === activeFilter ? "is-enabled" : ( activeFilter ? "is-disabled" : "")}`}>
                        <button onClick={() => onFilterClickHandler(filter)}>{filter}</button>
                    </li>
                ))}
            </ul>
            {
                <div className="section-skills__slide keen-slider__slide">
                    {
                        filteredSkills.map(skill => (
                            <div key={skill.id} className="skill-item">
                                {
                                    skill.featured ?
                                        <div className="skill-item__featured">
                                            <img width="12" height="12" src='/images/skills/featured.webp' alt="Outil mis en place par moi-même" title="Outil mis en place par moi-même"/>
                                        </div>
                                        : null
                                }
                                <div className="skill-item__logo">
                                    <img width="60" height="60" src={`/images/skills/${skill.id}.webp`} alt={skill.name} />
                                </div>
                                <div>
                                    <h4 className="skill-item__name">{skill.name}</h4>
                                    <p className="skill-item__detail">{skill.detail}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </section>
    );
}
