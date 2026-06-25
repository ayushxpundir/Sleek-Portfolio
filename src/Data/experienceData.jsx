import { IoLogoFigma } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { PiFramerLogoFill } from "react-icons/pi";
import { SiNetlify } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";
import BaselineAdobeIcon from '@iconify-react/ic/baseline-adobe';
import CursorAiIcon from '@iconify-react/bxl/cursor-ai';

const experiences = [
    {
        id: 1,
        title: "Developer",
        company: "Classified",
        companyClass: "exp-span es1",
        subtitle: "Stealth, Full-Time | Mar 26 - Present",
        active: true,
        description: [],
        stack: [],
    },
    {
        id: 2,
        title: "UI & Graphic Designer",
        company: "Freelancer",
        companyClass: "exp-span",
        subtitle: "Remote, Part-Time | Jul 24 - Feb 26",
        active: false,
        description: [
            "Designed responsive websites across multiple platforms with a 98% client satisfaction rate. Optimized UI and site layouts, increasing average user engagement by 35% for global clients.",
            "",
        ],
        stack: [
            { title: "Figma", icon: IoLogoFigma },
            { title: "Cursor AI", icon: CursorAiIcon },
            { title: "Python", icon: FaPython },
            { title: "Framer", icon: PiFramerLogoFill },
            { title: "Adobe Suite", icon: BaselineAdobeIcon },
            { title: "Netlify", icon: SiNetlify },
            { title: "Vercel", icon: RiVercelFill },
        ],
    },
];

export default experiences;