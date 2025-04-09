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
  'Natural booty enhancement',
  'Improved skin texture and tone',
  'Reduced appearance of cellulite',
  'Enhanced muscle definition',
  'Increased circulation',
  'Painless treatment',
  'No downtime required',
  'Long-lasting results'
];

const beforeAfterImages = [
  {
    before: '/images/before-1.png',
    after: '/images/after-1.png',
    description: 'Results after 6 sessions of Booty Plump & Lift treatment',
  },
  {
    before: '/images/before-2.png',
    after: '/images/after-2.png',
    description: 'Visible improvement in shape and firmness',
  }
];

const faqs = [
  {
    question: 'What is Booty Plump & Lift?',
    answer: 'Booty Plump & Lift is a non-invasive treatment that uses vacuum therapy to enhance, lift, and firm the buttocks. The treatment helps improve circulation, stimulate collagen production, and create a more defined shape.'
  },
  {
    question: 'How many sessions do I need?',
    answer: 'For optimal results, we recommend a series of 8-12 sessions, scheduled 1-2 times per week. Maintenance sessions can be scheduled monthly after achieving desired results.'
  },
  {
    question: 'Is the treatment painful?',
    answer: 'No, the treatment is not painful. You\'ll feel a suction sensation and gentle massage, which most clients find comfortable and relaxing.'
  },
  {
    question: 'What should I wear?',
    answer: 'Wear comfortable, loose-fitting clothing. During the treatment, we provide appropriate draping to ensure your comfort and modesty.'
  },
  {
    question: 'How long is each session?',
    answer: 'Each session lasts 60 minutes, allowing for thorough treatment of the target areas.'
  },
  {
    question: 'When will I see results?',
    answer: 'Many clients notice improvements after their first session, with more dramatic results developing over the course of their treatment series.'
  }
];

export default function BootyPlumpPage() {
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
            src="/images/services/booty-plump-and-lift.png"
            alt="Booty Plump & Lift"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Booty Plump & Lift 🍑
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Vacuum-therapy raises, enlarges, and reaffirms the gluteus. Creates a tone, tightens, 
              and lifts the booty. Painless, safe, and with no downtime.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg">60 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-3xl font-bold">$149+</span>
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
          <h2 className="text-3xl font-bold">About the Treatment</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-gray-600">
              <p>
                Our Booty Plump & Lift treatment uses advanced vacuum therapy technology to naturally 
                enhance and sculpt your buttocks. This non-invasive treatment stimulates blood flow, 
                promotes collagen production, and helps create a more lifted, toned appearance.
              </p>
              <p>
                The treatment combines vacuum therapy with specialized massage techniques to target 
                the gluteal muscles and surrounding areas. This dual approach helps improve muscle 
                tone while enhancing skin texture and reducing the appearance of cellulite.
              </p>
            </div>
            <div className="space-y-6 text-gray-600">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold mb-4">Treatment Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Advanced vacuum therapy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Specialized massage techniques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Targeted muscle stimulation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Customized treatment plan</span>
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
            Ready to Enhance Your Natural Curves?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Book your Booty Plump & Lift session today and experience the power of non-invasive 
            body sculpting.
          </p>
          <Button size="lg" className="mt-8">
            Book Your Session
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <InstagramFeed />
      <Footer />
    </div>
  );
}