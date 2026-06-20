import { Code, Layout, Server, Database, Wrench, Mail, Phone, Linkedin, Download } from 'lucide-react';
import {
    SiPython, SiJavascript,
    SiReact, SiNextdotjs, SiHtml5, SiCss,
    SiNodedotjs, SiSupabase, SiFastify,
    SiMysql, SiMongodb, SiDrizzle,
    SiGit, SiGithub, SiVercel, SiKoyeb, SiRender
} from 'react-icons/si';
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

export const contactInfo = {
    email: 'devanathan0824@gmail.com',
    phone: '+919003439423',
    linkedin: 'https://www.linkedin.com/in/devanathan-tg',
    github: 'https://github.com/DEVANATHAN-TG',
    resume: '/RESUME_DEVANATHAN.pdf'
};
