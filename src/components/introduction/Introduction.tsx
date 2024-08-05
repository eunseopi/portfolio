import { Canvas } from '@react-three/fiber';
import Scene from '../Scene'; // 우주 배경을 그리는 Scene 컴포넌트
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import profile from '../../../public/profile.jpeg';

export default function Introduction() {
    const [techStack, setTechStack] = useState('React');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const techStacks = ['React', 'JavaScript', 'HTML/CSS', 'TypeScript'];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % techStacks.length;
            setTechStack(techStacks[index]);
            setProgress(0);

            // Progress bar animation
            const progressInterval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 30);

        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#1a1a2e] relative w-full h-screen overflow-hidden">
            {/* 배경 Canvas */}
            <Canvas
                className="absolute inset-0 w-full h-full z-0"
                camera={{ position: [0, 0, 5] }}
            >
                <Scene />
            </Canvas>

            {/* 소개 내용 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
                <motion.div
                    className="bg-white p-6 rounded-3xl shadow-lg w-full md:w-10/12 lg:w-8/12 xl:w-11/12 h-auto text-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    {/* 기술 스택 애니메이션 */}
                    <div className="relative mb-4">
                        <motion.div
                            key={techStack}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.5}}
                        >
                            {techStack}
                        </motion.div>
                    </div>

                    {/* 프로그레스 바 */}
                    <div className="relative mt-4">
                        <div className="w-full h-1 bg-gray-300 rounded-full">
                            <div
                                className="h-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-full"
                                style={{width: `${progress}%`, transition: 'width 0.03s linear'}}
                            ></div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-8">
                        <Image src={profile} alt="profile" className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60"/>

                        <div className="flex flex-col gap-4 md:w1-2 lg:w-1/4">
                            <motion.a
                                whileHover={{scale: 1.1}}
                                href="mailto:asxzqw12@gmail.com"
                                className="bg-[#333] text-white py-2 px-4 rounded-2xl shadow hover:bg-[#444] transition duration-300"
                            >
                                asxzqw12@gmail.com
                            </motion.a>
                            <motion.a
                                whileHover={{scale: 1.1}}
                                href="https://github.com/eunseopi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#333] text-white py-2 px-4 rounded-2xl shadow hover:bg-[#444] transition duration-300"
                            >
                                GITHUB
                            </motion.a>
                            <motion.a
                                whileHover={{scale: 1.1}}
                                href="https://sphenoid-delphinium-19d.notion.site/35885484a5eb481fa5a1912449c12c34"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#4f4f4f] text-white py-2 px-4 rounded-2xl shadow hover:bg-[#5a5a5a] transition duration-300"
                            >
                                NOTION
                            </motion.a>
                        </div>
                    </div>

                    <div
                        className="relative flex flex-col items-center mt-8 text-black text-base md:text-lg lg:text-xl p-3">
                        <p className="mb-2">안녕하세요👋 현재 삼육대학교를 다니고 있는 신은섭입니다.</p>
                        <p className="mb-2">현재 지망하고 있는 직군은
                            <span
                                className="font-extrabold text-lg md:text-xl lg:text-2xl ml-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
                                FrontEnd
                            </span> 입니다.
                        </p>
                        <p className="mb-2">FrontEnd 만 공부를 하는 것이 아닌, <span
                            className="font-extrabold text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
                            BackEnd
                        </span> 에도 관심을 가지고 적극적으로 다양한 분야에 관심사를 넓혀가고 있습니다.</p>
                        <p className="mb-2">학교공부도 중요하지만, 다양한 <span
                            className="font-extrabold text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
                            대외활동
                        </span>과 <span
                            className="font-extrabold text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
                            프로젝트
                        </span>를 통한 협업 경험을 쌓고 있습니다.</p>
                        <p className="mb-2">매번 다른 주제로 개발을 하며, <span
                            className="font-extrabold text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
                            개발역량
                        </span>을 키워나가고자 합니다.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
