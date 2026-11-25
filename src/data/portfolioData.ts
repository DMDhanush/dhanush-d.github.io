import type {
  PersonalInfo,
  SkillItem,
  CaseStudy,
  SecondaryProject,
  CertificateItem,
  EducationItem,
  AchievementItem,
  TimelineMilestone
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'D Dhanush',
  role: 'Python & Generative AI Application Developer',
  tagline: 'Building Intelligent Applications with Python & AI',
  subheadline:
    "I'm D Dhanush, an MCA graduate passionate about Python development, backend engineering, and Generative AI applications.",
  email: 'dhanushd627@gmail.com',
  phone: '+91 8884262043',
  location: 'Bengaluru, Karnataka, India',
  educationSummary: 'MCA Graduate (CGPA 7.37) | BCA (CGPA 7.00)',
  languages: [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Tamil', level: 'Native / Fluent' },
    { name: 'Kannada', level: 'Fluent' }
  ],
  availability: 'Open for Full-time Roles in Bengaluru / Hybrid',
  resumePdfUrl: './assets/resume/D_Dhanush_Resume.pdf',
  profilePhoto: './assets/profile/dhanush_profile.jpeg?v=2',
  portraitPhoto: './assets/profile/dhanush_portrait.jpg?v=2'
};

export const skillsList: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'programming',
    verifiedInProject: true,
    projectUsage: 'Core engine language for ResearchAI RAG pipeline, FastAPI endpoints, and CNN text models.',
    level: 'Core Competency',
    iconName: 'Code'
  },
  {
    name: 'Java',
    category: 'programming',
    verifiedInProject: false,
    projectUsage: 'Object-oriented programming, data structures, and university coursework fundamentals.',
    level: 'Proficient',
    iconName: 'Coffee'
  },
  {
    name: 'SQL',
    category: 'programming',
    verifiedInProject: true,
    projectUsage: 'Relational database querying, schema modeling, and SQLite / SQLAlchemy integration.',
    level: 'Core Competency',
    iconName: 'Database'
  },

  // Backend & APIs
  {
    name: 'FastAPI',
    category: 'backend',
    verifiedInProject: true,
    projectUsage: 'Asynchronous RESTful APIs, Pydantic request/response validation, and service contracts.',
    level: 'Core Competency',
    iconName: 'Zap'
  },
  {
    name: 'RESTful API Architecture',
    category: 'backend',
    verifiedInProject: true,
    projectUsage: 'Designing clean endpoints, HTTP status codes, structured JSON payloads, and error handling.',
    level: 'Proficient',
    iconName: 'Layers'
  },
  {
    name: 'Streamlit',
    category: 'backend',
    verifiedInProject: true,
    projectUsage: 'Building full dynamic web interfaces, real-time analytics telemetry, and interactive RAG dashboards.',
    level: 'Core Competency',
    iconName: 'Monitor'
  },
  {
    name: 'SQLite & SQLAlchemy ORM',
    category: 'backend',
    verifiedInProject: true,
    projectUsage: 'Session management, document metadata persistence, and transactional record keeping.',
    level: 'Proficient',
    iconName: 'HardDrive'
  },

  // Generative AI & Retrieval
  {
    name: 'Retrieval-Augmented Generation (RAG)',
    category: 'ai_retrieval',
    verifiedInProject: true,
    projectUsage: 'Complete RAG pipeline with chunking, dense vector retrieval, contextual injection, and citation tracking.',
    level: 'Core Competency',
    iconName: 'Brain'
  },
  {
    name: 'Semantic Embeddings',
    category: 'ai_retrieval',
    verifiedInProject: true,
    projectUsage: 'HuggingFace SentenceTransformers for dense text vectorization and semantic similarity search.',
    level: 'Core Competency',
    iconName: 'Network'
  },
  {
    name: 'ChromaDB Vector Store',
    category: 'ai_retrieval',
    verifiedInProject: true,
    projectUsage: 'Vector database indexing, cosine similarity querying, and metadata-filtered chunk retrieval.',
    level: 'Core Competency',
    iconName: 'Box'
  },
  {
    name: 'PyMuPDF (fitz) & Document Ingestion',
    category: 'ai_retrieval',
    verifiedInProject: true,
    projectUsage: 'High-fidelity PDF document parsing, page-level text extraction, and metadata normalization.',
    level: 'Core Competency',
    iconName: 'FileText'
  },
  {
    name: 'Prompt Engineering & LLM Orchestration',
    category: 'ai_retrieval',
    verifiedInProject: true,
    projectUsage: 'Structured prompting for GPT-4o, output validation with Pydantic, and multi-agent intent routing.',
    level: 'Core Competency',
    iconName: 'Cpu'
  },

  // Web & Cloud
  {
    name: 'HTML5 & CSS3',
    category: 'web_cloud',
    verifiedInProject: true,
    projectUsage: 'Semantic web markup, custom responsive styling, CSS Grid, Flexbox, and modern CSS tokens.',
    level: 'Proficient',
    iconName: 'Layout'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'web_cloud',
    verifiedInProject: true,
    projectUsage: 'DOM manipulation, modern async/await patterns, interactive components, and client-side logic.',
    level: 'Proficient',
    iconName: 'Terminal'
  },
  {
    name: 'AWS Cloud Fundamentals',
    category: 'web_cloud',
    verifiedInProject: false,
    projectUsage: 'Certified via "Hands-on with AWS for IT Professionals" & NPTEL Cloud Computing (EC2, S3, IAM, Cloud architecture).',
    level: 'Hands-on Practice',
    iconName: 'Cloud'
  },

  // Developer Tools
  {
    name: 'Git & GitHub',
    category: 'tools',
    verifiedInProject: true,
    projectUsage: 'Version control, branch management, collaborative workflows, and repository management.',
    level: 'Proficient',
    iconName: 'GitBranch'
  },
  {
    name: 'PyTest & Unit Testing',
    category: 'tools',
    verifiedInProject: true,
    projectUsage: 'Automated test suites for RAG chunkers, semantic similarity scoring, and API route validation.',
    level: 'Proficient',
    iconName: 'CheckCircle2'
  },
  {
    name: 'Pydantic Data Validation',
    category: 'tools',
    verifiedInProject: true,
    projectUsage: 'Schema definition, runtime type checking, and structured LLM JSON outputs.',
    level: 'Core Competency',
    iconName: 'ShieldCheck'
  },
  {
    name: 'Linux / Bash Environment',
    category: 'tools',
    verifiedInProject: true,
    projectUsage: 'Shell scripting, virtual environment configuration, package management, and system operations.',
    level: 'Proficient',
    iconName: 'TerminalSquare'
  }
];

