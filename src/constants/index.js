import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  Solidity,
  langchain,
  reactjs,
  django,
  tailwind,
  nodejs,
  mongodb,
  git,
  rust,
  docker,
  bidzzcoin,
  bws,
  solgenart,
  postgresql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Solidity",
    icon: Solidity,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "BidzzCoin",
    description:
      "A decentralized penny auction platform built on Bitcoin, featuring smart contract integration, staking mechanisms, and governance features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Actix-web",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: bidzzcoin,
    source_code_link: "https://github.com/druti2k",
  },
  {
    name: "Behavioral Wallet Scoring System",
    description:
     "The Behavioral Wallet Scoring System is an AI-powered solution designed to analyze on-chain wallet behavior for fraud detection, risk assessment, and user pattern explanation. This project leverages advanced data science techniques, machine learning models, and blockchain technology to provide insights into wallet trustworthiness and transaction anomalies.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Fastapi",
        color: "green-text-gradient",
      },
      {
        name: "Langchain",
        color: "pink-text-gradient",
      },
    ],
    image: bws,
    source_code_link: "https://github.com/druti2k/Behavioral-Wallet-Scoring-System",
  },
  {
    name: "Solgenart",
    description:
      "This project is a full-stack decentralized application (dApp) that combines AI capabilities with image genarator functionality on the Solana blockchain.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Solana",
        color: "pink-text-gradient",
      },
    ],
    image: solgenart,
    source_code_link: "https://github.com/druti2k/ai_nFt",
  },
];

export { services, technologies, projects };