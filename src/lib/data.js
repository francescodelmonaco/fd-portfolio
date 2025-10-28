// Centralized shared data arrays
import { User, Code, Briefcase, Mail } from 'lucide-react';

// frontend icons
import javascriptIcon from '../assets/icons/javascript.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import reactIcon from '../assets/icons/react.svg';
import nextIcon from '../assets/icons/next.svg';
import bootstrapIcon from '../assets/icons/bootstrap.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';

// backend icons
import nodeIcon from '../assets/icons/node js.svg';
import expressIcon from '../assets/icons/express.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import supabaseIcon from '../assets/icons/supabase.svg';
import phpIcon from '../assets/icons/php.svg';
import laravelIcon from '../assets/icons/laravel.svg';
import postgresqlIcon from '../assets/icons/postgresql.svg';

// Projects data
export const projects = [
    {
        title: 'Convenzioni Poliambulanza',
        description: 'PWA pensata per semplificare la ricerca delle attività convenzionate con l’Istituto Ospedaliero Poliambulanza di Brescia.',
        tech: ['React', 'Tailwind', 'Supabase'],
        github: 'https://github.com/francescodelmonaco/pa-conventions',
        type: 'Frontend + Backend'
    },
    {
        title: 'Travel Journal',
        description: 'Applicazione full-stack per la gestione di un diario di viaggio con autenticazione utenti e database.',
        tech: ['React', 'Tailwind', 'Supabase'],
        github: 'https://github.com/francescodelmonaco/travel-journal-app',
        type: 'Frontend + Backend'
    },
    {
        title: 'VinylMatch',
        description: 'Piattaforma frontend per la ricerca e il matching di vinili musicali con interfaccia moderna.',
        tech: ['React', 'Bootstrap'],
        github: 'https://github.com/francescodelmonaco/progetto-finale-spec-frontend-front',
        type: 'Frontend'
    },
    {
        title: 'Kick Shop',
        description: 'E-commerce completo per la vendita di scarpe con gestione carrello e sistema di pagamento.',
        tech: ['React', 'Node.js', 'Express', 'MySQL'],
        github: 'https://github.com/francescodelmonaco/kick-shop',
        type: 'Frontend + Backend'
    },
    {
        title: 'Task Manager',
        description: 'Applicazione React per la gestione di task e progetti con funzionalità di organizzazione.',
        tech: ['React', 'CSS'],
        github: 'https://github.com/francescodelmonaco/ex-react-task-manager',
        type: 'Frontend'
    }
];

// Navbar menu items
export const menuItems = [
    { id: 'about', label: 'CHI SONO', icon: User },
    { id: 'skills', label: 'SKILLS', icon: Code },
    { id: 'projects', label: 'PROGETTI', icon: Briefcase },
    { id: 'contact', label: 'CONTATTI', icon: Mail },
];

export const frontendSkills = [
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Next.js', icon: nextIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
];

export const backendSkills = [
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Express', icon: expressIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Supabase', icon: supabaseIcon },
    { name: 'PHP', icon: phpIcon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon },
];