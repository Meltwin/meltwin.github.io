import React from "react";
import { PageWrapper } from "../wrapper/PageWrapper";
import { ScrollingList } from "../wrapper/ScrollingFunction";
import "./about.scss"
import { ContactCol } from "./ContactCol";
import { PresentationCol } from "./PresentationCol";
import { MenuButton } from "../../common/MenuButton";

export const About = React.forwardRef<HTMLDivElement, { scrolls: ScrollingList }>((props, ref) => {
    return <PageWrapper index="about" ref={ref} >
        <div className="about">
            <div className="about-top">
                <ContactCol />
                <PresentationCol />
            </div>
            <div className="about-bottom">
            </div>
        </div>
    </PageWrapper>
});