import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer({ darkMode }) {
    const currentYear = new Date().getFullYear();
    return (
        <footer
            style={{
                // Fixed typo: changed 'linear-linear' to 'linear-gradient'
                background: darkMode 
                    ? 'linear-gradient(to bottom, #030712, #111827)' 
                    : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
                borderColor: darkMode ? '#374151' : '#d1d5db'
            }}
            className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    {/* Left: Branding */}
                    <div className="text-center md:text-left">
                        <h3 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            VB.
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                            Full Stack Developer
                        </p>
                    </div>

                     <div className="text-center md:text-right">
                        <p className="text-lg flex items-center justify-center md:justify-end gap-1 text-gray-500">
                            @{currentYear} Vaibhavi. All right reserved.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {[
                            { icon: <FaGithub />, href: "https://github.com/vaibhavibhaud04-prog" },
                            { icon: <FaLinkedin />, href: "#" },
                            { icon: <FaTwitter />, href: "#" }
                        ].map((social, index) => (
                            <a 
                                key={index}
                                href={social.href}
                                // Fixed typo: 'jusitfy-center' -> 'justify-center'
                                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white 
                                    ${darkMode ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;