import "./highlight.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { HighLightProject } from "./HighLightProject"
import { HighLightDot, useDotButton } from "./HighLightDot"
import { HighlightedProjects } from "../../../projects/projects"

export function Highlights() {
    const [emblaRef, emblaAPI] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay(), WheelGesturesPlugin()])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaAPI);

    return (<div id="highlight" className="page">
        <div>
            <div ><h1 className="title">Some of my projects</h1></div>
            <div className="hl_wrapper">
                <div className="embla hl_container" >
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {HighlightedProjects.map(project => { return <HighLightProject project={project} /> })}
                        </div>
                    </div>
                    <div className="embla__controls">
                        <div className="embla__dots">
                            {scrollSnaps.map((_, index) => (
                                <HighLightDot
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={'embla__dot'.concat(
                                        index === selectedIndex ? ' embla__dot--selected' : ''
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}