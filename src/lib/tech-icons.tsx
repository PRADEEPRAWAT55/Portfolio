// lib/tech-icons.ts
import React from 'react';
import { 
    SiReact, 
    SiNextdotjs,
    SiNodedotjs,
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiRedis,
    SiNestjs,
    SiC,
    SiCplusplus,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiSpringboot,
    SiPhp,
    SiRedux,
    SiMysql,
    SiSass,
    SiGraphql,
    SiPython,
    SiTensorflow,
    SiAwsamplify,
    SiFastapi,
    SiStripe,
    SiRealm,
    SiVercel,
    SiExpress,
    SiPrisma,
    SiRazorpay,
    SiGithubactions,
    SiAmazon,
    SiFramer
} from 'react-icons/si';

import { FaJava } from "react-icons/fa";
import { AiOutlineQuestionCircle } from 'react-icons/ai';




import { TbBrandSocketIo } from 'react-icons/tb';
import { TbDatabase } from 'react-icons/tb';
import { MdGridOn } from 'react-icons/md';

export const techIcons = {
    // Languages
    'C': <SiC className="text-[#A8B9CC]" />,
    'C++': <SiCplusplus className="text-[#00599C]" />,
    'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'Java': <FaJava className="text-[#007396]" />,

    // Frontend
    'React.js': <SiReact className="text-[#61DAFB]" />,
    'React Native': <SiReact className="text-[#61DAFB]" />,
    'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'Bootstrap': <SiBootstrap className="text-[#7952B3]" />,
    // 'AG Grid': <SiAggrid className="text-[#57A500]" />,

    // Backend
    'Nest.js': <SiNestjs className="text-[#DC382D]" />,
    'Node.js': <SiNodedotjs className="text-[#339933]" />,
    'Spring Boot': <SiSpringboot className="text-[#6DB33F]" />,
    'REST APIs': <SiGraphql className="text-[#E10098]" />, // Close alternative
    'WebSocket': <TbBrandSocketIo className="text-[#010101]" />,

    // Databases
    'MySQL': <SiMysql className="text-[#4479A1]" />,
    'PostgreSQL': <SiPostgresql className="text-[#336791]" />,
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'TypeORM': <TbDatabase className="text-[#4DBA87]" />,
    'Redis': <SiRedis className="text-[#DC382D]" />,
    'Realm' : <SiRealm className="text-[#00A3E0]" />,

    // Tools & Other
    'PHP': <SiPhp className="text-[#777BB4]" />,
    'Sails.js': <SiJavascript className="text-[#F7DF1E]" />, // Close alternative
    'React Query': <SiReact className="text-[#61DAFB]" />, // Close alternative
    'Redux': <SiRedux className="text-[#764ABC]" />,
    'Docker': <SiDocker className="text-[#2496ED]" />,

    // UI / Misc
    'AG Grid': <MdGridOn className="text-[#57A500]" />,
    'AsyncStorage': <TbDatabase className="text-[#6B7280]" />,
    'Framer Motion': <SiFramer className="text-[#0055FF]" />,
    'Vercel': <SiVercel className="text-white" />,
    'Socket.io': <TbBrandSocketIo className="text-[#010101]" />,
    'Express': <SiExpress className="text-[#000000]" />,
    'SES': <SiAmazon className="text-[#FF9900]" />,
    'CI/CD': <SiGithubactions className="text-[#2088FF]" />,
    'Razorpay': <SiRazorpay className="text-[#2A73FF]" />,
    'Prisma': <SiPrisma className="text-[#0EA5A4]" />,

    // Additional icons for projects
    'Python': <SiPython className="text-[#3776AB]" />,
    'TensorFlow': <SiTensorflow className="text-[#FF6F00]" />,
    'AWS Lambda': <SiAwsamplify className="text-[#FF9900]" />,
    'FastAPI': <SiFastapi className="text-[#009688]" />,
    'Stripe': <SiStripe className="text-[#008CDD]" />,
};

// Build a normalized lookup to tolerate small naming differences
const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const normalizedMap: Record<string, any> = {};
Object.keys(techIcons).forEach((k) => {
    normalizedMap[normalize(k)] = techIcons[k as keyof typeof techIcons];
});

export function getTechIcon(name?: string) {
    if (!name) return <AiOutlineQuestionCircle className="text-gray-400" />;
    const exact = (techIcons as any)[name];
    if (exact) return exact;
    const n = normalize(name);
    if (normalizedMap[n]) return normalizedMap[n];

    // some common aliases
    const aliases: Record<string, string> = {
        nestjs: 'nest.js',
        nextjs: 'next.js',
        'react': 'react.js',
        'reactjs': 'react.js',
        socketio: 'socket.io',
        aggrid: 'ag grid',
        framer: 'framer motion',
        vercel: 'vercel',
    };
    if (aliases[n] && normalizedMap[normalize(aliases[n])]) return normalizedMap[normalize(aliases[n])];

    return <AiOutlineQuestionCircle className="text-gray-400" />;
}