export const flagshipCaseStudy: CaseStudy = {
  id: 'researchai',
  title: 'ResearchAI — Academic Literature Intelligence Platform',
  subtitle: 'An Agentic RAG-Powered Research Assistant for Ingestion, Semantic Retrieval, Multi-Paper Comparative Synthesis & Citation Tracking',
  badge: 'Flagship MCA Final Year Project',
  role: 'Sole Architect & Lead Developer',
  timeline: '2025 – 2026',
  academicContext: 'Post Graduate Department of Computer Applications, Seshadripuram College, Bengaluru',
  problemStatement: [
    'The exponential surge of scientific papers makes thorough literature reviews and research gap identification painfully slow and mentally exhausting.',
    'Keyword searches fail to capture deep semantic nuances, requiring researchers to manually read dozens of lengthy PDFs to find relevant methods or datasets.',
    'Standard consumer LLMs frequently hallucinate unverifiable claims, lack document grounding, and cannot supply trustworthy page-level citations.'
  ],
  solutionOverview:
    'ResearchAI is an autonomous, agentic RAG platform engineered to ingest academic research papers, index them semantically, and orchestrate specialized agents. It provides structural 12-section paper summaries, 9-attribute multi-paper comparison matrices, automated research gap discovery, publication-grade literature reviews with APA citations, and high-precision conversational question-answering with verifiable source page citations.',
  architectureDiagramUrl: './assets/projects/researchai/architecture_layers.png',
  useCaseDiagramUrl: './assets/projects/researchai/usecase_modules.png',
  features: [
    {
      title: 'Multi-Path Document Ingestion & Chunking',
      description: 'Ingests academic PDFs through PyMuPDF, extracts clean page text, cleans header/footer artifacts, and performs semantic window chunking with chunk overlap for context continuity.',
      icon: 'UploadCloud',
      technicalHighlight: 'Preserves page numbers and section boundaries for exact citation tracing.'
    },
    {
      title: 'ChromaDB Semantic Vector Retrieval',
      description: 'Embeds chunks into dense vector representations using SentenceTransformers, enabling sub-second cosine-distance semantic search filtered by specific paper IDs or across the entire uploaded corpus.',
      icon: 'Search',
      technicalHighlight: 'Top-K semantic retrieval with threshold confidence scoring.'
    },
    {
      title: 'Grounded Q&A Engine with Page Citations',
      description: 'Answers complex user queries by injecting retrieved chunks into prompt contexts, providing direct answers backed by verifiable page numbers and evidence snippets to prevent hallucination.',
      icon: 'MessageSquareText',
      technicalHighlight: 'Displays citation chips with source paper name, page number, and similarity score.'
    },
    {
      title: '12-Section Structural Paper Summarizer',
      description: 'Systematically deconstructs any paper into 12 academic dimensions: Objective, Problem Statement, Methodology, Dataset/Sample, Key Findings, Limitations, Future Scope, etc.',
      icon: 'FileCheck',
      technicalHighlight: 'Eliminates superficial summaries by querying targeted semantic prompts per section.'
    },
    {
      title: '9-Attribute Multi-Paper Comparative Matrix',
      description: 'Takes 2 or more research papers and builds a side-by-side comparative matrix covering Research Focus, Methodological Protocol, Datasets, Metrics, and Trade-offs.',
      icon: 'Columns',
      technicalHighlight: 'Automated synthesis of common approaches and contrasting differences.'
    },
    {
      title: 'Multi-Dimensional Research Gap Finder',
      description: 'Analyzes paper limitation sections, unresolved challenges, and author recommendations to highlight untapped research opportunities for scholars.',
      icon: 'Sparkles',
      technicalHighlight: 'Classifies opportunities into Methodological, Dataset, and Scalability gaps.'
    },
    {
      title: 'Publication-Grade Literature Review Generator',
      description: 'Synthesizes analyzed papers into a structured, formal literature review chapter complete with thematic synthesis and standardized APA referencing.',
      icon: 'BookOpen',
      technicalHighlight: 'Outputs formatted markdown ready to be inserted into theses or reports.'
    },
    {
      title: 'Quantitative RAG Benchmark Evaluation Suite',
      description: 'Built-in evaluation telemetry calculating context relevance, faithfulness, citation correctness, and response groundedness scores across queries.',
      icon: 'BarChart2',
      technicalHighlight: 'Visualizes corpus statistics and retrieval performance with Plotly.'
    }
  ],
  techStack: [
    {
      category: 'Core Runtime & AI',
      technologies: ['Python 3.12', 'OpenAI GPT-4o', 'SentenceTransformers', 'PyMuPDF (fitz)']
    },
    {
      category: 'Vector & Relational Storage',
      technologies: ['ChromaDB (Vector Store)', 'SQLite', 'SQLAlchemy ORM', 'Pydantic']
    },
    {
      category: 'Frontend & Analytics UI',
      technologies: ['Streamlit', 'Plotly', 'Pandas', 'NumPy']
    },
    {
      category: 'Testing & Engineering Standards',
      technologies: ['PyTest', 'python-dotenv', 'Modular Agent Supervisor Pattern']
    }
  ],
  implementationDecisions: [
    {
      decision: 'Multi-Agent Supervisor Pattern over Monolithic Prompting',
      rationale:
        'A single generic prompt cannot reliably produce structured summaries, comparative matrices, and gap analyses without cognitive drift.',
      impact:
        'Created specialized agent modules (paper_agent, comparison_agent, gap_agent, literature_agent, insights_agent) routed by a central supervisor.'
    },
    {
      decision: 'ChromaDB Local Vector Persistence with Metadata Isolation',
      rationale:
        'Ensured sub-millisecond retrieval without sending user documents to external cloud vector databases, and enabled strict paper-id filtering.',
      impact:
        'Enables isolated single-paper deep dive queries as well as cross-corpus comparative queries with zero cross-contamination.'
    },
    {
      decision: 'Strict Grounding & Mandatory Page Citations',
      rationale:
        'Academic research demands accountability; any claim made by an AI assistant without evidence is unusable by a researcher.',
      impact:
        'Every answer maps to verifiable source snippets, showing paper title, exact page number, and similarity score.'
    }
  ],
  challengesLearnings: [
    {
      challenge: 'Handling Dense Multi-Column Academic PDF Layouts',
      solution: 'Fine-tuned PyMuPDF text extraction order and implemented sliding-window chunking to prevent mid-sentence semantic truncation.',
      keyLearning: 'Document parsing quality directly dictates the upper limit of RAG answer accuracy.'
    },
    {
      challenge: 'Multi-Paper Matrix Attribute Alignment',
      solution: 'Engineered an attribute-specific query retrieval step for each paper before synthesizing comparison rows.',
      keyLearning: 'Structured extraction requires deterministic retrieval steps rather than trusting an LLM to remember multiple large contexts.'
    }
  ],
  futureRoadmap: [
    'OCR Integration with Tesseract/EasyOCR for historical and scanned manuscripts',
    'Citation Network Graphing using NetworkX to visualize inter-paper reference trees',
    'Direct integration with open academic APIs (arXiv, Semantic Scholar) for automated paper fetching',
    'Multi-user collaborative workspaces with role-based document access control'
  ],
  screenshots: [
    {
      id: 's01',
      title: 'User Authentication & Secure Portal',
      category: 'Access & Auth',
      path: './assets/projects/researchai/01_Login_Page.png',
      description: 'Streamlit authentication interface enforcing session tokens and user-level document isolation.'
    },
    {
      id: 's02',
      title: 'Central Analytics & Corpus Dashboard',
      category: 'Dashboard',
      path: './assets/projects/researchai/02_Dashboard_Home_Page.png',
      description: 'Real-time telemetry showing total indexed papers, chunk counts, page statistics, and system health.'
    },
    {
      id: 's03',
      title: 'Multi-Path Document Upload & Ingestion',
      category: 'Ingestion',
      path: './assets/projects/researchai/03_Paper_Upload_Page.png',
      description: 'Drag-and-drop PDF ingestion pipeline with automatic text extraction, chunking, and ChromaDB vector indexing.'
    },
    {
      id: 's04',
      title: 'Interactive Academic Paper Library',
      category: 'Library',
      path: './assets/projects/researchai/04_Uploaded_Papers_Library.png',
      description: 'Corpus library displaying document metadata, upload timestamps, chunk distributions, and removal controls.'
    },
    {
      id: 's05',
      title: 'Research Insights & Corpus Analytics',
      category: 'Insights',
      path: './assets/projects/researchai/05_Research_Insight_Interface.png',
      description: 'Exploratory analytics interface for extracting methodology trends, author keywords, and cross-paper topics.'
    },
    {
      id: 's06',
      title: 'Research Insights Configuration Options',
      category: 'Insights',
      path: './assets/projects/researchai/05a_Research_Insight_Options.png',
      description: 'Fine-grained insight filters allowing researchers to target specific analytical lenses.'
    },
    {
      id: 's07',
      title: 'Insight Analysis Output — Methodology Breakdown',
      category: 'Insights',
      path: './assets/projects/researchai/05b_Research_Insight_Output_1.png',
      description: 'Algorithmic extraction of empirical methodologies, sampling protocols, and experimental setups.'
    },
    {
      id: 's08',
      title: 'Insight Analysis Output — Dataset Overview',
      category: 'Insights',
      path: './assets/projects/researchai/05c_Research_Insight_Output_2.png',
      description: 'Automated extraction of corpus sizes, benchmark datasets, and statistical distributions.'
    },
    {
      id: 's09',
      title: 'Insight Analysis Output — Synthesized Findings',
      category: 'Insights',
      path: './assets/projects/researchai/05d_Research_Insight_Output_3.png',
      description: 'Structured synthesis of major discoveries and statistical outcomes across indexed literature.'
    },
    {
      id: 's10',
      title: '12-Section Structural Paper Summarizer',
      category: 'Summarizer',
      path: './assets/projects/researchai/06_Paper_Summarizer_Interface.png',
      description: 'Autonomous extraction module producing deep 12-section structured executive summaries for individual papers.'
    },
    {
      id: 's11',
      title: 'Summarizer Output — Core Architecture & Findings',
      category: 'Summarizer',
      path: './assets/projects/researchai/06a_Paper_Summarizer_Output_1.png',
      description: 'Generated structural breakdown of research objectives, mathematical models, and baseline comparisons.'
    },
    {
      id: 's12',
      title: 'Summarizer Output — Critical Limitations & Future Scope',
      category: 'Summarizer',
      path: './assets/projects/researchai/06b_Paper_Summarizer_Output_2.png',
      description: 'Extraction of documented constraints, dataset biases, and suggested future research directions.'
    },
    {
      id: 's13',
      title: 'Publication-Grade Literature Review Generator',
      category: 'Literature Review',
      path: './assets/projects/researchai/07_Literature_Review_Interface.png',
      description: 'Generates cohesive academic literature reviews synthesizing multiple papers with APA citations.'
    },
    {
      id: 's14',
      title: 'Literature Review Synthesized Output with Citations',
      category: 'Literature Review',
      path: './assets/projects/researchai/07a_Literature_Review_Output.png',
      description: 'Full multi-paragraph thematic review formatted for thesis inclusion with bibliography.'
    },
    {
      id: 's15',
      title: 'Multi-Paper Comparative Analysis Interface',
      category: 'Comparison',
      path: './assets/projects/researchai/08_Paper_Comparison_Interface.png',
      description: 'Allows selecting 2 or more indexed papers to generate a 9-attribute side-by-side comparative matrix.'
    },
    {
      id: 's16',
      title: 'Comparative Matrix Output & Qualitative Synthesis',
      category: 'Comparison',
      path: './assets/projects/researchai/08a_Paper_Comparison_Output.png',
      description: 'Side-by-side comparison table detailing objectives, methodologies, algorithms, results, and limitations.'
    },
    {
      id: 's17',
      title: 'Research Evaluation Interface',
      category: 'Evaluation',
      path: './assets/projects/researchai/09_Paper_Evaluation_Interface.png',
      description: 'Quantitative benchmark scoring interface assessing paper validity, methodology rigor, and reproducible metrics.'
    },
    {
      id: 's18',
      title: 'Evaluation Telemetry & Quality Metrics',
      category: 'Evaluation',
      path: './assets/projects/researchai/09a_Paper_Evaluation_Output.png',
      description: 'Detailed evaluation scores breaking down groundedness, technical novelty, and empirical depth.'
    },
    {
      id: 's19',
      title: 'Ask ResearchAI — Interactive Chatbot Interface',
      category: 'Q&A Chatbot',
      path: './assets/projects/researchai/10_Ask_ResearchAI_Chatbot.png',
      description: 'Conversational assistant interface supporting natural language inquiries over specific or all papers.'
    },
    {
      id: 's20',
      title: 'Grounded Answer with Page-Level Citations',
      category: 'Q&A Chatbot',
      path: './assets/projects/researchai/11_Ask_ResearchAI_Response.png',
      description: 'Precision response demonstrating contextual grounding with exact page references and source quote snippets.'
    },
    {
      id: 's21',
      title: 'Core RAG Retrieval Diagnostics Interface',
      category: 'RAG Diagnostics',
      path: './assets/projects/researchai/12_RAG_System_Interface.png',
      description: 'Diagnostic workbench inspecting similarity scores, chunk embeddings, and top-k vector distances.'
    },
    {
      id: 's22',
      title: 'RAG Diagnostics Vector Inspection',
      category: 'RAG Diagnostics',
      path: './assets/projects/researchai/12a_RAG_System_Output_1.png',
      description: 'Detailed chunk metadata, token lengths, and cosine distance telemetry from ChromaDB.'
    },
    {
      id: 's23',
      title: 'Full RAG Evidence Breakdown',
      category: 'RAG Diagnostics',
      path: './assets/projects/researchai/12b_RAG_System_Output_2.png',
      description: 'Context verification telemetry confirming strict chunk alignment before LLM generation.'
    }
  ],
  localSetupGuide: [
    '# Clone repository and enter directory',
    'git clone https://github.com/DMDhanush/researchai.git',
    'cd researchai',
    '# Create and activate python virtual environment',
    'python -m venv venv',
    'venv\\Scripts\\activate',
    '# Install production dependencies',
    'pip install -r requirements.txt',
    '# Configure environment variables in .env',
    'OPENAI_API_KEY=your_key_here',
    'DATABASE_URL=sqlite:///./researchai.db',
    '# Run Streamlit Application',
    'streamlit run main.py'
  ]
};

