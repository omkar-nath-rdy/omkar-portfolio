/**
 * ==========================================================================
 * OMKAR NATH REDDY — 3D AI ENGINEER PORTFOLIO JAVASCRIPT
 * Features: Three.js 3D WebGL Neural Core • Interactive Terminal • Custom Cursor
 *           Audio Synthesizer • Filterable Skills Matrix • Case Study Modals
 * ==========================================================================
 */

// ==========================================
// 1. DATA LAYER (Easily Editable)
// ==========================================

const PERSONAL_INFO = {
  name: "Omkar Nath Reddy",
  role: "Aspiring AI Software Engineer",
  email: "omkarnathreddypeddireddy@gmail.com",
  github: "https://github.com/omkar-nath-rdy",
  linkedin: "https://www.linkedin.com/in/omkar-nath-reddy-peddireddy-9067a936b/"
};

const SKILLS_DATA = [
  // Programming
  { name: "Java", category: "programming", level: "Core", icon: "code" },
  { name: "C Language", category: "programming", level: "Foundations", icon: "file-code" },
  { name: "Python", category: "programming", level: "Active Learning", icon: "terminal", isLearning: true },
  { name: "JavaScript (ES6+)", category: "programming", level: "Proficient", icon: "cpu" },
  
  // Web Development
  { name: "React", category: "web", level: "Frontend", icon: "layers" },
  { name: "HTML5 & CSS3", category: "web", level: "Core Web", icon: "layout" },
  { name: "Tailwind CSS", category: "web", level: "UI Styling", icon: "palette" },
  { name: "REST APIs", category: "web", level: "Integration", icon: "network" },

  // AI & Generative Tech
  { name: "Generative AI", category: "ai", level: "Focus", icon: "sparkles" },
  { name: "Prompt Engineering", category: "ai", level: "Advanced", icon: "message-square-code" },
  { name: "LLM Applications", category: "ai", level: "Building", icon: "bot" },
  { name: "AI Agents Architecture", category: "ai", level: "Active Learning", icon: "workflow", isLearning: true },

  // Automation
  { name: "n8n Workflows", category: "automation", level: "Pipelines", icon: "git-merge" },
  { name: "Webhook Automations", category: "automation", level: "Integration", icon: "webhook" },
  { name: "API Orchestration", category: "automation", level: "Intermediate", icon: "zap" },

  // Tools
  { name: "Git & GitHub", category: "tools", level: "VCS", icon: "github" },
  { name: "VS Code", category: "tools", level: "IDE", icon: "monitor" },
  { name: "AI Dev Tooling", category: "tools", level: "Modern Stack", icon: "sliders" }
];

