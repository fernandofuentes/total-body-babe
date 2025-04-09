"use client";
import Image from 'next/image';

const images = [
  {
    src: "/images/instagram-1.png",
    caption: "Experience luxury treatments at Total Body Babe #MedSpa",
  },
  {
    src: "/images/instagram-2.png",
    caption: "Transform your skin with our advanced facial treatments",
  },
  {
    src: "/images/instagram-3.png",
    caption: "Results that speak for themselves #BeautyTransformation",
  },
  {
    src: "/images/instagram-4.png",
    caption: "Luxury spa experience awaits you #SpaDay",
  },
  {
    src: "/images/instagram-5.png",
    caption: "State-of-the-art treatments for amazing results",
  },
  {
    src: "/images/instagram-6.png",
    caption: "Your journey to confidence starts here #BeautyGoals",
  },
];

const InstagramFeed = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-3 md:grid-cols-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative group aspect-square overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-center text-sm line-clamp-3 md:line-clamp-none">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;