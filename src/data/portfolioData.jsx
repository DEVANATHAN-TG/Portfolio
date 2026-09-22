import { Code, Layout, Server, Database, Wrench, Palette } from 'lucide-react';
import {
    SiPython, SiJavascript,
    SiReact, SiNextdotjs, SiHtml5, SiCss,
    SiNodedotjs, SiSupabase, SiFastify,
    SiMysql, SiMongodb, SiDrizzle,
    SiGit, SiGithub, SiVercel, SiKoyeb, SiRender,
    SiFigma, SiCanva, SiFramer
} from 'react-icons/si';
import { TbBrandAdobe } from 'react-icons/tb';
import React from 'react';

export const skillCategories = [
    {
        name: 'Languages',
        icon: <Code size={40} strokeWidth={1.5} />,
        skills: [
            { name: 'Python', icon: <SiPython /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
        ]
    },
    {
        name: 'Frontend',
        icon: <Layout size={40} strokeWidth={1.5} />,
        skills: [
            { name: 'React', icon: <SiReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'HTML', icon: <SiHtml5 /> },
            { name: 'CSS', icon: <SiCss /> },
        ]
    },
    {
        name: 'Backend',
        icon: <Server size={40} strokeWidth={1.5} />,
        skills: [
            { name: 'Node', icon: <SiNodedotjs /> },
            { name: 'Supabase', icon: <SiSupabase /> },
            { name: 'Fastify', icon: <SiFastify /> },
        ]
    },
    {
        name: 'Database & ORM',
        icon: <Database size={40} strokeWidth={1.5} />,
        skills: [
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Drizzle ORM', icon: <SiDrizzle /> },
        ]
    },
    {
        name: 'UI / UX Design',
        icon: <Palette size={40} strokeWidth={1.5} />,
        skills: [
            { name: 'Figma', icon: <SiFigma /> },
            { name: 'Canva', icon: <SiCanva /> },
            { name: 'Adobe Express', icon: <TbBrandAdobe /> },
            { name: 'Framer', icon: <SiFramer /> },
        ]
    },
    {
        name: "Dev's Tools",
        icon: <Wrench size={40} strokeWidth={1.5} />,
        skills: [
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub', icon: <SiGithub /> },
            { name: 'Vercel', icon: <SiVercel /> },
            { name: 'Koyeb', icon: <SiKoyeb /> },
            { name: 'Render', icon: <SiRender /> },
        ]
    }
];

export const projects = [
    {
        title: 'Scheme Connect',
        category: 'Full Stack & ML',
        year: '2026',
        description: 'A full-stack platform that connects citizens with relevant government schemes using ML-powered eligibility matching. Built with React, Node.js, and machine learning models to analyse user profiles and recommend applicable welfare programs.',
        link: 'https://github.com/DEVANATHAN-TG/SchemeConnect'
    },
    {
        title: 'Portfolio',
        category: 'AI & Prompt Engineering',
        year: '2026',
        description: 'A modern, dark-themed personal portfolio website built with React, Vite, and Framer Motion. Features an interactive neural network background, smooth scroll animations, and a fully responsive design crafted through prompt engineering.',
        link: 'https://github.com/DEVANATHAN-TG'
    },
];

export const experiences = [
    {
        role: 'UX/UI Designer Intern',
        company: 'Duhzine IT Solutions Pvt Ltd',
        period: 'May 2026 – Aug 2026',
        badge: 'Internship',
        workplace: 'Remote',
        location: 'Puducherry, India',
        grade: 'Grade A',
        description: 'Owned the end-to-end UI/UX lifecycle for multiple client web platforms, established design system foundations, and created digital brand media.',
        highlights: [
            'Owned the end-to-end UI/UX process for multiple client web projects, from requirements gathering through wireframes, interactive prototypes, and final visual designs in Figma & Framer.',
            'Created and maintained a modular, reusable design system adopted across client projects, reducing design-to-development turnaround and standardizing team handoffs.',
            'Leveraged generative AI tools to script and produce client-requested promotional video content, expanding agency delivery beyond conventional design boundaries.',
            'Completed the internship program with a top-tier "Grade A" performance rating.'
        ],
        technologies: ['Figma', 'Framer', 'Design Systems', 'Wireframing', 'Prototyping', 'AI Video Generation', 'UI/UX']
    },
    {
        role: 'InPlant Trainee',
        company: 'Lenovo India Private Limited',
        period: 'September 2023',
        badge: 'Trainee',
        workplace: 'Onsite',
        location: 'Puducherry, India',
        grade: null,
        description: 'Conducted rigorous hardware quality assurance and defect inspection processes across active desktop manufacturing batches.',
        highlights: [
            'Performed hardware quality testing and defect inspection on desktop systems across assembly batches, verifying full compliance with global manufacturing standards.',
            'Documented inspection anomalies to improve traceability and quality verification across production lines.'
        ],
        technologies: ['Quality Assurance', 'Hardware Inspection', 'Compliance Standards', 'Assembly Batch Testing', 'Traceability']
    }
];

export const certifications = [
    {
        title: 'Machine Learning for Core Engineering Disciplines',
        issuer: 'NPTEL',
        category: 'AI & Machine Learning'
    },
    {
        title: 'Data Analytics with Python',
        issuer: 'NPTEL',
        category: 'Data Science & Python'
    }
];

export const contactInfo = {
    email: 'devanathan0824@gmail.com',
    phone: '+919003439423',
    linkedin: 'https://www.linkedin.com/in/devanathan-tg',
    github: 'https://github.com/DEVANATHAN-TG',
    resume: '/DEVANATHAN T - Resume.pdf'
};
