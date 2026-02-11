'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TabSwitcher from '@/components/TabSwitcher';
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

    // Escuchar eventos del navbar para cambiar de tab
    useEffect(() => {
        const handleTabChange = (e: CustomEvent) => {
            setActiveTab(e.detail as 'freelance' | 'portfolio');
        };

        window.addEventListener('changeTab', handleTabChange as EventListener);
        return () => window.removeEventListener('changeTab', handleTabChange as EventListener);
    }, []);

    return (
        <main className="relative min-h-screen">
            {/* Navbar - Siempre visible */}
            <Navbar />

            {/* Hero - Siempre visible */}
            <Hero />

            {/* Tab Switcher - Sticky */}
            <TabSwitcher
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

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
