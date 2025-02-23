import React from "react";
import { ScrollingList } from "../../wrapper/ScrollingFunction";
interface ListProps {
    scrolls: ScrollingList
};

export const ListHeader = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
    return (<div className="list-header">
        <h1 className="page-name">Meltwin - Portefolio</h1>
        <div className="spacer" />
        <div className="list-header-controls">
            <button onClick={props.scrolls.main}>Top</button>
        </div>
    </div>)
});
