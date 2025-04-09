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
  'Increased collagen production',
  'Improved skin elasticity',
  'Reduced fine lines',
  'Firmer skin texture',
  'Non-invasive treatment',
  'No downtime required',
  'Natural-looking results',
  'Long-lasting effects'
];

const beforeAfterImages = [
  {
    before: '/images/before-1.png',
    after: '/images/after-1.png',
    description: 'Results after 6 sessions of RF Skin Tightening',
  },
  {
    before: '/images/before-2.png',
    after: '/images/after-2.png',
    description: 'Visible improvement in skin firmness and texture',
  }
];

const faqs = [
  {
    question: 'What is RF Skin Tightening?',
    answer: 'RF (Radio Frequency) Skin Tightening is a non-invasive treatment that uses radio frequency energy to heat the skin\'s deeper layers, stimulating collagen and elastin production. This results in firmer, tighter skin with improved texture and reduced signs of aging.'
  },
  {
    question: 'How many sessions are recommended?',
    answer: 'For optimal results, we recommend a series of 6-8 treatments, scheduled 1-2 weeks apart. Maintenance sessions can be scheduled every 3-6 months after completing the initial series.'
  },
  {
    question: 'Is the treatment painful?',
    answer: 'No, RF Skin Tightening is generally comfortable. You\'ll feel a warm sensation during treatment, which most clients find relaxing. The temperature is carefully monitored to ensure your comfort and safety.'
  },
  {
    question: 'What areas can be treated?',
    answer: 'RF Skin Tightening can be performed on multiple areas including face, neck, décolletage, arms, abdomen, and thighs. During your consultation, we\'ll create a treatment plan for your specific concerns.'
  },
  {
    question: 'How long is each session?',
    answer: 'Each session lasts approximately 30 minutes, depending on the treatment area. The procedure is quick and convenient, perfect for fitting into a busy schedule.'
  },
  {
    question: 'When will I see results?',
    answer: 'Many clients notice immediate improvement in skin tightness after their first session. However, optimal results develop over 2-3 months as collagen production increases. Results can continue to improve with subsequent treatments.'
  }
];

export default function RFSkinTighteningPage() {
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
            src="/images/services/brazilian-lymphatic-drainage.png"
            alt="RF Skin Tightening"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              RF Skin Tightening
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Uses radio thermal frequency to heat the skin&apos;s superficial layers, triggering 
              collagen and elastin production for a firmer, youthful glow.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg">30 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-3xl font-bold">$89</span>
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
                RF Skin Tightening is an advanced, non-invasive treatment that harnesses the 
                power of radio frequency energy to rejuvenate and tighten your skin. The 
                treatment works by heating the deeper layers of your skin, stimulating natural 
                collagen and elastin production.
              </p>
              <p>
                During your session, controlled RF energy is delivered to target areas, 
                creating a warming sensation that most clients find comfortable and relaxing. 
                This therapeutic heat triggers your body&apos;s natural healing response, leading 
                to firmer, more youthful-looking skin over time.
              </p>
            </div>
            <div className="space-y-6 text-gray-600">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold mb-4">Treatment Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Skin analysis and preparation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>RF energy application</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Targeted area treatment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Post-treatment care guidance</span>
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
            Ready for Firmer, More Youthful Skin?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Book your RF Skin Tightening session today and experience the power of 
            advanced skin rejuvenation technology.
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