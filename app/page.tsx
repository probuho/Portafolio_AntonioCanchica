'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Roadmap from '@/components/Roadmap';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CV from '@/components/CV';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    const [activeTab, setActiveTab] = useState<'freelance' | 'portfolio'>('freelance');

    return (
        <main className="relative min-h-screen">
            {/* Navbar con tabs integrados */}
            <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Hero - Siempre visible */}
            <Hero />

            {/* CONTENIDO FREELANCE */}
            {activeTab === 'freelance' && (
                <div className="animate-fade-in">
                    <Services />
                    <Process />
                    <Contact />
                </div>
            )}

            {/* CONTENIDO PORTFOLIO */}
            {activeTab === 'portfolio' && (
                <div className="animate-fade-in">
                    <About />
                    <Roadmap />
                    <Projects />
                    <Skills />
                    <CV />
                </div>
            )}

            {/* Footer - Siempre visible */}
            <Footer />
        </main>
    );
}
