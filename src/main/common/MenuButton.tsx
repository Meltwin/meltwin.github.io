import { NavLink } from "react-router-dom";
import "./framed_elem.scss";

export function MenuButton(props: { name: string, href: string, scrollElem: () => void }) {
    return (
        <NavLink to={props.href} className="nav-link" onClick={props.scrollElem} tabIndex={-1}>
            <div className="menu-button">
                <div>{props.name}</div>
            </div>
        </NavLink >)
}