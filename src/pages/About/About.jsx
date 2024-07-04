
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
AOS.init();


const page = () => {
    return (
        <div className='container mx-auto px-5 py-20 h-full'>
            <div>
                <h1 data-aos-duration="1000" data-aos="zoom-in-down" className="text-2xl font-semibold text-center text-white pt-10 pb-40">About Me</h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div data-aos-duration="1000" data-aos="fade-up" className='w-full lg:w-1/2'>
                    <div className='p-10 w-[70%] rounded-xl bg-gray-800 relative pt-48 text-white border-b-[5px] border-blue-300'>
                        <div className='absolute -top-32 left-1/2 -translate-x-1/2'>
                            <div className='bg-gray-800 h-72 w-72 pt-5 rounded-full p-4 border-t-[5px] border-blue-300'>
                                <img className='h-64 w-64 object-cover rounded-full' src="https://i.postimg.cc/hGDMGdxg/my-passport-photo.png" alt="My Image" />
                            </div>
                        </div>
                        <div>
                            <h1 className='font-semibold text-center text-4xl'>MD RIEAD MIA</h1>
                            <p className='font-medium text-center text-xl mt-3'>Web Developer</p>
                        </div>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className='w-full lg:w-1/2'>
                    <h2 className='text-3xl font-semibold text-white'>Who I Am?</h2>
                    <p className='font-medium text-white mt-3 text-justify'>I am a highly skilled Frontend Web Developer with expertise in HTML, CSS, Tailwind, JavaScript, and React JS. I have a solid understanding of Node JS, Express JS, and Mongo DB. My experience includes developing dynamic, complex, and interactive user experiences, resulting in measurable success. I excel at creating responsive and user-friendly web applications, leveraging my knowledge to deliver high-quality solutions. My ability to integrate modern technologies ensures seamless and efficient development processes, making me a valuable asset to any development team.</p>
                    <div className='flex gap-3 items-center pt-10'>
                        <p className=' text-white font-semibold text-xl'>Let&apos;s Connect - </p>
                        <div>
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;