export const secondaryProjects: SecondaryProject[] = [
  {
    id: 'resume-validator',
    title: 'Intelligent Resume Validation, ATS Compatibility & Upskilling Engine',
    type: 'MCA Mini Project (Semester III)',
    academicYear: '2025 – 2026',
    institution: 'Post Graduate Department of Computer Applications, Seshadripuram College',
    summary:
      'Engineered an automated Applicant Tracking System (ATS) screening engine that validates student resumes against industry formatting rules, detects missing technical competencies, curates targeted YouTube learning resources, and generates dynamic job search queries for LinkedIn and Naukri.',
    keyFeatures: [
      'ATS rule-based compliance scoring and section formatting validation',
      'Semantic keyword matching against target job role descriptions',
      'Automated skill-gap identification and structured learning recommendations',
      'Dynamic search URL generation for live job openings on LinkedIn & Naukri'
    ],
    techStack: ['Python', 'Streamlit', 'NLP', 'Regex & Keyword Scoring', 'Web Integration'],
    metrics: 'Evaluated resume compatibility with an 82% benchmark alignment score.'
  },
  {
    id: 'welfake-detection',
    title: 'WELFake: Word Embedding over Linguistic Features for Fake News Detection',
    type: 'BCA Major Capstone Project',
    academicYear: '2023 – 2024',
    institution: 'Department of Computer Science, Seshadripuram Degree Main College',
    summary:
      'Designed a high-accuracy, two-phase machine learning classification benchmark system that combines linguistic style features with dense word embeddings fed into Convolutional Neural Network (CNN) architectures to identify deceptive news articles.',
    keyFeatures: [
      'Linguistic feature extraction analyzing deception cues, sentiment, and writing style',
      'Word embedding vectorization combined with Convolutional Neural Network (CNN) layers',
      'Rigorous evaluation on the WELFake benchmark corpus of 72,000+ real and fake articles',
      'Achieved 93% classification accuracy with high precision and recall'
    ],
    techStack: ['Python', 'TensorFlow / Keras', 'Convolutional Neural Networks (CNN)', 'NLP', 'Scikit-Learn', 'Pandas'],
    metrics: '93% classification accuracy on 72,000+ benchmark news articles.'
  },
  {
    id: 'fake-profile-detection',
    title: 'Secure Social: Fake Profile Detection via Computer Vision & XGBoost',
    type: 'Smart India Hackathon (SIH) Project',
    academicYear: '2024',
    institution: 'National Hackathon Project',
    summary:
      'Engineered an automated social network security scanner that detects fraudulent bot and clone accounts using facial recognition, image verification, and XGBoost machine learning classification on profile behavioral metrics.',
    keyFeatures: [
      'OpenCV-based face detection and known-face database comparison',
      'Automated username and profile metadata scraper',
      'XGBoost ensemble classifier predicting account authenticity probability',
      'Interactive Flask web dashboard for real-time profile URL scanning'
    ],
    techStack: ['Python', 'Flask', 'XGBoost', 'OpenCV & Face Recognition', 'BeautifulSoup', 'Scikit-Learn'],
    metrics: 'Real-time classification with automated facial landmark verification.',
    screenshots: [
      {
        id: 'sih-1',
        title: 'Secure Social Dashboard',
        category: 'UI',
        path: './assets/projects/fake_profile_detection/Screenshot 2024-04-08 181826.png',
        description: 'Main scanning interface and profile risk scoring breakdown.'
      },
      {
        id: 'sih-2',
        title: 'Profile Analysis & Feature Extraction',
        category: 'Analysis',
        path: './assets/projects/fake_profile_detection/Screenshot 2024-04-08 181917.png',
        description: 'Account feature analysis showing follower-to-following ratios and posting regularity.'
      },
      {
        id: 'sih-3',
        title: 'Face Detection Telemetry',
        category: 'Computer Vision',
        path: './assets/projects/fake_profile_detection/Screenshot 2024-04-08 182736.png',
        description: 'Facial recognition output determining synthetic avatar vs genuine human portrait.'
      }
    ]
  }
];

