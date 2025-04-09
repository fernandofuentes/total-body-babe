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
  'Reduced swelling',
  'Enhanced healing',
  'Improved circulation',
  'Pain management',
  'Scar tissue prevention',
  'Faster recovery',
  'Lymphatic drainage',
  'Stress reduction'
];

const beforeAfterImages = [
  {
    before: '/images/before-1.png',
    after: '/images/after-1.png',
    description: 'Results after post-operative lymphatic massage series',
  },
  {
    before: '/images/before-2.png',
    after: '/images/after-2.png',
    description: 'Visible reduction in post-surgical swelling',
  }
];

const faqs = [
  {
    question: 'When can I start post-operative massage?',
    answer: 'The timing varies depending on your procedure and healing progress. Generally, we can begin gentle lymphatic drainage massage as soon as your surgeon approves, often within the first week post-surgery. Always consult with your surgeon for specific timing recommendations.'
  },
  {
    question: 'How many sessions do I need?',
    answer: 'Most clients benefit from 2-3 sessions per week in the first few weeks post-surgery, then reducing frequency as healing progresses. Your specific treatment plan will be customized based on your procedure and recovery progress.'
  },
  {
    question: 'Is post-operative massage painful?',
    answer: 'No, post-operative massage uses very gentle techniques specifically designed for healing tissues. While you may feel pressure, the treatment should not cause pain. We constantly communicate to ensure your comfort.'
  },
  {
    question: 'What should I wear?',
    answer: 'Wear loose, comfortable clothing that allows easy access to treatment areas. We provide appropriate draping and work around surgical garments as needed.'
  },
  {
    question: 'What techniques are used?',
    answer: 'We primarily use manual lymphatic drainage techniques, combined with gentle tissue mobilization when appropriate. All techniques are specifically modified for post-surgical care.'
  },
  {
    question: 'What are the benefits?',
    answer: 'Post-operative massage helps reduce swelling, minimize scar tissue formation, improve circulation, speed healing, reduce discomfort, and support overall recovery. It can also help prevent post-surgical complications.'
  }
];

export default function PostOpMassagePage() {
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
            src="/images/services/post-op-massage.png"
            alt="Post-Operative Massage"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Post OP Massage
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Specialized post-operative lymphatic massage to reduce swelling, 
              support healing, and enhance your surgical results.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg">60 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-3xl font-bold">$139</span>
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
          <h2 className="text-3xl font-bold">About Post-Operative Massage</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-gray-600">
              <p>
                Our post-operative massage therapy combines gentle lymphatic drainage 
                techniques with specialized post-surgical care to support your healing 
                process. This therapeutic approach helps reduce swelling, minimize 
                discomfort, and enhance your surgical results.
              </p>
              <p>
                Each session is carefully tailored to your specific procedure and stage 
                of healing, ensuring safe and effective treatment that promotes optimal 
                recovery. Our certified therapists work closely with your surgical team 
                to provide the most appropriate care for your needs.
              </p>
            </div>
            <div className="space-y-6 text-gray-600">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold mb-4">Treatment Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Manual lymphatic drainage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Gentle tissue mobilization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Scar tissue management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Recovery guidance</span>
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
            Support Your Surgical Recovery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Book your post-operative massage session today and experience the benefits 
            of specialized lymphatic drainage therapy.
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