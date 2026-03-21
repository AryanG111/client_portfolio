import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyResults from './components/KeyResults';
import AboutMe from './components/AboutMe';
import CaseStudies from './components/CaseStudies';
import SkillsExpertise from './components/SkillsExpertise';
import ContentShowcase from './components/ContentShowcase';
import Services from './components/Services';
import ContentPhilosophy from './components/ContentPhilosophy';
import StrategyShowcase from './components/StrategyShowcase';
import ClientTestimonials from './components/ClientTestimonials';
import CTASection from './components/CTASection';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Navbar />
      <Hero />
      <KeyResults />
      <AboutMe />
      <CaseStudies />
      <SkillsExpertise />
      <ContentShowcase />
      <Services />
      <ContentPhilosophy />
      <StrategyShowcase />
      <ClientTestimonials />
      <CTASection />
    </div>
  );
}

export default App;
