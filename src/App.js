import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import CaseStudies from './components/sections/CaseStudies';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ContactForm from './components/sections/ContactForm';
import CallToAction from './components/sections/CallToAction';

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Hero />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
        <ContactForm />
        <CallToAction />
      </Layout>
    </HelmetProvider>
  );
}

export default App;