import React from "react";
import about from '../assets/about.png'

function About({ darkMode }) { 
    return (
        <section id="About" className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                    data-aos='fade-up'
                    data-aos-delay='300'
                    className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96 flex items-center justify-center">
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-orange-500 to-yellow-500 rotate-12 star-shape scale-125 z-0"
                            data-aos='zoom-in'
                            data-aos-delay='600'
                        ></div>
                        <img
                            src={about}
                            alt="About img"
                            className='relative w-full h-full object-contain z-10 transition-all duration-300'
                            data-aos='zoom-in'
                            data-aos-delay='400' />
                    </div>
                </figure>

                <article
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='text-center lg:text-left relative order-1 lg:order-2'>
                    <header>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text'
                            data-aos='fade-up'
                            data-aos-delay='400'>
                            About Me
                        </h1>
                    </header>

                    <p className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${darkMode ? 'text-gray-300 bg-white/5' : 'text-gray-700 bg-orange-900/5'}`}
                        data-aos='fade-up'
                        data-aos-delay='500'>
                        I'm currently learning Full Stack Web Development, focusing on building strong fundamentals in both frontend and backend technologies. I enjoy turning ideas into real, functional web experiences. Every project I build helps me grow and understand the developer's mindset better.
                    </p>

                    <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                        {/* Education */}
                        <div className='text-center' data-aos='zoom-in' data-aos-delay='600'>
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>5+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Education</div>
                        </div>

                        {/* Skills */}
                        <div className='text-center' data-aos='zoom-in' data-aos-delay='650'>
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>10+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Skills Knowledge</div>
                        </div>

                        {/* Projects */}
                        <div className='text-center' data-aos='zoom-in' data-aos-delay='700'>
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>5+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects Completed</div>
                        </div>
                    </div>
                    <button className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-ceneter py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                    rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform
                    ${darkMode
                        ? 'text-white bg-orange-500/10'
                        : 'text-gray-800 bg-white/90'}`}
                        data-aos='fade-up'
                        data-aos-delay='800'>
                    Learn More
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About;