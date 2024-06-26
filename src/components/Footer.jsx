import React from 'react';
import footerLogo from '../images/footer-logo.png';
import resume from '../resources/hemal-resume.pdf';

const Footer = () => {
    return (
        <>
            <div className="w-full h-40 bg-nav-blue px-20 py-8 flex justify-between">
                <div className='w-52 flex flex-col justify-between'>
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-white">Contact Me</h2>
                        <div className="flex justify-between font-bold underline text-white">
                            <a href="https://github.com/hemalr24" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                            <a href="https://www.linkedin.com/in/hemal-rajput/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                    <p className='text-xs text-white'>Logos made custom by Mishal Hossain</p>
                </div>
                <div className="w-96 h-fill align-self-end">
                    <img src={footerLogo} alt="logo" />
                </div>
            </div>
        </>
    )
}
export default Footer