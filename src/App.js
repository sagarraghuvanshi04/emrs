import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Services from './components/Services';
import Presence from './components/Presence';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Institutions from './components/Institutions';
import Documents from './components/Documents';
import WhyUs from './components/WhyUs';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Projects />
      <Services />
      <Presence />
      <Experience />
      <Gallery />
      <Institutions />
      <Documents />
      <WhyUs />
      <Profile />
      <Contact />
      <Footer />
    </>
  );
}
