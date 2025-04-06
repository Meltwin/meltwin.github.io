import { FramedDiv } from "../../common/FramedDiv";

export function ContactCol() {
    return <FramedDiv className="contact" variant="A" title="Contact">
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
            
        </div>
    </FramedDiv>
}