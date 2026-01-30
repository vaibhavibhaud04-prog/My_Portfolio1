import { color } from "framer-motion";
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import bootstrap from '../assets/bootstrap.png'
import react from '../assets/react.png'
import mysql from '../assets/mysql.png'
import java from '../assets/java.png'
import springboot from '../assets/springboot.png'

function Skills({darkMode}){
    const skill =[
        {name:'HTML', icon: html, level:95, color: 'from-orange-500 to-amber-500'},
        {name:'CSS', icon: css, level:90, color: 'from-blue-500 to-cyan-500'},
        {name:'Javascript', icon: js, level:88, color: 'from-yellow-500 to-amber-500'},
        {name:'BootStrap', icon: bootstrap, level:85, color: 'from-cyan-500 to-blue-500'},
        {name:'React', icon: react, level:92, color: 'from-teal-500 to-cyan-500'},
        {name:'MYSQL', icon: mysql, level:92, color: 'from-green-500 to-emerald-500'},
        {name:'Java', icon: java, level:75, color: 'from-blue-500 to-indigo-500'},
        {name:'SpringBoot', icon: springboot, level:92, color: 'from-red-500 to-orange-500'}
    ]

    return(
        <section id="skills" 
            style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
            className='py-20 relative transition-colors duration-500'>
            
            <div className='container px-5 mx-auto'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                        style={{color:darkMode?'white' :'#1f2937' }}>
                        My <span
                        style={{background:'linear-gradient(to right, #f97316, #f59e0b)',
                                WebkitBackgroundClip:'text',
                                backgroundClip:'text',
                                color:'transparent'
                            }}>Skills</span>
                    </h1>
                    <p
                            className='text-lg max-w-2xl mx-auto leading-relaxed'
                            style={{color: darkMode? '#d1d5db' : '#4b5563'}}>
                                Technologies I use to bring ideas to life.
                            </p>

                </div>

                <div className='flex flex-wrap -m-4'>
                    {skill.map((item, index) => (
                        <div key={index} className='p-4 lg:w-1/4 md:w-1/2 w-full'>
                            
                            {/* THE BOX: Stays exactly as it looks in your screenshot */}
                            <div className={`
                                group relative h-32 flex items-center justify-center rounded-2xl border transition-all duration-300 ease-out cursor-pointer
                                ${darkMode 
                                    ? 'bg-gray-800/20 border-gray-700/30 shadow-[0_4px_12px_rgba(0,0,0,0.5)]' 
                                    : 'bg-white border-gray-200 shadow-md'}
                                hover:-translate-y-2 hover:border-orange-500/50
                            `}>
                                
                                {/* THE CONTENT: Invisible by default, reveals on hover */}
                                <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 ease-out">
                                    <img 
                                        src={item.icon} 
                                        alt={item.name} 
                                        className='w-12 h-12 mb-2 object-contain' 
                                    />
                                    <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                        {item.name}
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;