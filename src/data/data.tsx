const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skillsSwiper = [
  { name: "TypeScript", icon: `${ICON_BASE}/typescript/typescript-original.svg` },
  { name: "JavaScript", icon: `${ICON_BASE}/javascript/javascript-original.svg` },
  { name: "React", icon: `${ICON_BASE}/react/react-original.svg` },
  { name: "Next.js", icon: `${ICON_BASE}/nextjs/nextjs-original.svg` },
  { name: "Node.js", icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
  { name: "C#", icon: `${ICON_BASE}/csharp/csharp-original.svg` },
  { name: "C++", icon: `${ICON_BASE}/cplusplus/cplusplus-original.svg` },
  { name: "Python", icon: `${ICON_BASE}/python/python-original.svg` },
  { name: "HTML5", icon: `${ICON_BASE}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${ICON_BASE}/css3/css3-original.svg` },
  { name: "Tailwind", icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg` },
  { name: "Bootstrap", icon: `${ICON_BASE}/bootstrap/bootstrap-original.svg` },
  { name: "PostgreSQL", icon: `${ICON_BASE}/postgresql/postgresql-original.svg` },
  { name: "MySQL", icon: `${ICON_BASE}/mysql/mysql-original.svg` },
  //   { name: "Docker", icon: `${ICON_BASE}/docker/docker-original.svg` },
  //   { name: "Kubernetes", icon: `${ICON_BASE}/kubernetes/kubernetes-plain.svg` },
];

export const services = [
  { tech: "Frameworks & Libraries", skills: ['React', 'Next.js'], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom-icon lucide-atom"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>` },
  { tech: "Languages", skills: ['HTML', 'JavaScript', 'TypeeSccript'], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>` },
  { tech: "Styling", skills: ['Tailwind CSS', 'CSS', 'Responsive Design', 'Bootstrap'], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>` },
  { tech: "Tooling", skills: ['Vite', 'Git', 'REST APIs'], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer-icon lucide-hammer"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg>` },
];

export const contactArr = [
  {
    contactType: "Email", value: "ruaafaroun@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" strokelinecap="round" strokelinejoin="round" classname="lucide lucide-mail"> <rect width="20" height="16" x="2" y="4" rx="2"> </rect>
        <path path="" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"> </path>
    </svg>`,
    href: "https://mail.google.com/mail/u/0/?hl=en-GB&amp;tf=cm&amp;fs=1&amp;to=ruaafaroun@gmail.com"
  },
  {
    contactType: "LinkedIn", value: "Rua'a Faroun",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="32" height="32" strokewidth="2" strokelinecap="round" strokelinejoin="round" classname="lucide lucide-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                            </svg>`,
    href: "https://www.linkedin.com/in/rua-faroun/"
  },
  {
    contactType: "GitHub", value: "Ruaa-Maher-Faroun",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" strokelinecap="round" stroklinejoin="round" classname="lucide lucide-github h-4 w-4"> <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
    href: "https://github.com/Ruaa-Maher-Faroun"
  }
];

export const skills = [
  { skill: 'Languages', skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'C++', 'SQL'] },
  { skill: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
  { skill: 'Backend', skills: ['Node.js', 'Express', 'REST APIs'] },
  { skill: 'Database', skills: ['PostgreSQL', 'SQLite', 'SQL Server'] },
  { skill: 'Tools', skills: ['Git', 'GitHub', 'Linux'] },
];

import ecommercee from '../assets/projects-imgs/e-commerfrontend.png';
import netflix from '../assets/projects-imgs/netflix-clone.png';
import aiRevolution from '../assets/projects-imgs/ai-revolution.png';
import CRUDAPP from '../assets/projects-imgs/crud-app.webp';
export const projects = [
  {title:"E-Commerce Frontend",tectStack:['Bootstrap','HTML & CSS', 'JavaScript'],
    tags:['Responsive', 'Bootstrap','Frontend']
    ,image:ecommercee,liveDemo:"https://ruaa-maher-faroun.github.io/FinalProject-Ecommerce-KA/",github:"https://github.com/Ruaa-Maher-Faroun/FinalProject-Ecommerce-KA"},
  
  {title:"AI Revolution",tectStack:['React','Tailwind CSS' ,'TypeScript'],
    tags:['Responsive', 'React Vite']
    ,image:netflix,liveDemo:"https://ai-revolution-landingpage.netlify.app/",github:"https://github.com/Ruaa-Maher-Faroun/ai-revolution"},
  
  
    {title:"Netflix Clone",tectStack:['HTML & CSS','React'],
    tags:['CRUD', 'Clone','Frontend','React'],
    image:CRUDAPP,liveDemo:"https://nfx-xln-roaafaroun.netlify.app/",github:"https://github.com/Ruaa-Maher-Faroun/Netflix-Clone"},
  
  
    {title:"CRUD APP",tectStack:['JavaScript','Bootstrap','HTML & CSS'],
    tags:['Responsive', 'CRUD','Frontend'],image:aiRevolution,
    liveDemo:"https://ruaa-maher-faroun.github.io/CRUDApp/",github:"https://github.com/Ruaa-Maher-Faroun/CRUDApp"},
];