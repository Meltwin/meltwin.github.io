import { FramedDiv } from "../../common/FramedDiv";

const lipsum = `Hi,\n
I am Geoffrey Côte, a junior robotics developper. 

`.split("\n");

export function PresentationCol() {
    return <FramedDiv className="presentation" variant="B" title="About Me">
        {lipsum.join("\r\n")}
    </FramedDiv>
}