export const certificatesList: CertificateItem[] = [
  {
    id: 'cert-python-ibm',
    title: 'Python Full Stack Development',
    issuingOrg: 'Netcraftz & IBM Developer Skills Network',
    partnerOrg: 'IBMCE (IBM Career Education)',
    issueDate: 'Verified Credential',
    credentialId: 'CEPYTIIN',
    previewImage: './assets/certificates/python_fullstack_cert.png',
    downloadPdf: './assets/certificates/python_fullstack_cert.pdf',
    category: 'Python & AI',
    description:
      'Comprehensive full-stack development credential covering Python programming, Django, REST API architecture, and database integrations. Endorsed by Jagadisha Bhat (Country Manager - IBM Technology Expert Labs, ISA, IBM India Pvt Ltd).'
  },
  {
    id: 'cert-nptel-cloud',
    title: 'Cloud Computing (12-Week NPTEL Certification)',
    issuingOrg: 'NPTEL & Ministry of Education, Govt. of India',
    partnerOrg: 'Indian Institute of Technology (IIT) Kharagpur',
    issueDate: 'Jul – Oct 2025',
    credentialId: 'NPTEL25CS107S352605578',
    scoreOrDetail: 'Consolidated Score: 53% (Online Assignments: 23.16/25, Proctored Exam: 30/75)',
    previewImage: './assets/certificates/nptel_cloud_computing.png',
    downloadPdf: './assets/certificates/nptel_cloud_computing.pdf',
    category: 'Cloud Computing',
    description:
      'Rigorous 12-week national certification course covering cloud architectures, virtualization, resource management, distributed storage, and cloud security coordinated by Prof. Haimanti Banerji (IIT Kharagpur). Recommended for 3 to 4 university credits.'
  },
  {
    id: 'cert-aws-coursera',
    title: 'Hands-on with AWS for IT Professionals',
    issuingOrg: 'Amazon Web Services (AWS)',
    partnerOrg: 'Coursera',
    issueDate: 'July 10, 2025',
    credentialId: 'FCSWM6JC01C3',
    verificationUrl: 'https://coursera.org/verify/FCSWM6JC01C3',
    previewImage: './assets/certificates/aws_it_professionals.png',
    downloadPdf: './assets/certificates/aws_it_professionals.pdf',
    category: 'Cloud Computing',
    description:
      'Practical cloud computing specialization authorized directly by Amazon Web Services, taught by AWS Principal and Senior Cloud Technologists (Rafael Lopes, Alex Galvin, Oksana Hoeckele) focusing on AWS cloud infrastructure, security, and computing.'
  },
  {
    id: 'cert-great-learning',
    title: 'Data Science with Python',
    issuingOrg: 'Great Learning Academy',
    issueDate: 'July 2022',
    credentialId: 'PCFZLUIU',
    verificationUrl: 'https://verify.mygreatlearning.com/PCFZLUIU',
    previewImage: './assets/certificates/great_learning_python.png',
    downloadPdf: './assets/certificates/great_learning_python.pdf',
    category: 'Python & AI',
    description:
      'Hands-on foundation course covering NumPy, Pandas, statistical analysis, data cleaning, and core exploratory data science techniques using Python.'
  },
  {
    id: 'cert-tcs-ion',
    title: 'Email Etiquette',
    issuingOrg: 'TCS iON (Tata Consultancy Services)',
    issueDate: 'January 16, 2023',
    credentialId: '66785-23883209-1016',
    previewImage: './assets/certificates/tcs_email_etiquette.png',
    downloadPdf: './assets/certificates/tcs_email_etiquette.pdf',
    category: 'Professional Skills',
    description:
      'Corporate communication credential covering executive email formatting, tone of voice, professional case studies, and business correspondence standards issued by Mehul Mehta (Global Delivery Head - TCS iON).'
  }
];

