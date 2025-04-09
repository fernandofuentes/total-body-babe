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
  'Personalized assessment',
  'Expert recommendations',
  'Treatment planning',
  'Goal setting assistance',
  'Progress tracking',
  'Treatment customization',
  'Educational guidance',
  'Value towards services'
];

const consultationIncludes = [
  {
    title: 'Body Analysis',
    description: 'Comprehensive assessment of your current body composition and areas of concern'
  },
  {
    title: 'Treatment Planning',
    description: 'Customized treatment recommendations based on your goals and body type'
  },
  {
    title: 'Timeline Development',
    description: 'Realistic timeline for achieving your body sculpting goals'
  },
  {
    title: 'Cost Analysis',
    description: 'Transparent pricing and package options for recommended treatments'
  }
];

const faqs = [
  {
    question: 'What happens during the consultation?',
    answer: 'During your consultation, we\'ll discuss your goals, assess your areas of concern, and perform a body analysis. We\'ll then create a customized treatment plan tailored to your needs and explain all available options.'
  },
  {
    question: 'How long is the consultation?',
    answer: 'The consultation typically lasts 45 minutes, allowing time for a thorough assessment and discussion of your goals and treatment options.'
  },
  {
    question: 'Is the consultation fee applied to treatments?',
    answer: 'Yes! The $45 consultation fee is applied towards any treatment or package you choose to book.'
  },
  {
    question: 'What should I wear to the consultation?',
    answer: 'Wear comfortable, form-fitting clothing that allows easy assessment of your areas of concern. We\'ll provide appropriate covering for your comfort and modesty.'
  },
  {
    question: 'Do I need to prepare anything?',
    answer: 'Come prepared to discuss your goals and any previous treatments you\'ve had. It\'s helpful to bring photos of your desired results if you have them.'
  },
  {
    question: 'Can I book treatments during the consultation?',
    answer: 'Yes! You can schedule your treatments immediately after the consultation, and we\'ll apply your consultation fee to your chosen services.'
  }
];

export default function BodySculptingConsultationPage() {
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
            src="/images/services/body-sculpting-consultation.png"
            alt="Body Sculpting Consultation"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Body Sculpting Consultation
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Start your transformation journey with a personalized consultation. Your $45 fee 
              applies toward any booked services.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg">45 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-3xl font-bold">$45</span>
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
        {/* About the Consultation */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold">About the Consultation</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-gray-600">
              <p>
                Our Body Sculpting Consultation is your first step toward achieving your body goals. 
                During this comprehensive session, our expert consultants will assess your needs, 
                discuss your goals, and create a personalized treatment plan tailored specifically 
                to you.
              </p>
              <p>
                We&apos;ll explain our various treatment options, recommend the most effective 
                combinations for your goals, and provide a clear timeline and cost breakdown. 
                Plus, your consultation fee is applied to any services you choose to book.
              </p>
            </div>
            <div className="space-y-6 text-gray-600">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold mb-4">Consultation Includes:</h3>
                <ul className="space-y-3">
                  {consultationIncludes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <div>
                        <span className="font-semibold">{item.title}</span>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </li>
                  ))}
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
            Ready to Start Your Transformation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Book your Body Sculpting Consultation today and take the first step toward 
            achieving your body goals.
          </p>
          <Button size="lg" className="mt-8">
            Book Your Consultation
            <ChevronRight className="ml-2 h-5 w-4" />
          </Button>
        </div>
      </div>

      <InstagramFeed />
      <Footer />
    </div>
  );
}