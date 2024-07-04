import { FaDribbble, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = () => {
    return (
        <div >
            <div className="text-white flex gap-10 text-xl">
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link to={'/'}>
                        <FaEnvelope />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link to={'/'}>
                        <FaGithub />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link to={'/'}>
                        <FaLinkedinIn />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link to={'/'}>
                        <FaFacebookF />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link to={'/'}>
                        <FaDribbble />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SocialIcons;