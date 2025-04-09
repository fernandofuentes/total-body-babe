'use client';

import Image from 'next/image'
import AboutUsHero from '@/components/AboutUsHero';
import CallToAction from '@/components/CallToAction';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock, Lightbulb, Award, Target, Shield } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Satisfied Clients', value: '2.3K+' },
  { label: 'Treatments Performed', value: '10K+' },
  { label: 'Expert Staff Members', value: '10+' },
];

const values = [
  {
    title: 'Innovation',
    icon: Lightbulb,
    description:
      'We stay at the forefront of aesthetic technology, offering the latest and most effective non-invasive treatments.',
  },
  {
    title: 'Expertise',
    icon: Award,
    description:
      'Our team of licensed professionals brings years of experience and continuous education to every treatment.',
  },
  {
    title: 'Results',
    icon: Target,
    description:
      "We're committed to delivering visible, lasting results through personalized treatment plans.",
  },
  {
    title: 'Safety',
    icon: Shield,
    description:
      'Your safety and comfort are our top priorities, with strict protocols and medical-grade equipment.',
  },
];

const team = [
  {
    name: 'Jaclyn Vickrey',
    role: 'Founder & Lead Aesthetician',
    image: '/images/total-body-babe-jaclyn-vickrey.png',
    bio: 'With over a decade of experience in aesthetic medicine, Jaclyn founded Total Body Babe with a vision to provide transformative, non-invasive body sculpting solutions.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Body Contouring Specialist',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Specializing in advanced body contouring techniques, Sarah brings expertise in Brazilian lymphatic drainage and post-operative care.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Wellness Coordinator',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: "Emily ensures each client's journey is seamless, from consultation to post-treatment care, while managing our wellness programs.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <AboutUsHero />
      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center"
              >
                <dt className="text-base text-gray-600">{stat.label}</dt>
                <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded in The Woodlands, TX, Total Body Babe has grown from a
                vision of providing innovative, non-invasive body sculpting
                solutions to becoming a leading destination for transformative
                aesthetic treatments. Our journey is built on a foundation of
                expertise, innovation, and a deep commitment to helping our clients
                achieve their beauty and wellness goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Total Body Babe, our values guide everything we do, from the
              treatments we offer to the way we care for our clients.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center">
                  <dt className="flex flex-col items-center gap-y-4">
                    <div className="rounded-lg bg-primary/5 p-4">
                      <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <div className="text-xl font-semibold leading-7 text-gray-900">
                      {value.title}
                    </div>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the experts behind Total Body Babe&apos;s transformative treatments
              and exceptional results.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((person) => (
              <li key={person.name}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.image}
                  alt={person.name}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Location & Contact Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Visit Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience luxury aesthetics in our state-of-the-art facility.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-x-3">
                <MapPin className="h-6 w-6 text-gray-400" />
                <h3 className="font-semibold text-gray-900">Location</h3>
              </div>
              <div className="mt-4 border-l border-gray-200 pl-3">
                <p className="text-gray-600">
                  123 Market Street
                  <br />
                  The Woodlands, TX 77380
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-3">
                <Phone className="h-6 w-6 text-gray-400" />
                <h3 className="font-semibold text-gray-900">Phone</h3>
              </div>
              <div className="mt-4 border-l border-gray-200 pl-3">
                <p className="text-gray-600">(281) 555-5555</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-3">
                <Mail className="h-6 w-6 text-gray-400" />
                <h3 className="font-semibold text-gray-900">Email</h3>
              </div>
              <div className="mt-4 border-l border-gray-200 pl-3">
                <p className="text-gray-600">info@totalbodybabe.com</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-3">
                <Clock className="h-6 w-6 text-gray-400" />
                <h3 className="font-semibold text-gray-900">Hours</h3>
              </div>
              <div className="mt-4 border-l border-gray-200 pl-3">
                <p className="text-gray-600">
                  Monday - Friday: 9am - 7pm
                  <br />
                  Saturday: 10am - 5pm
                  <br />
                  Sunday: Closed
                </p>
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