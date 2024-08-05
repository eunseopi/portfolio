import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#e0e0e0]">
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-[#9900ff] origin-left"
            />
        </div>
    );
};

export default ScrollProgress;
