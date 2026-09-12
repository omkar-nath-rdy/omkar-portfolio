/**
 * ======================================================================================
 * OMKAR NATH REDDY - PORTFOLIO DATA CONFIGURATION
 * ======================================================================================
 * 
 * NOTE FOR OMKAR:
 * You can easily update your personal information, links, project details, skills, and 
 * roadmap directly in this file. Everything on the website updates automatically when
 * you modify these values!
 * ======================================================================================
 */

export const personalData = {
  name: "Omkar Nath Reddy",
  tagline: "Aspiring AI Software Engineer",
  status: "B.Tech Student • Engineering the Intelligent Web",
  location: "India",
  availability: "Open to Collaborations & Hackathons",
  
  // Real personal links (100% functional)
  email: "omkarnathreddypeddireddy@gmail.com",
  github: "https://github.com/omkar-nath-rdy",
  linkedin: "https://www.linkedin.com/in/omkar-nath-reddy-peddireddy-9067a936b/",
  
  // Omkar's signature illustrated avatar image
  avatarUrl: "/omkar-avatar.jpg", 

  // Authentic Student Bio
  bio: [
    "I am a B.Tech student with a relentless drive toward AI Software Engineering. My craft sits at the convergence of foundational computer science, modern full-stack web architecture, and emerging agentic artificial intelligence.",
    "Rather than treating AI as a buzzword, I study and build with its primitives: prompt orchestration, retrieval mechanisms, intelligent agents, and automated workflows that bridge raw code with real-world utility.",
    "Driven by curiosity and a commitment to first-principles thinking, I am building practical applications that solve tangible problems for students, developers, and everyday users."
  ],

  // Real quantifiable student milestones (No fake corporate metrics!)
  highlights: [
    { label: "Core Focus", value: "AI + Systems", desc: "Software, Agents, LLM Integrations" },
    { label: "Key Foundations", value: "DSA & Java", desc: "Algorithmic Problem Solving" },
    { label: "Workflow Stack", value: "n8n & APIs", desc: "Autonomous Logic & Automation" },
    { label: "Code Philosophy", value: "Build & Learn", desc: "Turning Theory into Practical Tools" },
  ],

  // Visual Stickers & Micro-Tags displayed on the Hero & About sections
  heroPills: ["AI AGENTS", "LLM APPS", "AUTOMATION", "SYSTEMS ARCHITECTURE", "FULL STACK"]
};

/**
 * SKILLS & COMPETENCIES
 * Organized with honest proficiency states (Mastering, Solid, Learning).
 */
