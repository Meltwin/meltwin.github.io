import { Project } from "./ProjectType"
import { Fejemis, Arcana, RoboticsProject, RosSwitch, Baxter, ITPRM } from "./robotics"
import { ZelNoel, NebulusProject, WebProjects } from "./web";
import { AndroidProjects } from "./android";
import { Kami, ProgrammingProject } from "./programming";
import { MakerProject } from "./maker";

export const HighlightedProjects: Project[] = [
    Fejemis, RosSwitch, Arcana, Kami, Baxter, ITPRM, ZelNoel, NebulusProject
]

export const AllProjects: Project[] = [...RoboticsProject, ...WebProjects, ...AndroidProjects, ...ProgrammingProject, ...MakerProject].sort((a, b) => {
    const dateA = (a.date.to !== undefined) ? a.date.to : a.date.from;
    const dateB = (b.date.to !== undefined) ? b.date.to : b.date.from;
    return dateB - dateA;
})
export { RoboticsProject, WebProjects, AndroidProjects };