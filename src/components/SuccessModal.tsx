
import { createPortal } from "react-dom";

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/20 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-sm w-full transform transition-all scale-100 flex flex-col items-center text-center animate-fade-in-up">

                {/* Success Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm mb-6">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                </p>

                <button
                    onClick={onClose}
                    className="w-full py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 active:scale-95 transform duration-100"
                >
                    Continue
                </button>
            </div>
        </div>,
        document.body
    );
};

export default SuccessModal;
