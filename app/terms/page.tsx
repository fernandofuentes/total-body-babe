'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Terms of Service
          </h1>
          
          <div className="mt-10 space-y-8 text-base leading-7 text-gray-600">
            <p>
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using Total Body Babe services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                2. Description of Services
              </h2>
              <p>
                Total Body Babe provides non-invasive body sculpting, wellness, and aesthetic services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Brazilian Lymphatic Drainage</li>
                <li>EMS Therapy</li>
                <li>Body Contouring</li>
                <li>Wellness Consultations</li>
                <li>Post-operative Care</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                3. Booking and Cancellation Policy
              </h2>
              <p>
                Appointments must be booked in advance. We require 24-hour notice for cancellations. Late cancellations or no-shows may result in a cancellation fee equal to 50% of the service price.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                4. Payment Terms
              </h2>
              <p>
                Payment is required at the time of service. We accept major credit cards, cash, and approved payment plans. All prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                5. Health and Safety
              </h2>
              <p>
                Clients must disclose all relevant medical conditions and medications. We reserve the right to refuse service to anyone if we believe the treatment may be unsafe for their condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                6. Liability Limitations
              </h2>
              <p>
                While we strive for the best possible results, we cannot guarantee specific outcomes. Results vary by individual. We are not liable for any indirect, consequential, or incidental damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                7. Intellectual Property
              </h2>
              <p>
                All content on our website and marketing materials is protected by copyright and other intellectual property laws. You may not use our content without express permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                8. Privacy Policy
              </h2>
              <p>
                Your use of our services is also governed by our Privacy Policy. Please review our{' '}
                <Link href="/privacy" className="text-primary hover:text-primary/80 underline">
                  Privacy Policy
                </Link>
                {' '}for information on how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                10. Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <p>Total Body Babe</p>
                <p>123 Market Street</p>
                <p>The Woodlands, TX 77380</p>
                <p>Email: info@totalbodybabe.com</p>
                <p>Phone: (281) 555-5555</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}