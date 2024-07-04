import { Button } from "@material-tailwind/react";
import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 pt-20">
            <div className="container mx-auto text-white flex flex-col md:flex-row gap-10 items-center h-screen overflow-hidden px-8">
                <div className="h-auto">
                    <h3 data-aos-duration="1000" data-aos="fade-right" className="text-xl md:text-2xl lg:text-3xl xl:text-5xl">It&apos;s Me</h3>
                    <h1 data-aos-duration="1000" data-aos="fade-left" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold py-3 xl:py-5">MD RIEAD MIA</h1>
                    <h3 data-aos-duration="1000" data-aos="fade-right" className="text-3xl font-semibold">I&apos;m a
                        <span className="text-blue-300">
                            <Typewriter
                                words={[' Frontend Web Developer', ' MERN Stack Developer', ' Graphic Designer']}
                                loop={true}
                                cursor={1}
                                cursorBlinking={0}
                                cursorStyle='_'
                                cursorColor="#2196F3"
                            />
                        </span>
                    </h3>
                    <p data-aos-duration="1000" data-aos="fade-up" className="max-w-[550px] text-justify font-light pt-3">Highly skilled Frontend Web Developer with solid knowledge about HTML, CSS, Tailwind, JavaScript & React JS, I am also familiar with Node JS, Express JS & Mongo DB.</p>
                    <div className="pt-10">
                        <SocialIcons/>
                    </div>
                    <div className="pt-10">
                        <Button data-aos-duration="1000" data-aos="fade-up" className="normal-case bg-blue-300 rounded-full hover:scale-105 duration-300">Hire Me</Button>
                    </div>
                </div>
                <div className="h-full flex items-end">
                    {/* <Image data-aos-duration="1000" data-aos="fade-up"  width="400" alt="My Photo" height="auto" className="w-full object-cover mt-20" src={MyPhoto}></Image> */}
                </div>
            </div>
        </div>
    );
};

export default Home;