import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact_link.scss"

type ContactItemsProps = {
    icon: IconDefinition
    link_name?: string
    title: string
    href?: string
};

const show_title = false;

export function ContactItem(props: ContactItemsProps) {
    return <div className="contactItem">
        <FontAwesomeIcon icon={props.icon} />
        <span className="contactItemTitle">{(show_title && props.link_name != undefined) ? `${props.link_name}: ` : ""}</span>
        <a href={props.href} target="_blank" className="contactLink">{props.title}</a>
    </div>;
}