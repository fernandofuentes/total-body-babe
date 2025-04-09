export interface Service {
  id: number;
  slug: string;
  name: string;
  price: string;
  description: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
  benefits?: string[];
  beforeAfterImages?: {
    before: string;
    after: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}
