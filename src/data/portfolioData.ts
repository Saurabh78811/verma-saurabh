export interface ProfileMetric {
  id: string;
  value: string;
  label: string;
  hint: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  stack: string[];
}

export interface WhyWorkItem {
  id: string;
  index: string;
  title: string;
  description: string;
}

export const PROFILE = {
  brandInitials: 'SV',
  name: 'Saurabh Verma',
  headline: 'Building Digital Experiences That Make an Impact.',
  title: 'Software Developer | React.js Developer | Android Developer | Freelancer',
  shortRole: 'Software Developer & Freelancer',
  heroDescription:
    'I build modern, scalable, and user-friendly digital experiences. From responsive websites to full-stack applications and Android apps, I turn ideas into powerful digital products.',
  availabilityText: 'Available for Freelance Projects',
  location: 'India · Remote Worldwide',
  aboutHeading: 'More Than Just Writing Code.',
  aboutParagraphs: [
    "Hi, I'm Saurabh Verma, a passionate Software Developer and Freelancer who loves building modern websites, web applications, and Android applications.",
    'I specialize in creating responsive, user-friendly, and performance-focused digital solutions using modern technologies. I enjoy solving real-world problems through technology and continuously improving my development skills.',
  ],
  portraitImage: '/assets/aistudio/Moody_Studio_Portrait_in_Charcoal_Knit_b16bd640.png',
  contact: {
    email: 'vsaurabh78811@gmail.com',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Saurabh%20Verma',
    github: 'https://github.com/Saurabh78811',
    whatsapp: 'https://wa.me/917881198930',
    whatsappDisplay: '+91 78811 98930',
  },
};

export const PROFILE_METRICS: ProfileMetric[] = [
  {
    id: 'experience',
    value: '01+',
    label: 'Years of Experience',
    hint: 'Full Stack, Android & SEO',
  },
  {
    id: 'projects',
    value: '12+',
    label: 'Featured Builds',
    hint: 'Web, LMS/CRM & Android Apps',
  },
  {
    id: 'clients',
    value: 'Open',
    label: 'Client Collaborations',
    hint: 'Freelance & Full-Time',
  },
  {
    id: 'technologies',
    value: '30+',
    label: 'Technologies Worked With',
    hint: 'Web, Cloud, AI, Android & DevOps',
  },
];

// Editable Experience Timeline
export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'starlux-travel',
    role: 'SEO Specialist (Black Hat SEO)',
    organization: 'Starlux Travel',
    duration: 'Present (Currently Working)',
    location: 'Travel Industry · Full-Time',
    type: 'Current Role · SEO',
    summary:
      'Currently driving search visibility and high-intent organic traffic growth for Starlux Travel through aggressive Black Hat SEO strategies and competitive SERP positioning.',
    responsibilities: [
      'Executing high-velocity ranking campaigns, tiered link building, and competitive SERP acquisition strategies in the travel vertical.',
      'Managing parasite SEO, aged/expired domain leverage, and rapid indexing workflows to capture high-volume travel keywords.',
      'Monitoring SERP volatility, search rankings, and conversion-focused landing funnels to sustain traffic growth.',
    ],
    stack: ['Black Hat SEO', 'SERP Strategy', 'Link Building', 'Parasite SEO', 'Keyword Research'],
  },
  {
    id: 'freelance-developer',
    role: 'Freelance Software Developer',
    organization: 'Independent / Client Projects',
    duration: 'Present',
    location: 'Remote',
    type: 'Freelance',
    summary:
      'Partnering with founders, businesses, and startups to design, architect, and launch responsive web applications, e-commerce platforms, and Android apps.',
    responsibilities: [
      'Architecting and shipping modern React.js & Tailwind CSS frontend interfaces with smooth micro-interactions.',
      'Building scalable Node.js, Express.js, and MongoDB backends with secure REST APIs and payment flows.',
      'Delivering customized WordPress and Shopify storefronts optimized for technical SEO and Answer Engine Optimization (AEO).',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'Kotlin', 'WordPress', 'Shopify'],
  },
  {
    id: 'welatino',
    role: 'SEO Executive (Black Hat SEO)',
    organization: 'Welatino',
    duration: '1 Year',
    location: 'Noida, Sector 6',
    type: '1 Year Experience',
    summary:
      'Worked for 1 year at Welatino (Noida Sector 6), specializing in Black Hat SEO execution, competitive link acquisition, and rapid keyword ranking.',
    responsibilities: [
      'Planned and executed Black Hat SEO campaigns, tiered backlink networks, and PBN outreach to rank competitive keywords.',
      'Conducted competitor backlink audits, SERP gap analysis, and automated indexing workflows.',
      'Collaborated with content and web teams to deploy high-converting landing pages tuned for search traffic.',
    ],
    stack: ['Black Hat SEO', 'PBN & Link Tiers', 'Competitor Analysis', 'Indexing', 'Technical SEO'],
  },
  {
    id: 'appmingle',
    role: 'Software Developer',
    organization: 'Appmingle',
    duration: '6 Months',
    location: 'On-site / Hybrid',
    type: '6 Months',
    summary:
      'Contributed to client-facing web and mobile product engineering, collaborating across UI implementation, API integration, and performance refinement.',
    responsibilities: [
      'Built modular, reusable UI components and responsive layouts for production web applications.',
      'Integrated RESTful backend services and managed application state cleanly across user workflows.',
      'Worked alongside product and QA cycles to resolve bugs, improve load speed, and ship on schedule.',
    ],
    stack: ['JavaScript', 'React.js', 'REST APIs', 'Git', 'Tailwind CSS'],
  },
];

export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    id: 'clean-code',
    index: '01',
    title: 'Clean & Maintainable Code',
    description:
      'Modular component architecture, clear naming conventions, and well-structured repositories built so your team can scale effortlessly.',
  },
  {
    id: 'modern-ui',
    index: '02',
    title: 'Modern UI/UX',
    description:
      'Thoughtful typography, intentional visual hierarchy, and smooth Framer Motion interactions that elevate product credibility.',
  },
  {
    id: 'responsive-design',
    index: '03',
    title: 'Responsive Design',
    description:
      'Pixel-accurate execution tested across mobile viewports, tablets, and widescreen desktops with accessible touch targets.',
  },
  {
    id: 'on-time-delivery',
    index: '04',
    title: 'On-Time Delivery',
    description:
      'Structured milestone planning, transparent progress updates, and dependable execution from kickoff to deployment.',
  },
  {
    id: 'performance',
    index: '05',
    title: 'Performance Optimization',
    description:
      'Fast asset loading, lean bundle budgets, semantic HTML, and technical SEO foundations baked into every release.',
  },
  {
    id: 'client-focused',
    index: '06',
    title: 'Client-Focused Approach',
    description:
      'Direct communication, business-first technical decisions, and post-launch support tailored around your real goals.',
  },
];
