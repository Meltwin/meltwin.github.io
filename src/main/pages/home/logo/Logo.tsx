import { ScrollingList } from "../../wrapper/ScrollingFunction";
import { MenuButton } from "../../../common/MenuButton"
import "./logo.scss"



export function Logo(props: { scrolls: ScrollingList }) {
    return (<div id="logo">
        <a href="https://github.com/Meltwin" tabIndex={-1}><img src="https://github.com/meltwin.png" /></a>
        <h1>Meltwin</h1>
        <h2><span className="italic">Robotic Engineering Student</span><br />🇫🇷 Centrale Nantes | DTU 🇩🇰</h2>
        <MenuButton name="About me" href="about" scrollElem={props.scrolls.about} />
        <MenuButton name="My projects" href="projects" scrollElem={props.scrolls.projects} />
    </div>);
};