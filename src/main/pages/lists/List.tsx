import React from "react";
import { PageWrapper } from "../wrapper/PageWrapper";
import { Route, Routes, useLocation } from "react-router-dom";
import { Topics } from "./topics/Topics";
import { Languages } from "./langs/Languages";
import { ScrollingList } from "../wrapper/ScrollingFunction";
import { ListHeader } from "./nav/ListHeader";
import "./list.scss"

interface ListProps {
    scrolls: ScrollingList
};

export const Lists = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
    const loc = useLocation()
    return (<PageWrapper index="lists" ref={ref} classStyle={["list", loc.pathname.substring(1)].join(" ")} innerPage={false}>
        <ListHeader scrolls={props.scrolls} />
        <div className="list-frame">
            <Routes>
                <Route path="topics" element={<Topics scrolls={props.scrolls} />} />
                <Route path="lang" element={<Languages scrolls={props.scrolls} />} />
            </Routes>
        </div>
    </PageWrapper>)
});