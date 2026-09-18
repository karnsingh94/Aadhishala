import {
  BadgeIndianRupee,
  BookOpen,
  CalendarDays,
  CreditCard,
  ClipboardList,
  FileText,
  GraduationCap,
  Landmark,
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
  Users,
  
} from 'lucide-react';

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Why Us', path: '/why' },
  { label: 'Onboarding', path: '/onboarding' },
  { label: 'Reviews', path: '/reviews' },
];

export const metrics = [
  { value: '1,100+', label: 'Institutions' },
  { value: '5L+', label: 'App Downloads' },
  { value: '10L+', label: 'Students' },
  { value: '2,000 Cr+', label: 'Fee Payments' },
  { value: '20+', label: 'Cities' },
];

export const schools = [
  'Delhi Public School',
  'Mayoor School',
  'St. Pauls',
  'Mayo College',
  'The Study',
  'Sanskriti School',
];

export const recognitions = [
  {
    title: 'Rajasthan Innovation Award',
    text: 'Recognised for building practical education technology for schools.',
  },
  {
    title: 'Microsoft for Startups',
    text: 'Supported by a global cloud and startup ecosystem.',
  },
  {
    title: 'IIM Udaipur Incubation Centre',
    text: 'Mentored for product, scale, and institution impact.',
  },
  {
    title: 'iStart Rajasthan',
    text: 'Part of Rajasthan innovation and startup network.',
  },
];

export const solutions = [
  {
    title: 'ERP for Institutions',
    text: 'Manage admissions, academics, transport, staff, fee, reports, and communication from one connected dashboard.',
    Icon: LayoutDashboard,
  },
  {
    title: 'Learning Management',
    text: 'Share study material, assignments, tests, notices, results, and progress updates with students and parents.',
    Icon: BookOpen,
  },
  {
    title: 'Admissions & CRM',
    text: 'Capture enquiries, follow up faster, schedule counselling, and convert admission leads with clear pipeline tracking.',
    Icon: MessageSquareText,
  },
];

export const popularSolutions = [
  {
    title: 'Fee Management',
    text: 'Online collection, receipts, dues, concessions, reports, and automated reminders.',
    Icon: BadgeIndianRupee,
  },
  {
    title: 'Payment Gateway',
    text: 'Secure payment links and smooth reconciliation for school accounts.',
    Icon: CreditCard,
  },
  {
    title: 'Faculty & Payroll',
    text: 'Attendance, salary, roles, leaves, and faculty records in one place.',
    Icon: Users,
  },
  {
    title: 'Student Info',
    text: 'Profile, documents, guardian details, class history, and academic records.',
    Icon: GraduationCap,
  },
  {
    title: 'Inventory',
    text: 'Track books, uniforms, assets, issue records, and stock movement.',
    Icon: ClipboardList,
  },
  {
    title: 'Curriculum',
    text: 'Plan chapters, periods, syllabus targets, and completion visibility.',
    Icon: FileText,
  },
  {
    title: 'Classroom',
    text: 'Live class routines, class notes, homework, and teacher coordination.',
    Icon: Landmark,
  },
  {
    title: 'Timetable',
    text: 'Build teacher-wise, class-wise, and room-wise schedules without confusion.',
    Icon: CalendarDays,
  },
  {
    title: 'Assignments',
    text: 'Create, collect, review, and report assignment progress digitally.',
    Icon: MessageSquareText,
  },
];

export const whyItems = [
  {
    title: 'Tech Founders',
    text: 'Built by a team focused on education workflows, reliability, and simple daily use.',
  },
  {
    title: 'Fast Onboarding & Training',
    text: 'Your team can start quickly with guided setup and practical training support.',
  },
  {
    title: 'Data Privacy & Compliance',
    text: 'Role-based access, secure records, and disciplined handling of school data.',
  },
  {
    title: 'Dedicated Success Partner',
    text: 'A real support partner helps admin teams, teachers, and parents adopt smoothly.',
  },
  {
    title: 'No Lock-In. Pay Monthly',
    text: 'Flexible subscription options designed for schools of different sizes.',
  },
  {
    title: 'Trusted Across Campuses',
    text: 'Used by institutions for fee, learning, admissions, and communication workflows.',
  },
  {
    title: 'Fee Collection & Reconciliation',
    text: 'Clear online payment tracking with reports finance teams can understand quickly.',
  },
  {
    title: 'No-Code Customization',
    text: 'Configure modules, permissions, forms, and reports without developer dependency.',
  },
];

export const onboardingSteps = [
  {
    title: 'Book personalised demo',
    text: 'Tell us your school size, modules, and current process.',
  },
  {
    title: 'Get set up in 24 hours',
    text: 'We configure users, classes, fee heads, and access roles.',
  },
  {
    title: 'Go live & see results',
    text: 'Start collecting fees, sharing material, and managing daily operations.',
  },
  {
    title: 'Grow with support',
    text: 'Add more modules and improve workflows as your team gets comfortable.',
  },
];

export const reviews = [
  {
    name: 'Principal, Jaipur',
    text: 'Our fee reports and parent communication became much more organised after moving to this platform.',
  },
  {
    name: 'Admin Head, Kota',
    text: 'The dashboard gives our team quick visibility into admissions, dues, and student records.',
  },
  {
    name: 'Teacher, Udaipur',
    text: 'Assignments and study material are easier to share, and parents stay updated without repeated calls.',
  },
  {
    name: 'Parent of Class 8 Student',
    text: 'Fee payment and school updates are simple now. Everything important comes in one place.',
  },
  {
    name: 'Parent of Class 11 Student',
    text: 'I can check notices, assignments, and payment status without visiting the school office.',
  },
];

export const demoHighlights = [
  {
    title: 'Fee + payment setup',
    Icon: BadgeIndianRupee,
  },
  {
    title: 'LMS and parent app flow',
    Icon: Smartphone,
  },
  {
    title: 'Staff training plan',
    Icon: Users,
  },
   {
    title: 'info@aadishala.com',

    Icon:Users ,
  },
];

export const trustHighlights = [
  'ERP',
  'LMS',
  'Fee Management',
  'Admission CRM',
  'Parent App',
  'Reports',
  'Transport',
  'Attendance',
  'Security',
].map((label) => ({ label, Icon: ShieldCheck }));
