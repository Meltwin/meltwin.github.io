import { AllProjects } from "../../../projects/Projects"
import { ProjectItem } from "./ProjectItem"
import "./projects.scss"

export function Projects() {
    return (<div id="projects">
        <div id="projects-title" className="title">Explore all of my projects</div>
        <div id="projects-control"></div>
        <div id="projects-container">
            {AllProjects.map(project => (<ProjectItem project={project} />))}
        </div>
    </div>)
}