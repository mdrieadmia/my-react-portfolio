import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";


const Skills = () => {
    return (
        <div className='container mx-auto px-5 pt-32 min-min-h-screen'>
            <div>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Timeline>
                        <TimelineItem data-aos-duration="800" data-aos="fade-up" className="ml-2">
                            <TimelineConnector />
                            <TimelineHeader className="pb-10">
                                <TimelineIcon className="p-0">
                                    <div className="w-5 h-5 rounded-full bg-blue-300">

                                    </div>
                                </TimelineIcon>
                                <Typography variant="h5" color="white" className="text-2xl ml-2">
                                    Frontend Technologies
                                </Typography>
                            </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1000" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" alt="user 1" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    HTML - 5
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Proficient in creating structured and accessible web content using HTML.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1200" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    CSS - 3
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Skilled in designing visually appealing and responsive web layouts with CSS.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1400" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" alt="user 3" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Tailwind CSS
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography className="font-normal pb-8 text-gray-400">
                                    Experienced in using Tailwind CSS for rapid and efficient UI development.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1600" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    JavaScript
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Proficient in JavaScript for dynamic, interactive web application development.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1800" data-aos="fade-up">
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    React JS
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Skilled in building dynamic, efficient, and scalable user interfaces with React JS.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                    <Timeline>
                        <TimelineItem data-aos-duration="800" data-aos="fade-up" className="ml-2">
                            <TimelineConnector />
                            <TimelineHeader className="pb-10">
                                <TimelineIcon className="p-0">
                                    <div className="w-5 h-5 rounded-full bg-blue-300"></div>
                                </TimelineIcon>
                                <Typography variant="h5" color="white" className="text-2xl ml-2">
                                    Backend Technologies
                                </Typography>
                            </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1000" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg" alt="user 1" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Node JS
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Proficient in using Node JS for developing fast and scalable server-side applications.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1200" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ExpressJS-Dark.svg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Express JS
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Experienced in building robust web applications and APIs using Express JS.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1400" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg" alt="user 3" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Mongo DB
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography className="font-normal pb-8 text-gray-400">
                                    Proficient in using MongoDB for scalable, flexible, and efficient database management.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1600" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Firebase-Dark.svg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Firebase
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Skilled in using Firebase for real-time database, authentication, and hosting solutions.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1800" data-aos="fade-up">
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://i.postimg.cc/9QnT4Ns1/axios3626.jpg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Axios
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Experienced in using Axios for making HTTP requests and handling API calls efficiently.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                    <Timeline>
                        <TimelineItem data-aos-duration="800" data-aos="fade-up" className="ml-2">
                            <TimelineConnector />
                            <TimelineHeader className="pb-10">
                                <TimelineIcon className="p-0">
                                    <div className="w-5 h-5 rounded-full bg-blue-300">

                                    </div>
                                </TimelineIcon>
                                <Typography variant="h5" color="white" className="text-2xl ml-2">
                                    Tools
                                </Typography>
                            </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1000" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg" alt="user 1" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Git & Github
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Proficient in Git for version control and GitHub for collaborative development.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1200" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MaterialUI-Dark.svg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Material UI
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Skilled in using Material-UI for building responsive and aesthetically web interfaces.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1400" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Figma-Dark.svg" alt="user 3" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Figma
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography className="font-normal pb-8 text-gray-400">
                                    Proficient in Figma for designing user interfaces and collaborating on visual projects.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1600" data-aos="fade-up">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Photoshop.svg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Adobe Photoshop
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Skilled in Adobe Photoshop for creating and editing digital images and graphics.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos-duration="1800" data-aos="fade-up">
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Illustrator.svg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="white">
                                    Adobe Illustrator
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="font-normal text-gray-400">
                                    Proficient in Adobe Illustrator for creating vector graphics and illustrations with precision.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Skills;