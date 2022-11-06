/* eslint-disable react/jsx-no-target-blank */
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
                    Ingénieur Systèmes, Réseaux & Cybersécurité  chez <a href="https://www.fivesgroup.com/fr/energy-cryogenics" target="_blank" rel="noreferrer">Fives Cryo</a>.
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
                    <p className="section-hero__socials">N'hésitez pas à m'ajouter sur
                        <a href="https://www.linkedin.com/in/pierre-pernigotto-aa387b181/" target="_blank">
                            <span>
                                <svg width="20" height="20" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_67_2)">
                                        <path d="M0 5.46C0.0210819 3.99416 0.622303 2.59644 1.67195 1.57303C2.7216 0.549619 4.1341 -0.016029 5.6 -2.86527e-07H70.17C71.6359 -0.016029 73.0484 0.549619 74.098 1.57303C75.1477 2.59644 75.7489 3.99416 75.77 5.46V70.79C75.7489 72.2558 75.1477 73.6536 74.098 74.677C73.0484 75.7004 71.6359 76.266 70.17 76.25H5.6C4.1341 76.266 2.7216 75.7004 1.67195 74.677C0.622303 73.6536 0.0210819 72.2558 0 70.79L0 5.46Z" fill="currentColor"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M23 63.83V29.4H11.52V63.83H23ZM17.25 24.7C21.25 24.7 23.72 22.05 23.72 18.75C23.72 15.45 21.24 12.8 17.32 12.8C13.4 12.8 10.85 15.37 10.85 18.75C10.85 22.13 13.33 24.7 17.17 24.7H17.25Z" fill="white"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.3 63.83H40.74V44.6C40.6975 43.6547 40.8262 42.7095 41.12 41.81C41.5475 40.5899 42.3422 39.5321 43.3951 38.7819C44.4479 38.0316 45.7072 37.6258 47 37.62C51.14 37.62 52.8 40.78 52.8 45.41V63.83H64.23V44.09C64.23 33.51 58.59 28.59 51.06 28.59C48.9616 28.5039 46.8803 29.0001 45.0465 30.0238C43.2127 31.0475 41.698 32.5586 40.67 34.39H40.74V29.39H29.3C29.45 32.62 29.3 63.82 29.3 63.82V63.83Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_67_2">
                                            <rect width="75.77" height="76.25" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>&nbsp;Linkedin
                            </span></a>.
                    </p>
                </div>
                <div className="section-hero__second">
                    <Profile />
                </div>
            </div>
        </section>
    );
}
