import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Journey from './components/Journey/Journey';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import KubernetesPortfolioLink from './components/KubernetesPortfolioLink/KubernetesPortfolioLink';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <KubernetesPortfolioLink />
        <Skills />
        <Projects />
        <Certifications />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;