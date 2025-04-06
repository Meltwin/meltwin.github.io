import { Project } from "./ProjectType"
import fejemis from "./images/fejemis.png"

export const Fejemis: Project = {
    name: "Fejemis",
    date: "2025",
    place: "DTU (DK)",
    description: [
        `Fejemis is a modified industrial cleaning cart that should clean autonomously the <a href="https://asta.dtu.dk/">ASTA (Autonomous Systems Test Arena)</a> at DTU.`,
        `My missions on this project were to gather the several master thesis that have been done and merge them into a coherent codebase, and to implement the planning part (i.e.
where the robot should go, when it should go to its base, save what part of the building have been cleared, ...).`,
        `This project was made as my master thesis at DTU.
    `],
    tags: ["C++", "ROS2", "Bash", "rover", "navigation"],
    image: fejemis,
    href: {
        href: undefined,
        text: "No online site",
        color: "red"
    }
}

export const Arcana: Project = {
    name: "Arcana",
    date: "2024-2025",
    description: [
        `ROS Arcana is group of several toolkits (C++, CMake, Python, ...) for simplifying ROS2 packages writing.`,
        `I made this project to mainly simplify my own packages, but I hope some day I will be able to make it robust and to publish it`
    ],
    tags: ["CMake", "C++", "Python", "ROS2"],
    href: {
        href: "https://github.com/Baxterminator/ros_arcana",
        text: "See on Github"
    }
}

export const RosSwitch: Project = {
    name: "ROS Switch",
    date: "2024-2025",
    description: [
        `Python program to simplify ROS environement definition and switching on Linux.`,
        `After working on several ROS2 projects and having to configure new ROS environment each time, especially when having several projects in parallel, 
        I decided to make my own Python3 program to switch between these environments with one simple command. The configuration of the environment are written in YAML.`
    ],
    tags: ["Python", "ROS2"],
    href: {
        href: "https://github.com/Baxterminator/ros_switch",
        text: "See on Github"
    }
}

export const RoboticsProject: Project[] = [
    Fejemis, Arcana, RosSwitch
]