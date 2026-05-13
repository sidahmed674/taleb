// Taleb AI - Core Engine & State Management

const SUPER_ADMIN_EMAIL = "sidahmedag99@gmail.com";

// Default Seed Data
const DEFAULT_DATA = {
  users: [
    { id: 1, name: "Sid Ahmed", email: SUPER_ADMIN_EMAIL, password: "password123", role: "admin", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SidAhmed", streak: 42, points: 2450, level: "Senior AI Scholar" },
    { id: 2, name: "Amine Dz", email: "student@taleb.ai", password: "password123", role: "student", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amine", streak: 12, points: 890, level: "Baccalaureate Aspirant" }
  ],
  exercises: [
    { id: 1, title: "BAC Mathématiques: Étude de Fonction Exponentielle", subject: "Math", difficulty: "Hard", content: "Soit la fonction f(x) = (2x - 1)e^x + 1. Déterminer les limites aux bornes de son domaine de définition et dresser le tableau de variations.", solution: "1. Limite en -∞ = 1 car xe^x tend vers 0. \n2. Limite en +∞ = +∞.\n3. Dérivée f'(x) = (2x + 1)e^x. Annulation en x = -1/2.", author: "Prof. Belkacem" },
    { id: 2, title: "Physique BAC: Circuit RLC en Série", subject: "Physics", difficulty: "Medium", content: "Un condensateur de capacité C=10µF est chargé puis connecté à une bobine d'inductance L=0.1H. Calculer la période propre des oscillations T0.", solution: "Formule: T0 = 2π√(L.C) = 2π√(0.1 × 10^-5) ≈ 6.28 ms.", author: "Prof. Meriem" },
    { id: 3, title: "Sciences: La Synthèse Protéique (ARNm)", subject: "Science", difficulty: "Hard", content: "Expliquez le mécanisme de la transcription de l'ADN en ARNm chez les cellules eucaryotes.", solution: "La transcription se déroule dans le noyau grâce à l'ARN polymérase qui ouvre le double brin d'ADN et apparie les nucléotides ribonucléiques selon la complémentarité (A-U, C-G, T-A, G-C).", author: "Dr. Khaled" },
    { id: 4, title: "Philosophie BAC: Liberté et Déterminisme", subject: "Philosophy", difficulty: "Medium", content: "L'homme est-il maître de son destin ou soumis au déterminisme scientifique et social ?", solution: "Plan conseillé : I. Thèse déterministe (Spinoza, Bourdieu). II. Antithèse libertaire (Sartre, Kant). III. Synthèse : La liberté située et conquise.", author: "Prof. Fatima" }
  ],
  library: [
    { id: 1, title: "Annales BAC Mathématiques 2018-2023", category: "Math", size: "14.2 MB", downloads: 1420, format: "PDF", link: "#" },
    { id: 2, title: "Résumé Complet Physique-Chimie (Unités 1 à 6)", category: "Physics", size: "8.5 MB", downloads: 980, format: "PDF", link: "#" },
    { id: 3, title: "Fiches de Révision Sciences Naturelles BAC", category: "Science", size: "11.1 MB", downloads: 2150, format: "PDF", link: "#" },
    { id: 4, title: "Méthodologie Dissertation Philosophique", category: "Philosophy", size: "3.4 MB", downloads: 640, format: "PDF", link: "#" }
  ],
  posts: [
    { id: 1, authorName: "Amine Dz", authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amine", date: "2 hours ago", content: "Salam everyone! Who is ready for the upcoming Baccalaureate mock exams? Any tips for remembering organic chemistry reactions?", likes: 24, likedByMe: false, comments: [
      { author: "Sid Ahmed", text: "Try grouping them by functional groups! Also make flashcards. You got this!" },
      { author: "Sarah B.", text: "Check out the library section, there is an amazing summary PDF!" }
    ]},
    { id: 2, authorName: "Lina Cherif", authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lina", date: "5 hours ago", content: "Just tried the new Taleb AI assistant to explain complex numbers geometry. Absolutely blown away! Highly recommend.", likes: 45, likedByMe: true, comments: [] }
  ],
  notifications: [
    { id: 1, text: "Welcome to Taleb AI! Explore our exercises and AI assistant.", date: "Today" },
    { id: 2, text: "Prof. Belkacem added a new Math exercise.", date: "Yesterday" }
  ]
};

// Translations Dictionary
const TRANSLATIONS = {
  en: {
    "nav_home": "Home",
    "nav_dashboard": "Dashboard",
    "nav_exercises": "Exercises",
    "nav_library": "Library",
    "nav_ai": "AI Assistant",
    "nav_community": "Community",
    "nav_admin": "Admin Panel",
    "nav_login": "Login",
    "nav_register": "Register",
    "nav_logout": "Logout",
    "hero_title": "The Futuristic AI Platform for Algerian Students",
    "hero_subtitle": "Master your BEM & BAC exams with personalized AI tutoring, smart exercises, rich library, and a vibrant community.",
    "btn_get_started": "Get Started Free",
    "btn_explore": "Explore Features",
    "feat_ai_title": "Futuristic AI Tutor",
    "feat_ai_desc": "Instant, tailored explanations aligned with the Algerian educational curriculum.",
    "feat_ex_title": "Interactive Exercises",
    "feat_ex_desc": "Hundreds of BAC & BEM exercises with detailed step-by-step solutions.",
    "feat_comm_title": "Active Student Hub",
    "feat_comm_desc": "Connect, discuss, share summaries, and study together with peers nationwide.",
    "footer_text": "© 2026 Taleb AI. Empowering Algerian Education with Artificial Intelligence."
  },
  fr: {
    "nav_home": "Accueil",
    "nav_dashboard": "Tableau de Bord",
    "nav_exercises": "Exercices",
    "nav_library": "Bibliothèque",
    "nav_ai": "Assistant IA",
    "nav_community": "Communauté",
    "nav_admin": "Administration",
    "nav_login": "Connexion",
    "nav_register": "S'inscrire",
    "nav_logout": "Déconnexion",
    "hero_title": "La Plateforme IA Futuriste pour les Étudiants Algériens",
    "hero_subtitle": "Maîtrisez votre BEM et BAC avec un tutorat IA personnalisé, des exercices corrigés et une communauté dynamique.",
    "btn_get_started": "Démarrer Gratuitement",
    "btn_explore": "Explorer les Outils",
    "feat_ai_title": "Tuteur IA Futuriste",
    "feat_ai_desc": "Explications instantanées et adaptées au programme de l'Éducation Nationale.",
    "feat_ex_title": "Exercices Corrigés",
    "feat_ex_desc": "Des centaines de sujets BAC & BEM avec solutions détaillées étape par étape.",
    "feat_comm_title": "Communauté Active",
    "feat_comm_desc": "Échangez, posez vos questions et partagez vos fiches de révision avec d'autres lycéens.",
    "footer_text": "© 2026 Taleb AI. Propulser l'éducation algérienne par l'Intelligence Artificielle."
  },
  ar: {
    "nav_home": "الرئيسية",
    "nav_dashboard": "لوحة التحكم",
    "nav_exercises": "التمارين",
    "nav_library": "المكتبة",
    "nav_ai": "المساعد الذكي",
    "nav_community": "المجتمع",
    "nav_admin": "لوحة الإدارة",
    "nav_login": "تسجيل الدخول",
    "nav_register": "إنشاء حساب",
    "nav_logout": "تسجيل خروج",
    "hero_title": "المنصة التعليمية المستقبلية للطلاب الجزائريين",
    "hero_subtitle": "تفوق في شهادتي البكالوريا والتعليم المتوسط مع الذكاء الاصطناعي، تمارين محلولة، ومجتمع طلابي متفاعل.",
    "btn_get_started": "ابدأ التعلم مجاناً",
    "btn_explore": "اكتشف المميزات",
    "feat_ai_title": "مدرس ذكاء اصطناعي",
    "feat_ai_desc": "شرح فوري وتفاعلي متوافق تماماً مع المناهج التعليمية الجزائرية الرسمية.",
    "feat_ex_title": "تمارين وحلول مفصلة",
    "feat_ex_desc": "مئات التمارين وحوليات البكالوريا مع حلول نموذجية خطوة بخطوة.",
    "feat_comm_title": "مجتمع طلابي نشط",
    "feat_comm_desc": "تواصل مع زملائك، شارك ملخصاتك، وناقش أصعب المواضيع الدراسية.",
    "footer_text": "© 2026 طالب AI. تطوير التعليم الجزائري بواسطة الذكاء الاصطناعي."
  }
};

// Initialize Application Data
function initTalebApp() {
  if (!localStorage.getItem("taleb_users")) {
    localStorage.setItem("taleb_users", JSON.stringify(DEFAULT_DATA.users));
  }
  if (!localStorage.getItem("taleb_exercises")) {
    localStorage.setItem("taleb_exercises", JSON.stringify(DEFAULT_DATA.exercises));
  }
  if (!localStorage.getItem("taleb_library")) {
    localStorage.setItem("taleb_library", JSON.stringify(DEFAULT_DATA.library));
  }
  if (!localStorage.getItem("taleb_posts")) {
    localStorage.setItem("taleb_posts", JSON.stringify(DEFAULT_DATA.posts));
  }
  if (!localStorage.getItem("taleb_notifications")) {
    localStorage.setItem("taleb_notifications", JSON.stringify(DEFAULT_DATA.notifications));
  }
  if (!localStorage.getItem("taleb_lang")) {
    localStorage.setItem("taleb_lang", "en");
  }
  if (!localStorage.getItem("taleb_theme")) {
    localStorage.setItem("taleb_theme", "dark");
  }

  applyTheme();
  applyLanguage();
  renderNavbar();
}

// Auth Helpers
function getCurrentUser() {
  const userJson = localStorage.getItem("taleb_currentUser");
  return userJson ? JSON.parse(userJson) : null;
}

function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("taleb_users"));
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (user) {
    localStorage.setItem("taleb_currentUser", JSON.stringify(user));
    return true;
  }
  return false;
}

