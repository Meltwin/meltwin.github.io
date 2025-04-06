import { Project } from "./ProjectType"
import fejemis from "./images/fejemis.png"
import baxter from "./images/baxter.jpg"
import itprm from "./images/itprm.png"
import rosswitch from "./images/rosswitch.png"

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
    image: rosswitch,
    href: {
        href: "https://github.com/Baxterminator/ros_switch",
        text: "See on Github"
    }
}

export const Baxter: Project = {
    name: "ECN Baxter",
    date: "2023",
    place: "Centrale Nantes (FR)",
    description: [
        `A ROS2 package providing tools to make ROS2 learning games on the Rethinks Robotics' Baxter robot.`,
        `In my robotics studies in France, we were tasked as teams to conduct a robotics project for 6 months. 
        Our project was to find a way to enhance the actual ROS2 labs by making them more fun. In this perspective, 
        we made a package that contains a GUI to setup special parameters and transforms, as well as a communication
        restriction mechanism to allow the use of the robot to only one person at the time.`,
    ],
    tags: ["C++", "Qt", "ROS2"],
    image: baxter,
    href: {
        href: "https://github.com/Baxterminator/ecn_baxter",
        text: "See on Github"
    }
}

export const ITPRM: Project = {
    name: "Intra-Tubular PRM",
    date: "2022",
    place: "Centrale Nantes (FR)",
    description: [
        `Matlab path planner for snake-like robot in highly constrained environments.`,
        `As an end project to a course, we were tasked in teams of two to implement under MatLAB
        a path planning solver for N-R robots navigating into pipes. Our team chose to use 
        Probabilistic RoadMap (PRM). We also implemented a mp4 export script to show our
        results as videos.`,
    ],
    tags: ["MatLAB", "PRM"],
    image: itprm,
    href: {
        href: "https://github.com/Baxterminator/IntraTubular-PRM",
        text: "See on Github"
    }
}

export const RoboticsProject: Project[] = [
    Fejemis, Arcana, RosSwitch, Baxter, ITPRM
]