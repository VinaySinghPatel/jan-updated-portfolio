
import { SKILLS } from '../constant';

const Skills = () => {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Technical <span className="text-pink-500">Skills</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Technologies and tools I use to build scalable and robust applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(SKILLS).map(([category, skills]) => (
                        <div key={category} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize border-b border-gray-200 pb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-pink-500 group-hover:scale-150 transition-transform"></span>
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 font-medium shadow-sm hover:border-pink-300 hover:text-pink-600 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
