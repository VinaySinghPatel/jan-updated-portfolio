import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/')}
            className="fixed top-8 right-8 z-50 flex items-center justify-center p-3 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-black/10 shadow-lg text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-pink-600 group"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    );
};

export default BackButton;
