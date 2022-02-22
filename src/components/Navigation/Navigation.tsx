import "./Navigation.scss";
import { Link as Link } from "react-scroll";

export function Navigation () {
    return (
        <nav className="navigation">
            <a className="navigation-logo" href="./">PierrePernigotto<span>.fr</span></a>
            <ul className="navigation-list">
                <li className="navigation-list__item">
                    <Link
                        to="experiences"
                        smooth={true}
                        duration={500}
                        offset={- 50}>
                        Experiences Professionnelles
                    </Link>
                </li>
                <li className="navigation-list__item">
                    <Link
                        to="formation"
                        smooth={true}
                        duration={500}
                        offset={- 50}>
                        Formation &amp; Alternance
                    </Link>
                </li>
                <li className="navigation-list__item">
                    <Link
                        to="competences"
                        smooth={true}
                        duration={500}
                        offset={- 50}>
                        Compétences
                    </Link>
                </li>
                <li className="navigation-list__item">
                    <Link
                        to="projets"
                        smooth={true}
                        duration={500}
                        offset={- 50}>
                        Projets
                    </Link>
                </li>
                <li className="navigation-list__item">
                    <Link
                        to="entrepreunariat"
                        smooth={true}
                        duration={500}
                        offset={- 50}>
                        Entrepreunariat
                    </Link>
                </li>
                <li className="navigation-list__item">
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={- 50}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}