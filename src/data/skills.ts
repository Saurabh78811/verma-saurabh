export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  items: {
    name: string;
    role: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Accessible, responsive, and high-frame-rate user interfaces.',
    items: [
      { name: 'HTML5', role: 'Semantic Markup' },
      { name: 'CSS3', role: 'Modern Layout & Grid' },
      { name: 'JavaScript', role: 'ES6+ Application Logic' },
      { name: 'React.js', role: 'Component Architecture' },
      { name: 'Tailwind CSS', role: 'Design Systems' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Languages',
    description: 'Server architectures, relational & NoSQL databases, and core languages.',
    items: [
      { name: 'Node.js', role: 'Server Runtime' },
      { name: 'Express.js', role: 'API Routing & Middleware' },
      { name: 'MongoDB', role: 'NoSQL Data Modeling' },
      { name: 'SQL', role: 'Relational Databases' },
      { name: 'REST APIs', role: 'Structured Endpoints' },
      { name: 'Python', role: 'Backend & Scripting' },
      { name: 'Java', role: 'Object-Oriented Systems' },
      { name: 'CUDA', role: 'GPU Parallel Computing' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    description: 'Cloud infrastructure, containerization, and automated deployment pipelines.',
    items: [
      { name: 'Cloud', role: 'Scalable Architecture' },
      { name: 'AWS', role: 'Cloud Infrastructure' },
      { name: 'Docker', role: 'Containerization' },
      { name: 'CI/CD', role: 'Automated Pipelines' },
      { name: 'Firebase', role: 'Auth & Realtime Cloud' },
    ],
  },
  {
    id: 'android',
    label: 'Android',
    description: 'Native mobile experiences engineered for Android devices.',
    items: [
      { name: 'Kotlin', role: 'Primary Android Language' },
      { name: 'XML', role: 'Classic View Layouts' },
      { name: 'Jetpack Compose', role: 'Declarative Mobile UI' },
      { name: 'Firebase', role: 'Mobile Backend & Sync' },
    ],
  },
  {
    id: 'tools',
    label: 'AI & Design Tools',
    description: 'AI engineering workflows, UI/UX design, version control, and API testing.',
    items: [
      { name: 'Claude AI', role: 'AI Engineering Workflow' },
      { name: 'Google AI Studio', role: 'Gemini AI Prototyping' },
      { name: 'Figma UI/UX', role: 'Interface & UX Design' },
      { name: 'Git', role: 'Source Control' },
      { name: 'GitHub', role: 'Collaboration & CI' },
      { name: 'VS Code', role: 'Primary IDE' },
      { name: 'Postman', role: 'API Testing' },
    ],
  },
  {
    id: 'other',
    label: 'CMS & Growth',
    description: 'E-commerce platforms, CMS delivery, and organic search.',
    items: [
      { name: 'WordPress', role: 'Custom Business Sites' },
      { name: 'Shopify', role: 'E-commerce Storefronts' },
      { name: 'SEO', role: 'Technical & On-Page' },
      { name: 'AEO', role: 'Answer Engine Optimization' },
    ],
  },
];
