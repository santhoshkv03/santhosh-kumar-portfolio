import type { NavItem, Profile } from '@/types/profile';

/**
 * Single source of truth for all portfolio copy.
 * Edit this file to update the site; components never hard-code content.
 */
export const profile: Profile = {
  name: 'Santhosh Kumar V',
  initials: 'SK',
  role: 'Senior Digital Engineer',
  location: 'Bangalore, India',
  email: 'santhoshkv298@gmail.com',
  phone: '+91 86608 84515',
  phoneHref: 'tel:+918660884515',
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Santhosh-Kumar-V-Resume.pdf`,
  headline: 'I build front-end systems that teams can reuse and trust.',
  intro:
    'Senior Digital Engineer with 5.8 years of experience in React and TypeScript, delivering accessible, high-performance enterprise web applications, reusable component libraries, and AI-assisted migrations of legacy platforms.',
  description:
    'Portfolio of Santhosh Kumar V, a Senior Digital Engineer in Bangalore with 5.8 years of experience building accessible, high-performance React and TypeScript applications.',
  specSheet: [
    { label: 'role', value: 'Senior Digital Engineer' },
    { label: 'experience', value: '5.8 years' },
    { label: 'location', value: 'Bangalore, India' },
    {
      label: 'frontend',
      value: ['React', 'TypeScript', 'JavaScript (ES6+)', 'SCSS', 'Redux'],
      highlight: true,
    },
    {
      label: 'backend',
      value: ['REST APIs', 'GraphQL', 'Node.js', 'Express.js'],
      highlight: true,
    },
    { label: 'focus', value: ['Component libraries', 'Accessibility', 'Performance'] },
    { label: 'currently', value: 'Sonata Software' },
  ],
  summary: [
    'I have spent 5.8 years building responsive, accessible interfaces with React, TypeScript, JavaScript (ES6+), HTML5 and CSS3/SCSS. My work ranges from data-heavy compliance software to high-traffic gaming front ends and a full legacy-to-React migration.',
    'I am strongest at pixel-accurate implementation from Figma designs, reusable component libraries, Redux state management, REST and GraphQL integration, and moving legacy applications to modern React. I am hands-on with generative AI tools (Claude Code, Copilot, MCP) and work closely with designers, backend engineers and product teams.',
  ],
  principles: [
    {
      title: 'Reusable by default',
      text: 'Component libraries for forms, data widgets and game UI cut feature development time by 60% at CodeCraft and from weeks to days at Juego Studios.',
    },
    {
      title: 'Fast where it counts',
      text: 'Virtualized rendering, memoization, debounced input and response caching keep data-heavy screens responsive. One table redesign cut render cycles by 70%.',
    },
    {
      title: 'AI-assisted, human-verified',
      text: 'Claude Code, Copilot and MCP tools speed up delivery. Every generated change is reviewed against business requirements before it ships.',
    },
  ],
  skills: [
    {
      title: 'Core front end',
      items: [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'HTML5',
        'CSS3',
        'SCSS',
        'Responsive design',
        'Accessibility',
        'Redux',
      ],
    },
    {
      title: 'Components and performance',
      items: [
        'Reusable component libraries',
        'Figma-to-code (Figma MCP)',
        'Performance optimization',
        'Code splitting',
        'Lazy loading',
        'Caching',
        'Virtualized rendering',
        'React.memo',
      ],
    },
    {
      title: 'APIs, testing and delivery',
      items: [
        'REST APIs',
        'GraphQL',
        'Unit testing',
        'Playwright MCP',
        'Git',
        'GitHub',
        'CI/CD',
        'Docker',
        'Webpack',
        'Code review',
        'Agile/Scrum',
      ],
    },
    {
      title: 'Generative AI and tooling',
      items: [
        'Claude Code',
        'GitHub Copilot',
        'MCP (Figma, Playwright)',
        'Spec-driven development',
        'GitHub Spec Kit',
        'Human-in-the-loop validation',
      ],
    },
    { title: 'Working knowledge', note: 'Exposure', items: ['Zustand', 'Node.js', 'Express.js'] },
    {
      title: 'Currently learning',
      note: 'In progress',
      items: ['Vite', 'Angular', 'React Native'],
    },
  ],
  experience: [
    {
      id: 'sonata',
      title: 'Senior Digital Engineer',
      company: 'Sonata Software',
      location: 'Bangalore',
      period: 'Apr 2026 to Present',
      current: true,
      project: {
        name: 'Applied Insurance Platform Migration',
        summary: 'AI-driven migration of a legacy insurance platform from WinForms to React.',
      },
      metrics: [
        { value: '120+', label: 'WinForms screens converted to React' },
        { value: '10 to 5 days', label: 'average migration time per screen' },
        { value: '40%', label: 'less migration time from a shared spec' },
        { value: '30%', label: 'faster defect detection and triage' },
      ],
      highlights: [
        'Lead a fully AI-driven front-end migration, using Claude Code to convert 120+ WinForms screens to React.',
        'Architected a reusable, spec-driven workflow in which one common spec is the single source of truth for Claude Code, standardizing conversion across screens and reducing rework.',
        'Translated legacy WinForms logic into modular, maintainable React and SCSS components.',
        'Integrated Figma MCP so design specs flow directly into Claude Code, giving pixel-accurate, responsive styling across 40+ components.',
        'Used Playwright MCP for automated browser-based testing and debugging during the migration.',
        'Reviewed and refined all AI-generated code through human-in-the-loop validation, keeping it accurate and aligned with business requirements.',
      ],
      stack: [
        'React',
        'TypeScript',
        'HTML5',
        'CSS3',
        'SCSS',
        'Claude Code',
        'MCP',
        'GitHub Spec Kit',
        'REST APIs',
        'Agile',
      ],
    },
    {
      id: 'codecraft',
      title: 'Senior Software Engineer, Frontend',
      company: 'CodeCraft Technologies',
      location: 'Bangalore',
      period: 'Sep 2023 to Mar 2026',
      project: {
        name: 'iGoalZero',
        summary:
          'Enterprise EHS/ESG compliance platform serving 100+ energy and manufacturing clients.',
      },
      metrics: [
        { value: '70%', label: 'fewer render cycles during bulk data entry' },
        { value: '60%', label: 'less feature development time' },
        { value: '50+', label: 'business rules in a low-code logic engine' },
      ],
      highlights: [
        'Owned key UI modules end to end, including a virtualized rendering engine that keeps interaction smooth across hundreds of data rows.',
        'Redesigned the dynamic table architecture with React.memo, debounced input handlers and refactored state management.',
        'Built reusable component libraries for complex form elements and data widgets, used across engineering teams.',
        'Engineered a rule-based conditional logic system (low code) supporting validation chains, field dependencies and automated workflows.',
        'Cached API responses to remove redundant network requests and improve responsiveness on data-heavy screens.',
        'Ran code reviews and upheld shared component patterns and coding standards to keep the codebase maintainable.',
        'Debugged and owned production issues end to end for enterprise clients.',
      ],
      stack: [
        'React',
        'JavaScript',
        'TypeScript',
        'Redux',
        'Webpack',
        'REST APIs',
        'GraphQL',
        'Git',
        'Copilot',
      ],
    },
    {
      id: 'juego',
      title: 'Software Engineer, Frontend',
      company: 'Juego Studios',
      location: 'Bangalore',
      period: 'Jan 2021 to Sep 2023',
      project: {
        name: 'Flipkart gaming platform',
        summary: 'High-traffic gaming platform front end supporting millions of users.',
      },
      metrics: [
        { value: 'Weeks to days', label: 'feature delivery with the widget library' },
        { value: 'Millions', label: 'of users on the platform' },
      ],
      highlights: [
        'Built mobile-first game UI components with React and game engines (Cocos, Phaser.js), handling real-time player interactions and leaderboard updates.',
        'Created a reusable library of game widgets (timers, scoreboards, power-ups).',
        'Worked with game designers and the backend team to integrate REST APIs for player data, in-game purchases and session management.',
        'Fixed critical production issues affecting gameplay, reducing the crash rate and improving player retention.',
      ],
      stack: [
        'React',
        'Cocos',
        'Phaser.js',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'REST APIs',
        'Agile',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'KVG College of Engineering',
    period: '2016 to 2020',
  },
  // Profiles listed here appear in the hero, the Contact section and the structured data.
  socials: [
    { label: 'GitHub', href: 'https://github.com/santhoshkv03' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/santhosh-kumar-v20/' },
  ],
};

export const navItems: readonly NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
