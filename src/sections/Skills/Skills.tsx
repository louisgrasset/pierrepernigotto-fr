import "./Skills.scss";

import { useMemo } from "react";

import { Header, Slider } from "../../components";
import { Skill } from "../../types";

export function Skills () {
    const skills: Skill[] = useMemo(() => [
        {
            name: "Gantt Project",
            id: "ganttproject",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Gantt Project",
            id: "ganttproject",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Gantt Project",
            id: "ganttproject",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Gantt Project",
            id: "ganttproject",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "AAAA Project",
            id: "ganttproject",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Gantt Project",
            id: "ganttproject",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ], []);

    const skillPagination = useMemo(()=> {
        const remainingSkills = Array.from(skills);
        const pagination : Skill[][] = [[]];
        let current = 0;
        while (remainingSkills.length > 0) {
            for (let index = 0; index < 4; index ++) {
                const skill = remainingSkills.shift();
                if (index === 0) {
                    pagination[current] = [];
                }
                if (skill) {
                    pagination[current].push(skill);
                }
                if (index === 3) {
                    current += 1;
                }
            }
        }
        return pagination;
    },[skills]);

    return (
        <section className="section-skills" id="competences">
            <Header content="Compétences" />
            <Slider>
                {
                    skillPagination.map((slide, slideIndex) => (
                        <div key={slideIndex} className="section-skills__slide keen-slider__slide">
                            {
                                slide.map(skill => (
                                    <div key={skill.id} className="skill-item">
                                        <img className="skill-item__logo" src={`/images/skills/${skill.id}.svg`} alt={skill.name} />
                                        <div>
                                            <h5 className="skill-item__name">{skill.name}</h5>
                                            <p className="skill-item__detail">{skill.detail}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
}
