import Image from "next/image";
import { useEffect, useState } from "react";
import { apiURL } from '../constants';

const fetchProjects = async () => {
    const response = await fetch(`${apiURL}projects`, { cache: 'no-store' });
    const projectsList = await response.json();
    return projectsList;
}

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const projectsData = await fetchProjects();
            setProjects(projectsData);
        };
        getProjects();
    }, []);

    return (
        <section className="projects" id="projects">
            <div className="flex flex-col justify-center">
                <h2 className="sectionTitle">
                    my showcase
                </h2>

                <div className="projects-container grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {projects.map((project) => (
                        <a href={project.link} key={project.id} className="text-center flex flex-col items-center justify-start gap-4 p-2 m-4 bg-white text-gray-800 rounded-lg shadow-md group animate-slide-in-left hover:bg-[#3b2550] focus:bg-[#2f0259] hover:text-white focus:text-white hover:border-indigo-700 focus:border-indigo-900 hover:shadow-lg focus:shadow-xl hover:scale-105 focus:scale-110 transition duration-300 ease-in-out" target={"blank_"}>

                            <div className="w-full h-[210px] max-lg:h-[150px] max-sm:h-[100px] relative">
                                <span className="ribbon">
                                    {project.status}
                                </span>

                                <Image src={project.img} alt={project.name} width={600} height={200} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <div className="w-full flex flex-col justify-center items-center gap-3">
                                <h2 className="h-fit font-bold text-2xl lg:text-3xl">
                                    <span className="text-[#8430ee]">#</span>  {project.name}
                                </h2>

                                <p className="font-medium text-base">
                                    {project.des}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
