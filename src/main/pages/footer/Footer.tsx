import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
    return (<footer>
        <div>Made by <a href="https://github.com/Meltwin" target="_blank" rel="noreferrer">Meltwin</a></div>
        <div><FontAwesomeIcon icon={faCopyright} /> 2021 - 2025</div>
    </footer>);
}