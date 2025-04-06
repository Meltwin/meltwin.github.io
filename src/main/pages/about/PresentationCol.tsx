import "./presentation.scss"

const paragraphs: string[] = [
    `Hi,<br/>
I am Geoffrey Côte, a junior robotics developper. I am currently finishing my master in Autonomous Systems at the Denmark Technical University.<br/>
My background is in general engineering, but I specialized myself on robotics, and especially <b>software development for robotics</b>.
`,
    `For 7+ years, I spent most of my time working on projects, and I am enjoying it. 
It started from web development for projects with friends to making robotics stack and toolkits for my studies.
    
These projects range from programming libraries and programs to designing objects.
Here an non-exhaustive list of what I usually work on:

<ul>
    <li><b>Robotics design</b> (<i>C++/Python/C, ROS 1&2, Arduino, Bash</i>)</li>
    <li><b>General C++ programming</b> (<i>C++, C, CMake, Make</i>)</li>
    <li><b>Python scripting</b> (<i>Python, Numpy, OpenCV</i>)</li>
    <li><b>Websites development</b> (<i>HTML / CSS / PHP / Typescript</i>)</li>
    <li><b>Minecraft projects</b> (<i>Java, C++</i>)</li>
    <li><b>Systems design</b> (<i>OnShape, SolidWorks, KiKad)</i></li>
</ul>

If you want to take a look at my skill, scroll down!
`
];

export function PresentationCol() {
    return <div className="presentation">
        <h1 className="sectionTitle">About Me</h1>
        {paragraphs.map(par => {
            return (<p dangerouslySetInnerHTML={{ __html: par }}></p>)
        })}
    </div >
}