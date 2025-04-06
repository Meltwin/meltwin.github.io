import { ReactElement } from "react";
import "./framed_elem.scss"

type Properties = {
    children: ReactElement[] | string,
    className: string
    variant: "A" | "B"
    title?: string
};

export function FramedDiv(props: Properties) {
    return <div className={[`framed${props.variant}`, props.className].join(" ")}>
        <div>
            <p className={`framed${props.variant}-title`}>{props.title}</p>
            {props.children}
        </div>
    </div>
}