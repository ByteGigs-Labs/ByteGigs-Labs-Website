export interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
  emailSubject: string;
  waMessage: string;
}

export const SERVICES: Service[] = [
  {
    id: 'pos',
    image: '/service-software.svg',
    title: 'Point of Sale',
    description:
      'Robust POS built to streamline sales, manage inventory in real-time, and integrate cash, card, and mobile money. Comes with advanced analytics and multi-branch support.',
    emailSubject: 'POS System Inquiry',
    waMessage: 'Hello ByteGigs Labs, I need a demo of your POS system.',
  },
  {
    id: 'delivery',
    image: '/service-mobile.svg',
    title: 'Online Delivery',
    description:
      '2-in-1 platform: Vendor System and Delivery Partner System. Manage orders, dispatch riders, and track deliveries in real-time from a single dashboard.',
    emailSubject: 'Delivery System Inquiry',
    waMessage: 'Hello ByteGigs Labs, I need more info about the Online Delivery System.',
  },
  {
    id: 'web',
    image: '/service-software.svg',
    title: 'Web Development',
    description:
      'From conversion-focused landing pages to complex web applications. We use modern frameworks to deliver fast, secure, and scalable web experiences.',
    emailSubject: 'Web Development Inquiry',
    waMessage: 'Hello ByteGigs Labs, I need Web Development services.',
  },
  {
    id: 'mobile',
    image: '/service-mobile.svg',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform apps built with Kotlin and modern tooling. Consumer apps to enterprise-grade solutions — performant, intuitive, and production-ready.',
    emailSubject: 'Mobile App Development Inquiry',
    waMessage: 'Hello ByteGigs Labs, I need Mobile App Development services.',
  },
  {
    id: 'desktop',
    image: '/service-software.svg',
    title: 'Desktop App Development',
    description:
      'Powerful desktop applications in C++, Java, and .NET tailored to your workflows. Productivity tools, ERP systems, and complex enterprise software built to last.',
    emailSubject: 'Desktop App Inquiry',
    waMessage: 'Hello ByteGigs Labs, I need Desktop App Development services.',
  },
  {
    id: 'custom',
    image: '/service-software.svg',
    title: 'Custom Systems',
    description:
      'Off-the-shelf software rarely fits. We build bespoke ERP, CRM, and business platforms from scratch — scalable, secure, and engineered around your exact requirements.',
    emailSubject: 'Custom System Inquiry',
    waMessage: 'Hello ByteGigs Labs, I need a Custom System built.',
  },
  {
    id: 'graphics',
    image: '/service-mobile.svg',
    title: 'Graphics Design',
    description:
      'Logos, brand identity, UI design, social media graphics, and marketing collateral. We communicate your brand visually with clarity and purpose.',
    emailSubject: 'Graphics Design Inquiry',
    waMessage: 'Hello ByteGigs Labs, I need Graphics Design services.',
  },
  {
    id: 'cctv',
    image: '/service-security.svg',
    title: 'CCTV Surveillance',
    description:
      'Custom surveillance systems with HD cameras, NVRs, intelligent video analytics, and remote monitoring. Protecting residential, commercial, and industrial properties.',
    emailSubject: 'CCTV Surveillance Inquiry',
    waMessage: 'Hello ByteGigs Labs, I need CCTV Surveillance services.',
  },
];
