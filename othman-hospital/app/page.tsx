import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clinics from '../components/Clinics';
import Doctors from '../components/Doctors';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThemeSelector from '../components/ThemeSelector';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Clinics />
      <Doctors />
      <Contact />
      <ThemeSelector />
      <Footer />
    </main>
  );
} 