export const skillCategories = [
  {
    id: "programming",
    title: "Programming Foundations",
    icon: "Code2",
    description: "Algorithmic thinking, memory management, and clean code principles.",
    skills: [
      { name: "Java", level: "DSA & OOP Core", tag: "Primary Language", note: "Object-oriented programming, data structures & algorithms" },
      { name: "C", level: "Foundations", tag: "Systems", note: "Memory concepts, low-level logic, and fundamentals" },
      { name: "Python", level: "Actively Learning", tag: "AI / ML Core", note: "AI libraries, agent orchestration, automation scripts" },
      { name: "Data Structures", level: "Active Practice", tag: "Computer Science", note: "Arrays, Trees, Graphs, Sorting, Space/Time complexity" }
    ]
  },
  {
    id: "web",
    title: "Web & Frontend Engineering",
    icon: "Layout",
    description: "Building responsive, modern, and interactive user interfaces.",
    skills: [
      { name: "React.js", level: "Component Architecture", tag: "Frontend Library", note: "Modern hooks, state management, modular components" },
      { name: "JavaScript (ES6+)", level: "Core Logic", tag: "Web Language", note: "Asynchronous patterns, DOM APIs, modern syntax" },
      { name: "HTML5 / Semantic Web", level: "Structure", tag: "Markup", note: "Accessible architecture, SEO tags, responsive layout" },
      { name: "CSS3 / Modern Styling", level: "Styling & Animations", tag: "UI Layer", note: "Flexbox, CSS Grid, Glassmorphism, Design Tokens" }
    ]
  },
  {
    id: "ai",
    title: "Artificial Intelligence & LLMs",
    icon: "Sparkles",
    description: "Harnessing foundation models to build context-aware applications.",
    skills: [
      { name: "Generative AI", level: "Conceptual & Practical", tag: "GenAI", note: "Model fundamentals, context windows, tokenization" },
      { name: "Prompt Engineering", level: "Systemic Prompting", tag: "LLM Control", note: "Chain-of-thought, few-shot prompting, schema enforcement" },
      { name: "LLM Applications", level: "Prototyping", tag: "Applied AI", note: "Connecting models to user inputs, dynamic summaries, RAG ideas" },
      { name: "AI Agents", level: "Exploring & Building", tag: "Autonomous", note: "Multi-step tool calling, memory structures, agentic loops" }
    ]
  },
  {
    id: "automation",
    title: "Automation & Workflows",
    icon: "Cpu",
    description: "Streamlining digital processes and creating self-driving systems.",
    skills: [
      { name: "n8n", level: "Workflow Design", tag: "Automation Hub", note: "Node-based visual workflows, conditional branching, webhooks" },
      { name: "REST APIs", level: "Integration", tag: "Data Exchange", note: "HTTP methods, payload parsing, auth headers, rate limits" },
      { name: "Workflow Orchestration", level: "Logic Pipelines", tag: "Productivity", note: "Connecting disparate services into unified pipelines" },
      { name: "Webhook Triggers", level: "Event-Driven", tag: "Real-time", note: "Automated event handling and background tasks" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Environment",
    icon: "Terminal",
    description: "Modern toolchain for productive and collaborative engineering.",
    skills: [
      { name: "Git", level: "Version Control", tag: "DevOps", note: "Branching, committing, merge conflict resolution" },
      { name: "GitHub", level: "Collaboration & CI", tag: "Platform", note: "Repositories, pull requests, open source workflows" },
      { name: "VS Code", level: "Primary IDE", tag: "Productivity", note: "Extensions, debugging, terminal integration" },
      { name: "AI Dev Tools", level: "Power User", tag: "Assisted Dev", note: "Leveraging modern AI pairs to accelerate development" }
    ]
  }
];

/**
 * FEATURED PROJECTS
 * Directional student projects honestly framed as active builds or architectural prototypes.
 */
export const projectsData = [
  {
    id: "freshers-companion",
    title: "Freshers' Companion",
    category: "Campus & Student Life Platform",
    badge: "In Active Development",
    shortDesc: "A centralized digital portal designed to bridge the university onboarding gap for collegiate freshers.",
    problem: "Entering college is overwhelming: freshers struggle to navigate dispersed syllabi, discover technical clubs, find curated coding roadmaps, and connect with experienced seniors.",
    solution: "A unified, interactive web platform that consolidates academic resources, campus societies, peer mentorship channels, and vetted introductory roadmaps into a single intuitive dashboard.",
    architecture: "Modular React frontend with accessible UI cards, categorized resource hubs, and a roadmap visualizer. Designed to connect to a serverless backend for real-time club notices.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Lucide Icons", "Vite"],
    features: [
      "Curated Coding & Academic Roadmaps for Year 1-4",
      "Interactive Campus Clubs Directory & Recruitment Announcements",
      "Senior Mentorship & Knowledge Exchange Portal",
      "Examinations & Placement Preparation Archive"
    ],
    githubUrl: "https://github.com/omkar-nath-rdy",
    liveDemoUrl: null, // Set to string URL when ready
    accentColor: "#00F0FF",
    stats: {
      modules: "5 Core Hubs",
      targetAudience: "University Freshers",
      status: "Prototype Phase"
    }
  },
  {
    id: "skillswap",
    title: "SkillSwap",
    category: "Peer Mentorship & Knowledge Exchange",
    badge: "Architecture & Design",
    shortDesc: "A student-to-student marketplace enabling collaborative skill trading without monetary barriers.",
    problem: "Students frequently want to learn specific skills (e.g., Python, Graphic Design, Web Development) but lack funds for expensive courses, while their peers possess those exact skills.",
    solution: "SkillSwap facilitates peer skill exchanges: a student proficient in Java can teach a peer in exchange for learning UI design or prompt engineering, fostering an organic learning community.",
    architecture: "State-driven matching interface featuring mutual skill matching algorithms, schedule planning cards, and session loggers.",
    techStack: ["React", "Node.js Concept", "REST API", "Modern CSS", "Framer Motion"],
    features: [
      "Skill Profile Matrix (Skills offered vs. Skills sought)",
      "Smart Mutual-Match Discovery Algorithm",
      "Collaborative Practice Room & Resource Sharing",
      "Feedback & Reputation Badges for Reliable Mentors"
    ],
    githubUrl: "https://github.com/omkar-nath-rdy",
    liveDemoUrl: null,
    accentColor: "#8B5CF6",
    stats: {
      model: "Peer-to-Peer",
      focus: "Mutual Mentorship",
      status: "UI & Logic Design"
    }
  },
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    category: "Contextual AI & Student Learning",
    badge: "Conceptual Prototype",
    shortDesc: "A student-focused intelligent companion for synthesizing coursework, conceptual testing, and flashcard generation.",
    problem: "Textbooks and lengthy lecture PDFs often lead to passive reading rather than active recall, making exam revision slow and retention suboptimal.",
    solution: "An intelligent study workspace that uses LLMs to digest lecture notes, generate adaptive multi-choice quizzes, create concise conceptual flashcards, and clarify difficult concepts on demand.",
    architecture: "Client-side React interface communicating with an LLM prompt engine, managing session context, and rendering interactive flashcard decks.",
    techStack: ["Generative AI", "Prompt Engineering", "React", "JavaScript", "Tailwind"],
    features: [
      "Dynamic Chapter Summaries with Key Takeaways",
      "Automated Active-Recall Quiz Generation",
      "Interactive Socratic Tutor for Doubts & Logic Explanations",
      "Spaced-Repetition Study Schedule Suggestions"
    ],
    githubUrl: "https://github.com/omkar-nath-rdy",
    liveDemoUrl: null,
    accentColor: "#3B82F6",
    stats: {
      paradigm: "Active Recall",
      coreTech: "Prompt Systems",
      status: "Prompt & UI Testing"
    }
  },
  {
    id: "automation-dashboard",
    title: "Automation Dashboard",
    category: "Workflow Orchestration & Developer Tools",
    badge: "Building Pipeline",
    shortDesc: "A unified productivity dashboard connecting n8n automation pipelines, webhooks, and developer tasks.",
    problem: "Managing disparate tasks across GitHub, emails, project notes, and scheduled routines requires manual toggling and context switching.",
    solution: "A custom control center wired into n8n automated workflows to trigger background routines, track pipeline health, and aggregate project alerts in real time.",
    architecture: "Event-driven workflow consumer built on n8n webhook triggers with a cybernetic reactive dashboard interface.",
    techStack: ["n8n", "Webhooks", "REST APIs", "JavaScript", "React"],
    features: [
      "Visual Webhook Trigger Cards for Developer Routines",
      "Real-time Pipeline Status & Execution History Logs",
      "Automated GitHub & Email Notification Summaries",
      "Custom Workflow Presets for Daily Developer Standups"
    ],
    githubUrl: "https://github.com/omkar-nath-rdy",
    liveDemoUrl: null,
    accentColor: "#10B981",
    stats: {
      engine: "n8n Workflows",
      protocol: "Webhooks / REST",
      status: "Pipeline Integration"
    }
  }
];

