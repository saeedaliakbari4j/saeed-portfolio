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
    roleFa: 'معمار ارشد هوش مصنوعی و مهندس نرم‌افزار',
    roleEn: 'Lead AI Architect & Senior Software Engineer',
    headlineFa: 'بیش از ۱۰ سال تجربه در توسعه سیستم‌های بانکی، معماری پیشرفته RAG و پلتفرم‌های مقیاس‌پذیر تحت وب',
    headlineEn: '10+ Years Building High-Throughput FinTech Platforms, Advanced RAG Architectures & Resilient Web Systems',
    bioFa: 'من سعید علی‌اکبری هستم؛ مهندس نرم‌افزار با اشتیاق سوزان برای ساخت سیستم‌هایی که فراتر از انتظار کار می‌کنند. تخصص من پیوند زدن مدل‌های زبانی بزرگ (LLM) و معماری‌های بازیابی هوشمند (RAG) با سامانه‌های کلان بانکی با قابلیت اطمینان ۹۹.۹۹٪ است. در رایامیت راهبری فنی محصولات وب مدرن را بر عهده دارم و در به‌پرداخت ملت (بزرگ‌ترین PSP خاورمیانه) روی زیرساخت‌ها و اتوماسیون فرآیندهای بانکی تمرکز دارم.',
    bioEn: "I'm Saeed Aliakbari, a software engineer obsessed with engineering resilient, high-impact systems. My core expertise sits at the intersection of production-grade Retrieval-Augmented Generation (RAG) and high-throughput financial transaction engines with 99.99% reliability. As Co-Founder & Tech Lead at Rayamate, I build modern web platforms, while at Behpardakht Mellat I engineer critical payment architectures and BPM solutions.",
    locationFa: 'تهران، ایران',
    locationEn: 'Tehran, Iran',
    availabilityFa: 'آماده پذیرش پروژه‌های شاخص و مشاوره هوش مصنوعی',
    availabilityEn: 'Available for Pioneering Projects & AI Consulting',
    email: 'ai-bpmellat@outlook.com',
    github: 'https://github.com/saeedaliakbari',
    linkedin: 'https://www.linkedin.com/in/saeed-aliakbari/',
    avatarUrl: '/saeed.jpg',
  },

  stats: [
    { value: '+10', labelFa: 'سال سابقه توسعه حرفه‌ای', labelEn: 'Years Engineering Experience' },
    { value: '+15', labelFa: 'پروژه و سامانه کلان پیاده‌شده', labelEn: 'Production & Enterprise Systems' },
    { value: '3K+', labelFa: 'متخصص همراه در لینکدین', labelEn: 'LinkedIn Tech Network' },
    { value: '99.9%', labelFa: 'قابلیت اطمینان سیستم‌های بانکی', labelEn: 'Banking High Availability' },
  ],

  experiences: [
    {
      companyFa: 'رایامیت (Rayamate)',
      companyEn: 'Rayamate',
      roleFa: 'بنیان‌گذار فنی و راهبر نرم‌افزار',
      roleEn: 'Technical Co-Founder & Lead Engineer',
      periodFa: '۲۰۱۹ - اکنون',
      periodEn: '2019 - Present',
      locationFa: 'تهران، ایران',
      locationEn: 'Tehran, Iran',
      descFa: 'رهبری معماری نرم‌افزار، توسعه پلتفرم‌های تعاملی تحت وب، پیاده‌سازی خطوط داده هوش مصنوعی و طراحی میکروسرویس‌های ماژولار و پرسرعت برای مشتریان سازمانی.',
      descEn: 'Architecting scalable web applications, designing modular microservices, and implementing AI-driven intelligence pipelines for high-demand client environments.',
      skills: ['Python', 'FastAPI', 'React', 'Astro', 'Docker', 'AI Pipelines'],
      badgeFa: 'پروژه‌های استارتاپی و وب مدرن',
      badgeEn: 'Startup & Modern Web',
    },
    {
      companyFa: 'به‌پرداخت ملت (Behpardakht Mellat)',
      companyEn: 'Behpardakht Mellat (PSP)',
      roleFa: 'توسعه‌دهنده ارشد BPM و راهکارهای هوش مصنوعی',
      roleEn: 'Senior AI & Enterprise BPM Engineer',
      periodFa: '۲۰۱۶ - اکنون',
      periodEn: '2016 - Present',
      locationFa: 'تهران، ایران',
      locationEn: 'Tehran, Iran',
      descFa: 'طراحی و پیاده‌سازی سرویس‌های پردازش بانکی در مقیاس میلیون‌ها تراکنش روزانه، اتوماسیون فرآیندهای پیچیده سازمانی با BPMN، توسعه الگوریتم‌های اعتبارسنجی و سامانه‌های ضد تقلب.',
      descEn: 'Engineering ultra-high throughput payment processing engines handling millions of daily transactions, designing BPMN automated enterprise workflows, and developing validation algorithms.',
      skills: ['C# / .NET Core', 'Python', 'BPMN Systems', 'FinTech Protocols', 'SQL / High Availability'],
      badgeFa: 'سیستم‌های کلان بانکی و پرداخت',
      badgeEn: 'Mission-Critical FinTech',
    },
    {
      companyFa: 'دانشگاه شهید بهشتی (Shahid Beheshti University)',
      companyEn: 'Shahid Beheshti University',
      roleFa: 'پژوهشگر ارشد سیستم‌های RAG و هوش مصنوعی',
      roleEn: 'Senior Researcher in RAG & NLP Systems',
      periodFa: '۲۰۱۲ - ۲۰۱۵',
      periodEn: '2012 - 2015',
      locationFa: 'تهران، ایران',
      locationEn: 'Tehran, Iran',
      descFa: 'پایان‌نامه و پژوهش‌های متمرکز بر سیستم‌های بازیابی اطلاعات هوشمند (RAG)، بهینه‌سازی بردارهای معنادار (Vector Embeddings) و مدل‌های زبانی پردازش متون تخصصی.',
      descEn: 'Conducted in-depth academic research on Retrieval-Augmented Generation, vector embedding similarity, semantic search, and domain-adapted language models.',
      skills: ['PyTorch', 'Vector DB', 'Semantic Search', 'LangChain', 'NLP Research'],
      badgeFa: 'تحقیقات آکادمیک و تز کارشناسی ارشد',
      badgeEn: 'Academic AI Research & Thesis',
    },
    {
      companyFa: 'آموزش تخصصی و تدریس (Tech Instructor)',
      companyEn: 'Tech Education & Mentorship',
      roleFa: 'مدرس علوم کامپیوتر و وبینارهای تخصصی برنامه‌نویسی',
      roleEn: 'Computer Science Instructor & Webinar Speaker',
      periodFa: '۲۰۱۷ - اکنون',
      periodEn: '2017 - Present',
      locationFa: 'ایران',
      locationEn: 'Iran',
      descFa: 'تدریس مبانی هوش مصنوعی، طراحی الگوریتم، پایتون و توسعه وب به دانشجویان و استعدادهای جوان؛ سخنران چندین وبینار تخصصی در حوزه تحول هوش مصنوعی.',
      descEn: 'Mentoring hundreds of emerging developers in Python, algorithms, and AI fundamentals; keynote speaker at specialized computing webinars and tech events.',
      skills: ['Python Teaching', 'Algorithms', 'AI Webinars', 'Mentorship'],
      badgeFa: 'اشتراک دانش و جامعه',
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
      descFa: 'معماری و پیاده‌سازی سیستم بازیابی اطلاعات نسل جدید (RAG) با تکه‌بندی هوشمند متون، پایگاه‌داده برداری، و تلفیق مدل‌های زبانی بزرگ برای استخراج پاسخ‌های بی‌درنگ و مستند.',
      descEn: 'Production-ready Retrieval-Augmented Generation pipeline featuring semantic chunking, dense vector representations, and hallucination-free contextual generation.',
      tags: ['Python', 'Jupyter', 'LangChain', 'Vector DB', 'LLM RAG'],
      repoUrl: 'https://github.com/saeedaliakbari/thesis-rag',
      highlightsFa: 'دقت تطابق معنایی بالا، بازیابی زیر ۱۰۰ میلی‌ثانیه، بازآرایی ترکیبی (Hybrid Rerank)',
      highlightsEn: 'High semantic precision, sub-100ms vector lookup, hybrid reranking',
      stats: 'State-of-the-art NLP',
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
      repoUrl: 'https://github.com/saeedaliakbari/agah-platform',
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
      repoUrl: 'https://github.com/saeedaliakbari/sheba-converter',
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
      repoUrl: 'https://github.com/saeedaliakbari/IAP-CafeBazar',
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
      repoUrl: 'https://github.com/saeedaliakbari/class-bot',
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
      repoUrl: 'https://github.com/saeedaliakbari/TaxiKhati',
      highlightsFa: 'حلقه رندرینگ ۶۰ فریم اختصاصی، فیزیک برخورد سبک، خلاقیت ناب',
      highlightsEn: 'Custom 60 FPS loop, lightweight physics, retro aesthetic',
      stats: '60 FPS Physics',
    },
  ],

  skillCategories: [
    {
      titleFa: 'هوش مصنوعی و یادگیری عمیق',
      titleEn: 'AI & Deep Learning',
      icon: 'brain',
      items: [
        { name: 'RAG Systems (معماری بازیابی افزوده)', level: 98, noteFa: 'تخصص در پایگاه‌های برداری و تکه‌بندی ترکیبی', noteEn: 'Dense vector search, hybrid chunking & reranking' },
        { name: 'LLM Integration & Prompt Engineering', level: 95, noteFa: 'ارتباط با APIها، فانکشن کالینگ، مدل‌های متن‌باز', noteEn: 'Open-source models, function calling, agentic flows' },
        { name: 'LangChain & LlamaIndex', level: 92, noteFa: 'ساخت خطوط هوشمند چند مرحله‌ای', noteEn: 'Chains, memory, routing & agent architectures' },
        { name: 'Vector DBs (Chroma, Milvus, Qdrant)', level: 94, noteFa: 'اندیس‌گذاری و جستجوی شباهت کسینوسی در مقیاس بالا', noteEn: 'High-scale indexing & cosine similarity pipelines' },
        { name: 'Python & PyTorch', level: 95, noteFa: 'پیاده‌سازی مدل‌های عصبی و پردازش داده', noteEn: 'Neural networks, embeddings, and tensor workflows' },
      ],
    },
    {
      titleFa: 'معماری و توسعه بک‌اند',
      titleEn: 'Backend & Enterprise Architecture',
      icon: 'server',
      items: [
        { name: 'Python (FastAPI, Django)', level: 96, noteFa: 'معماری غیرهمگام (Async)، سرویس‌های فوق‌سریع', noteEn: 'Async IO, REST, OpenAPI, high-performance microservices' },
        { name: 'C# / .NET Core', level: 94, noteFa: 'توسعه سامانه‌های سازمانی پایدار و مقیاس‌پذیر', noteEn: 'Enterprise-grade, clean architecture, high reliability' },
        { name: 'BPM & Business Process Management', level: 92, noteFa: 'طراحی گردش کارهای خودکار و BPMN سازمانی', noteEn: 'BPMN workflow engines, process automation' },
        { name: 'Microservices & Docker', level: 90, noteFa: 'معماری سرویس‌گرا و مدیریت کانتینرها', noteEn: 'Containerization, orchestration, scalable clusters' },
        { name: 'Databases (PostgreSQL, Redis, SQL)', level: 93, noteFa: 'بهینه‌سازی کوئری‌های سنگین و کشینگ پیشرفته', noteEn: 'Advanced indexing, caching, ACID transactions' },
      ],
    },
    {
      titleFa: 'سیستم‌های فین‌تک و پرداخت',
      titleEn: 'FinTech & Mission-Critical',
      icon: 'shield',
      items: [
        { name: 'Payment Gateway (PSP) Systems', level: 98, noteFa: 'تسلط عمیق بر شبکه‌های شاپرک، شتاب و تراکنش‌های بانکی', noteEn: 'Deep knowledge of payment switch, clearing & settlement' },
        { name: 'Banking Protocols & IBAN / Sheba', level: 96, noteFa: 'محاسبات استانداردهای بانکی و اعتبارسنجی', noteEn: 'Interbank standards, checksum protocols, routing logic' },
        { name: 'Security & Anti-Fraud Algorithms', level: 90, noteFa: 'کشف ناهنجاری‌ها و مانیتورینگ تراکنش‌های مشکوک', noteEn: 'Cryptographic checks, anti-fraud anomaly telemetry' },
        { name: 'High Availability & Fault Tolerance', level: 95, noteFa: 'طراحی سیستم‌های بدون قطعی با نرخ Uptime ۹۹.۹۹٪', noteEn: 'Zero-downtime failover, resilience patterns' },
      ],
    },
    {
      titleFa: 'فرانت‌اند مدرن و تجربه کاربری',
      titleEn: 'Modern Frontend & UX',
      icon: 'sparkles',
      items: [
        { name: 'Astro Framework', level: 96, noteFa: 'توسعه فوق‌سریع با معماری Island Architecture', noteEn: 'Zero-JS by default, islands, maximum Lighthouse scores' },
        { name: 'TypeScript & JavaScript', level: 95, noteFa: 'کدنویسی تایپ‌سیف و مدرن', noteEn: 'Type-safe programming, modern async paradigms' },
        { name: 'Tailwind CSS & Responsive Design', level: 94, noteFa: 'طراحی رابط‌های کاربری چشم‌نواز و اختصاصی', noteEn: 'Custom design systems, animations, glassmorphism' },
        { name: 'React / Next.js', level: 90, noteFa: 'کامپوننت‌های تعاملی و اپلیکیشن‌های تحت وب', noteEn: 'Interactive components, state management' },
      ],
    },
  ],

  ragKnowledgeBase: [
    {
      topic: 'RAG & AI Expertise',
      chunkFa: 'تخصص سعید علی‌اکبری در RAG شامل بهینه‌سازی Chunkerهای معنادار، مدل‌های ادغام برداری BGE و OpenAI، و بازآرایی (Reranking) است که خطای توهم (Hallucination) مدل‌های زبانی را به زیر ۱٪ می‌رساند.',
      chunkEn: 'Saeed Aliakbari specializes in RAG optimization, employing semantic chunking, dense vector retrieval, and cross-encoder reranking to drive LLM hallucinations below 1%.',
    },
    {
      topic: 'FinTech & Scale',
      chunkFa: 'در به‌پرداخت ملت، سعید بر معماری سیستم‌های با قابلیت پردازش بیش از ۱۰ هزار تراکنش در ثانیه نظارت داشته و الگوریتم‌های اعتبارسنجی دقیق شبا و کارت‌های بانکی را تدوین کرده است.',
      chunkEn: 'At Behpardakht Mellat, Saeed worked on transaction processing systems scaled to handle 10k+ TPS alongside banking validation protocols for Iranian IBANs and payment switches.',
    },
    {
      topic: 'Leadership & Rayamate',
      chunkFa: 'به عنوان بنیان‌گذار در رایامیت، سعید بیش از ۲۰ مهندس و توسعه‌دهنده را در مسیر ساخت سامانه‌های مدرن مبتنی بر وب و ابزارهای هوش مصنوعی هدایت نموده است.',
      chunkEn: 'As Co-Founder of Rayamate, Saeed has led engineering teams delivering modern web platforms and AI products across fintech, healthcare, and logistics sectors.',
    },
  ],
};
