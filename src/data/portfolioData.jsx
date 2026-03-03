import { Atom, Cpu, Github, Terminal, Clapperboard, Palette, Mail, Phone, Linkedin, Download } from 'lucide-react';
import React from 'react';

export const skills = [
    {
        name: 'React',
        desc: 'Modern UI/UX Development with Hooks, Redux, and Framer Motion.',
        icon: <Atom size={40} strokeWidth={1.5} />
    },
    {
        name: 'AI / ML',
        desc: 'Predictive modeling, Neural Networks, and Data Analysis pipelines.',
        icon: <Cpu size={40} strokeWidth={1.5} />
    },
    {
        name: 'Git / GitHub',
        desc: 'Advanced Version Control, CI/CD, and Collaborative Workflows.',
        icon: <Github size={40} strokeWidth={1.5} />
    },
    {
        name: 'Prompt Engineering',
        desc: 'Optimizing Large Language Models through Strategic Input Design.',
        icon: <Terminal size={40} strokeWidth={1.5} />
    },
    {
        name: 'Mobile Video Editing',
        desc: 'Engaging content creation and visual storytelling (Beginner level).',
        icon: <Clapperboard size={40} strokeWidth={1.5} />
    },
    {
        name: 'Logo Designer',
        desc: 'Creating recognizable brand identities and minimalist vector graphics.',
        icon: <Palette size={40} strokeWidth={1.5} />
    }
];

export const projects = [
    {
        title: 'CrowdFunding',
        category: 'Blockchain',
        year: '2024',
        link: 'https://github.com/DEVANATHAN-TG'
    },
    {
        title: 'Portfolio',
        category: 'Prompt Engineering',
        year: '2026',
        link: 'https://github.com/DEVANATHAN-TG'
    },
    {
        title: 'To-Do List',
        category: 'React',
        year: '2026',
        link: 'https://github.com/DEVANATHAN-TG/To-do-list'
    }
];

export const contactInfo = {
    email: 'devanathan0824@gmail.com',
    phone: '+919003439423',
    linkedin: 'https://www.linkedin.com/in/devanathan-tg',
    github: 'https://github.com/DEVANATHAN-TG',
    resume: 'RESUME_DEVANATHAN.pdf'
};
