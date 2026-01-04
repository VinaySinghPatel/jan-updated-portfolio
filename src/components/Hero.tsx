import { HERO_CONTENT } from '../constant';
import profilePic from '../assets/Vinay Patel Image_imresizer.jpg';

const Hero = () => {
    return (
        <div className="bg-white pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Left Column: Text Content */}
                    <div className="md:w-3/5 space-y-6 text-center md:text-left order-2 md:order-1">
                        <div>
                            <span className="text-pink-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                                {HERO_CONTENT.role}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-2">
                                <span className="text-slate-700">
                                    {HERO_CONTENT.name.split(' ')[0]}
                                </span>
                                <span className="text-slate-500 ml-2 md:ml-4">
                                    {HERO_CONTENT.name.split(' ')[1]}
                                </span>
                            </h1>
                        </div>

                        <div className="md:border-l-4 md:border-pink-500 md:pl-6">
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                {HERO_CONTENT.description}
                            </p>
                        </div>


                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="md:w-2/5 flex justify-center order-1 md:order-2">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Simple geometric decorations, less "fancy" */}
                            <div className="absolute top-4 right-4 w-full h-full bg-pink-50 rounded-2xl -z-10"></div>
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-gray-100">
                                <img
                                    src={profilePic}
                                    alt="Vinay Patel"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
