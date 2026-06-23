import { FaReact, FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";




function Links() {
    return (
        <>
            <div className="top-inside-links">
                <span className="icon-box" data-title="LinkedIn"><a href="https://www.linkedin.com/in/ayushxpundir/" target="_blank" ><BsLinkedin className="top-links-style stack-icon" data-title="LinkedIn" /></a></span>
                <span className="icon-box" data-title="GitHub"><a href="https://github.com/ayushxpundir" target="_blank" ><FaGithub className="top-links-style stack-icon" data-title="GitHub" /></a></span>
                <span className="icon-box" data-title="X/Twitter"><a href="https://x.com/ayushxpundir" target="_blank" ><BsTwitterX className="top-links-style" /></a></span>
                <span className="icon-box" data-title="Instagram"><a href="https://www.instagram.com/ayushxpundir" target="_blank" ><BsInstagram   className="top-links-style stack-icon" data-title="LinkedIn" /></a></span>
                <span className="icon-box" data-title="LeetCode"><a href="https://leetcode.com/u/ayushxpundir/" target="_blank" ><SiLeetcode  className="top-links-style stack-icon" data-title="LinkedIn" /></a></span>
                <span className="icon-box" data-title="Email"><a href="mailto:ayushpundir0510@gmail.com" target="_blank" ><MdOutlineAlternateEmail   className="top-links-style stack-icon" data-title="LinkedIn" /></a></span>
            </div>
        </>
    )
}

export default Links
