import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="bg-white min-h-screen">
      {isHome && <Navbar isScrolled={isScrolled} />}

      <SmoothScroll key={location.pathname} onScroll={(y: number) => setIsScrolled(y > 20)}>
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Experience isPreview={true} />
              <Skills />
              <Projects isPreview={true} />
              <Contact isPreview={true} />
            </main>
          } />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-gray-900 py-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vinay Patel. All rights reserved.</p>
        </footer>
      </SmoothScroll>
    </div>
  );
}

export default App;
