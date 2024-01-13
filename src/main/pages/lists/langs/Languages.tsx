import React from "react";
import "./langs.scss";
import { ScrollingList } from "../../wrapper/ScrollingFunction";

interface PageProperties {
    scrolls: ScrollingList
}

export const Languages = React.forwardRef<HTMLDivElement, PageProperties>((props, ref) => {
    return (<>
        <h1>Languages Page</h1>
        <button onClick={props.scrolls.main}>Return to top</button>
    </>)
});