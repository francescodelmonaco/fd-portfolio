import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About key="about" />;
      case 'skills':
        return <Skills key="skills" />;
      case 'projects':
        return <Projects key="projects" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <About key="about" />;
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-50">
      {/* navigazione laterale */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* contenuto principale */}
      <main className="flex-1 flex overflow-y-auto">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
