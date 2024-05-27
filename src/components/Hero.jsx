import React from "react"
import profileImage from "../images/alberta-image.jpg"

const Hero = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center h-screen">
                <div>
                    <h1 className="text-h1">
                        Hi,<br /> I'm <span className="font-bold">Hemal</span>
                    </h1>
                    <p className="text-p mt-8">A third-year co-op student in Software Engineering at McMaster University</p>
                </div >
                <div className="w-1/2 h-image ml-10">
                    <img src={profileImage} alt="Profile" className="w-full min-w-96 h-full object-left object-cover rounded-md"/>
                </div>
            </div>
        </>
    )
}
export default Hero