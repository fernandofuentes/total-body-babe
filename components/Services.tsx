'use client';
import Image from 'next/image';
import { services } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-72">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                {/* Title and description container with fixed height */}
                <div className="min-h-[160px]">
                  <h3 className="text-lg font-bold text-gray-900 min-h-[56px]">
                    <Link href={`/services/${service.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{service.description}</p>
                </div>
                
                {/* Price and duration info */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{service.price}</p>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}