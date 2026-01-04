
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constant';
import BackButton from './BackButton';

const Projects = ({ isPreview = false }: { isPreview?: boolean }) => {
    return (
        <div id="projects" className={`${isPreview ? "py-20" : "min-h-screen py-20 relative"} bg-white`}>
            {!isPreview && <BackButton />}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Featured <span className="text-pink-500">Projects</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {PROJECTS.slice(0, isPreview ? 2 : undefined).map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col md:flex-row"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-10"></div>

                            {/* Image Section */}
                            <div className="md:w-2/5 h-36 md:h-auto relative overflow-hidden bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-5 md:p-8 md:w-3/5 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-3 self-start whitespace-nowrap">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-gray-900 transition-colors p-1.5 hover:bg-gray-100 rounded-full"
                                                title="View Code"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:shadow-md hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:-translate-y-0.5 font-medium text-xs group/btn"
                                            >
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                                </span>
                                                Visit Live
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.slice(0, 4).map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {isPreview && (
                    <div className="mt-12 text-center">
                        <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-pink-500 hover:text-pink-500 transition-all shadow-sm hover:shadow-md group">
                            View All Projects
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Projects;
