import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Badges } from './components/Badges';
import { Achievements } from './components/Achievements';
import { PhotoAlbum } from './components/PhotoAlbum';
import { PositionsOfResponsibility } from './components/PositionsOfResponsibility';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Badges />
      <Achievements />
      <PhotoAlbum />
      <PositionsOfResponsibility />
      <Articles />
      <Contact />
    </div>
  );
}