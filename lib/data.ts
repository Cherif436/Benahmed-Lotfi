import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaCss3Alt, FaJsSquare, FaNodeJs, FaPhp, FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { SiVisualstudio, SiNextdotjs, SiMysql, SiMongodb, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'
import { BsFillBootstrapFill, BsFillHouseDoorFill } from 'react-icons/bs';
import emploi from "@/public/emploi.png";
import blog from "@/public/blog.png";
import blog2 from "@/public/blog2.png";
import ecomnextjs from "@/public/ecommnextjs.png";
import ecom from "@/public/ecom.png";
import socialN from "@/public/socialN.png";
import rent from "@/public/louer.png";
import portfolio from "@/public/portfoliolotfi.png";

export const links = [
  {
    name: React.createElement(BsFillHouseDoorFill),
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Formations",
    hash: "#formation",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },  
  {
    name: "Portfolio",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const formation = [
  {
    title: "Développeur web",
    location: "Institut Paul Hankar, Bruxelles",
    description:
      "Apprentissage des principaux langages du Web (HTML, CSS, Javascript et PHP) avec CMS (Wordpress)",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Etudiant 3éme bachelier en gestion de ressource humaine",
    location: "EPHEC, Bruxelles",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - présent",
  },
] as const;

export const experiencesData = [
  {
    title: "Support IT",
    location: "VENTHONE SA, Bruxelles",
    description:
      "Support informatique pour les utilisateurs la commission européenne pour les applications(software) que pour le hardware,mise à jour de la documentation/base de données",
    icon: React.createElement(CgWorkAlt),
    date: "décembre 2022 - présent",
  },
  {
    title: "Développeur web front end",
    location: "BKATECHNOLOGY",
    description:
      "Développement de sites internet, développement coté front html ‐ css ‐ javascript et coté back php ‐ MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "novembre 2018 - février 2019",
  }
] as const;

export const projectsData = [
  {
    title: "Blog",
    description:
      "Blog publication d'articles actualité, divertissement, voyage, bien-être, sport et lifestyle. Développé en MERN stack",
    tags: [React.createElement(FaReact), React.createElement(SiTypescript), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress), React.createElement(BsFillBootstrapFill)],
    url:"https://github.com/Cherif436",
    imageUrl: blog2,
  },
  {
    title: "E-commerce",
    description:
      "Développement d'un site d'e-commerce vente de vêtements.",
    tags: [React.createElement(SiNextdotjs), React.createElement(FaNodeJs), React.createElement(SiExpress), React.createElement(SiMongodb), React.createElement(SiTailwindcss)],
    url:"https://github.com/Cherif436/projet_ecommerce_nextjs",
    imageUrl: ecomnextjs,
  },
  {
    title: "Réseau social",
    description:
      "Réalisation d'un réseau social personnel développé en MERN stack.",
    tags: [React.createElement(FaReact), React.createElement(SiTypescript), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: socialN,
  },
  {
    title: "Portail emploi",
    description:
      "Réalisation d'un site plateforme de recrutement (projet épreuve intégrée).",
    tags: [React.createElement(FaPhp), React.createElement(SiMysql), React.createElement(BsFillBootstrapFill)],
    url:"https://github.com/Cherif436",
    imageUrl: emploi,
  },
  {
    title: "E-commerce",
    description:
      "Développement d'un site d'e-commerce d'appareils électroniques.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: ecom,
  },
  {
    title: "Blog",
    description:
      "Réalisation d'un blog à publier des articles personnels à l'aide de react, node, express et mongo.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: blog,
  },
  {
    title: "Application web",
    description:
      "Réalisation d'un site pour une agence de location de voiture.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: rent,
  },
  {
    title: "Portfolio",
    description:
      "Portfolio version 1",
    tags: [React.createElement(SiNextdotjs), React.createElement(SiTypescript), React.createElement(SiTailwindcss)],
    url:"https://lotfi.vercel.app/",
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",  
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "SQL",
  "Redux",
  "Express",
] as const;

export const languages = [
  {
    name: 'HTML',
    level: '84%',
    Icon: AiFillHtml5
  },
  {
    name: 'CSS',
    level: '82%',
    Icon: FaCss3Alt
  },
  {
    name: 'Bootstrap',
    level: '80%',
    Icon: BsFillBootstrapFill
  },
  {
    name: 'Tailwind',
    level: '60%',
    Icon: SiTailwindcss
  },
  {
    name: 'Javascipt',
    level: '75%',
    Icon: FaJsSquare
  },
  {
    name: 'React js',
    level: '71%',
    Icon: FaReact
  },
  {
    name: 'Next js',
    level: '58%',
    Icon: SiNextdotjs
  },
  {
    name: 'Typescript',
    level: '52%',
    Icon: SiTypescript
  },
  {
    name: 'Node js',
    level: '67%',
    Icon: FaNodeJs
  }, 
  {
    name: 'Express',
    level: '67%',
    Icon: SiExpress
  }, 
] as const;

export const tools = [
  {
    Icon: SiVisualstudio,
    name: 'VS Code',
    level: '75%',
  },
  {
    Icon: AiFillGithub,
    name: 'Git',
    level: '61%',
  }
] as const;

export const cms = [
  {
    Icon: FaWordpress,
    name: 'Wordpress',
    level: '45%',
  }
] as const;

export const database = [
  {
    Icon: SiMysql,
    name: 'MySQL',
    level: '70%',
  },
  {
    Icon: SiMongodb,
    name: 'MongoDB',
    level: '60%',
  }
] as const;
