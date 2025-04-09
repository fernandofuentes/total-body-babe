'use client';
import ServicesHero from '@/components/ServicesHero';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <div className="pt-16">
        <Services />
      </div>
      <CallToAction />
      <InstagramFeed />
      <Footer />
    </div>
  );
}