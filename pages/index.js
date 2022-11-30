import Head from 'next/head';

import Hero from '../components/HomePage/Hero';
import Logos from '../components/HomePage/Logos';
import Features, { featuresOne, featuresTwo } from '../components/HomePage/Features';
import Project, { projectOne, projectTwo } from '../components/HomePage/Project';
import Testimonials from '../components/HomePage/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Freelancer</title>
        <meta name="description" content="Freelancer is a landing page template built with NextJS & Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Outfit-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Hero />

      <Logos />

      <Project imagePosition="left" data={projectOne} />

      <Features data={featuresOne} />

      <Project imagePosition="right" data={projectTwo} />

      <Features data={featuresTwo} />

      <Testimonials />
    </>
  );
}
