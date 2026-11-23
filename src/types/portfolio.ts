export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  subheadline: string;
  email: string;
  phone: string;
  location: string;
  educationSummary: string;
  languages: { name: string; level: string }[];
  availability: string;
  resumePdfUrl: string;
  profilePhoto: string;
  portraitPhoto: string;
}

export type SkillCategory = 'programming' | 'backend' | 'ai_retrieval' | 'web_cloud' | 'tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  verifiedInProject: boolean;
  projectUsage?: string;
  level: 'Core Competency' | 'Proficient' | 'Hands-on Practice' | 'Academic / Foundational';
  iconName: string;
}

export interface ScreenshotItem {
  id: string;
  title: string;
  category: string;
  path: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  role: string;
  timeline: string;
  academicContext: string;
  problemStatement: string[];
  solutionOverview: string;
  architectureDiagramUrl: string;
  useCaseDiagramUrl: string;
  features: {
    title: string;
    description: string;
    icon: string;
    technicalHighlight: string;
  }[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  implementationDecisions: {
    decision: string;
    rationale: string;
    impact: string;
  }[];
  challengesLearnings: {
    challenge: string;
    solution: string;
    keyLearning: string;
  }[];
  futureRoadmap: string[];
  screenshots: ScreenshotItem[];
  localSetupGuide: string[];
}

export interface SecondaryProject {
  id: string;
  title: string;
  type: string;
  academicYear: string;
  institution: string;
  summary: string;
  keyFeatures: string[];
  techStack: string[];
  metrics?: string;
  screenshots?: ScreenshotItem[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuingOrg: string;
  partnerOrg?: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  scoreOrDetail?: string;
  previewImage: string;
  downloadPdf?: string;
  category: 'Python & AI' | 'Cloud Computing' | 'Professional Skills';
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
  status: string;
  highlights: string[];
  icon: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  category: string;
  narrative: string;
  engineeringParallels: {
    pillar: string;
    detail: string;
  }[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  tag: string;
}
