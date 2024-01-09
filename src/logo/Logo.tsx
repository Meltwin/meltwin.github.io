import { MenuButton } from "./MenuButton"
import "./logo.scss"

export function Logo() {
    return (<div id="logo">
        <a href="https://github.com/Meltwin"><img src="https://github.com/meltwin.png" /></a>
        <h1>Meltwin</h1>
        <h2><span className="italic">Robotic Engineering Student</span><br />🇫🇷 Centrale Nantes | DTU 🇩🇰</h2>
        <MenuButton name="See projects by topic" href="topics" />
        <MenuButton name="See projects by language" href="lang" />
    </div>)
}