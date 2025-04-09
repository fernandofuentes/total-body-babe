import Image from 'next/image';
export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Total Body Babe
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700">
            Total Body Babe is a trusted medspa located in The Woodlands, TX,
            specializing in non-invasive body contouring, cellulite therapy, and
            detox treatments.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
              Our Mission
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              To offer advanced aesthetic solutions that blend innovative
              technology with personalized care. Whether you’re seeking to
              sculpt your body, diminish cellulite, or detoxify your tissues,
              our expert team is committed to helping you achieve a healthier,
              more confident you. At Total Body Babe, every treatment is
              tailored to meet your unique needs and beauty goals.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt=""
                  src="/images/left.png"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  alt=""
                  src="/images/center.png"
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt=""
                  src="/images/right.png"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  alt=""
                  src="/images/man.png"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base/7 font-semibold text-gray-500">
              The numbers
            </p>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Clients Transformed</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>2.3K+</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">
                  Treatments Delivered
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>2,2K+</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                <dt className="text-sm/6 text-gray-600">Inches Lost</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>5.7K+</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-600">
                  Consultations Booked
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>3.3K+</span>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
