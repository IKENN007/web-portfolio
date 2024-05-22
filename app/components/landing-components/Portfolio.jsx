import Image from "next/image"

import { 
    FaHtml5,
    FaCss3,
    FaJs,
    FaPhp,
    FaPython,
    FaBootstrap
} from "react-icons/fa6";

import { 
    SiJquery,
    SiTailwindcss,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiLaravel,
    SiMicrosoftsqlserver
} from "react-icons/si";


const systemProjects = [
    {
        id: '0',
        imageSrc: '/images/prpo_system_img/prpo-system-landing-page.png',
        Name: 'PRPO',
        OtherTerm: 'Purchasing Department System',
        Description: '',
        ProgLanguages: [
            {pl: 'Html5'},
            {pl: 'CSS'},
            {pl: 'Javascript'},
            {pl: 'JQuery'},
            {pl: 'Php'},
            {pl: 'Python'},
            {pl: 'Bootstrap'},
            {pl: 'Microsoft SQL Server'},
        ]
    },
    {
        id: '1',
        imageSrc: '/images/ppic_system_img/ppic-system-landing-page.png',
        Name: 'PPIC PO Monitoring',
        OtherTerm: 'Manufacturing / Production Parts Inventory Control Department System',
        Description: '',
        ProgLanguages: [
            {pl: 'Html5'},
            {pl: 'CSS'},
            {pl: 'Javascript'},
            {pl: 'React JS'},
            {pl: 'Next JS'},
            {pl: 'Node JS'},
            {pl: 'Bootstrap'},
            {pl: 'Php'},
            {pl: 'Laravel'},
            {pl: 'Microsoft SQL Server'},
        ]
    },
    {
        id: '2',
        imageSrc: '/images/receiving_img/material-receiving-page.png',
        Name: 'Materials Receiving System',
        OtherTerm: 'Warehouse Department System',
        Description: '',
        ProgLanguages: [
            {pl: 'Html5'},
            {pl: 'CSS'},
            {pl: 'Javascript'},
            {pl: 'JQuery'},
            {pl: 'Microsoft SQL Server'},
        ]
    },
    {
        id: '3',
        imageSrc: '/images/facilities_system_img/facilities-pm-schedule.png',
        Name: 'Facilities Admin Dashboard',
        OtherTerm: 'Facilities Department System',
        Description: '',
        ProgLanguages: [
            {pl: 'Html5'},
            {pl: 'CSS'},
            {pl: 'Javascript'},
            {pl: 'JQuery'},
            {pl: 'Microsoft SQL Server'},
        ]
    },
]

const Portfolio = () => {

    const getProgLangIcon = (progValue) => {

        let progLangIcon

        switch (progValue) {
            case 'Html5':
                progLangIcon = <FaHtml5 fontSize={16} fill="#FFBD39" />;
                break;
            case 'CSS':
                progLangIcon = <FaCss3 fontSize={16} fill="#FFBD39" />;
                break;
            case 'Javascript':
                progLangIcon = <FaJs fontSize={16} fill="#FFBD39" />;
                break;
            case 'Php':
                progLangIcon = <FaPhp fontSize={16} fill="#FFBD39" />;
                break;
            case 'Python':
                progLangIcon = <FaPython fontSize={16} fill="#FFBD39" />;
                break;
            case 'JQuery':
                progLangIcon = <SiJquery fontSize={16} fill="#FFBD39" />;
                break;
            case 'React JS':
                progLangIcon = <SiReact fontSize={16} fill="#FFBD39" />;
                break;
            case 'Next JS':
                progLangIcon = <SiNextdotjs fontSize={16} fill="#FFBD39" />;
                break;
            case 'Node JS':
                progLangIcon = <SiNodedotjs fontSize={16} fill="#FFBD39" />;
                break;
            case 'Laravel':
                progLangIcon = <SiLaravel fontSize={16} fill="#FFBD39" />;
                break;
            case 'Microsoft SQL Server':
                progLangIcon = <SiMicrosoftsqlserver fontSize={16} fill="#FFBD39" />;
                break;
            case 'Bootstrap':
                progLangIcon = <FaBootstrap fontSize={16} fill="#FFBD39" />;
                break;
        }

        return progLangIcon;
    }

    return (
        <>
            <div className="px-7 pt-28 bg-slate-900 text-white md:px-20">

                <div className="w-full pb-12">
                    <h2 id="projects" 
                    className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        Projects
                    </h2>
                </div>

                <div className="flex justify-center flex-wrap gap-8">
                    {/* shadow-xl w-3/4 */}

                    {systemProjects.map((proj) => (
                        <div key={proj.id} className="bg-base-100 w-full lg:w-5/6 rounded-lg bg-secondaryColor grid grid-cols-12">
                            <div className="col-span-12 md:col-span-7 md:rounded-s-lg">
                                <Image src={`${proj.imageSrc}`}
                                    loading="lazy" 
                                    alt={proj.Name}
                                    width={1000}
                                    height={1000}
                                    className="rounded-t-lg md:rounded-s-lg md:rounded-e-none w-full h-auto"
                                />
                            </div>

                            <div className="col-span-12 md:col-span-5 p-7 relative flex flex-col justify-between">
                                <div>
                                    <div className="mb-3">
                                        <span className="text-customYellow 
                                            font-bold md:font-black 
                                            text-2xl md:text-3xl ">
                                            {proj.Name}
                                        </span>
                                        <p className="text-base">
                                            {proj.OtherTerm}
                                        </p>
                                    </div>

                                    <div className="w-full flex flex-wrap gap-2">
                                        {proj.ProgLanguages.map((progLang) => (
                                            <div key={progLang.pl} 
                                                className="px-2 py-1 rounded-lg ring-1 ring-customYellow w-fit flex items-center gap-1">
                                                {getProgLangIcon(progLang.pl)}
                                                <span className="text-xs text-customYellow">
                                                    {progLang.pl}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    {/* <button className="bg-customYellow uppercase text-secondaryColor px-6 py-4 rounded-lg text-xs font-semibold outline-none">View</button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Portfolio
