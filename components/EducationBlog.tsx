import Image from 'next/image';

const blogPosts = [
  {
    title: "Understanding Different Types of Facial Treatments",
    excerpt:
      "Discover the various facial treatments available and which one might be right for your skin type and concerns.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3",
    category: "Skincare",
    readTime: "5 min read",
  },
  {
    title: "The Science Behind Body Contouring",
    excerpt:
      "Learn about the latest technologies and methods used in non-invasive body contouring treatments.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3",
    category: "Body Treatments",
    readTime: "7 min read",
  },
  {
    title: "Post-Treatment Care: Essential Tips",
    excerpt:
      "Follow these essential tips to maintain and maximize your treatment results at home.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3",
    category: "Aftercare",
    readTime: "4 min read",
  },
];

const EducationBlog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Beauty & Wellness Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest trends, treatments, and expert advice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <a
                    href="#"
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationBlog;