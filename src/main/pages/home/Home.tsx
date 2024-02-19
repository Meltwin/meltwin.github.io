import React from "react";
import { PageWrapper } from "../wrapper/PageWrapper";
import { Logo } from "./logo/Logo";
import { ScrollingList } from "../wrapper/ScrollingFunction";
import { Background } from "./backgrounds/Background";

export const Home = React.forwardRef<HTMLDivElement, { scrolls: ScrollingList }>((props, ref) => {
    return <PageWrapper index="home" ref={ref} classStyle="home">

        <Background />
        {/* Left-top part*/}
        {/* Logo part*/}
        <Logo scrolls={props.scrolls} />
        {/* Right-bottom part*/}
    </PageWrapper>
});