function registerUser(name, email, password) {
  const users = JSON.parse(localStorage.getItem("taleb_users"));
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return false; // Email exists
  }
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: email.toLowerCase() === SUPER_ADMIN_EMAIL ? "admin" : "student",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
    streak: 1,
    points: 100,
    level: "Novice Scholar"
  };
  users.push(newUser);
  localStorage.setItem("taleb_users", JSON.stringify(users));
  localStorage.setItem("taleb_currentUser", JSON.stringify(newUser));
  return true;
}

function logoutUser(redirectPath = "index.html") {
  localStorage.removeItem("taleb_currentUser");
  window.location.href = redirectPath;
}

// Theme Management
function toggleTheme() {
  const current = localStorage.getItem("taleb_theme");
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("taleb_theme", next);
  applyTheme();
}

function applyTheme() {
  const theme = localStorage.getItem("taleb_theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    document.body.className = "bg-slate-950 text-slate-100 min-h-screen relative";
  } else {
    document.documentElement.classList.remove("dark");
    document.body.className = "bg-slate-50 text-slate-900 min-h-screen relative";
  }
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.innerHTML = theme === "dark" ? '<i class="fa-solid fa-sun text-yellow-400 text-xl"></i>' : '<i class="fa-solid fa-moon text-slate-700 text-xl"></i>';
  }
}

