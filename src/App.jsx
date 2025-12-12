import { Suspense, useState, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Silk from './components/Silk';
import { Analytics } from '@vercel/analytics/react';

const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contacts = lazy(() => import('./sections/Contacts'));

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
      case 'contacts':
        return <Contacts key="contacts" />;
      default:
        return <About key="about" />;
    }
  };

  return (
    <>
      {/* vercel analytics */}
      <Analytics />

      {/* wallpaper */}
      <div className="absolute inset-0 z-[-1]">
        <Silk
          speed={5}
          scale={1}
          color="#050647"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="h-screen flex flex-col-reverse lg:flex-row">
        {/* navigazione laterale */}
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* contenuto principale */}
        <main className="flex-1 flex overflow-y-auto">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <Loader />
              </div>
            }
          >
            <AnimatePresence mode="wait">
              {renderSection()}
            </AnimatePresence>
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
