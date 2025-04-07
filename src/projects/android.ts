import { Project } from "./ProjectType"
import symbolo from "./images/symbolo.png"

export const AndroidProjects: Project[] = [
    {
        name: "Symbolo",
        date: {
            from: 2020
        },
        description: [
            `Symbolo is puzzle game where you have to arrange symbols in a grid. However these symbols have contraints!
            Some do not want to be on the same row, column or diagonal as another one. On the contrary some may want to have a similar symbol aligned!`,
            `I worked on this project for Zel. While the game was finished, the app was never really published. However it was my first real step in the world of Java development.`
        ],
        tags: ["Android", "Java"],
        image: symbolo,
        href: {
            href: "https://the-zero-factory.jimdofree.com/",
            text: "View Zel Website"
        }
    },
    {
        name: "LSW Festival",
        date: {
            from: 2018
        },
        description: [
            `My high-school organized a small party where people could present their talents. To help people plan and see most of the events (as they often take time slots), 
            I made a simple app that display the events and their time in the several rooms. I also implemented an alarm system to warn people when an event they were interested in was about to begin.`,
        ],
        tags: ["Android", "Java"],
        href: {
            href: "https://github.com/Meltwin/LSW-Festival",
            text: "View on Github"
        }
    },
]