// Language Management
function setLanguage(lang) {
  localStorage.setItem("taleb_lang", lang);
  applyLanguage();
  window.location.reload();
}

function applyLanguage() {
  const lang = localStorage.getItem("taleb_lang") || "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerText = TRANSLATIONS[lang][key];
    }
  });

  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    langSelect.value = lang;
  }
}

function t(key) {
  const lang = localStorage.getItem("taleb_lang") || "en";
  return TRANSLATIONS[lang][key] || key;
}

// Dynamic Navbar Construction
function renderNavbar() {
  const navContainer = document.getElementById("navbar-container");
  if (!navContainer) return;

  const user = getCurrentUser();
  const isAdmin = user && user.email === SUPER_ADMIN_EMAIL;

  // Determine path level based on current URL
  const loc = window.location.pathname;
  let base = "./";
  if (loc.includes("/auth/") || loc.includes("/pages/") || loc.includes("/dashboard/") || loc.includes("/admin/")) {
    base = "../";
  }

  let rightMenu = "";
  if (user) {
    rightMenu = `
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <a href="${base}pages/profile.html" class="flex items-center space-x-2 rtl:space-x-reverse bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 px-3 py-1.5 rounded-full transition border border-emerald-500/20">
          <img src="${user.avatar}" alt="Avatar" class="w-6 h-6 rounded-full bg-emerald-100">
          <span class="font-semibold text-sm">${user.name}</span>
        </a>
        <button onclick="logoutUser('${base}index.html')" class="text-slate-500 hover:text-red-500 p-2 rounded-lg transition" title="${t('nav_logout')}">
          <i class="fa-solid fa-right-from-bracket text-lg"></i>
        </button>
      </div>
    `;
  } else {
    rightMenu = `
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <a href="${base}auth/login.html" class="text-slate-600 dark:text-slate-300 hover:text-emerald-500 font-medium px-3 py-2 transition">${t('nav_login')}</a>
        <a href="${base}auth/register.html" class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium px-4 py-2 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition transform hover:-translate-y-0.5">${t('nav_register')}</a>
      </div>
    `;
  }

  navContainer.innerHTML = `
    <nav class="glass sticky top-0 z-50 px-6 py-4 border-b border-white/20 dark:border-white/10">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Brand -->
        <a href="${base}index.html" class="flex items-center space-x-3 rtl:space-x-reverse group">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition transform">
            T
          </div>
          <span class="font-black text-2xl tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
            Taleb <span class="text-slate-800 dark:text-white">AI</span>
          </span>
        </a>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
          <a href="${base}index.html" class="nav-link px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition">${t('nav_home')}</a>
          ${user ? `<a href="${base}dashboard/index.html" class="nav-link px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition">${t('nav_dashboard')}</a>` : ''}
          <a href="${base}pages/exercises.html" class="nav-link px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition">${t('nav_exercises')}</a>
          <a href="${base}pages/library.html" class="nav-link px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition">${t('nav_library')}</a>
          <a href="${base}pages/ai-chat.html" class="nav-link flex items-center space-x-1.5 rtl:space-x-reverse px-4 py-2 rounded-lg font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition">
            <i class="fa-solid fa-wand-magic-sparkles text-sm animate-pulse"></i>
            <span>${t('nav_ai')}</span>
          </a>
          <a href="${base}pages/community.html" class="nav-link px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition">${t('nav_community')}</a>
          ${isAdmin ? `<a href="${base}admin/dashboard.html" class="nav-link px-4 py-2 rounded-lg font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transition">${t('nav_admin')}</a>` : ''}
        </div>

        <!-- Controls & Auth -->
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <!-- Language Select -->
          <select id="languageSelect" onchange="setLanguage(this.value)" class="bg-transparent text-slate-700 dark:text-slate-300 font-medium text-sm py-1 px-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer">
            <option value="en" class="bg-slate-800 text-white">EN</option>
            <option value="fr" class="bg-slate-800 text-white">FR</option>
            <option value="ar" class="bg-slate-800 text-white">العربية</option>
          </select>

          <!-- Theme Toggle -->
          <button id="themeToggle" onclick="toggleTheme()" class="p-2 rounded-xl hover:bg-slate-500/10 transition" title="Toggle Theme"></button>

          ${rightMenu}

          <!-- Mobile Toggle -->
          <button id="mobileMenuBtn" onclick="toggleMobileMenu()" class="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-500/10 rounded-xl">
            <i class="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobileMenu" class="hidden md:hidden mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-2">
        <a href="${base}index.html" class="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10">${t('nav_home')}</a>
        ${user ? `<a href="${base}dashboard/index.html" class="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10">${t('nav_dashboard')}</a>` : ''}
        <a href="${base}pages/exercises.html" class="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10">${t('nav_exercises')}</a>
        <a href="${base}pages/library.html" class="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10">${t('nav_library')}</a>
        <a href="${base}pages/ai-chat.html" class="px-4 py-2 rounded-lg font-medium text-emerald-500 hover:bg-emerald-500/10">${t('nav_ai')}</a>
        <a href="${base}pages/community.html" class="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10">${t('nav_community')}</a>
        ${isAdmin ? `<a href="${base}admin/dashboard.html" class="px-4 py-2 rounded-lg font-medium text-purple-500 hover:bg-purple-500/10">${t('nav_admin')}</a>` : ''}
      </div>
    </nav>
  `;
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("hidden");
}

// Execute on load
document.addEventListener("DOMContentLoaded", () => {
  initTalebApp();
});
