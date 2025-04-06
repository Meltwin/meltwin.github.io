import React from "react";
import { ScrollingList } from "../../wrapper/ScrollingFunction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
interface ListProps {
    scrolls: ScrollingList
};

export const ListHeader = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
    return (<div className="list-header">
        <h1 className="page-name">Meltwin - Portefolio</h1>
        <div className="spacer" />
        <div className="list-header-controls">
            <FontAwesomeIcon icon={faHome} onClick={props.scrolls.main} className="clickable" />
        </div>
    </div>)
});
