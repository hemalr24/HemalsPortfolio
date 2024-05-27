import React from "react"

const WorkCard = ({ companyLogo, logoAlt, position, time, description, tools }) => {
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
        <div className="bg-white w-full my-6 rounded-md p-6 flex flex-grow hover:scale-105">
            <div className="h-52 w-96 rounded-md mr-12 overflow-hidden flex items-center justify-center">
                <img src={companyLogo} alt={logoAlt} className="object-contain"/>
            </div>
            <div className="w-full flex flex-col justify-between">
                <h2 className="text-2xl font-bold">{position}</h2>
                <p className="text-gray-600 mb-2">{time}</p>
                <p className="text-lg">{description}</p>
                <div className="flex flex-wrap gap-8 mt-8">
                    {tools.map((tool) => {
                        const {bgColor, bgHover, textColor} = toolStyles(tool);
                        return(
                            <p className={`text-tags ${bgColor} ${bgHover} ${textColor} px-6 rounded-md font-semibold`}>{tool}</p>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default WorkCard