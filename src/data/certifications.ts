export type CertificationCategory =
  | 'All'
  | 'Full Stack Internship'
  | 'Android Development'
  | 'AI & Cyber Security'
  | 'Frontend & Web'
  | 'SEO & Marketing';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  category: Exclude<CertificationCategory, 'All'>;
  summary: string;
  skillsCovered: string[];
  certificateImage: string;
  verifyUrl?: string;
}

export const CERTIFICATION_CATEGORIES: CertificationCategory[] = [
  'All',
  'Full Stack Internship',
  'Android Development',
  'AI & Cyber Security',
  'Frontend & Web',
  'SEO & Marketing',
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'cert-hcltech-mern',
    title: 'MERN Full Stack Developer Internship (6 Months)',
    issuer: 'HCLTech · Noida, India',
    issueDate: '02 June 2026',
    credentialId: 'HCL/INT/2026/089456',
    category: 'Full Stack Internship',
    summary:
      'Completed a 6-month internship as a MERN Full Stack Developer at HCL Technologies Limited, building real-world web applications with MongoDB, Express.js, React.js, and Node.js.',
    skillsCovered: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_11.40.23_AM__3__23d988c8.jpeg',
    verifyUrl: '',
  },
  {
    id: 'cert-ibm-ml-python',
    title: 'Machine Learning with Python',
    issuer: 'IBM · Offered through Coursera',
    issueDate: '15 Oct 2025',
    credentialId: 'GTDL38XICXI5',
    category: 'AI & Cyber Security',
    summary:
      'Completed IBM’s Machine Learning with Python course via Coursera, covering supervised and unsupervised learning algorithms, model evaluation, and Python ML workflows.',
    skillsCovered: ['Python', 'Machine Learning', 'Algorithms', 'IBM'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_1.56.35_PM__1__3cccbc64.jpeg',
    verifyUrl: 'https://coursera.org/verify/GTDL38XICXI5',
  },
  {
    id: 'cert-ten-mern',
    title: 'MERN Stack Developer Internship',
    issuer: 'The Entrepreneurship Network (Limitless Technologies LLP)',
    issueDate: '13 Oct 2026',
    credentialId: 'TEN/CT/11865',
    category: 'Full Stack Internship',
    summary:
      'Completed MERN Stack Developer internship tenure (04 Jun 2026 – 09 Oct 2026) at The Entrepreneurship Network, delivering full-stack features and maintaining production standards.',
    skillsCovered: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_1.56.36_PM__1__a346471a.jpeg',
    verifyUrl: '',
  },
  {
    id: 'cert-oasis-android',
    title: 'Android Developer — Kotlin & Firebase',
    issuer: 'Oasis Infobyte · 1 Month Program',
    issueDate: 'March 2025',
    credentialId: 'Oasis Infobyte · Android',
    category: 'Android Development',
    summary:
      'Completed the Android Developer program at Oasis Infobyte in Android App Development, Kotlin, and Firebase, including UI/UX design and mobile app deployment.',
    skillsCovered: ['Android', 'Kotlin', 'Firebase', 'Mobile UI/UX'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_2.03.02_PM_cd8cc49a.jpeg',
    verifyUrl: '',
  },
  {
    id: 'cert-oasis-web',
    title: 'Web Development and Designing Internship',
    issuer: 'Oasis Infobyte · 1 Month Program',
    issueDate: '05 Oct 2026',
    credentialId: 'Oasis Infobyte · Web',
    category: 'Frontend & Web',
    summary:
      'Completed a 1-month internship at Oasis Infobyte in Web Development and Designing, building responsive web interfaces and interactive frontend layouts.',
    skillsCovered: ['HTML5', 'CSS3', 'JavaScript', 'Web Design'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_1.56.36_PM__2__598b8f61.jpeg',
    verifyUrl: '',
  },
  {
    id: 'cert-welatino-internship',
    title: 'Marketing & Growth Internship Certificate',
    issuer: 'Welatino Traveltech LLP · Noida',
    issueDate: '01 Mar – 31 Aug 2026',
    credentialId: 'LLP ID: ACC-3387',
    category: 'SEO & Marketing',
    summary:
      'Completed internship tenure with Welatino Traveltech LLP in the Marketing Department, supporting digital search campaigns, SEO operations, and growth execution.',
    skillsCovered: ['SEO', 'Digital Marketing', 'Campaign Strategy'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_1.56.36_PM_fd3f54b9.jpeg',
    verifyUrl: '',
  },
  {
    id: 'cert-ducat-android',
    title: 'Java, Android & Kotlin Training',
    issuer: 'DUCAT · ISO 9001:2000 Certified',
    issueDate: '01 March 2024',
    credentialId: '31122022884403890',
    category: 'Android Development',
    summary:
      'Completed intensive training in Java, Android, and Kotlin (Sep 2023 – Mar 2024), covering native mobile UI, activity lifecycles, and Android architecture.',
    skillsCovered: ['Java', 'Android', 'Kotlin', 'Mobile UI'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_2.03.03_PM_e60c22ac.jpeg',
    verifyUrl: '',
  },
  {
    id: 'cert-cch-ethical-hacking',
    title: 'Ethical Hacking Certification Program (60 Hours)',
    issuer: 'CCH · Cyber Security & Ethical Hacking',
    issueDate: '02 May 2025',
    credentialId: 'CCH/EH/2025/0587',
    category: 'AI & Cyber Security',
    summary:
      'Completed 60-hour certification program covering Information Security, Network Security, Vulnerability Assessment, Penetration Testing, and Web Application Security.',
    skillsCovered: ['Web App Security', 'Network Security', 'Penetration Testing', 'VAPT'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_11.40.23_AM__2__2751d519.jpeg',
    verifyUrl: '',
  },
  {
    id: 'cert-mindluster-js-es6',
    title: 'JavaScript ES6 / ES2015',
    issuer: 'MindLuster · Certificate of Achievement',
    issueDate: '06 May 2023',
    credentialId: '2337906132',
    category: 'Frontend & Web',
    summary:
      'Completed certification in modern JavaScript ES6/ES2015 syntax, modular code patterns, arrow functions, promises, and asynchronous frontend programming.',
    skillsCovered: ['JavaScript', 'ES6 / ES2015', 'Async JS'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_1.56.35_PM_0be8df9a.jpeg',
    verifyUrl: '',
  },
  {
    id: 'cert-mindluster-css-animation',
    title: 'CSS Animation',
    issuer: 'MindLuster · Certificate of Achievement',
    issueDate: '06 May 2023',
    credentialId: '2337901053',
    category: 'Frontend & Web',
    summary:
      'Completed certification in CSS Animation, keyframe motion choreography, transitions, and responsive interactive interface effects.',
    skillsCovered: ['CSS3', 'CSS Animations', 'Keyframes', 'UI Motion'],
    certificateImage: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_1.56.34_PM_7d2c0017.jpeg',
    verifyUrl: '',
  },
];
