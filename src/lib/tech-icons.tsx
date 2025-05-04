// lib/tech-icons.ts
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
    SiRealm
} from 'react-icons/si';

import { FaJava } from "react-icons/fa";




import { TbBrandSocketIo } from 'react-icons/tb';

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
    'TypeORM': <SiSass className="text-[#C76494]" />, // Close alternative
    'Redis': <SiRedis className="text-[#DC382D]" />,
    'Realm' : <SiRealm className="text-[#00A3E0]" />,

    // Tools & Other
    'PHP': <SiPhp className="text-[#777BB4]" />,
    'Sails.js': <SiJavascript className="text-[#F7DF1E]" />, // Close alternative
    'React Query': <SiReact className="text-[#61DAFB]" />, // Close alternative
    'Redux': <SiRedux className="text-[#764ABC]" />,
    'Docker': <SiDocker className="text-[#2496ED]" />,

    // Additional icons for projects
    'Python': <SiPython className="text-[#3776AB]" />,
    'TensorFlow': <SiTensorflow className="text-[#FF6F00]" />,
    'AWS Lambda': <SiAwsamplify className="text-[#FF9900]" />,
    'FastAPI': <SiFastapi className="text-[#009688]" />,
    'Stripe': <SiStripe className="text-[#008CDD]" />,
};