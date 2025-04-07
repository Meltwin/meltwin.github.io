import { Project } from "./ProjectType"
import kami from "./images/kami.png"

export const Kami: Project = {
    name: "Kami",
    date: { from: 2024, to: 2025 },
    description: [
        `Kami is a C++ script that transforms STL meshs into paper patterns that one can glue altogether.`,
        `I wanted to make 3D paper objects a gift for my girlfriend, but I did not want to make them by hand. I then had the idea to make this project. 
        Even if the final paper result was not that good, this project strengthen a lot my knowledge of basic C++ objects and let me discover new mathematical are as 2D packing algorithms.`,
        `In the future, I would like to improve this project by making a GUI, and maybe by adding other tools (as for crochet, origami, ...).`
    ],
    image: kami,
    tags: ["C++"],
    href: {
        href: "https://github.com/Meltwin/Kami",
        text: "View on Github"
    }
}

export const ProgrammingProject: Project[] = [Kami]