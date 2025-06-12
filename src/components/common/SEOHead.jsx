import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Luadata - Custom AI & ML Solutions for Business Growth</title>
      <meta name="description" content="Transform your business with custom AI tools, automations, and data-driven solutions. Get predictive models, NLP chatbots, and dashboard integrations." />
      <meta name="keywords" content="AI solutions, ML consulting, predictive models, chatbots, automation, Pakistan" />
      <meta property="og:title" content="Luadata - Custom AI & ML Solutions" />
      <meta property="og:description" content="AI tools and automations to grow your business" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://luadata.net" />
    </Helmet>
  );
};

export default SEOHead;