import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const projects = [
    {
        id:1,
        title: "NexaPanel - Dashboard Web Design",
        description: "A Next.js-powered admin dashboard designed for seamless business insights and control.",
        image: "/Projects/NexaPanel.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        url: "#",
        git: "#"  
    },

    {
        id:2,
        title: "Mech2Door",
        description: "A full-stack MERN application for managing products with CRUD operations, secure auth, and real-time updates.",
        image: "/Projects/ProductPalace.png",
        tags: ["Node.js", "MongoDB","Express.js","PostMan","Tailwind CSS", "React"],
        url: "#",
        git: "#"
    },

    {
        id:5,
        title: "VirtualR - Developer Tools Website",
        description: "A dynamic and responsive virtual reality showcase built with React, featuring sleek UI and interactive components.",
        image: "/Projects/VirtualR.png",
        tags: [ "Javascript", "Tailwind CSS", "React", "Vite.js"],
        url: "https://virtualr-react.netlify.app/",
        git: "#"
    },

    {
        id:4,
        title: "Work-List - To_do_list web app",
        description: "A minimalist and intuitive task manager built with React for organizing daily to-dos with real-time updates.",
        image: "/Projects/ToDoList.png",
        tags: ["Javascript", "Tailwind CSS", "React"],
        url: "https://work-todolist.netlify.app/",
        git: "#"
    },

    {
        id:3,
        title: "HR Email Automation",
        description: "A visually appealing and responsive restaurant landing page built using pure HTML and CSS.",
        image: "/Projects/Grill.png",
        tags: [ "Javascript", "Node.js", "Gen API", "Nodemailer", "xlsx"],
        url: "#",
        git: "https://github.com/abhicodes01/AI-HR-EmailAutomation"
    },
]


export const Projects = () => {

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);


    return <section id="projects" className="py-24 px-4 relative">
        <div data-aos ="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="txet-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                These projects reflect my approach to writing clean, maintainable code and building user-friendly interfaces.  
                I’ve focused on practical solutions that balance performance, usability, and reliability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key)=>(
                    <div key={key}
                      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} 
                              className="w-full h-full object-cover trasnition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <h3 className="text-xl text-left font-semibold mb-3">{project.title}</h3>
                            <p className="text-muted-foreground text-left text-xs mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <a href={project.url} target="_blank" rel="noopener noreferrer" 
                                className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1">
                                   Live Link <ArrowUpRight size={16}/>
                                </a>

                                <a href={project.git} 
                                  className="text-foreground hover:text-primary transition-colors duration-300"
                                >
                                    <Github/>
                                </a>
                            </div>
                            
                        </div>

                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a target="_blank" href="https://github.com/abhicodes01" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}