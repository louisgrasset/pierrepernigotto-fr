import "./Hero.scss";

import { Link } from "react-scroll";

import { Navigation, Profile } from "../../components";

export function Hero () {
    return (
        <section id='hero' className="section-hero">
            <Navigation />
            <div className="section-hero__wrapper">
                <div className="section-hero__first">
                    <h1 className='section-hero__header'>
                        Pierre<br />Pernigotto<span>.</span>
                    </h1>
                    <h2 className='section-hero__subcontent'>
                    Actuellement Chargé de missions IT chez <a href="https://www.fivesgroup.com/fr/energy-cryogenics" target="_blank" rel="noreferrer">Fives Cryo</a>, je suis prêt à entamer le prochain chapitre de ma carrière professionnelle.<br /><br />
                    </h2>
                    <div className="section-hero__actions">
                        <Link
                            className='button button--primary'
                            to="experiences"
                            smooth={true}
                            duration={500}
                            offset={- 50}>
                                En savoir plus
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.2992 0V8.99004L1.697 5.46469L0 7.12549L5.65145 12.6564C5.87659 12.8763 6.18184 13 6.5 13C6.81816 13 7.12341 12.8763 7.34855 12.6564L13 7.12549L11.303 5.46469L7.7008 8.99004V0H5.2992Z" fill="currentColor"/>
                            </svg>
                        </Link>

                        <Link
                            className='button button--secondary'
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={- 50}>
                            Prendre contact
                        </Link>
                    </div>
                </div>
                <div className="section-hero__second">
                    <Profile />
                </div>
            </div>
        </section>
    );
}
