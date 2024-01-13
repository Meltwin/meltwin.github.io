import React from "react";
import "./topics.scss"
import { ScrollingList } from "../../wrapper/ScrollingFunction";

interface PageProperties {
    scrolls: ScrollingList
};

export const Topics = React.forwardRef<HTMLDivElement, PageProperties>((props, ref) => {
    return (<>
        <h1>Topics Page</h1>
        <button onClick={props.scrolls.main}>Return to top</button>
    </>);
});