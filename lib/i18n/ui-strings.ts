import type { Locale } from "@/lib/types";

export const uiStrings = {
  es: {
    skipToContent: "Saltar al contenido principal",
    navbar: {
      ariaNav: "Navegación principal",
      contactar: "Contactar",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    languageBanner: {
      question: "¿Quieres ver esta página en inglés?",
      primary: "View in English",
      secondary: "Seguir en español",
      dismiss: "Cerrar aviso",
    },
    hero: {
      greetingPrefix: "Hola, soy",
      buildPrefix: "Construyo",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      scrollNext: "Ir a la siguiente sección",
    },
    about: {
      kicker: "Sobre mí",
      title: "Quién soy y qué busco",
      historyLabel: "Mi historia",
      historyText:
        "Mi camino en la tecnología comenzó por la curiosidad de entender cómo funcionan los productos digitales que usamos a diario. Al ingresar a Ingeniería de Sistemas en la UTP, descubrí que programar no es solo escribir código, sino la capacidad de materializar ideas y solucionar problemas reales mediante software bien estructurado. Me apasiona el desarrollo web porque me permite conectar la lógica abstracta del backend con experiencias de usuario intuitivas, rápidas y visualmente atractivas en el frontend. Sé programar el backend, conectar y modelar bases de datos, y aplicar seguridad web (autenticación, control de acceso y protección de credenciales) para que cada aplicación que construyo sea robusta de punta a punta.",
      lookingForLabel: "Qué busco",
      lookingForText:
        "Busco incorporarme a un equipo de tecnología dinámico y colaborativo en roles de Desarrollador Frontend o Fullstack (Junior). Me entusiasma la oportunidad de realizar mis prácticas profesionales o asumir mi primer empleo formal en empresas orientadas al desarrollo de productos digitales, SaaS o e-commerce, donde pueda aportar valor con mis bases técnicas y seguir madurando mis habilidades en desarrollo de software de alta calidad.",
      goalsLabel: "Mis objetivos",
      goalsText:
        "A corto plazo, mi meta es consolidar mi primera experiencia profesional en la industria de desarrollo, aportando activamente en la entrega de funcionalidades con React/Next.js y TypeScript. A mediano plazo, aspiro a graduarme como Ingeniero de Sistemas en la UTP, liderar iniciativas técnicas de arquitectura frontend y dominar herramientas de escalabilidad web y optimización de rendimiento en producción.",
      statsProjects: "Proyectos completados",
      statsTech: "Tecnologías",
      statsYears: "Años programando",
      systemsEngineering: "Ingeniería de Sistemas — Universidad Tecnológica de Pereira",
    },
    projects: {
      kicker: "Proyectos",
      title: "Cosas que he construido",
      description: "Una selección de proyectos reales, con el código y las demos disponibles para explorar.",
    },
    projectCard: {
      status: {
        finalizado: "Finalizado",
        "en-progreso": "En progreso",
        placeholder: "Próximamente",
      },
      toggleLabel: "Retos y aprendizajes",
      challengesLabel: "Retos:",
      learningsLabel: "Aprendizajes:",
      code: "Código",
      demo: "Demo",
      placeholderImage: "Agrega aquí una captura del proyecto",
      screenshotAlt: (title: string) => `Captura de pantalla del proyecto ${title}`,
    },
    techStack: {
      kicker: "Tecnologías",
      title: "Con qué trabajo",
      description: "Las herramientas que uso para pasar de una idea a un producto funcionando.",
      learningNow: "Aprendiendo ahora",
      levelAriaLabel: (level: number) => `Nivel de experiencia: ${level} de 5`,
    },
    experience: {
      kicker: "Experiencia",
      title: "Trayectoria práctica",
      description: "Proyectos freelance, colaboraciones y trabajo aplicado mientras avanzo en mi formación.",
      placeholderBadge: "Placeholder",
    },
    education: {
      kicker: "Educación",
      title: "Formación y certificaciones",
      placeholderBadge: "Placeholder",
    },
    process: {
      kicker: "Filosofía de trabajo",
      title: "Cómo trabajo",
    },
    testimonials: {
      kicker: "Recomendaciones",
      title: "Lo que dicen de mi trabajo",
      description: "Espacio reservado para recomendaciones reales de profesores, mentores o clientes.",
      placeholderBadge: "Placeholder",
    },
    faq: {
      kicker: "Preguntas frecuentes",
      title: "Lo que un reclutador quiere saber",
    },
    contact: {
      kicker: "Contacto",
      title: "Hablemos",
      description: "¿Tienes una oportunidad, una práctica o un proyecto en mente? Escríbeme.",
      nameLabel: "Nombre",
      emailLabel: "Tu correo",
      messageLabel: "Mensaje",
      sendButton: "Enviar mensaje",
      downloadCv: "Descargar CV",
    },
    footer: {
      builtWith: "Construido con Next.js y Tailwind CSS.",
      backToTop: "Volver arriba",
    },
  },
  en: {
    skipToContent: "Skip to main content",
    navbar: {
      ariaNav: "Main navigation",
      contactar: "Get in touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    languageBanner: {
      question: "Would you like to view this page in Spanish?",
      primary: "Ver en español",
      secondary: "Stay in English",
      dismiss: "Dismiss",
    },
    hero: {
      greetingPrefix: "Hi, I'm",
      buildPrefix: "I build",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      scrollNext: "Go to the next section",
    },
    about: {
      kicker: "About me",
      title: "Who I am and what I'm looking for",
      historyLabel: "My story",
      historyText:
        "My path into technology started with curiosity about how the digital products we use every day actually work. Studying Systems Engineering at UTP taught me that programming isn't just writing code, but the ability to turn ideas into reality and solve real problems through well-structured software. I love web development because it lets me connect the abstract logic of the backend with intuitive, fast, and visually polished user experiences on the frontend. I know how to program the backend, connect and model databases, and apply web security (authentication, access control, and credential protection) so every application I build is solid end to end.",
      lookingForLabel: "What I'm looking for",
      lookingForText:
        "I'm looking to join a dynamic, collaborative tech team as a Frontend or Fullstack Developer (Junior). I'm excited about the opportunity to do a professional internship or take on my first formal role at companies focused on digital products, SaaS, or e-commerce, where I can add value with my technical foundation and keep growing my skills in high-quality software development.",
      goalsLabel: "My goals",
      goalsText:
        "In the short term, my goal is to land my first professional experience in the industry, actively contributing to feature delivery with React/Next.js and TypeScript. In the medium term, I aim to graduate as a Systems Engineer from UTP, lead technical frontend architecture initiatives, and master web scalability and production performance optimization tools.",
      statsProjects: "Completed projects",
      statsTech: "Technologies",
      statsYears: "Years coding",
      systemsEngineering: "Systems Engineering — Universidad Tecnológica de Pereira",
    },
    projects: {
      kicker: "Projects",
      title: "Things I've built",
      description: "A selection of real projects, with code and live demos available to explore.",
    },
    projectCard: {
      status: {
        finalizado: "Completed",
        "en-progreso": "In progress",
        placeholder: "Coming soon",
      },
      toggleLabel: "Challenges and learnings",
      challengesLabel: "Challenges:",
      learningsLabel: "Learnings:",
      code: "Code",
      demo: "Demo",
      placeholderImage: "Add a screenshot of the project here",
      screenshotAlt: (title: string) => `Screenshot of the ${title} project`,
    },
    techStack: {
      kicker: "Tech Stack",
      title: "What I work with",
      description: "The tools I use to take an idea from concept to a working product.",
      learningNow: "Currently learning",
      levelAriaLabel: (level: number) => `Skill level: ${level} of 5`,
    },
    experience: {
      kicker: "Experience",
      title: "Practical track record",
      description: "Freelance projects, collaborations, and applied work as I advance in my studies.",
      placeholderBadge: "Placeholder",
    },
    education: {
      kicker: "Education",
      title: "Education and certifications",
      placeholderBadge: "Placeholder",
    },
    process: {
      kicker: "Way of working",
      title: "How I work",
    },
    testimonials: {
      kicker: "Testimonials",
      title: "What people say about my work",
      description: "Reserved space for real recommendations from professors, mentors, or clients.",
      placeholderBadge: "Placeholder",
    },
    faq: {
      kicker: "FAQ",
      title: "What recruiters want to know",
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk",
      description: "Have an opportunity, an internship, or a project in mind? Write to me.",
      nameLabel: "Name",
      emailLabel: "Your email",
      messageLabel: "Message",
      sendButton: "Send message",
      downloadCv: "Download CV",
    },
    footer: {
      builtWith: "Built with Next.js and Tailwind CSS.",
      backToTop: "Back to top",
    },
  },
} as const satisfies Record<Locale, unknown>;

export type UiStrings = (typeof uiStrings)["es"];
