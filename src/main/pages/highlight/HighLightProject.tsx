import { ReactElement, JSXElementConstructor } from "react";
import { Project } from "../../../projects/ProjectType";
import no_img from "../../../projects/no_img.jpg";

type HightLightProjectProps = {
    project?: Project
    children?: ReactElement<any, string | JSXElementConstructor<any>> | string
};

export function HighLightProject(props: HightLightProjectProps) {
    if (props.project !== undefined)
        return (<div className="embla__slide hl_slide">
            <div className="project">
                <div className="project-top">
                    <div className="project-img">
                        <img src={(props.project.image !== undefined) ? props.project.image : no_img} alt={`project_${props.project.name}`} />
                    </div>
                    <p className="project-name">{props.project.name}</p>

                    <p className="project-info">{(props.project.place !== undefined) ? props.project.place + ", " : ""}{props.project.date}</p>


                    {props.project.description?.map(par => { return (<p dangerouslySetInnerHTML={{ __html: par }}></p>) })}
                </div>
                <div className="project-bottom">
                    <div><span className="project-tags-label">Tags:</span> {props.project.tags?.join(", ")}</div>
                    {(props.project.href !== undefined) ? (
                        <div>
                            <a {...(props.project.href.href !== undefined) ? { href: props.project.href.href, target: "_blank", rel: "noreferrer" } : {}} className={`project-button ${(props.project.href.color !== undefined) ? "project-button-" + props.project.href.color : ""}`}>{props.project.href.text}</a>
                        </div>
                    ) : <></>}
                </div>
            </div>
        </div>)
    return (<div className="embla__slide hl_slide">
        <div>{props.children}</div></div>)
}