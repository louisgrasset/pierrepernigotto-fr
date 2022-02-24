import "./Portfolio.scss";

import { useCallback } from "react";

import { Header, ProjectItem, Slider } from "../../components";
import { bacPlus2Projects, bacPlus3Projects, bacPlus5Projects, endOfStudyProjects } from "../../data";
import { Project } from "../../types";

export function Portfolio () {
    const slidesForProject = useCallback((projects: Project[])=> (
        projects.map((project, projectIndex) =>  <ProjectItem project={project} key={projectIndex} />)
    ), []);

    return (
        <section className="section-portfolio">
            <div className="section-portfolio__wrapper">
                <Header content="Projets de fin d'études"/>
                <Slider withBreakpoints>
                    {
                        slidesForProject(endOfStudyProjects)
                    }
                </Slider>
                <Header content="Projets Bac+5"/>
                <Slider withBreakpoints>
                    {
                        slidesForProject(bacPlus5Projects)
                    }
                </Slider>
                <Header content="Projets Bac+3"/>
                <Slider withBreakpoints>
                    {
                        slidesForProject(bacPlus3Projects)
                    }
                </Slider>
                <Header content="Projets Bac+2"/>
                <Slider withBreakpoints>
                    {
                        slidesForProject(bacPlus2Projects)
                    }
                </Slider>
            </div>
        </section>
    );
}
