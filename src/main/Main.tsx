import { useRef } from "react";
import "./main.scss"
import { HashRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Lists } from "./pages/lists/List";

const scrollFunction = (elem: HTMLDivElement | null) => { elem?.scrollIntoView({ behavior: "smooth" }); }

export function Main() {
    const main = useRef<HTMLDivElement>(null);
    const lists = useRef<HTMLDivElement>(null);

    const scrollingFunctions = {
        main: () => scrollFunction(main.current),
        topics: () => scrollFunction(lists.current),
    }

    return (<HashRouter>
        <Home scrolls={scrollingFunctions} ref={main} />
        <Lists scrolls={scrollingFunctions} ref={lists} />


    </HashRouter>);
}