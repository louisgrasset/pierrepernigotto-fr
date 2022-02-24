import "./ProjectItem.scss";

import { useEffect,useState } from "react";

import { Project } from "../../types";

interface ProjectItemProps {
    project: Project;
}

export function ProjectItem ({ project }: ProjectItemProps) {
    const [toggle, setToggle] = useState(false);
    const [toggleArticle, setToggleArticle] = useState(false);

    useEffect(()=> {
        const timeout = setTimeout(()=> setToggleArticle(toggle), 130);
        return () => clearTimeout(timeout);
    }, [toggle]);

    return (
        <div className="section-portfolio__slide keen-slider__slide">
            <div className={"project" + (toggle ? " project--toggle" : "")}>
                <h4 className="project__label">{project.label}</h4>
                <button aria-label="Ouvrir le detail" className="button button--secondary" onClick={()=> setToggle(true)}>Voir le detail</button>
                {
                    <article aria-hidden={toggleArticle} className={"project__article" + (toggleArticle ? " project__article--toggle" : "")}>
                        <button aria-label="Fermer le detail" className="button button--secondary" onClick={()=> setToggle(false)}>&#10005;</button>
                        <h5 className="project__article-label">{project.label}</h5>
                        <div className="project__article-details">
                            {
                                project.details.map((detail, detailId, ) => (
                                    <div className="project__article-details-item" key={detailId}>
                                        {
                                            detail.header && (
                                                <h6 className="project__article-details-item__header" key={detailId}>{detail.header}</h6>
                                            )
                                        }
                                        <ul>
                                            {
                                                detail.items.map((item, itemId) => (
                                                    <li key={itemId}>{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </article>
                }
                <footer className="project__footer">
                    <span>{project.institution}</span>
                    <span>{project.class}</span>
                </footer>
            </div>
        </div>
    );
}
