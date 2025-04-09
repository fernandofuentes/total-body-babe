'use client';

import ContactUsHero from '@/components/ContactUsHero';
import CallToAction from '@/components/CallToAction';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main>
      <ContactUsHero />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Have questions about our services or ready to book your appointment? Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="brazilian-lymphatic">Brazilian Lymphatic Drainage</option>
                    <option value="ems-therapy">BabeSculpt - EMS Therapy</option>
                    <option value="booty-plump">Booty Plump & Lift</option>
                    <option value="fat-slayer">Fat Slayer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="mx-auto max-w-xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Visit Our Location</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Experience luxury aesthetics in our state-of-the-art facility located in The Woodlands, TX.
                </p>

                <dl className="mt-8 space-y-6">
                  <div className="flex gap-x-4">
                    <dt>
                      <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <p className="text-base font-semibold text-gray-900">Our Address</p>
                      <p className="mt-1 text-base text-gray-600">
                        123 Market Street<br />
                        The Woodlands, TX 77380
                      </p>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt>
                      <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <p className="text-base font-semibold text-gray-900">Phone</p>
                      <p className="mt-1 text-base text-gray-600">(281) 555-5555</p>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt>
                      <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <p className="text-base font-semibold text-gray-900">Email</p>
                      <p className="mt-1 text-base text-gray-600">info@totalbodybabe.com</p>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt>
                      <Clock className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <p className="text-base font-semibold text-gray-900">Hours</p>
                      <p className="mt-1 text-base text-gray-600">
                        Monday - Friday: 9am - 7pm<br />
                        Saturday: 10am - 5pm<br />
                        Sunday: Closed
                      </p>
                    </dd>
                  </div>
                </dl>

                {/* Map */}
                <div className="mt-8 aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    title="Total Body Babe Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d-95.45!3d30.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzAwLjAiTiA5NcKwMjcnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
      <InstagramFeed />
      <Footer />
    </main>
  );
}