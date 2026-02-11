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
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Process />
            <Roadmap />
            <Projects />
            <Skills />
            <CV />
            <Contact />
            <Footer />
        </main>
    );
}
