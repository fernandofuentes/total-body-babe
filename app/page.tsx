'use client';

import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import About from '@/components/About';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import CallToAction from '@/components/CallToAction';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedServices />
      <About />
      <BeforeAfterGallery />
      <CallToAction />
      <InstagramFeed />
      <Footer />
    </main>
  );
}