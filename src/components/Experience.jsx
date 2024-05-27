import React from "react"
import WorkCard from "../components/WorkCard"
import ProjectCard from "../components/ProjectCard"
import civiconnectLogo from "../images/civiconnect-logo.png"
import Platformer from "../images/platformer.png"
import Maze from "../images/maze.png"
import Website from "../images/website.png"

const Experience = () => {
    return (
        <> 
            <div>
                <h1 className="text-h1">Experience</h1>
                <div>
                    <h2 className="text-h2">Work</h2>
                    <WorkCard
                        companyLogo={civiconnectLogo}
                        logoAlt="Civiconnect Logo"
                        position="Web Developer"
                        time="May 2024 - Aug 2024"
                        description="At Civiconnect, I designed and coded dynamic and responsive web applications, both desktop and mobile, for several clients. As part of the term, I also participated in weekly development workshops to teach soft skills along technical skills."
                        tools={['React', 'NextJS', 'Strapi', 'Tailwind', 'HTML']}
                    />
                </div>
                <div>
                    <div className="flex items-center">
                        <h2 className="text-h2 my-12">Projects</h2>
                        <p className="text-md ml-4 -mb-3">(psst...hover over!)</p>
                    </div>
                    <div className="flex gap-10 flex-wrap justify-center">
                        <ProjectCard
                                projectImage={Website}
                                imageAlt="Website Logo"
                                projectName="This website!"
                                description="My personal website, made from scratch, showcasing my projects and experiences."
                                tools={['React', 'Tailwind']}
                                githubLink="https://github.com/hemalr24/HemalsPortfolio"
                        />
                        <ProjectCard
                                projectImage={Platformer}
                                imageAlt="Super Hemmie-o"
                                projectName="Super Hemmie-o"
                                description="A 2D Mario-inspired platformer game with unique sprites and levels."
                                tools={['Python']}
                                githubLink="https://github.com/hemalr24/Super-Hemmie-o"
                        />
                        <ProjectCard
                                projectImage={Maze}
                                imageAlt="Maze"
                                projectName="Maze Runner"
                                description="A dynamic app to solve mazes using various algorithms."
                                tools={['Java']}
                                githubLink="https://github.com/hemalr24/MazeRunner"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Experience