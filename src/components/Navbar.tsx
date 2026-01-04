
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HERO_CONTENT } from '../constant';

const Navbar = ({ isScrolled: externalIsScrolled }: { isScrolled?: boolean }) => {
    const [internalIsScrolled, setInternalIsScrolled] = useState(false);
    const isScrolled = externalIsScrolled ?? internalIsScrolled;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setInternalIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="font-bold text-2xl text-gray-900 tracking-tighter">
                            {HERO_CONTENT.name.split(' ')[0]}<span className="text-pink-500">.</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="text-gray-900 hover:text-pink-500 font-medium transition-colors">Home</Link>
                            <Link to="/experience" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Experience</Link>
                            <Link to="/projects" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Projects</Link>
                            <Link to="/contact" className="px-5 py-2 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all">Contact</Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
                    <Link to="/" className="block text-gray-900 hover:text-pink-500 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/experience" className="block text-gray-600 hover:text-pink-500 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link>
                    <Link to="/projects" className="block text-gray-600 hover:text-pink-500 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link to="/contact" className="block text-center py-2 rounded-lg bg-gray-900 text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
