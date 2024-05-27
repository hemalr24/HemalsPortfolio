import React from "react"
import cLogo from "../images/c-logo.png"
import cssLogo from "../images/css-logo.png"
import htmlLogo from "../images/html-logo.png"
import javaLogo from "../images/java-logo.png"
import jsLogo from "../images/js-logo.png"
import pythonLogo from "../images/python-logo.png"
import reactLogo from "../images/react-logo.png"
import tailwindLogo from "../images/tailwind-logo.png"
import strapiLogo from "../images/strapi-logo.png"
import typescriptLogo from "../images/typescript-logo.png"

const Skills = () => {
    return(
        <>
            <div className="mb-32">
                <h1 className="text-h1 mb-16">My Skills</h1>
                <div>
                    <div className="flex overflow-x-scroll overflow-y-hidden w-fit h-64 pb-12 px-20 gap-16">
                        <img src={javaLogo} alt="java logo" className="mr-6" />
                        <img src={pythonLogo} alt="python logo" className="scale-90" />
                        <img src={htmlLogo} alt="html logo" className="scale-105" />
                        <img src={cssLogo} alt="css logo" className="scale-85"/>
                        <img src={jsLogo} alt="js logo" className="scale-90 -ml-20"/>
                        <img src={reactLogo} alt="react logo" className="scale-110 -ml-24" />
                        <img src={typescriptLogo} alt="typescript logo" className="scale-80 -ml-10"/>
                        <img src={tailwindLogo} alt="tailwind logo" className="scale-50 -ml-6" />
                        <img src={strapiLogo} alt="strapi logo" className="scale-110 -ml-24" />
                        <img src={cLogo} alt="c logo"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills