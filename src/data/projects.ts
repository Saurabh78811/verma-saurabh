import aquadropImg from '../assets/images/project_aquadrop_1794650803524.jpg';
import bmiCalculatorImg from '../assets/images/project_bmi_calculator_1794641456759.jpg';
import crmDashboardImg from '../assets/images/project_crm_dashboard_1794648563988.jpg';
import doctorBookingImg from '../assets/images/project_doctor_booking_1794641456314.jpg';
import foodieFrenzyImg from '../assets/images/project_foodie_frenzy_1794647635197.jpg';
import freshmartAdminImg from '../assets/images/project_freshmart_admin_1794641456859.jpg';
import groceryWebImg from '../assets/images/project_grocery_web_1794641458414.jpg';
import gymPlatformImg from '../assets/images/project_gym_platform_1794652496707.jpg';
import lmsPlatformImg from '../assets/images/project_lms_platform_1794648564129.jpg';
import storeCrmImg from '../assets/images/project_store_crm_1794653002394.jpg';
import ticTacToeImg from '../assets/images/project_tictactoe_android_1794641456542.jpg';
import uberCloneImg from '../assets/images/project_uber_clone_android_1794651356148.jpg';

export type ProjectCategory = 'All' | 'Full Stack' | 'LMS/CRM' | 'Android';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  highlights: string[];
  // Editable URLs: Leave empty or set to your live deployment / GitHub repo URL
  liveUrl: string;
  adminUrl?: string;
  githubUrl: string;
  playStoreUrl?: string;
  androidOnly?: boolean;
  featured?: boolean;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = ['All', 'Full Stack', 'LMS/CRM', 'Android'];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'doctor-appointment-booking',
    title: 'Doctor Appointment Booking System',
    category: 'Full Stack',
    shortDescription: 'Online doctor appointment booking and clinic schedule management platform.',
    fullDescription:
      'A full-stack healthcare booking platform enabling patients to browse specialists, select real-time time slots, complete secure payments via Stripe, and manage appointments alongside dedicated doctor and admin controls.',
    image: doctorBookingImg,
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    highlights: [
      'Patient appointment booking workflow with live time-slot selection',
      'Integrated Stripe payment checkout and booking confirmation flow',
      'Doctor & administrator scheduling management dashboard',
    ],
    liveUrl: 'https://doctor-management-swart.vercel.app',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'foodie-frenzy',
    title: 'Foodie-Frenzy – Online Food Ordering App',
    category: 'Full Stack',
    shortDescription:
      'Multi-cuisine food ordering web app with dynamic menu categories, live cart, and auth flow.',
    fullDescription:
      'A responsive restaurant and online food ordering platform built with React, React Router, and Tailwind CSS. Styled in a rich espresso-and-amber culinary palette, it supports browsing across Breakfast, Lunch, Dinner, Mexican, Italian, Desserts, and Drinks alongside Add-to-Cart management, checkout routing, and login/registration modals.',
    image: foodieFrenzyImg,
    techStack: ['React.js', 'React Router', 'Tailwind CSS', 'JavaScript'],
    highlights: [
      '7-category culinary menu filtering (Breakfast, Lunch, Dinner, Italian, Mexican, Desserts & Drinks)',
      'Interactive Add-to-Cart workflow with live header item count badge and cart checkout page',
      'Responsive mobile drawer navigation, user login/signup modal, and newsletter subscription',
    ],
    liveUrl: 'https://frontend-kappa-one-79.vercel.app',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'freshmart-ecommerce-admin',
    title: 'FreshMart – Storefront & Admin System',
    category: 'Full Stack',
    shortDescription:
      'Full-stack e-commerce storefront paired with an operational admin dashboard for inventory and orders.',
    fullDescription:
      'A complete FreshMart e-commerce platform combining a customer-facing grocery storefront with a centralized administration dashboard to oversee product catalogs, monitor stock availability, process incoming orders, and update fulfillment statuses in real time.',
    image: freshmartAdminImg,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'Customer-facing FreshMart storefront for browsing, cart management, and checkout',
      'Dedicated Admin Panel with CRUD product catalog and inventory status controls',
      'Order lifecycle tracking across pending, shipped, and delivered stages',
    ],
    liveUrl: 'https://freshmart-mauve.vercel.app/',
    adminUrl: 'https://fresh-mart-admin-roan.vercel.app/',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'aquadrop-water-store',
    title: 'AquaDrop – Online Water Selling & Management',
    category: 'Full Stack',
    shortDescription:
      'Mineral water e-commerce storefront & business management system with automated A4 PDF GST invoicing.',
    fullDescription:
      'A full-stack mineral water bottle and 250ml–20L can/jar selling platform built with an online storefront, customer order tracking portal, and an Admin Console featuring inventory adjustments, billing console, invoice archive, payment tracking, and business analytics.',
    image: aquadropImg,
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      '250ml to 20L mineral water bottle & jar catalog with Add-to-Cart and delivery address checkout',
      'Automated A4 PDF GST invoice generation at checkout with customer invoice archive',
      'Admin Console with stock inventory controls, order & payment management, and sales analytics',
    ],
    liveUrl: 'https://aquadrop-seven.vercel.app/',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'grocery-shopping-website',
    title: 'Grocery Shopping Website',
    category: 'Full Stack',
    shortDescription: 'Modern online grocery storefront built with React.js and responsive UI patterns.',
    fullDescription:
      'A clean, user-friendly online grocery storefront featuring categorized fresh produce browsing, dynamic shopping cart management, and fast responsive navigation across desktop and mobile devices.',
    image: groceryWebImg,
    techStack: ['React.js', 'JavaScript', 'CSS3', 'Responsive UI'],
    highlights: [
      'Category-driven product discovery and quick-add cart experience',
      'Responsive grid layout tuned for mobile and desktop shoppers',
      'Clean state updates for live cart totals and item quantities',
    ],
    liveUrl: 'https://frontend-kappa-one-79.vercel.app/',
    githubUrl: '',
  },
  {
    id: 'ironpulse-gym-platform',
    title: 'IronPulse – Gym & Fitness Web Platform',
    category: 'Full Stack',
    shortDescription:
      'Full-stack gym website and member management system with membership plans, class scheduling, and trainer booking.',
    fullDescription:
      'A full-stack fitness club and gym management web application featuring tiered membership subscriptions, trainer spotlights, weekly workout class booking, a member dashboard, and admin tools for attendance and subscription renewals.',
    image: gymPlatformImg,
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    highlights: [
      'Tiered membership plan enrollment with online payment and member portal access',
      'Interactive weekly class schedule and personal trainer booking workflow',
      'Admin panel for member check-ins, active plan tracking, and revenue management',
    ],
    liveUrl: '/ironpulse-demo',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'tic-tac-toe-android',
    title: 'Tic Tac Toe Android Game',
    category: 'Android',
    shortDescription: 'Published native Android game crafted in Kotlin with clean, tactile feedback.',
    fullDescription:
      'A native Android mobile game engineered in Kotlin featuring smooth turn animations, instant win-line detection, score tracking, and a crisp, distraction-free interface designed for Android devices.',
    image: ticTacToeImg,
    techStack: ['Kotlin', 'Android', 'XML / Material UI'],
    highlights: [
      'Published Android application built with native Kotlin logic',
      'Responsive board layout supporting varied Android screen densities',
      'Instant win/draw detection with one-tap match reset',
    ],
    liveUrl: '',
    githubUrl: '',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aistudio.tictactoe.gkrzx',
    androidOnly: true,
  },
  {
    id: 'uber-clone-android',
    title: 'Uber Clone – Ride Booking Android App',
    category: 'Android',
    shortDescription:
      'Native Kotlin ride-hailing Android app with real-time map routing, live GPS location tracking, and ride booking.',
    fullDescription:
      'A native Android ride-hailing application built in Kotlin featuring real-time interactive map rendering, continuous live GPS location tracking, pickup-to-drop route polylines, ETA estimation, and live ride status synchronization.',
    image: uberCloneImg,
    techStack: ['Kotlin', 'Android SDK', 'Google Maps SDK', 'Live GPS Location', 'Firebase'],
    highlights: [
      'Real-time interactive map with pickup/drop pins, route polylines, and ETA estimation',
      'Live GPS location tracking via FusedLocationProvider for riders and drivers',
      'Native Kotlin architecture with real-time ride request & status updates',
    ],
    liveUrl: '',
    githubUrl: '',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aistudio.wordwave.gamedv',
    androidOnly: true,
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    category: 'Full Stack',
    shortDescription: 'Interactive BMI calculator with instant metric calculation and health categories.',
    fullDescription:
      'A fast, accessible web utility allowing users to calculate their Body Mass Index with immediate visual feedback across standard health weight categories and clean mobile-ready controls.',
    image: bmiCalculatorImg,
    techStack: ['React.js', 'Tailwind CSS'],
    highlights: [
      'Real-time BMI computation with clear health category classification',
      'Accessible input validation and responsive layout structure',
      'Zero-clutter minimalist UI with instant reset capability',
    ],
    liveUrl: 'https://bmi-calculator-three-rho.vercel.app',
    githubUrl: '',
  },
  {
    id: 'lms-learning-platform',
    title: 'SLMS – Learning Management System',
    category: 'LMS/CRM',
    shortDescription:
      'E-learning & course marketplace platform with online video courses, OTP auth, instructor onboarding, and theme switching.',
    fullDescription:
      'A complete Learning Management System built by Saurabh Verma featuring browsable course categories, online video courses, instructor onboarding ("Become Teacher"), email OTP-based Login & Registration, events & blog modules, and Dark / Light / System theme modes.',
    image: lmsPlatformImg,
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'Course discovery across categories with online video courses and student/instructor flows',
      'Email OTP verification & Login/Register workflow alongside theme switching (Dark / Light / System)',
      'Dedicated About, Instructor Onboarding, Events, Blog, and Marketplace sections',
    ],
    liveUrl: 'https://slms-nu.vercel.app',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'crm-lead-management',
    title: 'Enterprise CRM & Lead Pipeline',
    category: 'LMS/CRM',
    shortDescription:
      'End-to-end CRM dashboard for lead tracking, Kanban deal pipelines, client timelines, and sales analytics.',
    fullDescription:
      'A business-grade Customer Relationship Management platform built to centralize leads, organize deal stages across a Kanban sales pipeline, log client communication timelines, and track conversion performance in real time.',
    image: crmDashboardImg,
    techStack: ['React.js', 'Node.js', 'SQL / PostgreSQL', 'REST APIs', 'Tailwind CSS'],
    highlights: [
      'Visual Kanban deal pipeline spanning New Lead, Qualified, Proposal, and Closed Won',
      'Centralized contact directory with interaction timeline and follow-up task logging',
      'Live KPI reporting for pipeline value, win rate, and team conversion metrics',
    ],
    liveUrl: '/enterprise-crm-demo',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'store-crm-platform',
    title: 'StoreFlow – Retail & Store CRM',
    category: 'LMS/CRM',
    shortDescription:
      'Store customer relationship & loyalty CRM tracking order history, repeat buyers, billing, and retention analytics.',
    fullDescription:
      'A specialized Retail & Store CRM web platform engineered for retail businesses to manage customer profiles, track purchase frequency and order history, run loyalty reward tiers, automate store billing/invoices, and monitor customer retention analytics.',
    image: storeCrmImg,
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'Centralized store customer directory with purchase frequency and lifetime value tracking',
      'Loyalty & rewards tier engine (Bronze, Silver, Gold, Platinum) with campaign outreach',
      'Store sales & customer retention analytics paired with billing & invoice management',
    ],
    liveUrl: '/storeflow-demo',
    githubUrl: '',
    featured: true,
  },
];
