import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/DjSantech",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/santiago-guevara-a15330283/",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:santiguevara20161@gmail.com",
    },
    {
        id: 4,
        logo: <FaWhatsapp  size={30} strokeWidth={1} />,
        src: "https://wa.me/3135995612",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Database",
        subtitle: "TurboCars",
        description: "I created a website which is linked to a database in mysql for a company that needed to manage its inventory.",
        date: "Oct 2024 ",
    },
    {
        id: 3,
        title: "Freelance Web Developer",
        subtitle: "programmer",
        description: "As a freelance web developer, I have designed, developed and managed multiple websites tailored to the specific needs of various clients, enhancing their online presence.",
        date: "July 2024",
    },
    {
        id: 2,
        title: "implementation of different games",
        subtitle: "several companies",
        description: "Implement different games such as chess, gallows, memory games for business activities.",
        date: "Feb 2024",
    },
    {
        id: 4,
        title: "Bootcamp FullStacks ll",
        subtitle: "technological university of pereira",
        description: "I was in a web-oriented programming camp where I learned different technologies such as HTML, CSS, JAVASCRIPT, and different frameworks such as React",
        date: "July 2023",
    },
    {
        id: 5,
        title: "University start",
        subtitle: "technological university of pereira",
        description: "I began studying my career as a systems and computing engineer, which I am still pursuing. ",
        date: "Feb 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Satisfied customers",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 50,
        text: "Completed projects",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 400,
        text: "Hours programming",
        lineRight: false,
        lineRightMobile: false,
    },
];  

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Developing a strong and consistent brand identity, including logo design, colors and visual elements",
    },
    {
        icon: <Pencil />,
        title: "web design",
        description: "Creative and professional design of intuitive and attractive web interfaces, focused on user experience",
    },
    {
        icon: <Computer />,
        title: "web development",
        description: "Design and development of custom websites, adapted to your needs",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creating compelling and engaging content that captures your audience's attention",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];