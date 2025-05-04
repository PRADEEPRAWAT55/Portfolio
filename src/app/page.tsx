"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import { EXPERIENCES, SKILLS, EDUCATION, ACHIEVEMENTS, PROJECTS } from "@/lib/constants";

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Section refs
    const heroRef = useRef<HTMLElement>(null);
    const skillsRef = useRef<HTMLElement>(null);
    const experienceRef = useRef<HTMLElement>(null);
    const educationRef = useRef<HTMLElement>(null);
    const achievementsRef = useRef<HTMLElement>(null);
    const projectRef = useRef<HTMLElement>(null);

    // Scroll effects
    const { scrollYProgress } = useScroll({ container: containerRef });
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

    const handleScroll = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        // Calculate scroll percentage
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const percentage = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, percentage)));

        // Calculate active section
        const sections = [
            { id: "home", ref: heroRef },
            { id: "skills", ref: skillsRef },
            { id: "experience", ref: experienceRef },
            { id: "projects", ref: projectRef },
            { id: "education", ref: educationRef },
            { id: "achievements", ref: achievementsRef },
        ];

        const offset = 100; // Adjust this value as needed
        const currentPosition = scrollTop + offset;

        for (const section of sections) {
            const element = section.ref.current;
            if (!element) continue;

            const sectionTop = element.offsetTop;
            const sectionBottom = sectionTop + element.offsetHeight;

            if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
                setActiveSection(section.id);
                break;
            }
        }
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        container?.addEventListener("scroll", handleScroll);
        return () => container?.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="h-screen flex flex-col">
            <Navbar 
                activeSection={activeSection} 
                scrollPercentage={scrollPercentage} 
            />
            <div 
                ref={containerRef} 
                className="flex-1 overflow-y-auto scroll-smooth"
            >
                <motion.main 
                    style={{ opacity }} 
                    className="bg-gray-900 text-gray-100 min-h-screen"
                >
                    <Hero ref={heroRef} />
                    <Skills ref={skillsRef} skills={SKILLS} />
                    <Experience ref={experienceRef} experiences={EXPERIENCES} />
                    <Projects ref={projectRef} projects={PROJECTS} />
                    <Education ref={educationRef} education={EDUCATION} />
                    <Achievements ref={achievementsRef} achievements={ACHIEVEMENTS} />
                </motion.main>
            </div>
        </div>
    );
}