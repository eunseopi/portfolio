import {motion, useAnimation} from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Scene from '../Scene';
import {useEffect} from "react";

export default function Header() {
    const nameControls = useAnimation();
    const roleControls = useAnimation();


    useEffect(() => {
        // 페이지 로드 시 애니메이션 시작
        nameControls.start({
            x: "0%", // 원래 위치
            opacity: 1, // 완전한 불투명도
            transition: { duration: 1, delay: 0.5 }
        });
        roleControls.start({
            x: "0%", // 원래 위치
            opacity: 1, // 완전한 불투명도
            transition: { duration: 1, delay: 0.5 }
        });

        const handleScroll = () => {
            const scrollY = window.scrollY;

            // 스크롤 위치에 따라 애니메이션을 설정합니다.
            if (scrollY > 50) {
                // 이름은 왼쪽으로 이동
                nameControls.start({
                    x: "-100%",
                    transition: { duration: 1 }
                });
                // FRONTEND는 오른쪽으로 이동
                roleControls.start({
                    x: "100%",
                    transition: { duration: 1 }
                });
            } else {
                // 스크롤이 원래 위치로 돌아오면 원래 위치로 돌아옴
                nameControls.start({
                    x: "0%",
                    transition: { duration: 1 }
                });
                roleControls.start({
                    x: "0%",
                    transition: { duration: 1 }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [nameControls, roleControls]);

    return (
        <div className="bg-[#1a1a2e] relative overflow-hidden w-full h-screen">
            {/* 배경 Canvas */}
            <Canvas
                className="absolute inset-0 w-full h-full z-0"
                camera={{ position: [0, 0, 5] }}
            >
                <Scene />
            </Canvas>

            {/* header 내용 */}
            <div className="flex flex-col absolute top-96 left-48 -mt-24 items-center justify-center">
                <motion.div
                    className="w-[40vw] h-[40vw] max-w-[100vw] max-h-[100vw] bg-white rounded-full absolute mix-blend-screen"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.h1
                    className="lg:text-[10vw] sm:text-[6vw] md:text-[5vw] font-bold text-[#9900ff] text-center relative z-20 leading-none mix-blend-difference"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={nameControls}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    SHIN EUN SEOP
                </motion.h1>
                <motion.h2
                    className="lg:text-[10vw] sm:text-[4vw] md:text-[3vw] font-bold text-[#9900ff] text-center mt-4 relative z-20 mix-blend-difference"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={roleControls}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    FRONTEND
                </motion.h2>
            </div>
        </div>
    );
}
