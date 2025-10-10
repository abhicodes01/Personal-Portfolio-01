import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutMe = () => {

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);

    return <section id="about" className="py-24 px-4 relative">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Aspiring Software Engineer & Full Stack Web Dev</h3>

                    <p className="text-muted-foreground md:text-left">
                        🎓 Currently in my 4th year of B.Tech (CSBS) at Medi-Caps University, Indore,
                        With over 1.5 years of hands-on experience in full-stack web development,
                        I specialize in building fast, responsive, and user-centric web applications 
                        using the MERN stack.
                    </p>

                    <p className="text-muted-foreground md:text-left">
                        I’ve delivered scalable front-end interfaces with 
                        React.js and Tailwind CSS, while integrating efficient back-end logic 
                        with Node.js, Express.js, and MongoDB. I’m passionate about transforming business requirements into 
                        functional digital solutions. I aim to create intuitive and 
                        accessible user experiences that align with current industry standards.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>

                    <a href="/Resume/Abhijeet Singh Parihar_Resume.pdf" download className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
                </div>

                <div className='bg-card rounded-lg overflow-hidden shadow-xs card-hover flex justify-center'>
                    <img className='h-100 overflow-hidden object-cover' src="/Images/cropped-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
}