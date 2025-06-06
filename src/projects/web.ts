import { Project } from "./ProjectType"
import meltwin from "./images/meltwin.jpg"
import zelnoel from "./images/zelnoel.png"
import nebulus from "./images/nebulus.png"
import squerly from "./images/squerly.png"
import lego from "./images/lego.png"

export const MeltwinWeb: Project = {
    name: "Meltwin Website",
    date: {
        from: 2021,
        to: 2025
    },
    description: [
        `I made this website from scratch.`,
        `It is based on React and Typescript.`
    ],
    tags: ["React", "Typescript", "CSS", "HTML"],
    image: meltwin,
    href: {
        href: "https://github.com/Meltwin/meltwin.github.io",
        text: "View on Github"
    }
};

export const LegoCompetition: Project = {
    name: "Lego Challenge",
    date: {
        from: 2024,
    },
    description: [
        `As part of an innovation course at DTU, we were tasked to innovate to answer to company problem.
        My team and I were tasked to help Lego to attract more people in their stores.`,
        `Our proposal was the concept of mystery boxes: an algorithm gives you a set of existing bricks to use and you have to build something
        out of it. This would have been complementary to the bricks dispensers that can be found in some stores.`,
        `The website use React (even if it is a really simple web application), and WebGL to render the bricks.`,
        `<a href="https://github.com/Meltwin/lego">See the Github here</a>`
    ],
    tags: ["React", "Typescript", "WebGL", "CSS", "HTML"],
    image: lego,
    href: {
        href: "https://meltwin.github.io/lego/",
        text: "View the result"
    }
};

export const ZelNoel: Project = {
    name: "Christmas Spirit",
    date: {
        from: 2021,
        to: 2024
    },
    description: [
        `A website that displays the next Christmas-related series on TV (in France).`,
        `I made a website for Zel that publish Christmas related contents.
        The main tool on this website is the Christmas series planning where you could find
        a program that will be broadcasted today or in the next days. 
        The website is made with React for the front-end and PHP as the API and scrapper.`,
        `The website is not currently up.`
    ],
    tags: ["React", "Typescript", "CSS", "HTML", "PHP", "MySQL"],
    image: zelnoel,
    href: {
        href: "https://the-zero-factory.jimdofree.com/",
        text: "View Zel Website"
    }
};

export const CCMP: Project = {
    name: "Cent Milliards de Poèmes",
    date: {
        from: 2017
    },
    description: [
        `During my high-school years a programmation project were proposed to us by our teachers. The goal was to implement the 
        <a href="https://en.wikipedia.org/wiki/A_Hundred_Thousand_Billion_Poems">"Hundred Thousand Billion Poem"</a> book as a program 
        and feed it with poems written by middle school students.`,
        `I choose to make it as a website, and implemented useful tools: random code generation to give one time poem input, several users and schools classes possibilities, ...`
    ],
    tags: ["Javascript", "CSS", "HTML", "PHP", "MySQL"],
    href: {
        href: "https://github.com/Meltwin/LSW-CMMP",
        text: "View Github repo",
    }
};

export const EasterClicker: Project = {
    name: "Easter Clicker",
    date: {
        from: 2017
    },
    description: [
        `As an end-project for the programmation classes in high-school, I made a small clicker game where you collect Easter eggs, 
        have auto collecting and multiplier upgrades. This game is heavily inspired by the <a href="https://cookieclicker.com/">CookieClicker</a> game.`
    ],
    tags: ["Javascript", "CSS", "HTML"],
    href: {
        href: undefined,
        text: "No online website",
        color: "red"
    }
};

export const NebulusProject: Project = {
    name: "Nebulus Project",
    date: {
        from: 2018
    },
    description: [
        `Together with a friend, we tried to make a Discord Bot that would protect servers from undesirable persons.`,
        `The principle was simple: a reported Discord user through the bot would record it in a global database. If the person had too many reports, 
        it would become blacklisted from all server that uses the bot. This would help preventing chaos and Discord raids by unwanted malicious groups.`,
        `This project took place in an period where this behavior was really common. Now this is occuring way less thanks to Discord security measures.`
    ],
    tags: ["PHP", "CSS", "HTML", "MySQL"],
    image: nebulus,
    href: {
        href: undefined,
        text: "No online website",
        color: "red"
    }
};

export const SquerlyTV: Project = {
    name: "SquerlyTV",
    date: {
        from: 2020
    },
    description: [
        `A friend asked me to implement a website for their streaming teams. The goal was mainly to integrate Twitch streams, 
        chat and actions into a dedicated website. It would make it easier for people to find the streams all of the teams members.`,
        ``
    ],
    tags: ["PHP", "CSS", "HTML", "MySQL"],
    image: squerly,
    href: {
        href: undefined,
        text: "No online website",
        color: "red"
    }
};


export const WebProjects: Project[] = [
    MeltwinWeb, ZelNoel, CCMP, EasterClicker, NebulusProject, SquerlyTV, LegoCompetition
];