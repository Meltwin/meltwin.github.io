import { faEarth, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { ContactItem } from "./ContactItem"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function ContactCol() {
    return <div className="contact">
        <div>
            <p className={`framedA-title`}>Contact</p>
            <div id="contactName">
                <div>
                    <a href="https://github.com/Meltwin" tabIndex={-1} target="_blank"><img src="https://github.com/meltwin.png" alt="Meltwin" />
                        <span className="tooltip-text">Visit my Github</span></a>
                </div>
                <div>
                    <p id="pseudo">Meltwin</p>
                    <p id="name">Geoffrey Côte</p>
                </div>
            </div>
            <div id="contactLink">
                <ContactItem icon={faLinkedin} title={"linkedin.com/in/geoffrey-côte"} href="https://linkedin.com/in/geoffrey-côte" link_name="Linkedin" />
                <ContactItem icon={faGithub} title={"github.com/Meltwin"} href="https://github.com/Meltwin" link_name="Github" />
                <ContactItem icon={faEarth} title={"meltwin.fr"} href="https://meltwin.fr" link_name="Website" />
                <ContactItem icon={faEnvelope} title={"contact@meltwin.fr"} href="mailto:contact@meltwin.fr" link_name="E-mail" />
            </div>
        </div>
    </div>
}