export const educationList: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Seshadripuram College',
    university: 'Affiliated to Bengaluru City University | AICTE Approved | NAAC A++',
    period: '2025 – 2026',
    cgpa: '7.37 / 10.00',
    status: 'Graduating Scholar',
    highlights: [
      'Flagship Major Project: ResearchAI — Autonomous Agentic RAG Platform for Academic Literature Analysis',
      'MCA Mini Project: Intelligent Resume Validation & ATS Compatibility Recommendation System',
      'Advanced coursework: Cloud Computing, Machine Learning, Advanced Algorithms, Enterprise Database Systems'
    ],
    icon: 'GraduationCap'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Seshadripuram Degree Main College',
    university: 'Bengaluru, Karnataka',
    period: '2023 – 2024',
    cgpa: '7.00 / 10.00',
    status: 'Completed with Distinction',
    highlights: [
      'Capstone Project: WELFake — Word Embedding over Linguistic Features for Fake News Detection (93% Accuracy)',
      'Smart India Hackathon (SIH) Participant: Secure Social Fake Profile Detection System',
      'Strong foundations in Object-Oriented Programming (Java/Python), Relational Databases (SQL), and Web Technologies'
    ],
    icon: 'BookOpen'
  }
];

export const wrestlingAchievement: AchievementItem = {
  title: 'University-Level Wrestler',
  subtitle: 'Representing College Athletic Contingents in Inter-Collegiate & University Championships',
  category: 'Athletic Rigor & Personal Discipline',
  narrative:
    'Competing at the university wrestling level has been foundational to my character as an engineer. Wrestling demands relentless early-morning training, meticulous physical conditioning, tactical composure under immense physical pressure, and the mental stamina to push through grueling matches. These same athletic principles translate directly into my software development mindset: debugging complex distributed systems, iterating on deep AI models, and writing clean, reliable code with relentless focus and zero excuses.',
  engineeringParallels: [
    {
      pillar: 'Discipline & Consistency',
      detail:
        'Just as daily mat drills build muscle memory, daily code commits and architecture refinement build rock-solid engineering intuition.'
    },
    {
      pillar: 'Resilience Under Pressure',
      detail:
        'Wrestling teaches you to stay calm and analytical when pinned or facing adversity — exactly what is required when production systems throw errors.'
    },
    {
      pillar: 'Precision & Execution',
      detail:
        'A single misplaced step can lose a wrestling bout; similarly, a single unhandled edge case can crash an ingestion pipeline. Detail is everything.'
    }
  ]
};

