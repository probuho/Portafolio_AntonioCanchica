import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
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
            <Projects />
            <Skills />
            <CV />
            <Contact />
            <Footer />
        </main>
    );
}