const PROJECTS_DATA = [
  {
    id: "freshers-companion",
    title: "Freshers' Companion",
    category: "Campus & Academic Platform",
    status: "Active Development",
    shortDesc: "A comprehensive guidance portal engineered to help incoming college freshers navigate academics, club recruitments, placements, and peer mentorship.",
    problem: "College freshers often face information fragmentation, leading to missed opportunities in campus clubs, academic resources, and competitive coding roadmaps.",
    solution: "A centralized, responsive portal with categorized resource vaults, interactive club directories, placement preparation archives, and peer mentorship matching.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST API", "Vite"],
    features: [
      "Categorized academic resource & syllabus vault",
      "Interactive college clubs & recruitment timeline tracker",
      "Placement preparation & coding roadmap repository",
      "Peer mentorship connect interface"
    ],
    github: "https://github.com/omkar-nath-rdy",
    liveDemo: "#"
  },
  {
    id: "skillswap",
    title: "SkillSwap",
    category: "Peer Knowledge Network",
    status: "Architecture Phase",
    shortDesc: "A student-centric collaborative platform enabling peer-to-peer skill exchange, mutual mentorship sessions, and shared project collaborations.",
    problem: "Students with complementary skills (e.g. frontend devs and backend engineers) lack a dedicated network to exchange expertise directly without financial barriers.",
    solution: "An automated skill-matching system where students list what they can teach and what they want to learn, scheduling collaborative micro-sessions.",
    techStack: ["React", "Node.js", "JavaScript", "WebSockets", "CSS Modules"],
    features: [
      "Skill pairing algorithm based on complementary learning goals",
      "Interactive profile showcase with verified student skills",
      "Session scheduler & peer review feedback loop",
      "Real-time chat & project collaboration boards"
    ],
    github: "https://github.com/omkar-nath-rdy",
    liveDemo: "#"
  },
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    category: "LLM Application",
    status: "Prototype / Building",
    shortDesc: "A student-focused intelligent study companion capable of contextual document Q&A, active recall flashcards, and automated syllabus summarization.",
    problem: "Navigating lengthy textbook chapters and lecture notes manually consumes excessive time without personalized knowledge testing.",
    solution: "An LLM-driven application that ingests lecture notes, generates active-recall questions, summarizes key concepts, and clarifies doubts interactively.",
    techStack: ["Python", "LLM APIs", "Prompt Engineering", "JavaScript", "React"],
    features: [
      "Context-aware document query & retrieval interface",
      "Automated concept summarizer with key bullet points",
      "Adaptive flashcard generator for spaced repetition",
      "Interactive quiz mode with instant reasoning feedback"
    ],
    github: "https://github.com/omkar-nath-rdy",
    liveDemo: "#"
  },
  {
    id: "automation-dashboard",
    title: "Automated Workflow Hub",
    category: "Automation & Tools",
    status: "Active Build",
    shortDesc: "A centralized productivity & automation dashboard integrating multi-service webhooks, scheduled cron pipelines, and developer notifications.",
    problem: "Repetitive daily workflows like repository event tracking, task reminders, and automated data syncing are scattered across disparate platforms.",
    solution: "A unified dashboard powered by n8n workflow nodes and custom webhooks, providing real-time telemetry and triggers for personal productivity.",
    techStack: ["n8n", "Webhooks", "REST APIs", "JavaScript", "Cloud Functions"],
    features: [
      "Automated GitHub commit & issue tracking notifications",
      "Scheduled study plan reminders and task synchronization",
      "Custom webhook ingestion pipeline for multi-app triggers",
      "Visual workflow status & log execution metrics"
    ],
    github: "https://github.com/omkar-nath-rdy",
    liveDemo: "#"
  }
];

const JOURNEY_DATA = [
  { stage: "Stage 01", title: "Programming Foundations", desc: "Core algorithms, procedural logic, memory basics in C and standard computer science principles.", status: "completed" },
  { stage: "Stage 02", title: "Java & Data Structures", desc: "Object-oriented programming, classes, collections, trees, graphs, and algorithmic problem-solving.", status: "completed" },
  { stage: "Stage 03", title: "Web Development Architecture", desc: "HTML5, modern CSS, JavaScript (ES6+), React component ecosystems, and responsive design systems.", status: "completed" },
  { stage: "Stage 04", title: "Python & Scientific Computing", desc: "Python programming, data manipulation, APIs, backend scripting, and mathematical foundations.", status: "current" },
  { stage: "Stage 05", title: "AI & Machine Learning Concepts", desc: "Foundational ML models, neural network theory, embeddings, tokenization, and vectors.", status: "current" },
  { stage: "Stage 06", title: "LLM Applications & Prompt Engineering", desc: "Large Language Models, structured outputs, prompt optimization, RAG paradigms, and context windows.", status: "current" },
  { stage: "Stage 07", title: "Autonomous AI Agents", desc: "Multi-agent systems, tool execution, reasoning loops (ReAct), memory persistence, and task planning.", status: "in-progress" },
  { stage: "Stage 08", title: "Workflow Automation & n8n", desc: "Event-driven pipelines, webhook orchestrations, automated data ingestion, and cloud triggers.", status: "in-progress" },
  { stage: "Stage 09", title: "System Design & Distributed Backends", desc: "Scalable architecture, database schemas, caching, API gateways, and asynchronous workers.", status: "planned" },
  { stage: "Stage 10", title: "Production AI Engineering", desc: "Building, deploying, and maintaining high-leverage real-world intelligent software products.", status: "planned" }
];

