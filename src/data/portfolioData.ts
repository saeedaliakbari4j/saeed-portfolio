export interface ProjectItem {
  id: string;
  titleFa: string;
  titleEn: string;
  category: 'ai' | 'fintech' | 'web' | 'other';
  categoryLabelFa: string;
  categoryLabelEn: string;
  descFa: string;
  descEn: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  highlightsFa: string;
  highlightsEn: string;
  stats?: string;
}

export interface ExperienceItem {
  companyFa: string;
  companyEn: string;
  roleFa: string;
  roleEn: string;
  periodFa: string;
  periodEn: string;
  locationFa: string;
  locationEn: string;
  descFa: string;
  descEn: string;
  skills: string[];
  badgeFa?: string;
  badgeEn?: string;
}

export interface SkillCategory {
  titleFa: string;
  titleEn: string;
  icon: string;
  items: { name: string; level: number; noteFa?: string; noteEn?: string }[];
}

export const portfolioData = {
  profile: {
    nameFa: 'سعید علی‌اکبری',
    nameEn: 'Saeed Aliakbari',
    greetingFa: 'سلام، من سعید علی اکبری هستم',
    greetingEn: "Hi, I'm Saeed Aliakbari",
    roleFa: 'مهندس ارشد نرم‌افزار و معمار هوش مصنوعی',
    roleEn: 'Lead Software Engineer & AI Architect',
    sloganFa: 'از معماری نرم‌افزار تا خلق راهکارهای هوشمند.',
    sloganEn: 'From Software Architecture to Intelligent Solutions.',
    headlineFa: 'با بیش از ۱۴ سال تجربه در طراحی و توسعه سامانه‌های سازمانی و بانکی، مبتنی بر معماری نرم‌افزارهای مقیاس‌پذیر، هوش مصنوعی مولد، سیستم‌های RAG و راهکارهای هوشمند مبتنی بر LLM تمرکز دارم.',
    headlineEn: 'With over 14 years of experience architecting enterprise and banking platforms, focusing on scalable software systems, Generative AI, production RAG pipelines, and intelligent LLM-driven solutions.',
    bioFa: 'با بیش از ۱۴ سال تجربه در طراحی و توسعه سامانه‌های سازمانی و بانکی، مبتنی بر معماری نرم‌افزارهای مقیاس‌پذیر، هوش مصنوعی مولد، سیستم‌های RAG و راهکارهای هوشمند مبتنی بر LLM تمرکز دارم. در طول این مسیر، در شرکت به‌پرداخت ملت (بزرگ‌ترین PSP خاورمیانه) بر معماری سامانه‌های پردازش تراکنش با لود بالا نظارت داشته و در رایامیت به عنوان بنیان‌گذار فنی، سامانه‌های تحت وب و خطوط هوشمند داده را هدایت کرده‌ام.',
    bioEn: 'With over 14 years of experience architecting enterprise and banking platforms, focusing on scalable software systems, Generative AI, production RAG pipelines, and intelligent LLM-driven solutions. Leading critical payment processing engines at Behpardakht Mellat and co-founding Rayamate to deliver intelligent web architectures.',
    locationFa: 'تهران، ایران',
    locationEn: 'Tehran, Iran',
    availabilityFa: 'آماده پذیرش پروژه‌های راهبردی و مشاوره هوش مصنوعی',
    availabilityEn: 'Available for Strategic Projects & AI Architecture Consulting',
    email: 'saeedaliakbari4j@gmail.com',
    github: 'https://github.com/saeedaliakbari4j',
    linkedin: 'https://www.linkedin.com/in/saeed-aliakbari/',
    avatarUrl: '/saeed.jpg',
  },

  stats: [
    { value: '+۱۴', labelFa: 'سال سابقه توسعه و معماری نرم‌افزار', labelEn: 'Years Engineering & Architecture' },
    { value: '+۲۰', labelFa: 'سامانه کلان بانکی و سازمانی پیاده‌شده', labelEn: 'Enterprise & Payment Systems' },
    { value: '۳K+', labelFa: 'متخصص همراه در لینکدین', labelEn: 'LinkedIn Professional Network' },
    { value: '۹۹.۹٪', labelFa: 'پایداری و دسترسی‌پذیری سیستم‌ها', labelEn: 'Mission-Critical Availability' },
  ],

  experiences: [
    {
      companyFa: 'به‌پرداخت ملت (Behpardakht Mellat)',
      companyEn: 'Behpardakht Mellat (PSP)',
      roleFa: 'توسعه‌دهنده ارشد BPM و راهکارهای هوش مصنوعی',
      roleEn: 'Senior AI & Enterprise BPM Engineer',
      periodFa: '۲۰۱۶ - اکنون',
      periodEn: '2016 - Present',
      locationFa: 'تهران، ایران',
      locationEn: 'Tehran, Iran',
      descFa: 'طراحی و پیاده‌سازی سرویس‌های پردازش بانکی در مقیاس میلیون‌ها تراکنش روزانه، اتوماسیون فرآیندهای سازمانی با BPMN، توسعه الگوریتم‌های اعتبارسنجی شبکه شتاب و شبا، و پیاده‌سازی ابزارهای هوشمند تحلیلی.',
      descEn: 'Engineering ultra-high throughput payment processing engines handling millions of daily transactions, designing BPMN automated enterprise workflows, and developing validation algorithms for interbank networks.',
      skills: ['C# / .NET Core', 'Python', 'BPMN Systems', 'FinTech Protocols', 'SQL / High Availability'],
      badgeFa: 'سامانه‌های کلان بانکی و پرداخت',
      badgeEn: 'Mission-Critical FinTech',
    },
    {
      companyFa: 'رایامیت (Rayamate)',
      companyEn: 'Rayamate',
      roleFa: 'بنیان‌گذار فنی و راهبر نرم‌افزار',
      roleEn: 'Technical Co-Founder & Lead Engineer',
      periodFa: '۲۰۱۹ - اکنون',
      periodEn: '2019 - Present',
      locationFa: 'تهران، ایران',
      locationEn: 'Tehran, Iran',
      descFa: 'رهبری معماری نرم‌افزار، توسعه پلتفرم‌های مقیاس‌پذیر تحت وب، پیاده‌سازی خطوط داده هوش مصنوعی مولد، سیستم‌های RAG و طراحی میکروسرویس‌های ماژولار و پرسرعت برای مشتریان سازمانی.',
      descEn: 'Architecting scalable web applications, designing modular microservices, and implementing Generative AI and RAG data pipelines for demanding business environments.',
      skills: ['Python', 'FastAPI', 'React', 'Astro', 'Docker', 'AI Pipelines', 'RAG'],
      badgeFa: 'پروژه‌های استارتاپی و هوش مصنوعی',
      badgeEn: 'Startup & AI Innovation',
    },
    {
      companyFa: 'دانشگاه شهید بهشتی (Shahid Beheshti University)',
      companyEn: 'Shahid Beheshti University',
      roleFa: 'کارشناسی ارشد مهندسی کامپیوتر و نرم‌افزار',
      roleEn: 'M.Sc. in Computer Engineering & Software Systems',
      periodFa: '۲۰۱۲ - ۲۰۱۵',
      periodEn: '2012 - 2015',
      locationFa: 'تهران، ایران',
      locationEn: 'Tehran, Iran',
      descFa: 'تحصیلات تکمیلی در حوزه مهندسی نرم‌افزار، طراحی سیستم‌های پیشرفته، معماری پایگاه‌های داده، الگوریتم‌های توزیع‌شده و بهینه‌سازی سامانه‌های نرم‌افزاری.',
      descEn: 'Graduate studies focusing on software engineering principles, distributed systems, database architectures, and advanced algorithm design.',
      skills: ['Software Engineering', 'Distributed Systems', 'Algorithms', 'Database Design'],
      badgeFa: 'تحصیلات تکمیلی آکادمیک',
      badgeEn: 'Graduate Academic Studies',
    },
    {
      companyFa: 'آموزش تخصصی و وبینارها (Tech Instructor)',
      companyEn: 'Tech Education & Mentorship',
      roleFa: 'مدرس علوم کامپیوتر و سخنران وبینارهای فناوری',
      roleEn: 'Computer Science Instructor & Webinar Speaker',
      periodFa: '۲۰۱۷ - اکنون',
      periodEn: '2017 - Present',
      locationFa: 'ایران',
      locationEn: 'Iran',
      descFa: 'تدریس مبانی هوش مصنوعی، طراحی الگوریتم، پایتون و مهندسی نرم‌افزار؛ سخنران چندین وبینار تخصصی در زمینه تحول فناوری و هدایت نسل جدید مهندسان نرم‌افزار.',
      descEn: 'Mentoring hundreds of emerging developers in Python, algorithms, and software engineering; keynote speaker at specialized computing webinars and tech events.',
      skills: ['Python Teaching', 'Algorithms', 'AI Webinars', 'Mentorship'],
      badgeFa: 'جامعه و آموزش تخصصی',
      badgeEn: 'Community & Mentorship',
    },
  ],

  projects: [
    {
      id: 'thesis-rag',
      titleFa: 'سیستم بازیابی هوشمند RAG پیشرفته',
      titleEn: 'Advanced Thesis RAG Engine',
      category: 'ai',
      categoryLabelFa: 'هوش مصنوعی و RAG',
      categoryLabelEn: 'AI & RAG',
      descFa: 'سیستم بازیابی اطلاعات نسل جدید (RAG) با تکه‌بندی هوشمند متون، پایگاه‌داده برداری، و تلفیق مدل‌های زبانی بزرگ برای استخراج پاسخ‌های بی‌درنگ و مستند بدون توهم.',
      descEn: 'Production-ready Retrieval-Augmented Generation pipeline featuring semantic chunking, dense vector representations, and hallucination-free contextual generation.',
      tags: ['Python', 'Jupyter', 'LangChain', 'Vector DB', 'LLM RAG'],
      repoUrl: 'https://github.com/saeedaliakbari4j/thesis-rag',
      highlightsFa: 'دقت تطابق معنایی بالا، بازیابی زیر ۱۰۰ میلی‌ثانیه، بازآرایی ترکیبی (Hybrid Rerank)',
      highlightsEn: 'High semantic precision, sub-100ms vector lookup, hybrid reranking',
      stats: 'NLP & LLM Core',
    },
    {
      id: 'agah-platform',
      titleFa: 'پلتفرم جامع هوش تجاری آگاه',
      titleEn: 'Agah Intelligence Platform',
      category: 'ai',
      categoryLabelFa: 'سیستم‌های داده و هوش تجاری',
      categoryLabelEn: 'Data & Enterprise AI',
      descFa: 'پلتفرم توزیع‌شده مانیتورینگ و آنالیز هوشمند فرآیندها با خطوط پردازش داده در لحظه و مصورسازی شاخص‌های عملکرد کلیدی.',
      descEn: 'Distributed analytics and enterprise telemetry platform designed for real-time anomaly discovery and automated business metric synthesis.',
      tags: ['Python', 'FastAPI', 'Distributed Architecture', 'Analytics'],
      repoUrl: 'https://github.com/saeedaliakbari4j/agah-platform',
      highlightsFa: 'پردازش بلادرنگ جریان‌های داده، مقیاس‌پذیری افقی، رابط داشبورد زنده',
      highlightsEn: 'Real-time telemetry pipelines, horizontal scalability, live telemetry UI',
      stats: 'Enterprise Grade',
    },
    {
      id: 'sheba-converter',
      titleFa: 'مبدل و اعتبارسنج شبکه شتاب و شبا',
      titleEn: 'Iranian Sheba & IBAN Banking Engine',
      category: 'fintech',
      categoryLabelFa: 'فین‌تک و پرداخت',
      categoryLabelEn: 'FinTech & Banking',
      descFa: 'موتور دقیق محاسباتی برای تولید، اعتبارسنجی فرمول چکسام شبا، تشخیص خودکار بانک عامل، و تبدیل شماره حساب‌های بانکی مطابق با پروتکل‌های شتاب.',
      descEn: 'Cryptographically sound banking utility engine for Iranian IBAN (Sheba) calculation, checksum verification, and bank routing according to interbank protocol standards.',
      tags: ['Python', 'Banking Protocol', 'FinTech', 'Checksum Algorithm'],
      repoUrl: 'https://github.com/saeedaliakbari4j/sheba-converter',
      highlightsFa: 'انطباق ۱۰۰٪ با استاندارد RFC 13616، صفر درصد خطای محاسباتی، کدنویسی بهینه',
      highlightsEn: '100% RFC 13616 compliance, zero false-positives, lightning execution',
      stats: 'Banking Verified',
    },
    {
      id: 'iap-cafebazar',
      titleFa: 'سیستم پرداخت امن درون‌برنامه‌ای',
      titleEn: 'CafeBazaar Secure IAP Suite',
      category: 'fintech',
      categoryLabelFa: 'فین‌تک و امنیت',
      categoryLabelEn: 'FinTech & Security',
      descFa: 'کتابخانه پرداخت و توکن‌های تراکنشی با اعتبارسنجی رمزنگاری‌شده و حفاظت در برابر حملات جعل تراکنش (Anti-Fraud).',
      descEn: 'Resilient in-app payment and billing micro-framework with cryptographic signature validation and anti-replay protection.',
      tags: ['C#', '.NET', 'Cryptography', 'Payment Gateway'],
      repoUrl: 'https://github.com/saeedaliakbari4j/IAP-CafeBazar',
      highlightsFa: 'تایید امضای رمزنگاری سروری، محافظت ضد جعل، پایداری بالا',
      highlightsEn: 'Server-side cryptographic handshake, anti-replay guards',
      stats: 'Cryptographic Security',
    },
    {
      id: 'class-bot',
      titleFa: 'ربات تعاملی مدیریت کلاس و آزمون',
      titleEn: 'Interactive Classroom Telemetry Bot',
      category: 'web',
      categoryLabelFa: 'اتوماسیون و ابزار وب',
      categoryLabelEn: 'Automation & Web',
      descFa: 'سیستم خودکار تعاملی برای پاسخگویی به سوالات متداول آموزشی، ثبت نمرات، و ارسال اطلاعیه‌های هوشمند بر بستر پیام‌رسان‌ها.',
      descEn: 'Autonomous interactive classroom assistant orchestrating automated quiz grading, student Q&A routing, and intelligent announcement broadcasts.',
      tags: ['Python', 'Bot Architecture', 'Webhooks', 'Education Tech'],
      repoUrl: 'https://github.com/saeedaliakbari4j/class-bot',
      highlightsFa: 'پاسخگویی آنی، سیستم ترکینگ دانشجویان، راه‌اندازی با کانتینر',
      highlightsEn: 'Instant responses, automated student analytics, containerized',
      stats: 'Autonomous Agent',
    },
    {
      id: 'taxikhati',
      titleFa: 'بازی شبیه‌ساز تاکسی خطی',
      titleEn: 'TaxiKhati Retro Physics Game',
      category: 'other',
      categoryLabelFa: 'گیم و محاسبات گرافیکی',
      categoryLabelEn: 'Game Dev & Physics',
      descFa: 'یک بازی نوستالژیک مبتنی بر الگوریتم‌های اختصاصی فیزیک برخورد و هوش مصنوعی ترافیک شهری با رندر ۶۰ فریم.',
      descEn: 'A retro simulation game programmed with custom collision detection physics and procedural urban traffic logic running at a locked 60 FPS.',
      tags: ['C / C++', 'Game Engine', 'Procedural AI', 'Physics'],
      repoUrl: 'https://github.com/saeedaliakbari4j/TaxiKhati',
      highlightsFa: 'حلقه رندرینگ ۶۰ فریم اختصاصی، فیزیک برخورد سبک، خلاقیت ناب',
      highlightsEn: 'Custom 60 FPS loop, lightweight physics, retro aesthetic',
      stats: '60 FPS Physics',
    },
  ],

  skillCategories: [
    {
      titleFa: 'هوش مصنوعی، RAG و LLM',
      titleEn: 'AI, RAG & LLM Architectures',
      icon: 'brain',
      items: [
        { name: 'RAG Systems (معماری بازیابی افزوده متون)', level: 98, noteFa: 'تخصص در وکتور دیتابیس‌ها، پایپ‌لاین‌های ترکیبی و کاهش خطای توهم', noteEn: 'Dense vector search, hybrid chunking & reranking' },
        { name: 'Generative AI & LLM Integration', level: 96, noteFa: 'پیاده‌سازی ایجنت‌های هوشمند، فانکشن کالینگ و مدل‌های زبانی', noteEn: 'Agentic workflows, function calling, custom tooling' },
        { name: 'LangChain & LlamaIndex Frameworks', level: 92, noteFa: 'توسعه زنجیره‌های داده، حافظه تعاملی و بازیابی کانتکست', noteEn: 'Chains, memory, routing & agent architectures' },
        { name: 'Vector DBs (Chroma, Milvus, Qdrant)', level: 94, noteFa: 'اندیس‌گذاری و جستجوی شباهت کسینوسی در مقیاس بالا', noteEn: 'High-scale indexing & cosine similarity pipelines' },
        { name: 'Python & PyTorch', level: 95, noteFa: 'توسعه سیستم‌های تحلیلی، خطوط پردازش داده و مدل‌های عصبی', noteEn: 'Neural networks, embeddings, and tensor workflows' },
      ],
    },
    {
      titleFa: 'معماری سامانه‌های مقیاس‌پذیر و بک‌اند',
      titleEn: 'Scalable Systems & Backend Architecture',
      icon: 'server',
      items: [
        { name: 'C# / .NET Core Enterprise Systems', level: 95, noteFa: 'توسعه سرویس‌های کلان سازمانی با معماری تمیز و پایداری بالا', noteEn: 'Enterprise-grade, clean architecture, high reliability' },
        { name: 'Python (FastAPI, Django)', level: 96, noteFa: 'سرویس‌های ناهمگام (Async IO) فوق‌سریع و APIهای ماژولار', noteEn: 'Async IO, REST, OpenAPI, high-performance microservices' },
        { name: 'BPM & Business Process Management', level: 92, noteFa: 'طراحی فرآیندهای کسب‌وکار و سیستم‌های BPMN سازمانی', noteEn: 'BPMN workflow engines, process automation' },
        { name: 'Microservices & Containerization (Docker)', level: 92, noteFa: 'طراحی معماری میکروسرویس و مدیریت کانتینرها', noteEn: 'Containerization, orchestration, scalable clusters' },
        { name: 'Databases (PostgreSQL, Redis, SQL)', level: 94, noteFa: 'طراحی دیتابیس‌های پرترافیک، کشینگ توزیع‌شده و اسکیلینگ', noteEn: 'Advanced indexing, caching, ACID transactions' },
      ],
    },
    {
      titleFa: 'سیستم‌های فین‌تک و پرداخت بانکی',
      titleEn: 'FinTech & Payment Switch Infrastructure',
      icon: 'shield',
      items: [
        { name: 'سامانه‌های پرداخت و سوئیچ PSP', level: 98, noteFa: 'تسلط عمیق بر شبکه‌های شاپرک، شتاب و تراکنش‌های میلیونی', noteEn: 'Deep knowledge of payment switch, clearing & settlement' },
        { name: 'پروتکل‌های بانکی و اعتبارسنجی شبا / شتاب', level: 96, noteFa: 'محاسبات استانداردهای بانکی و اعتبارسنجی فرمول‌های شبا', noteEn: 'Interbank standards, checksum protocols, routing logic' },
        { name: 'امنیت تراکنش و الگوریتم‌های ضد تقلب', level: 92, noteFa: 'اعتبارسنجی رمزنگاری امضا و کشف ناهنجاری تراکنش‌ها', noteEn: 'Cryptographic checks, anti-fraud anomaly telemetry' },
        { name: 'طراحی سیستم‌های با دسترس‌پذیری ۹۹.۹٪ (High Availability)', level: 96, noteFa: 'معماری بدون توقف و تحمل‌پذیری در برابر خرابی (Fault Tolerance)', noteEn: 'Zero-downtime failover, resilience patterns' },
      ],
    },
    {
      titleFa: 'فرانت‌اند مدرن و پلتفرم‌های وب',
      titleEn: 'Modern Web Platforms & UX',
      icon: 'sparkles',
      items: [
        { name: 'Astro Framework', level: 96, noteFa: 'معماری Island Architecture با سرعت رندر فوق‌العاده', noteEn: 'Zero-JS by default, islands, maximum Lighthouse scores' },
        { name: 'TypeScript & JavaScript', level: 95, noteFa: 'توسعه تایپ‌سیف و ساختاریافته وب اپلیکیشن‌ها', noteEn: 'Type-safe programming, modern async paradigms' },
        { name: 'Tailwind CSS & Responsive UI', level: 94, noteFa: 'طراحی رابط‌های کاربری چشم‌نواز، مدرن و ریسپانسیو', noteEn: 'Custom design systems, animations, glassmorphism' },
        { name: 'React / Next.js', level: 90, noteFa: 'کامپوننت‌های تعاملی و اپلیکیشن‌های پویا', noteEn: 'Interactive components, state management' },
      ],
    },
  ],
};
