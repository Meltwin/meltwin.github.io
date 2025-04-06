import { useEffect, useRef } from "react";
import "./main.scss"
import { HashRouter } from "react-router-dom";
import { Home, Lists, About } from "./pages/Pages"
import { InterPage } from "./pages/wrapper/InterPage";
import { ScrollingList } from "./pages/wrapper/ScrollingFunction";

const scrollFunction = (elem: HTMLDivElement | null) => { elem?.scrollIntoView({ behavior: "smooth" }); }

export function Main() {
    const main = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement>(null);

    const scrollingFunctions: ScrollingList = {
        main: () => scrollFunction(main.current),
        about: () => scrollFunction(about.current),
        projects: () => scrollFunction(projects.current)
    }

    useEffect(() => { scrollingFunctions.main() })

    return (<HashRouter>
        <Home scrolls={scrollingFunctions} ref={main} />
        <InterPage />
        <About scrolls={scrollingFunctions} ref={about} />
        <Lists scrolls={scrollingFunctions} ref={projects} />
    </HashRouter>);
}