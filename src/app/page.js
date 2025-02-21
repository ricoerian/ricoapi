import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import { Hero } from "@/components/Organisms/Hero";
import { designSkills, developmentSkills, projects } from '@/data/data';
import { Project } from '@/components/Organisms/Project';
import RootLayout from './layout';
import { Skills } from '@/components/Organisms/Skills';
import { Contact } from '@/components/Organisms/Contact';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';

export default function Home() {
    return (
        <RootLayout>
            <Header />
            <section className="container md:pt-26 mx-auto py-8 flex flex-wrap flex-col md:flex-row items-center">
                <Hero />
            </section>
            <section className="bg-section-two pt-16" id="projects">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        approach={project.approach}
                        techStack={project.techStack}
                        description={project.description}
                        liveDemoLink={project.liveDemoLink}
                        sourceCodeLink={project.sourceCodeLink}
                        imageSrc={project.imageSrc}
                        imageHeight={project.imageHeight}
                        imageWidth={project.imageWidth}
                        nextProjectId={project.nextProjectId}
                    />
                ))}
            </section>
            <section className="bg-[#03001C] py-20" id="skills">
                <Skills title="Skills & Tools" skills={developmentSkills} />
                <Skills title="Design" skills={designSkills} />
            </section>
            <section className="bg-section-two" id="contact">
                <Contact />
            </section>
            <Footer /> 
            <script src="/assets/js/index.js"></script>
            <Analytics />
            <SpeedInsights />
        </RootLayout>
    );
}