// ==========================================
// 2. THREE.JS 3D WEBGL NEURAL SCENE
// ==========================================

let scene, camera, renderer;
let neuralGroup, coreMesh, wireMesh, ringMesh, particleSystem;
let targetRotationX = 0, targetRotationY = 0;
let mouseX = 0, mouseY = 0;

function initThreeScene() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030712, 0.035);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 24;

  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  neuralGroup = new THREE.Group();
  scene.add(neuralGroup);

  // 1. Inner Glowing Nucleus (Icosahedron)
  const coreGeo = new THREE.IcosahedronGeometry(3.5, 1);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x00f0ff,
    emissive: 0x003366,
    roughness: 0.2,
    metalness: 0.8,
    wireframe: true
  });
  coreMesh = new THREE.Mesh(coreGeo, coreMat);
  neuralGroup.add(coreMesh);

  // 2. Outer Wireframe Cage (Dodecahedron)
  const wireGeo = new THREE.DodecahedronGeometry(5.2, 0);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  wireMesh = new THREE.Mesh(wireGeo, wireMat);
  neuralGroup.add(wireMesh);

  // 3. Orbital Data Rings
  const ringGeo = new THREE.TorusGeometry(7.2, 0.04, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    transparent: true,
    opacity: 0.5
  });
  ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 3;
  neuralGroup.add(ringMesh);

  // 4. Floating Neural Particle Cloud
  const particleCount = window.innerWidth < 768 ? 200 : 500;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const colorCyan = new THREE.Color(0x00f0ff);
  const colorViolet = new THREE.Color(0x8b5cf6);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 45;
    positions[i + 1] = (Math.random() - 0.5) * 45;
    positions[i + 2] = (Math.random() - 0.5) * 35;

    const mixedColor = Math.random() > 0.5 ? colorCyan : colorViolet;
    colors[i] = mixedColor.r;
    colors[i + 1] = mixedColor.g;
    colors[i + 2] = mixedColor.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.25,
    vertexColors: true,
    transparent: true,
    opacity: 0.75
  });

  particleSystem = new THREE.Points(particleGeo, particleMat);
  neuralGroup.add(particleSystem);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x00f0ff, 2.5, 50);
  pointLight1.position.set(10, 15, 15);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x8b5cf6, 2.0, 50);
  pointLight2.position.set(-10, -15, 10);
  scene.add(pointLight2);

  // Event Listeners
  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onDocumentMouseMove);
  window.addEventListener('scroll', onScrollUpdate);

  animate();
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
  mouseY = (event.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
}

function onScrollUpdate() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollY / (maxScroll || 1);

  if (neuralGroup) {
    // Dynamic scroll transformations
    neuralGroup.position.y = progress * 6 - 1;
    neuralGroup.position.z = -progress * 8;
    neuralGroup.rotation.z = progress * Math.PI * 1.5;
  }
}

function animate() {
  requestAnimationFrame(animate);

  if (neuralGroup) {
    // Continuous idle spin
    coreMesh.rotation.y += 0.006;
    coreMesh.rotation.x += 0.003;

    wireMesh.rotation.y -= 0.004;
    wireMesh.rotation.x -= 0.002;

    ringMesh.rotation.z += 0.008;

    particleSystem.rotation.y += 0.001;

    // Smooth Mouse Parallax Lerping
    targetRotationY += (mouseX * 0.5 - targetRotationY) * 0.05;
    targetRotationX += (mouseY * 0.5 - targetRotationX) * 0.05;

    neuralGroup.rotation.y = targetRotationY;
    neuralGroup.rotation.x = targetRotationX;
  }

  renderer.render(scene, camera);
}

// ==========================================
// 3. AUDIO SYNTHESIZER (Web Audio API)
// ==========================================

let audioCtx = null;
let soundEnabled = false;

function initAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  } catch (e) {
    console.warn("Web Audio API not supported.");
  }
}