/**
 * 7-STEP AI ENGINEERING PIPELINE
 * Visual explanation of Omkar's mental model and engineering direction.
 */
export const aiPipelineSteps = [
  {
    step: "01",
    title: "Core Programming & Logic",
    focus: "Java & C Foundations",
    description: "Mastering memory, data structures, algorithms, and strict programmatic reasoning.",
    status: "Active Foundation"
  },
  {
    step: "02",
    title: "Software Engineering Principles",
    focus: "Modular Architecture & Clean Code",
    description: "Writing scalable, readable, and maintainable systems with clean abstractions.",
    status: "Active Practice"
  },
  {
    step: "03",
    title: "Modern Web Interfaces",
    focus: "React & Interactive Frontends",
    description: "Translating algorithmic outputs into fluid, accessible, user-friendly digital experiences.",
    status: "Mastering"
  },
  {
    step: "04",
    title: "AI & Python Primitives",
    focus: "Python, Math & ML Concepts",
    description: "Understanding probability, matrix operations, tokenization, and model mechanics.",
    status: "In Progress"
  },
  {
    step: "05",
    title: "LLM Orchestration & Prompts",
    focus: "Context, Embeddings & RAG",
    description: "Structuring reliable prompts, tool calls, and grounded knowledge retrieval.",
    status: "Building & Prototyping"
  },
  {
    step: "06",
    title: "Autonomous Agents & Automation",
    focus: "n8n Pipelines & Multi-Agent Loops",
    description: "Creating self-directed software that plans, executes tools, and evaluates outcomes.",
    status: "Exploring & Building"
  },
  {
    step: "07",
    title: "Production AI Systems",
    focus: "End-to-End Scalable Products",
    description: "Shipping real-world, high-reliability AI products that solve meaningful human problems.",
    status: "Target Horizon"
  }
];

