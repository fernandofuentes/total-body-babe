import { Service } from '@/types/service';

// Featured service IDs - you can change these to show different services
const FEATURED_SERVICE_IDS = [1, 2, 3, 17];

const services: Service[] = [
  {
    id: 1,
    slug: 'brazilian-lymphatic-drainage',
    name: 'Brazilian Lymphatic Drainage',
    price: '$125',
    description:
      'Experience authentic Brazilian lymphatic drainage massage techniques that help reduce swelling, boost circulation, and promote natural detoxification.',
    duration: '70 min',
    imageSrc: '/images/services/brazilian-lymphatic-drainage.png',
    imageAlt: 'Brazilian Lymphatic Drainage Massage Treatment',
  },
  {
    id: 2,
    slug: 'ems-therapy-babesculpt',
    name: 'EMS therapy "BabeSculpt"',
    price: '$229',
    description:
      'HIFEM & RF combine to target 100% of muscle fibers to build by 25% while reducing fat by 30% in the treated area. Non-invasive. No downtime. 4 treatments. (1x a week)',
    duration: '45 min',
    imageSrc: '/images/services/babesculpt-ems-therapy.png',
    imageAlt: 'EMS Therapy BabeSculpt Treatment',
  },
  {
    id: 3,
    slug: 'booty-plump-and-lift',
    name: 'Booty Plump & Lift 🍑',
    price: '$149+',
    description:
      'Vacuum-therapy raises, enlarges, and reaffirms the gluteus. Creates a tone, tightens, and lifts the booty. Painless, safe, and with no downtime.',
    duration: '60 min',
    imageSrc: '/images/services/booty-plump-and-lift.png',
    imageAlt: 'Booty Plump & Lift Treatment',
  },
  {
    id: 4,
    slug: 'fat-slayer',
    name: 'Fat Slayer',
    price: '$149+',
    description:
      'Combines the power of light and sound therapy to blast fat away, lose inches, and tighten the skin. Best for targeting your most stubborn area.',
    duration: '75 min',
    imageSrc: '/images/services/brazilian-lymphatic-drainage.png',
    imageAlt: 'Fat Slayer Treatment',
  },
  {
    id: 5,
    slug: 'lipocavitation',
    name: 'LipoCavitation',
    price: '$109',
    description:
      'Uses non-invasive ultrasonic sound waves to break down fat cells. Slims, sculpts, reduces cellulite, and firms the body (stomach, arms, legs, chin, back). NO DOWNTIME.',
    duration: '45 min',
    imageSrc: '/images/services/lipocavitation.png',
    imageAlt: 'LipoCavitation Treatment',
  },
  {
    id: 6,
    slug: 'ultimate-cellulite',
    name: 'Ultimate Cellulite',
    price: '$333+',
    description:
      'A dimple-blasting duo: breaks down connective bands using wood & vacuum therapy combined with a full-body lymphatic flush to remove fat/toxins and eliminate cellulite.',
    duration: '150 min',
    imageSrc: '/images/services/ultimate-cellulite.png',
    imageAlt: 'Ultimate Cellulite Treatment',
  },
  {
    id: 7,
    slug: 'goddess-body-combo',
    name: 'Goddess Body Combo - 1 Session',
    price: '$229',
    description:
      'Combines LipoMelt and Body Wrap in one session to quickly target stubborn fat and toxins.',
    duration: '120 min',
    imageSrc: '/images/services/goddess-body-combo.png',
    imageAlt: 'Goddess Body Combo Treatment',
  },
  {
    id: 8,
    slug: 'bodyslayed',
    name: 'BodySlayed - 1 Session',
    price: '$333',
    description:
      'Ultimate session including full-body wood therapy, LipoLaser, and body wrap. Includes one area for additional spot treatment with lipocavitation or RF.',
    duration: '150 min',
    imageSrc: '/images/services/bodyslayed.png',
    imageAlt: 'BodySlayed Treatment',
  },
  {
    id: 9,
    slug: 'total-body-infrared-light-therapy',
    name: 'Total Body Infrared Light Therapy',
    price: '$99+',
    description:
      'Infrared therapy that offers anti-anxiety, anti-aging benefits; reduces pain/inflammation; boosts cellular health, blood flow, and performance while reducing oxidative stress.',
    duration: '45 min',
    imageSrc: '/images/services/total-body-infrared-light-therapy.png',
    imageAlt: 'Total Body Infrared Light Therapy',
  },
  {
    id: 10,
    slug: 'body-sculpting-consultation',
    name: 'Body Sculpting Consultation',
    price: '$45',
    description:
      'A consultation session that also applies $45 towards booked services.',
    duration: '45 min',
    imageSrc: '/images/services/body-sculpting-consultation.png',
    imageAlt: 'Body Sculpting Consultation',
  },
  {
    id: 11,
    slug: 'detox-wellness-consultation',
    name: 'Detox & Wellness Consultation',
    price: '$45+',
    description:
      'Consultation designed to address brain fog, low energy, and weight-loss challenges. Fee goes toward the overall program.',
    duration: '45 min',
    imageSrc: '/images/services/detox-and-wellness-consultation.png',
    imageAlt: 'Detox & Wellness Consultation',
  },
  {
    id: 12,
    slug: 'rf-skin-tightening',
    name: 'RF Skin Tightening',
    price: '$89',
    description:
      "Uses radio thermal frequency to heat the skin's superficial layers, triggering collagen and elastin production for a firmer, youthful glow.",
    duration: '30 min',
    imageSrc: '/images/services/rf-skin-tightening.png',
    imageAlt: 'RF Skin Tightening Treatment',
  },
  {
    id: 13,
    slug: 'babe-curves',
    name: 'BabeCurves 🔥',
    price: '$0+',
    description:
      'Combines multiple modalities for maximum results in one session. (1 option available)',
    duration: '75+ min',
    imageSrc: '/images/services/babecurves.png',
    imageAlt: 'BabeCurves Treatment',
  },
  {
    id: 14,
    slug: '60-min-massage',
    name: '60 Min Full Body Massage',
    price: '$120',
    description: 'A 60-minute full body massage session.',
    duration: '60 min',
    imageSrc: '/images/services/60-min-full-body-massage.png',
    imageAlt: '60 Minute Full Body Massage',
  },
  {
    id: 15,
    slug: '90-min-massage',
    name: '90 min Massage',
    price: '$149',
    description: 'A full body massage with deep tissue work.',
    duration: '90 min',
    imageSrc: '/images/services/90-min-massage.png',
    imageAlt: '90 Minute Massage',
  },
  {
    id: 16,
    slug: '120-min-massage',
    name: '120 Min Massage',
    price: '$222',
    description: 'A fully customized massage session tailored to your needs.',
    duration: '120 min',
    imageSrc: '/images/services/120-min-massage.png',
    imageAlt: '120 Minute Massage',
  },
  {
    id: 17,
    slug: 'post-op-massage',
    name: 'Post OP Massage',
    price: '$139',
    description:
      'Post-operative lymphatic massage helps reduce swelling and inflammation',
    duration: '60 min',
    imageSrc: '/images/services/post-op-massage.png',
    imageAlt: 'Post Op Massage',
  },
];

function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

function getFeaturedServices(): Service[] {
  return services.filter((service) =>
    FEATURED_SERVICE_IDS.includes(service.id)
  );
}

export { services, getServiceBySlug, getFeaturedServices };