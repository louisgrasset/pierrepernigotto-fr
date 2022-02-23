import "./Navigation.scss";

import { useEffect, useState } from "react";
import { Link as Link } from "react-scroll";

export function Navigation () {
    const [toggle, setToggle] = useState(false);

    useEffect(()=> {
        toggle ?
            document.querySelector("body")?.classList.add("frozen")
            :
            document.querySelector("body")?.classList.remove("frozen");
    }, [toggle]);

    return (
        <nav className={"navigation" + (toggle ? " navigation--active" : "")}>
            <a className="navigation__logo" href="./">Pierre.Pernigotto<span>.fr</span></a>
            <button className="navigation__toggle" onClick={()=> setToggle(! toggle)}>
                {toggle ? "Fermer" : "Menu" }
            </button>
            <div className="navigation__wrapper">
                <ul className="navigation__list">
                    <li className="navigation__list-item">
                        <Link
                            onClick={()=> setToggle(false)}
                            to="experiences"
                            smooth={true}
                            duration={500}
                            offset={- 50}>
                            Experiences Professionnelles
                        </Link>
                    </li>
                    <li className="navigation__list-item">
                        <Link
                            onClick={()=> setToggle(false)}
                            to="formation"
                            smooth={true}
                            duration={500}
                            offset={- 50}>
                            Formation &amp; Alternance
                        </Link>
                    </li>
                    <li className="navigation__list-item">
                        <Link
                            onClick={()=> setToggle(false)}
                            to="competences"
                            smooth={true}
                            duration={500}
                            offset={- 50}>
                            Compétences
                        </Link>
                    </li>
                    <li className="navigation__list-item">
                        <Link
                            onClick={()=> setToggle(false)}
                            to="projets"
                            smooth={true}
                            duration={500}
                            offset={- 50}>
                            Projets
                        </Link>
                    </li>
                    <li className="navigation__list-item">
                        <Link
                            onClick={()=> setToggle(false)}
                            to="entrepreunariat"
                            smooth={true}
                            duration={500}
                            offset={- 50}>
                            Entrepreunariat
                        </Link>
                    </li>
                    <li className="navigation__list-item">
                        <Link
                            onClick={()=> setToggle(false)}
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={- 50}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