/**
 * 10-STAGE CAREER & LEARNING ROADMAP
 * Honest timeline showing past, current, and upcoming stages of development.
 */
export const journeyRoadmap = [
  {
    stage: "01",
    title: "Programming Foundations",
    status: "Completed",
    timeline: "Semester 1",
    summary: "Discovered computer science fundamentals, syntax, algorithmic thinking, and computational logic through C.",
    skillsLearned: ["C Language", "Procedural Logic", "Pointers & Memory", "Basic Algorithms"]
  },
  {
    stage: "02",
    title: "Java + DSA Rigor",
    status: "Current Focus",
    timeline: "Present Semester",
    summary: "Deep-diving into Object-Oriented Programming, Java collections, recursive patterns, and Data Structures & Algorithms.",
    skillsLearned: ["Java", "OOP Principles", "Data Structures", "Time/Space Complexity"]
  },
  {
    stage: "03",
    title: "Modern Web Development",
    status: "Current Focus",
    timeline: "Active Practice",
    summary: "Mastering component architecture, reactive state, semantic markup, modern CSS, and API communications using React.",
    skillsLearned: ["HTML5 / CSS3", "JavaScript ES6+", "React.js", "Responsive Design"]
  },
  {
    stage: "04",
    title: "Python for AI & Scripting",
    status: "In Progress",
    timeline: "Active Learning",
    summary: "Transitioning toward the standard language of AI, data manipulation libraries, and backend scripting.",
    skillsLearned: ["Python 3", "Data Scripting", "API Handling", "Virtual Environments"]
  },
  {
    stage: "05",
    title: "Machine Learning Foundations",
    status: "Next Horizon",
    timeline: "Upcoming",
    summary: "Studying classical machine learning algorithms, model evaluation metrics, and mathematical intuition.",
    skillsLearned: ["Linear Algebra", "Supervised Learning", "Model Evaluation", "Scikit-Learn"]
  },
  {
    stage: "06",
    title: "LLM Applications & Systems",
    status: "Next Horizon",
    timeline: "Upcoming",
    summary: "Architecting systems around large language models, prompt templating, vector databases, and retrieval augmentation.",
    skillsLearned: ["LLM APIs", "Embeddings", "Vector Search", "Prompt Engineering"]
  },
  {
    stage: "07",
    title: "Autonomous AI Agents",
    status: "Target Vision",
    timeline: "Future Milestone",
    summary: "Designing agentic frameworks capable of reasoning, reflection, tool invocation, and autonomous task completion.",
    skillsLearned: ["Agentic Frameworks", "Tool Calling", "Memory Architecture", "Multi-Agent Teams"]
  },
  {
    stage: "08",
    title: "Workflow Automation & Orchestration",
    status: "Active Exploration",
    timeline: "Ongoing",
    summary: "Connecting software services via n8n, webhooks, and event-driven architectures to automate complex manual flows.",
    skillsLearned: ["n8n Workflows", "Webhook Design", "API Integrations", "Automation Strategy"]
  },
  {
    stage: "09",
    title: "Distributed System Design",
    status: "Target Vision",
    timeline: "Future Milestone",
    summary: "Learning how to scale backend services, handle asynchronous workloads, manage caching, and deploy cloud microservices.",
    skillsLearned: ["System Architecture", "Databases", "Cloud Infrastructure", "API Gateways"]
  },
  {
    stage: "10",
    title: "Real-World AI Products",
    status: "Ultimate Destination",
    timeline: "Career Goal",
    summary: "Building and deploying production-grade AI-powered applications that solve real-world problems at scale.",
    skillsLearned: ["End-to-End AI Engineering", "Product Thinking", "System Reliability", "Global Impact"]
  }
];
