import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="w-full h-40 bg-nav-blue px-20 py-8">
                <div className='w-52'>
                    <h2 className="text-2xl font-bold mb-2 text-white">Contact Me</h2>
                    <div className="flex justify-between font-bold underline text-white">
                        <a href="https://github.com/hemalr24" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="/" target="_blank" rel="noopener noreferrer">Resume</a>
                        <a href="https://www.linkedin.com/in/hemal-rajput/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer