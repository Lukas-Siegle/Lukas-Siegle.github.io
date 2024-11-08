import type { Technology } from "./types";



export const education = [
    {
        name: 'University entrance qualification',
        from: '2013',
        to: '2021',
        where: 'Limes Gymnasium Welzheim'
    },
    {
        name: 'Cyber Security Bsc.',
        from: '2021',
        to: 'Now',
        where: 'Mannheim University of Applied Sciences'
    }
];

export const experience = [
    { name: 'Sys Admin', from: 'May 2023', to: 'November 2024', where: 'bitExpert' },
    // { name: 'Cyber Security Analyst', from: 'December 2023', to: 'Now', where: 'Bilfinger' }
];

export const profile = {
    name: 'Lukas Siegle',
    occupation: 'Cyber Security Student',
    location: 'Mannheim, Germany',
    // Months go from 0 - 11
    birthday: new Date(2003, 6, 7, 13, 37, 0), 

    github: 'https://github.com/Lukas-Siegle',
    linkedin: 'https://www.linkedin.com/in/lukas-siegle-57628b290/',
    about: `My name is Lukas Siegle, and I am currently pursuing a Bachelor's degree in Cyber Security
                at Hochschule Mannheim, where I am in my 7th semester.`,
    interests: `In addition to my studies in Computer Science with a focus on Cyber Security, I enjoy
                various sports, including Muay Thai, powerlifting, and bodybuilding. I also love traveling
                and enjoying nature.`
};

export const technologies_current: Technology[] = [
    {
        name: 'Typescript',
        page: 'https://www.typescriptlang.org/',
        img: 'typescript.webp'
    },
    {
        name: 'Golang',
        page: 'https://go.dev/',
        img: 'go.png'
    },
    {
        name: 'Docker',
        page: 'https://www.docker.com/',
        img: 'docker.webp'
    },
    {
        name: 'Traefik',
        page: 'https://traefik.io/traefik/',
        img: 'traefik.png'
    },
    {
        name: 'Hashicorp Nomad',
        page: 'https://www.nomadproject.io/',
        img: 'nomad.png'
    },
    {
        name: 'Hashicorp Boundary',
        page: 'https://www.boundaryproject.io//',
        img: 'boundary.png'
    },
    {
        name: 'Hashicorp Vault',
        page: 'https://www.nomadproject.io/',
        img: 'vault.svg'
    },
    {
        name: 'Sveltekit',
        page: 'https://svelte.dev/',
        img: 'sveltekit.png'
    },
    {
        name: 'AWS',
        page: 'https://aws.amazon.com/de/',
        img: 'aws.png'
    },
    {
        name: 'Ionos',
        page: 'https://www.ionos.de/',
        img: 'ionos.svg'
    },
    {
        name: 'git',
        page: 'https://git-scm.com/',
        img: 'git.png'
    },
    {
        name: 'node',
        page: 'https://nodejs.org/en',
        img: 'node.png'
    },
    {
        name: 'tailwindcss',
        page: 'https://tailwindcss.com/',
        img: 'tailwind.png'
    },
    {
        name: 'Prometheus',
        page: 'https://prometheus.io/',
        img: 'prometheus.png'
    },
    {
        name: 'Grafana',
        page: 'https://grafana.com/',
        img: 'grafana.svg'
    },
    {
        name: 'PostgreSQL',
        page: 'https://www.postgresql.org/',
        img: 'postgresql.png'
    }
];

export const technologies_past: Technology[] = [
    {
        name: 'Python',
        page: 'https://www.python.org/',
        img: 'python.png'
    },
    {
        name: 'Java',
        page: 'https://www.java.com/de/',
        img: 'java.png'
    },
    {
        name: 'Nginx',
        page: 'https://nginx.org/en/',
        img: 'nginx.png'
    },
    {
        name: 'Terraform',
        page: 'https://www.terraform.io/',
        img: 'terraform.png'
    },
    {
        name: 'fluentbit',
        page: 'https://fluentbit.io/',
        img: 'fluentbit.webp'
    },
    {
        name: 'Nmap',
        page: 'https://nmap.org/',
        img: 'nmap.png'
    },
    {
        name: 'SQLMap',
        page: 'https://sqlmap.org/',
        img: 'sqlmap.png'
    },
    {
        name: 'Zap',
        page: 'https://www.zaproxy.org/',
        img: 'zap.png'
    },
    {
        name: 'Burpsuite',
        page: 'https://portswigger.net/burp',
        img: 'burp.webp'
    }
];