export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: 'globe' | 'server' | 'smartphone' | 'layout' | 'shopping-bag' | 'search';
  featured?: boolean;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'website-development',
    index: '01',
    title: 'Website Development',
    description:
      'Custom, high-converting business websites and modern React.js interfaces engineered for speed, clarity, and seamless cross-device responsiveness.',
    deliverables: ['React.js', 'Responsive Websites', 'Modern UI/UX', 'Business Websites'],
    iconName: 'globe',
    featured: true,
  },
  {
    id: 'full-stack-development',
    index: '02',
    title: 'Full Stack Development',
    description:
      'End-to-end web applications powered by resilient backend APIs, structured databases, authentication flows, and scalable admin dashboards.',
    deliverables: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    iconName: 'server',
    featured: true,
  },
  {
    id: 'android-app-development',
    index: '03',
    title: 'Android App Development',
    description:
      'Native Android mobile applications built with clean architecture, responsive Jetpack Compose or XML layouts, and real-time cloud synchronization.',
    deliverables: ['Kotlin', 'XML', 'Jetpack Compose', 'Firebase'],
    iconName: 'smartphone',
  },
  {
    id: 'wordpress-development',
    index: '04',
    title: 'WordPress Development',
    description:
      'Tailored WordPress business sites and high-impact landing pages with custom theme styling, plugin integration, and Core Web Vitals optimization.',
    deliverables: ['Business Websites', 'Landing Pages', 'Customization', 'Website Optimization'],
    iconName: 'layout',
  },
  {
    id: 'shopify-development',
    index: '05',
    title: 'Shopify Development',
    description:
      'Conversion-ready Shopify e-commerce storefronts with customized product pages, streamlined cart experiences, and brand-aligned storefront layouts.',
    deliverables: ['E-commerce Stores', 'Product Pages', 'Store Customization'],
    iconName: 'shopping-bag',
  },
  {
    id: 'seo-aeo',
    index: '06',
    title: 'SEO & AEO',
    description:
      'Search Engine Optimization and Answer Engine Optimization designed to improve crawlability, structured data clarity, and organic discoverability.',
    deliverables: ['Technical SEO', 'On-Page SEO', 'Search Optimization', 'Answer Engine Optimization'],
    iconName: 'search',
  },
];
