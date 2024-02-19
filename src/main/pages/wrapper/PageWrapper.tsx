import React from "react";
import "./page.scss";

interface PageWrapperProperties {
    children: JSX.Element | JSX.Element[],
    index: string,
    classStyle?: string | string[]
    innerPage?: boolean
};

export const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProperties>((props, ref) => {
    return (<div className={["page", props.classStyle].join(" ")} id={props.index} ref={ref}>
        {(props.innerPage === undefined || !props.innerPage) && props.children}
        {(props.innerPage !== undefined && props.innerPage) && <div className="page-inner">
            {props.children}
        </div>}
    </div>)
});