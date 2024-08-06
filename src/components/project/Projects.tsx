import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const technologies = [
    {
        name: 'Experience',
        description: [
            '2024.07 ~ 공개 SW 개발자 공모전',
            '2024.01 ~ KDT 네트워크 캠퍼스',
        ]
    },
    {
        name: 'Projects',
        description: [
            '2024.08 ~ SmartCloset',
            '2024.07 ~ ClubHub',
            '2024.07 ~ Botox',
            '2024.03 ~ 2024/06 Fariy',
            '2022.04 ~ 2022.08 BucketPlace',
        ]
    }
];

// @ts-ignore
const Card = ({ tech, scrollYProgress }) => {
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);


    return (
        <motion.div
            className="w-full h-full perspective-1000"
            style={{
                transformStyle: "preserve-3d",
                rotateY: rotate
            }}
        >
            <div
                className="absolute w-full h-11/12 backface-hidden bg-opacity-10 rounded-lg shadow-lg p-5 border-2 border-gray-300"
                style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                <h3 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">{tech.name}</h3>
                {tech.description.map((line: any, index: any) => (
                    <p key={index} className="text-white text-lg mb-2">{line}</p>
                ))}
            </div>
        </motion.div>
    );
};

export default function Projects() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="bg-[#1a1a2e] p-8">
            <h2 className="font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-center mb-10">Experience
                & Projects</h2>
            <div className="flex justify-around items-center h-96">
                {technologies.map((tech, index) => (
                    <div key={index} className="w-2/5 h-64 mb-20">
                        <Card tech={tech} scrollYProgress={scrollYProgress}/>
                    </div>
                ))}
            </div>
        </div>
    );
}