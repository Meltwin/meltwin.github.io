import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

type HightLightProjectProps = {
    children: ReactElement<any, string | JSXElementConstructor<any>> | string
};

export function HighLightProject(props: HightLightProjectProps) {
    return (<div className="embla__slide hl_slide">
        <div>{props.children}</div></div>)
}