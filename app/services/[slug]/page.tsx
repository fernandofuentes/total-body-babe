import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

interface ServicePageProps {
  params: any;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params as { slug: string };
  const service = await getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="mt-6 text-xl text-gray-100">{service.description}</p>
            <div className="mt-8 flex items-center gap-6">
              <span className="text-3xl font-bold">{service.price}</span>
              <span className="text-lg">{service.duration}</span>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold">About the Treatment</h2>
          <div className="mt-6 whitespace-pre-wrap text-gray-600">
            {service.description}
          </div>
        </div>

        {/* Benefits */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold">Benefits</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg text-gray-900">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Before & After */}
        {service.beforeAfterImages && service.beforeAfterImages.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold">Before & After Results</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2">
              {service.beforeAfterImages.map((image, index) => (
                <div key={index} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Image
                        src={image.before}
                        alt="Before treatment"
                        className="h-full w-full rounded-lg object-cover"
                      />
                      <p className="mt-2 text-center text-sm font-medium">
                        Before
                      </p>
                    </div>
                    <div>
                      <Image
                        src={image.after}
                        alt="After treatment"
                        className="h-full w-full rounded-lg object-cover"
                      />
                      <p className="mt-2 text-center text-sm font-medium">
                        After
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600">
                    {image.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <dl className="mt-8 space-y-8">
              {service.faqs.map((faq, index) => (
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
        )}

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary/5 px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Experience the Benefits?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Book your session today and start your journey to better health and
            wellness.
          </p>
          <Button size="lg" className="mt-8">
            Book Your Session
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
