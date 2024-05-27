import React, { useState } from "react"

const ProjectCard = ({ projectImage, imageAlt, projectName, description, tools, githubLink }) => {
    const [hover, setHover] = useState(false)

    function toolStyles(tool){
        switch(tool){
            case "React":
                return {bgColor: "bg-react", bgHover: "hover:bg-react-hover" , textColor: "text-black",}
            case "NextJS":
                return {bgColor: "bg-nextjs", bgHover: "hover:bg-nextjs-hover", textColor: "text-white"}
            case "Strapi":
                return {bgColor: "bg-strapi", bgHover: "hover:bg-strapi-hover", textColor: "text-white"}
            case "CSS":
                return {bgColor: "bg-css", bgHover: "hover:bg-css-hover", textColor: "text-white"}
            case "HTML":
                return {bgColor: "bg-html", bgHover: "hover:bg-html-hover", textColor: "text-white"}
            case "JavaScript":
                return {bgColor: "bg-javascript", bgHover: "hover:bg-javascript-hover", textColor: "text-black"}
            case "C":
                return {bgColor: "bg-c", bgHover: "hover:bg-c-hover", textColor: "text-black"}
            case "Python":
                return {bgColor: "bg-python", bgHover: "hover:bg-python-hover", textColor: "text-white"}
            case "Java":
                return {bgColor: "bg-java", bgHover: "hover:bg-java-hover", textColor: "text-white"}
            case "Tailwind":
                return {bgColor: "bg-tailwind", bgHover: "hover:bg-tailwind-hover", textColor: "text-white"}
            default:
                return ""
        }
    }
    return (
        <div className="relative w-72 h-96 overflow-hidden hover:scale-105">
            <div className="absolute w-full h-full rounded-md flex" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {hover ? 
                    <div className="absolute w-full h-full bg-white rounded-md translate-y-20 p-8 pb-28 flex flex-col justify-between transform transition-transform duration-500 ease-in-out">
                        <div>
                            <h2 className="text-2xl font-bold">{projectName}</h2>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {tools.map((tool) => {
                                    const {bgColor, bgHover, textColor} = toolStyles(tool);
                                    return(
                                        <p className={`text-sm ${bgColor} ${bgHover} ${textColor} px-6 rounded-md font-semibold`}>{tool}</p>
                                    );
                                })}
                            </div>
                        </div>
                        <p className="text-md -mt-4">{description}</p>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="mt-4 font-bold underline">SEE GITHUB</a>
                    </div>
                    :
                    <div className="absolute w-full h-full bg-white rounded-md translate-y-96 p-8 pb-28 flex flex-col justify-between transform transition-transform duration-500 ease-in-out">
                        <div>
                            <h2 className="text-2xl font-bold">{projectName}</h2>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {tools.map((tool) => {
                                    const {bgColor, bgHover, textColor} = toolStyles(tool);
                                    return(
                                        <p className={`text-sm ${bgColor} ${bgHover} ${textColor} px-6 rounded-md font-semibold`}>{tool}</p>
                                    );
                                })}
                            </div>
                        </div>
                        <p className="text-md -mt-4">{description}</p>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="mt-4 font-bold underline">SEE GITHUB</a>
                    </div>
                }
                <img src={projectImage} alt={imageAlt} className="w-full rounded-md"/>
            </div>
        </div>
    )
}
export default ProjectCard