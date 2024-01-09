import { BrowserView, MobileView } from "react-device-detect";
import { Logo } from "../logo/Logo";
import "./main.scss"
import { HashRouter } from "react-router-dom";

export function Main() {
    return (<HashRouter>
        {/* Left-top part*/}
        {/* Logo part*/}
        <Logo />
        {/* Right-bottom part*/}
    </HashRouter>);
}