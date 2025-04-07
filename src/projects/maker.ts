import { Project } from "./ProjectType"

export const PlantWatering: Project = {
    name: "Plant Watering",
    date: {
        from: 2024,
        to: 2025
    },
    description: [
        `While studying in Denmark, I adopted several plants. However, since I returned from times to times in France I could not water them for sometimes two weeks.`,
        `I then made a small watering system that could take care of my plants while I am not there. I used an ESP-32 to fetch sensor values and water the plants accordingly.
        This project let me explore all aspects of autonomous systems: electronics, 3D design, software development ,choosing the right part, ...`,
        `However, this project is still incomplete as the command law to decide when to water the plant is not implemented yet, and I could not find the time yet.`
    ],
    tags: ["C", "Arduino", "Electronics", "PCB Design", "REST API"],
    href: {
        href: "https://github.com/Meltwin/PlantWatering",
        text: "View on Github"
    }
}

export const MakerProject: Project[] = []