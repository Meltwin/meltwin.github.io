import { Project, DateContainer } from "../../../projects/ProjectType";
import no_img from "../../../projects/no_img.jpg";

type ProjectProps = {
    project: Project
};

function formatPrjInfo(prj: Project): string {
    return formatInfos(prj.date, prj.place);
}

function formatInfos(date: DateContainer, place?: string): string {
    let info = "";
    if (place !== undefined)
        info = `${place}, `
    if (date.to !== undefined)
        info = `${info}${date.to} - `
    info = `${info}${date.from}`
    return info;
}

export function ProjectItem(props: ProjectProps) {
    return (<div className="project">
        <div className="project-top">
            <div className="project-img">
                <img src={(props.project.image !== undefined) ? props.project.image : no_img} alt={`project_${props.project.name}`} />
            </div>
            <p className="project-name">{props.project.name}</p>

            <p className="project-info">{formatPrjInfo(props.project)}</p>


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
    </div>)
}