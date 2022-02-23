import "./Contact.scss";

import { Header, Profile } from "../../components";

export function Contact () {
    return (
        <section className="section-contact" id="formation">
            <div className="section-contact__wrapper">
                <Header content="Contact" detail="Envoyez-moi un message ici."/>
                <Profile />
                <form name="contact" action="/#success" method="POST" data-netlify="true" className="section-contact__form">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className='section-contact__form-group-item'>
                        <div className="section-contact__form-item">
                            <input required type="text" placeholder=" " name="firstname" id="firstname" />
                            <label htmlFor="firstname">Prénom</label>
                        </div>
                        <div className="section-contact__form-item">
                            <input required type="text" placeholder=" " name="lastname" id="lastname" />
                            <label htmlFor="lastname">Nom</label>
                        </div>
                    </div>
                    <div className="section-contact__form-item">
                        <input required type="email" placeholder=" " name="email" id="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="section-contact__form-item">
                        <input required type="text" placeholder=" " name="object" id="object" />
                        <label htmlFor="object">Objet</label>
                    </div>
                    <div className="section-contact__form-item">
                        <textarea required placeholder=" " name="message" id="message"></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div className="section-contact__form-item">
                        <button className="button button--primary">Envoyer</button>
                    </div>
                </form>
            </div>
            <p className="attribution">
            &copy; { new Date().getFullYear()} Pierre Pernigotto. <a href="https://louisgrasset.fr">Desgin &amp; développement par Louis Grasset</a>
            </p>
        </section>
    );
}
