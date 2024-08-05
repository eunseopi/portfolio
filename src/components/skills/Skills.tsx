import {Canvas} from "@react-three/fiber";
import Scene from "@/components/Scene";

const skills = ['React', 'JavaScript', 'HTMLCSS'] as const;
type Skill = typeof skills[number];

const logos: Record<Skill, string> = {
    React: '/React.png',
    JavaScript: '/JavaScript.png',
    HTMLCSS: '/htmlcss.png',
};

const SkillDetails: Record<Skill, string> = {
    React: '적을 예정',
    JavaScript: '적을 예정',
    HTMLCSS: '적을 예정',
};

const otherSkills = ['NextJS', 'TypeScript', 'TailwindCSS'] as const;

export default function Skills() {
    return (
        <div className="bg-[#1a1a2e] relative w-full h-full">
            {/* 배경 Canvas */}
            <Canvas
                className="absolute inset-0 w-full h-full z-0"
                camera={{ position: [0, 0, 5] }}
            >
                <Scene />
            </Canvas>
            <div className="relative z-10 md: -mt-48 lg:-mt-60">
                <h2 className="font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-center">Skills</h2>
                <div className="flex flex-wrap gap-4 justify-center mt-5">
                    {otherSkills.map((skill) => (
                        <div
                            key={skill}
                            className="p-2 border border-gray-300 rounded-lg bg-opacity-10"
                            style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
                        >
                            <p className="text-center text-white font-semibold">
                                {skill}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-6 justify-center p-4 rounded-lg shadow-md">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="flex flex-col items-center p-4 border border-gray-300 rounded-lg bg-opacity-10"
                            style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', width: 'calc(33% - 1.5rem)'}}
                        >
                            <p className="text-center text-3xl text-white font-semibold mb-2">
                                {skill}
                            </p>
                            <img
                                src={logos[skill]}
                                alt={`${skill} logo`}
                                className="w-24 h-24 object-cover mx-auto"
                            />
                            <p className="text-center text-white mt-2">{SkillDetails[skill]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