function playUiSound(freq = 600, type = 'sine', duration = 0.08) {
  if (!soundEnabled || !audioCtx) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

  gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function toggleSound() {
  if (!audioCtx) initAudio();
  soundEnabled = !soundEnabled;

  const btn = document.getElementById('sound-toggle');
  const icon = document.getElementById('sound-icon');
  const label = btn.querySelector('.sound-label');

  if (soundEnabled) {
    btn.classList.add('active');
    label.textContent = "AUDIO: ON";
    icon.setAttribute('data-lucide', 'volume-2');
    playUiSound(800, 'sine', 0.15);
  } else {
    btn.classList.remove('active');
    label.textContent = "AUDIO: OFF";
    icon.setAttribute('data-lucide', 'volume-x');
  }
  lucide.createIcons();
}

// ==========================================
// 4. CUSTOM CURSOR
// ==========================================

function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const dot = document.getElementById('custom-cursor-dot');
  if (!cursor || !dot) return;

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let cursorX = mouseX, cursorY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover detection for magnetic feel
  const interactables = document.querySelectorAll('a, button, input, textarea, .project-card, .bento-card, .skill-card');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
      playUiSound(520, 'sine', 0.05);
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
}

// ==========================================
// 5. INTERACTIVE CLI TERMINAL
// ==========================================

function initTerminal() {
  const input = document.getElementById('terminal-input');
  if (!input) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      if (cmd) {
        runCliCommand(cmd);
        input.value = '';
      }
    }
  });
}

function runCliCommand(command) {
  const output = document.getElementById('terminal-output');
  if (!output) return;

  playUiSound(720, 'triangle', 0.06);

  const cmdLine = document.createElement('p');
  cmdLine.className = 'terminal-line';
  cmdLine.innerHTML = `<span class="prompt">$</span> <span class="cmd">${escapeHtml(command)}</span>`;
  output.appendChild(cmdLine);

  let respText = '';
  switch (command) {
    case 'whoami':
      respText = "Omkar Nath Reddy — B.Tech Student & Aspiring AI Software Engineer.";
      break;
    case 'skills':
      respText = "⚡ Core Skills: Java, Python (Learning), React, GenAI, LLM Apps, n8n, Git.";
      break;
    case 'projects':
      respText = "🚀 Featured Builds: Freshers' Companion, SkillSwap, AI Study Assistant, Automation Hub.";
      break;
    case 'pipeline':
      respText = "🧬 AI Pipeline: Programming ➔ Web Fullstack ➔ LLMs ➔ Autonomous Agents ➔ Automation.";
      break;
    case 'contact':
      respText = "📫 Direct Email: omkarnathreddypeddireddy@gmail.com | GitHub: omkar-nath-rdy";
      break;
    case 'clear':
      output.innerHTML = '';
      return;
    case 'help':
    default:
      respText = "Available commands: whoami, skills, projects, pipeline, contact, clear, help";
      break;
  }

  const resp = document.createElement('p');
  resp.className = 'terminal-response text-cyan';
  resp.textContent = respText;
  output.appendChild(resp);

  output.scrollTop = output.scrollHeight;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

// ==========================================
// 6. RENDER SKILLS & FILTERING
// ==========================================

function renderSkills(filter = 'all') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = filter === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === filter);

  filtered.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="skill-info">
        <div class="skill-icon">
          <i data-lucide="${skill.icon}"></i>
        </div>
        <div>
          <h4 class="skill-name">${skill.name}</h4>
          <span class="skill-category-label">${skill.category.toUpperCase()}</span>
        </div>
      </div>
      <span class="skill-badge-level ${skill.isLearning ? 'skill-badge-learning' : ''}">
        ${skill.level}
      </span>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

function initSkillTabs() {
  const tabs = document.querySelectorAll('.skill-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      playUiSound(650, 'sine', 0.05);
      renderSkills(filter);
    });
  });
}

