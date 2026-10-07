export const profile = {
  name: 'Ritheesh Reddy Kura',
  role: 'Software Engineer',
  email: 'ritheeshk2003@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ritheeshreddykura/',
  github: 'https://github.com/r4coder',
  resume: '/Ritheesh_Reddy_Kura_Resume.pdf',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const experience = {
  company: 'Synycs Enterprises Private Limited',
  role: 'Software Engineer Intern',
  period: 'Mar 2026 – Aug 2026',
  location: 'Hyderabad, Telangana',
  tech: ['Node.js', 'Express.js', 'REST APIs', 'Git'],
  points: [
    'Built a B2B e-commerce Order & Inventory Management module supporting 500+ products and 1,000+ customer orders.',
    'Designed 15+ REST APIs covering product catalog, inventory, vendor mapping, order creation and order-status tracking, with request validation and centralized error handling.',
    'Implemented real-time inventory synchronization across order workflows, cutting manual stock updates by 60%.',
    'Optimized queries, pagination and API responses for about 30% faster response times on frequently used product and order endpoints.',
  ],
}

export const projects = [
  {
    name: 'FinFlow',
    featured: true,
    summary: 'AI-powered invoice automation platform that takes invoices from extraction through validation, approval and exception handling.',
    problem: 'Invoice processing is repetitive: data extraction, checks, approvals and exceptions are usually handled by hand.',
    features: [
      'Processed 500+ test invoices using Gemini-based extraction combined with deterministic business rules, improving processing efficiency by about 30%.',
      'Multi-level approvals, duplicate and anomaly detection, notifications, audit logging, exception routing and role-based access control.',
      'Asynchronous processing with PostgreSQL, Redis and BullMQ, reducing API blocking during background work by about 40%.',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'BullMQ', 'Gemini'],
    github: 'https://github.com/r4coder/FinFlow',
  },
  {
    name: 'Analytica',
    summary: 'Multi-agent analytics platform that turns natural-language business questions into executable analysis and interactive charts.',
    problem: 'Answering business questions from data normally means manual analysis.',
    features: [
      'LangGraph agents for query understanding, SQL generation, deterministic computation, statistical analysis, validation and response generation.',
      'An independent validation agent checks computed results and rejects unsupported numerical claims, improving reliability by about 25%.',
      'Reduced manual analysis effort by about 50%.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'DuckDB', 'React', 'Pandas', 'NumPy', 'Plotly'],
    github: 'https://github.com/r4coder/Analytica',
  },
  {
    name: 'AskYourDocs',
    summary: 'RAG-based question answering over uploaded PDF and TXT documents.',
    problem: 'Answers from documents should be grounded and traceable to the source.',
    features: [
      'Document extraction, chunking, Gemini embeddings and FAISS similarity search to find relevant context for each query.',
      'Gemini answers grounded in context, with document-level citations and page references (about 30% better traceability).',
      'Per-session document isolation and Docker deployment.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'FAISS', 'Docker', 'Gemini'],
    github: 'https://github.com/r4coder/AskYourDocs',
  },
]

export const skills = [
  { group: 'Languages', items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: 'AI', items: ['Gemini API', 'RAG', 'LangGraph', 'LLM Applications', 'AI Agents', 'Multi-Agent Systems', 'Embeddings', 'Vector Search', 'FAISS', 'Semantic Search', 'NL2SQL'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'BullMQ'] },
  { group: 'Databases', items: ['PostgreSQL', 'Redis'] },
  { group: 'Data & ML', items: ['Pandas', 'NumPy', 'Scikit-learn', 'DuckDB'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Render'] },
]

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  school: 'Vellore Institute of Technology',
  place: 'Vellore, India',
  period: 'Sep 2022 – Jul 2026',
}
