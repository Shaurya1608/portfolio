import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  name: "SHAURYA KUMAR",
  role: "Full-Stack Developer",
  tagline:
    "I build scalable, performant web applications and delightful user experiences.",
  location: "Remote / Open to Relocation",
  about:
    "I am a full-stack engineer passionate about building practical, high-impact products. I focus on clean architecture, great DX, and accessible UX. I enjoy shipping fast and iterating with real user feedback.",
  resumeUrl: "https://your-resume-link.com",
  avatarUrl: "", // optional avatar URL
  email: "shaurya098n@gmail.com",
  phone: "6200713833",
  socials: [
    { platform: "github", url: "https://github.com/Shaurya1608" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/shaurya-kumar-1487aa365/" },
    { platform: "website", url: "https://your-domain.com" },
    { platform: "email", url: "mailto:you@example.com" },
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Stripe",
    "Socket.io",
    "JWT",
    "Axios",
    "Framer Motion",
    "Python",
    "OpenCV",
    "TensorFlow",
    "Flask",
    "Firebase",
    "REST APIs",
  ],
  projects: [
    {
      id: "fullstack-ecommerce",
      title: "Full-Stack E-Commerce App",
      subtitle: "Authentication, Cart, Payments, Admin",
      description:
        "A complete eCommerce platform built with Next.js, Node.js, Express, MongoDB, and Stripe. Includes Authentication, Cart, Payments, and an Admin Dashboard.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      highlights: [
        "Secure authentication and authorization",
        "Stripe-powered payments",
        "Admin dashboard for product and order management",
      ],
      demoUrl: "https://e-commerce-7-8vto.onrender.com/",
      repoUrl: "https://github.com/Shaurya1608/E-Commerce-",
      imageUrl: "",
    },
    {
      id: "psoriasis-detection",
      title: "Psoriasis Skin Disease Detection",
      subtitle: "Computer Vision + Deep Learning",
      description:
        "An intelligent system to detect psoriasis using image processing and machine learning. Processes skin lesion images to predict presence of psoriasis, assisting early detection and treatment planning.",
      tech: ["Python", "OpenCV", "Machine Learning", "TensorFlow", "CNN", "Flask"],
      highlights: [
        "End-to-end inference pipeline",
        "Model served via Flask API",
        "Early detection support for dermatology workflows",
      ],
      demoUrl: "https://your-demo-link.com/psoriasis-detection",
      repoUrl: "https://github.com/your-username/psoriasis-detection",
      imageUrl: "",
    },
    {
      id: "realtime-chat",
      title: "Real-Time Chat Application",
      subtitle: "Rooms, typing indicators, active users",
      description:
        "A full-stack chat app using React, Node.js, and Socket.io with instant messaging, live typing indicators, active user tracking, auto-scroll UI, and room-based conversations.",
      tech: ["React", "Node.js", "Socket.io", "Express", "JavaScript"],
      highlights: [
        "Robust WebSocket communication",
        "Optimized backend events and scalable rooms",
        "Production-ready deployment configuration",
      ],
      demoUrl: "https://chat-app-39mod.sevalla.app/login",
      repoUrl: "https://github.com/Shaurya1608/chat-app",
      imageUrl: "",
    },
    {
      id: "smartdent-ai",
      title: "SmartDent AI – Intelligent Dental Care Assistant",
      subtitle: "AI Voice Assistant for Dental Care",
      description:
        "An advanced dentistry assistant helping patients and dentists with instant AI-powered voice guidance, real-time conversation, suggestions, and personalized care in a fast, user-friendly interface.",
      tech: ["Next.js", "Vapi", "Tailwind CSS", "Clerk", "PostgreSQL"],
      highlights: [
        "Voice-enabled guidance and Q&A",
        "Secure auth and user profiles",
        "Clean, accessible UI",
      ],
      demoUrl: "https://smart-dent-ai-app.vercel.app/dashboard",
      repoUrl: "https://github.com/Shaurya1608/Smart-Dent-AI-APP",
      imageUrl: "",
    },
    {
      id: "spotify-clone",
      title: "Spotify Clone",
      subtitle: "Search, playlists, playback",
      description:
        "A functional web app inspired by Spotify with browsing, search, playback, authentication, and playlists. Demonstrates REST API integration and media playback in web apps.",
      tech: ["React", "Next.js", "Express", "MongoDB", "Node.js", "HTML", "JavaScript"],
      highlights: [
        "Authentication and playlist management",
        "Responsive and sleek UI",
        "Search and playback features",
      ],
      demoUrl: "https://spotify-clone-green-theta-99.vercel.app/",
      repoUrl: "https://github.com/Shaurya1608/Spotify-Clone",
      imageUrl: "",
    },
    {
      id: "thrifty-clothing",
      title: "Thrifty Clothing – E-Commerce Frontend",
      subtitle: "Firebase auth, wishlist, cart",
      description:
        "A modern, responsive e-commerce frontend built with React, Tailwind CSS, and Firebase. Includes product browsing, category filtering, wishlist, cart, and secure auth.",
      tech: ["React", "Tailwind CSS", "Firebase", "JavaScript", "REST APIs"],
      highlights: [
        "Clean, responsive UI optimized for mobile and desktop",
        "Category filters and wishlist",
        "Firebase Auth integration",
      ],
      demoUrl: "https://thrifty-clothing-frontend.vercel.app/",
      repoUrl: "https://github.com/Shaurya1608/Thrifty-Clothing-Frontend",
      imageUrl: "",
    },
  ],
};
