// export const resumeLink = `https://docs.google.com/document/d/11PICqkHzOi2qBUgppsHzy-E9DbtWdbAmzD4Cdx0Q7XE/view`;
// export const resumeLink = `https://drive.google.com/file/d/1el5X7jVAJYb7PpWxyuGW7vlKwAEYRSeo/view?usp=sharing`;
// export const resumeLink = `/resume.pdf`;

export const resumeLink = `https://docs.google.com/document/d/11PICqkHzOi2qBUgppsHzy-E9DbtWdbAmzD4Cdx0Q7XE/export?format=pdf`;

export const skillTypes = [
    "Language",
    "Frontend",
    "Backend",
    "Database",
    "Generative AI",
    "Tools",
];

export const skills = [
    // === Core Languages ===
    {
        name: "TypeScript",
        type: "Language",
        logo: "/typescript.svg",
    },
    {
        name: "JavaScript",
        type: "Language",
        logo: "/javascript.svg",
    },

    // === Frontend (Primary Strength) ===
    {
        name: "Next.js",
        type: "Frontend",
        logo: "/nextjs_icon_dark.svg",
    },
    {
        name: "React.js",
        type: "Frontend",
        logo: "/react_light.svg",
    },
    {
        name: "Tailwind CSS",
        type: "Frontend",
        logo: "/tailwindcss.svg",
    },
    {
        name: "Shadcn/ui",
        type: "Frontend",
        logo: "/shadcn-ui.svg",
    },

    // === Backend ===
    {
        name: "Node.js",
        type: "Backend",
        logo: "/nodejs.svg",
    },
    {
        name: "Express.js",
        type: "Backend",
        logo: "/expressjs.svg",
    },
    {
        name: "Drizzle ORM",
        type: "Backend",
        logo: "/drizzle-orm_light.svg",
    },

    // === Databases ===
    {
        name: "NeonDB (PostgreSQL)",
        type: "Database",
        logo: "/neon.svg",
    },
    {
        name: "MongoDB",
        type: "Database",
        logo: "/mongodb-icon-light.svg",
    },

    // === Generative AI ===
    {
        name: "Vercel AI SDK",
        type: "Generative AI",
        logo: "/vercel.svg",
    },
    {
        name: "LangChain.js",
        type: "Generative AI",
        logo: "/langchain.svg",
    },
    {
        name: "Google Gemini API",
        type: "Generative AI",
        logo: "/gemini.svg",
    },
    // === Frontend / Data Fetching ===
    {
        name: "Redux Toolkit",
        type: "Frontend",
        logo: "/redux.svg",
    },
    {
        name: "TanStack (React) Query",
        type: "Tools",
        logo: "/reactquery.svg",
    },
    {
        name: "Mongoose",
        type: "Backend",
        logo: "/mongoose.svg",
    },
    {
        name: "Supabase",
        type: "Backend",
        logo: "/supabase.svg",
    },
    {
        name: "Appwrite",
        type: "Backend",
        logo: "/appwrite.svg",
    },

    // === Databases / Vector DBs ===
    {
        name: "PineconeDB",
        type: "Database",
        logo: "/pinecone.svg",
    },
    {
        name: "AstraDB",
        type: "Database",
        logo: "/astradb.svg",
    },
    // === Tools & DevOps ===
    {
        name: "Git",
        type: "Tools",
        logo: "/git.svg",
    },
    {
        name: "GitHub",
        type: "Tools",
        logo: "/github_light.svg",
    },
    {
        name: "Docker",
        type: "Tools",
        logo: "/docker.svg",
    },
    {
        name: "Vercel",
        type: "Tools",
        logo: "/vercel.svg",
    },
    {
        name: "AWS (S3)",
        type: "Tools",
        logo: "/aws_light.svg",
    },
    {
        name: "DigitalOcean",
        type: "Tools",
        logo: "/digitalocean.svg",
    },
    {
        name: "Cloudinary",
        type: "Tools",
        logo: "/cloudinary.svg",
    },
    {
        name: "Postman",
        type: "Tools",
        logo: "/postman.svg",
    },
    {
        name: "Clerk",
        type: "Tools",
        logo: "/clerk-icon-light.svg",
    },
    {
        name: "Razorpay",
        type: "Tools",
        logo: "/razorpay.svg",
    },
    // === Additional Languages ===
    {
        name: "Python",
        type: "Language",
        logo: "/python.svg",
    },
    {
        name: "SQL",
        type: "Language",
        logo: "/sql.svg",
    },
    {
        name: "C",
        type: "Language",
        logo: "/c.svg",
    },
    {
        name: "C++",
        type: "Language",
        logo: "/c-plusplus.svg",
    },
    {
        name: "Java",
        type: "Language",
        logo: "/java.svg",
    },
];

export const contact = [
    {
        name: "Email",
        url: "mailto:akilkhatri.work@gmail.com",
        logo: "/email.svg",
    },
    {
        name: "Github",
        url: "http://github.com/akilkhatri104",
        logo: "/github_light.svg",
    },
    {
        name: "Fiverr",
        url: "https://www.fiverr.com/s/38QYmlL",
        logo: "/fiverr.svg",
    },
    {
        name: "Linkedin",
        url: "http://linkedin.com/in/akil-khatri",
        logo: "/linkedin.svg",
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/akilkhatri/",
        logo: "/leetcode.svg",
    },
];

export const projects = [
    {
        title: "ChatPDF - AI SaaS Platform",
        description:
            "A production-ready AI SaaS that enables conversational search and Q&A over uploaded PDF documents using modern LLM and vector database tooling.",
        highlights: [
            "PDF upload, vector embedding & semantic search",
            "Chat-style interface with LLM-powered answers",
            "Authentication, payments & cloud deployment",
        ],
        techStack: [
            "Next.js (App Router)",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "LangChain.js",
            "PineconeDB",
            "NeonDB (PostgreSQL)",
            "Drizzle ORM",
            "AWS S3",
            "Clerk",
            "Razorpay",
            "TanStack Query",
        ],
        links: {
            github: "https://github.com/akilkhatri104/chatpdf-saas",
            live: "https://chatpdf-saas-yji4j.ondigitalocean.app",
        },
    },
    {
        title: "VideoTube – Video Sharing Backend API",
        description:
            "A scalable backend API inspired by YouTube, implementing authentication, video management, and social features using Node.js and MongoDB.",
        highlights: [
            "JWT-based authentication & authorization",
            "Video upload, likes, comments & playlists",
            "Secure media handling and cloud storage",
        ],
        techStack: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Bcrypt",
            "Cloudinary",
            "Multer",
        ],
        links: {
            github: "https://github.com/akilkhatri104/videotube-javascript-backend",
        },
    },
];

export const education = [
    {
        instituteName: "Parul University, Vadodara",
        course: "B.Tech - Artificial Inteligence",
        cgpa: "8.41",
        time: "Sept 2023 - Present",
    },
];
