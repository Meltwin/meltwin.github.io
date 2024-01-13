import { NavLink } from "react-router-dom";
import "./menu_button.scss";

export function MenuButton(props: { name: string, href: string, scrollElem: () => void }) {
    return (
        <NavLink to={props.href} className="nav-link" onClick={props.scrollElem}>
            <div className="menu-button">
                <div>{props.name}</div>
            </div>
        </NavLink >)
}