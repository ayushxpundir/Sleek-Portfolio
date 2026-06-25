import { BsCss, BsJavascript, BsTypescript } from "react-icons/bs";
import { FaReact, FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiMongodb, SiNextdotjs, SiExpress, SiGnubash, SiNpm, SiNetlify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { PiFramerLogoFill } from "react-icons/pi";
import CursorAiIcon from '@iconify-react/bxl/cursor-ai';

// Import the icon exactly as a default export component
import PostgresqlIcon from '@iconify-react/simple-icons/postgresql';

import BaselineAdobeIcon from '@iconify-react/ic/baseline-adobe';

// "cursor" is a special-cased key handled with a custom <svg> in Stack.jsx
const stackItems = [
    { title: "CSS", icon: BsCss },
    { title: "JavaScript", icon: BsJavascript },
    { title: "TypeScript", icon: BsTypescript },
    { title: "Tailwind CSS", icon: RiTailwindCssFill },
    { title: "React", icon: FaReact },
    { title: "Next", icon: SiNextdotjs },
    { title: "Python", icon: FaPython },
    { title: "MongoDB", icon: SiMongodb },
    { title: "Express", icon: SiExpress },
    { title: "Git", icon: FaGitAlt },
    { title: "GitHub", icon: FaGithub },
    { title: "Node", icon: FaNodeJs },
    { title: "PostgreSQL", icon: PostgresqlIcon }, // Used cleanly like your other icons
    { title: "MySQL", icon: GrMysql },
    { title: "npm", icon: SiNpm },
    { title: "Bash", icon: SiGnubash },
    { title: "Cursor AI", icon: CursorAiIcon  },
    { title: "Framer", icon: PiFramerLogoFill },
    { title: "VS Code", icon: VscVscode },
    { title: "Adobe Suite", icon: BaselineAdobeIcon },
    { title: "Figma", icon: IoLogoFigma },
    { title: "Vercel", icon: RiVercelFill },
    { title: "Netlify", icon: SiNetlify },
];

export default stackItems;