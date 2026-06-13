import { Code, Layout, Server, Database, Wrench, Mail, Phone, Linkedin, Download } from 'lucide-react';
import React from 'react';

export const skillCategories = [
    {
        name: 'Languages',
        icon: <Code size={40} strokeWidth={1.5} />,
        skills: ['Python', 'JavaScript']
    },
    {
        name: 'Frontend',
        icon: <Layout size={40} strokeWidth={1.5} />,
        skills: ['React', 'Next.js', 'HTML', 'CSS']
    },
    {
        name: 'Backend',
        icon: <Server size={40} strokeWidth={1.5} />,
        skills: ['Node', 'Supabase', 'Fastify']
    },
    {
        name: 'Database & ORM',
        icon: <Database size={40} strokeWidth={1.5} />,
        skills: ['MySQL', 'MongoDB', 'Drizzle ORM']
    },
    {
        name: "Dev's Tools",
        icon: <Wrench size={40} strokeWidth={1.5} />,
        skills: ['Git', 'GitHub', 'Vercel', 'Koyeb', 'Render']
    }
];

export const projects = [
    {
        title: 'Scheme Connect',
        category: 'Full Stack & ML',
        year: '2026',
        link: 'https://github.com/DEVANATHAN-TG/SchemeConnect'
    },
    {
        title: 'Portfolio',
        category: 'Prompt Engineering',
        year: '2026',
        link: 'https://github.com/DEVANATHAN-TG'
    },
];

export const contactInfo = {
    email: 'devanathan0824@gmail.com',
    phone: '+919003439423',
    linkedin: 'https://www.linkedin.com/in/devanathan-tg',
    github: 'https://github.com/DEVANATHAN-TG',
    resume: '/RESUME_DEVANATHAN.pdf'
};
