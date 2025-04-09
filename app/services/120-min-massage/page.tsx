'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, CheckCircle2, Clock, DollarSign, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const benefits = [
  'Extended relaxation time',
  'Deep tissue work',
  'Comprehensive treatment',
  'Customized approach',
  'Multiple techniques',
  'Stress reduction',
  'Pain relief',
  'Enhanced recovery'
];

const beforeAfterImages = [
  {
    before: '/images/before-1.png',
    after: '/images/after-1.png',
    description: 'Results after deep tissue massage treatment',
  },
  {
    before: '/images/before-2.png',
    after: '/images/after-2.png',
    description: 'Visible improvement in muscle tension relief',
  }
];

const faqs = [
  {
    question: 'What makes the 120-minute massage different?',
    answer: 'The 120-minute session provides the ultimate massage experience with extended time for deeper work and thorough attention to all areas. This longer format allows for a more comprehensive treatment combining multiple techniques and focusing on specific areas of concern while maintaining full-body coverage.'
  },
  {
    question: 'What techniques are used?',
    answer: 'Our therapists combine various techniques including Swedish, deep tissue, and therapeutic massage, customized to your needs. The extended time allows for seamless integration of different approaches for optimal results.'
  },
  {
    question: 'Is 120 minutes too long for a massage?',
    answer: 'Not at all! Many clients prefer our 120-minute sessions as they provide the most thorough and relaxing experience. The longer duration allows you to fully unwind while receiving comprehensive treatment.'
  },
  {
    question: 'What should I wear?',
    answer: 'You will undress to your level of comfort. You will be properly draped throughout the session to maintain your privacy and comfort.'
  },
  {
    question: 'How often should I get a 120-minute massage?',
    answer: 'For chronic conditions or those seeking deep relaxation, we recommend 120-minute sessions every 2-4 weeks. Your therapist can provide personalized recommendations based on your specific needs.'
  },
  {
    question: 'What are the benefits of a longer session?',
    answer: 'A 120-minute massage allows for more thorough treatment, deeper tissue work, and enhanced relaxation. The extended time means no area is rushed, and multiple techniques can be used to address your specific concerns.'
  }
];

export default function OneTwentyMinuteMassagePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Total Body Babe</span>
              <Image
                alt=""
                src={
                  isScrolled
                    ? '/images/total-body-babe-dark-logo.svg'
                    : '/images/total-body-babe-white-logo.svg'
                }
                className={`h-8 w-auto transition-colors ${
                  isScrolled ? 'text-mocha' : 'text-white'
                }`}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                isScrolled ? 'text-mocha' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm/6 font-semibold transition-colors ${
                  isScrolled
                    ? 'text-mocha hover:text-mocha/80'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="#"
              className={`text-sm/6 font-semibold transition-colors ${
                isScrolled
                  ? 'text-mocha hover:text-mocha/80'
                  : 'text-white hover:text-white/80'
              }`}
            >
              Book Now <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Total Body Babe</span>
                <Image
                  alt=""
                  src="/images/total-body-babe-dark-logo.svg"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-mocha"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-mocha hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-mocha hover:bg-gray-50"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/services/120-min-massage.png"
            alt="120 Minute Massage"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              120 Minute Massage
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Our most comprehensive massage experience. Extended time for deeper work, 
              thorough attention to problem areas, and complete relaxation.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg">120 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-3xl font-bold">$222</span>
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* About the Treatment */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold">About the Massage</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-gray-600">
              <p>
                Our 120-minute massage is the ultimate therapeutic experience, providing 
                extended time for the most thorough and comprehensive treatment. This 
                longer session allows your therapist to combine multiple techniques and 
                address all areas of concern while maintaining a relaxed, unhurried pace.
              </p>
              <p>
                During your two-hour session, we can incorporate various massage techniques, 
                spend extra time on problem areas, and ensure complete coverage of all muscle 
                groups. This extended format is perfect for those seeking deep therapeutic 
                work or wanting to achieve maximum relaxation benefits.
              </p>
            </div>
            <div className="space-y-6 text-gray-600">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold mb-4">Treatment Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Extended full-body massage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Multiple massage techniques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Extra focus on problem areas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Customized pressure levels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold">Benefits</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before & After */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold">Before & After Results</h2>
          <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2">
            {beforeAfterImages.map((image, index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Image
                      src={image.before}
                      alt="Before treatment"
                      className="h-full w-full rounded-lg object-cover"
                    />
                    <p className="mt-2 text-center text-sm font-medium">Before</p>
                  </div>
                  <div>
                    <Image
                      src={image.after}
                      alt="After treatment"
                      className="h-full w-full rounded-lg object-cover"
                    />
                    <p className="mt-2 text-center text-sm font-medium">After</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <dl className="mt-8 space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-6 shadow-sm"
              >
                <dt className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary/5 px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready for the Ultimate Massage Experience?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Book your 120-minute massage session today and experience our most 
            comprehensive therapeutic treatment.
          </p>
          <Button size="lg" className="mt-8">
            Book Your Session
            <ChevronRight className="ml-2 h-5 w-4" />
          </Button>
        </div>
      </div>

      <InstagramFeed />
      <Footer />
    </div>
  );
}