import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import "./background.scss"

const EASE_FACTOR = 2; // In percentage

function easeInOutSine(x: number): number {
    return -(Math.cos(Math.PI * (x + 1) / 2) - 1) - 1;
}

function regularizedValue(x: number, max: number): number {
    return 2 * x / max - 1;
}

function offsetBackgound(background: React.RefObject<HTMLDivElement>, e: MouseEvent) {
    background.current!.style.backgroundPositionX = `${50 - EASE_FACTOR * easeInOutSine(regularizedValue(e.x, background.current!.clientWidth))}%`;
    background.current!.style.backgroundPositionY = `${50 + EASE_FACTOR * easeInOutSine(regularizedValue(e.y, background.current!.clientHeight))}%`;
}

export function Background() {
    var back = useRef<HTMLDivElement>(null);
    useEffect(
        () => {
            if (!isMobile) {
                console.log("On desktop renderer !");
                document.addEventListener("mousemove", (e) => offsetBackgound(back, e), false);
            } else {
                console.log("On mobile renderer !");
            }

        }, []
    )
    return (<div className="background" ref={back}></div>);
}