export const careerTimeline: TimelineMilestone[] = [
  {
    year: '2022',
    title: 'Foundational Computer Science & Data Science Initiation',
    organization: 'Seshadripuram Degree Main College & Great Learning',
    description:
      'Began core computer applications studies, mastering Python, data structures, and completing "Data Science with Python" certification.',
    tag: 'Academic & Learning'
  },
  {
    year: '2023',
    title: 'Professional Communication & Advanced Software Development',
    organization: 'TCS iON & Academic Laboratories',
    description:
      'Completed TCS iON Email Etiquette certification while deepening full-stack development skills and preparing for capstone research.',
    tag: 'Professional Skill'
  },
  {
    year: '2024',
    title: 'BCA Graduation & WELFake Machine Learning Project',
    organization: 'Seshadripuram Degree Main College (CGPA 7.00)',
    description:
      'Graduated with BCA degree; built WELFake deep learning model (93% accuracy on 72,000 articles) and developed SIH Fake Profile Detection project.',
    tag: 'Degree & Capstone'
  },
  {
    year: '2025',
    title: 'MCA Enrollment, Cloud Computing & AWS Certifications',
    organization: 'Seshadripuram College, IIT Kharagpur (NPTEL) & AWS Coursera',
    description:
      'Joined Master of Computer Applications; achieved NPTEL Cloud Computing (53%) & AWS Hands-on certification; built ATS Resume Validator engine.',
    tag: 'MCA & Cloud'
  },
  {
    year: '2026',
    title: 'MCA Completion & ResearchAI Flagship Deployment',
    organization: 'Seshadripuram College (CGPA 7.37) & IBM / Netcraftz',
    description:
      'Completed MCA with 7.37 CGPA; earned IBM Python Full Stack certification; engineered ResearchAI flagship agentic RAG platform.',
    tag: 'Flagship Engineering'
  }
];

