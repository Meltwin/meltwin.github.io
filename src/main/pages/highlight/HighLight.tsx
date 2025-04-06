import "./highlight.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { HighLightProject } from "./HighLightProject"
import { HighLightDot, useDotButton } from "./HighLightDot"

export function Highlights() {
    const [emblaRef, emblaAPI] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay()])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaAPI);

    return (<div id="highlight" className="page">
        <div>
            <div ><h1 className="title">Some of my projects</h1></div>
            <div className="hl_wrapper">
                <div className="embla hl_container" >
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            <HighLightProject>Slide 1</HighLightProject>
                            <HighLightProject>Slide 2</HighLightProject>
                            <HighLightProject>Slide 3</HighLightProject>
                            <HighLightProject>Slide 4</HighLightProject>
                            <HighLightProject>Slide 5</HighLightProject>
                            <HighLightProject>Slide 6</HighLightProject>
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