// ==========================================
// 7. RENDER PROJECTS & MODAL
// ==========================================

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';

  PROJECTS_DATA.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProjectModal(proj.id);

    card.innerHTML = `
      <div class="project-banner">
        <span class="project-status">${proj.status}</span>
        <i data-lucide="cpu" class="project-banner-icon"></i>
      </div>
      <div class="project-content">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.shortDesc}</p>
        <div class="project-tech-tags">
          ${proj.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer-btns">
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openProjectModal('${proj.id}')">
            <span>Case Study</span>
            <i data-lucide="arrow-up-right"></i>
          </button>
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" onclick="event.stopPropagation();" title="GitHub Code">
            <i data-lucide="github"></i>
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

function openProjectModal(projectId) {
  const proj = PROJECTS_DATA.find(p => p.id === projectId);
  if (!proj) return;

  playUiSound(750, 'sine', 0.08);

  const container = document.getElementById('modal-body-container');
  container.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${proj.title}</h2>
      <div class="modal-subtitle">${proj.category} • <span class="text-cyan">${proj.status}</span></div>
    </div>

    <h4 class="modal-section-title">The Challenge</h4>
    <p class="modal-text">${proj.problem}</p>

    <h4 class="modal-section-title">Architectural Solution</h4>
    <p class="modal-text">${proj.solution}</p>

    <h4 class="modal-section-title">Key Capabilities</h4>
    <ul class="bento-list" style="margin-top: 10px;">
      ${proj.features.map(f => `<li><i data-lucide="check-circle-2"></i> ${f}</li>`).join('')}
    </ul>

    <h4 class="modal-section-title">Technology Stack</h4>
    <div class="project-tech-tags" style="margin-top: 8px;">
      ${proj.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
    </div>

    <div style="display: flex; gap: 14px; margin-top: 28px;">
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <span>View Repository on GitHub</span>
        <i data-lucide="github"></i>
      </a>
      <button class="btn btn-secondary" onclick="closeProjectModal()">
        <span>Close</span>
      </button>
    </div>
  `;

  const modal = document.getElementById('project-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeProjectModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.closest('.modal-close')) return;
  const modal = document.getElementById('project-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 8. RENDER JOURNEY TIMELINE
// ==========================================

function renderJourney() {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  container.innerHTML = '';

  JOURNEY_DATA.forEach((item, index) => {
    const isLeft = index % 2 === 0;
    const el = document.createElement('div');
    el.className = `timeline-item ${isLeft ? 'left' : 'right'}`;

    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-stage">${item.stage}</span>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="timeline-status ${item.status}">${item.status.toUpperCase()}</span>
      </div>
    `;
    container.appendChild(el);
  });
}

// ==========================================
// 9. CONTACT & QUICK MAIL ACTIONS
// ==========================================

function initContactActions() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
        showToast("Email copied to clipboard!");
        playUiSound(880, 'sine', 0.1);
      });
    });
  }
}

function handleQuickMail(e) {
  e.preventDefault();
  const name = document.getElementById('mail-name').value;
  const subject = document.getElementById('mail-subject').value;
  const body = document.getElementById('mail-body').value;

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`[Portfolio Contact] ${subject} - from ${name}`)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;

  showToast("Opening default mail client...");
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-message');
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================
// 10. REAL-TIME IST CLOCK
// ==========================================

function updateIstClock() {
  const clockEl = document.getElementById('ist-clock');
  if (!clockEl) return;

  const now = new Date();
  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  clockEl.textContent = `${now.toLocaleTimeString('en-US', options)} (IST)`;
}

// ==========================================
// 11. NAVBAR SCROLL & MOBILE MENU
// ==========================================

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Spy
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      playUiSound(600, 'sine', 0.05);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }
}

// ==========================================
// 12. INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
  initCustomCursor();
  initTerminal();
  renderSkills('all');
  initSkillTabs();
  renderProjects();
  renderJourney();
  initContactActions();
  initNavbar();

  // Audio Toggle
  const soundBtn = document.getElementById('sound-toggle');
  if (soundBtn) soundBtn.addEventListener('click', toggleSound);

  // Live IST Clock Loop
  updateIstClock();
  setInterval(updateIstClock, 1000);

  // Lucide Icons
  lucide.createIcons();
});