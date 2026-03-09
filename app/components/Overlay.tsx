"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
    scrollProgress: MotionValue<number>;
}

export default function Overlay({ scrollProgress }: OverlayProps) {
    // Section 1: 0% to 20% scroll
    const opacity1 = useTransform(scrollProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollProgress, [0, 0.2], [0, -100]);

    // Section 2: 25% to 55% scroll
    const opacity2 = useTransform(
        scrollProgress,
        [0.25, 0.35, 0.45, 0.55],
        [0, 1, 1, 0]
    );
    const y2 = useTransform(scrollProgress, [0.25, 0.55], [100, -100]);

    // Section 3: 60% to 90% scroll
    const opacity3 = useTransform(
        scrollProgress,
        [0.6, 0.7, 0.8, 0.9],
        [0, 1, 1, 0]
    );
    const y3 = useTransform(scrollProgress, [0.6, 0.9], [100, -100]);

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Section 1: Center Bottom */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-end text-center p-8 pb-32"
            >
                <div className="bg-black/40 backdrop-blur-sm border border-emerald-500/20 px-4 md:px-8 py-4 md:py-6 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.1)] w-full max-w-[90%] md:max-w-none mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg pb-1 md:pb-2 leading-tight">
                        Aakash Rathod
                    </h1>
                    <div className="flex items-center justify-center gap-2 md:gap-3 mt-2 md:mt-4">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <p className="text-lg sm:text-xl md:text-2xl text-emerald-50 font-medium tracking-wide font-mono">
                            DevOps Engineer
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Section 2: Left aligned */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex flex-col items-start justify-center p-6 sm:p-8 md:p-24"
            >
                <div className="border-l-4 border-emerald-500 pl-4 sm:pl-6 bg-black/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-r-xl md:rounded-none max-w-[90%] md:max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight">
                        I build <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">scalable infrastructure.</span>
                    </h2>
                </div>
            </motion.div>

            {/* Section 3: Right aligned */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right p-6 sm:p-8 md:p-24"
            >
                <div className="border-r-4 border-cyan-500 pr-4 sm:pr-6 bg-black/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-l-xl md:rounded-none max-w-[90%] md:max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight">
                        Bridging <br className="md:hidden" /><span className="text-emerald-400">development</span> <br className="md:hidden" />and <span className="text-cyan-400">operations.</span>
                    </h2>
                </div>
            </motion.div>
        </div>
    );
}
