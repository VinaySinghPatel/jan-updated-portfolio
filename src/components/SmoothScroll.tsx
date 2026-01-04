import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

type Props = {
    children: React.ReactNode;
    onScroll?: (scrollY: number) => void;
};

const SmoothScroll = ({ children, onScroll }: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollInstance = useRef<any>(null);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        if (!scrollRef.current) return;

        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.08, // smoothness
            multiplier: 1,
            smartphone: { smooth: true, breakpoint: 0 } as any,
            tablet: { smooth: true, breakpoint: 0 } as any,
        });

        scrollInstance.current = scroll;

        // Update scroll on resize to fix extra space issues
        const resizeObserver = new ResizeObserver(() => {
            scroll.update();
        });
        resizeObserver.observe(scrollRef.current);

        // Show/hide back to top button
        scroll.on('scroll', (args: any) => {
            if (typeof args.scroll.y === 'number') {
                if (onScroll) onScroll(args.scroll.y);

                if (args.scroll.y > 100) {
                    setShowTopBtn(true);
                } else {
                    setShowTopBtn(false);
                }
            }
        });

        return () => {
            if (scroll) scroll.destroy();
            resizeObserver.disconnect();
        };
    }, []);

    const scrollToTop = () => {
        scrollInstance.current?.scrollTo(0, { duration: 1000 });
    };

    return (
        <>
            <div ref={scrollRef} data-scroll-container className="min-h-screen">
                {children}
            </div>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-pink-600 text-white shadow-lg transition-all duration-300 hover:bg-pink-700 hover:scale-110 focus:outline-none ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
                aria-label="Back to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m18 15-6-6-6 6" />
                </svg>
            </button>
        </>
    );
};

export default SmoothScroll;
