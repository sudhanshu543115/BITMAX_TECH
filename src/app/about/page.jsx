



'use client';

import React from 'react';
import ImpressiveSkills from '@/Componants/Pages/About/Skills.jsx';
import AboutSection from '@/Componants/Pages/About/AboutSection.jsx';
import FAQSection from '@/Componants/Pages/About/Faq.jsx';


const AboutPage = () => {
  return (
    <main>
      <AboutSection />
      <ImpressiveSkills />
      <FAQSection />
    </main>  
  );
};

export default AboutPage;
