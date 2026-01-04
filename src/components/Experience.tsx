

import { EXPERIENCES } from '../constant';
import BackButton from './BackButton';

const Experience = ({ isPreview = false }: { isPreview?: boolean }) => {
    return (
        <div id="experience" className={`${isPreview ? "py-20" : "min-h-screen py-20 relative"} bg-gray-50`}>
            {!isPreview && <BackButton />}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                    Work <span className="text-pink-500">Experience</span>
                </h2>

                <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <span className="absolute -left-[11px] top-8 h-6 w-6 rounded-full bg-white border-4 border-pink-500 shadow-sm z-10" />

                            {/* Connecting Arrow */}
                            <div className="absolute top-9 left-6 md:left-10 w-4 h-4 bg-white border-l border-b border-gray-100 transform rotate-45 z-20"></div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gray-600 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-400 mt-2 md:mt-0 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                        {exp.year}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* {isPreview && (
                    <div className="mt-12 text-center">
                        <Link to="/experience" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-pink-500 hover:text-pink-500 transition-all shadow-sm hover:shadow-md group">
                            View Full Experience
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default Experience;
