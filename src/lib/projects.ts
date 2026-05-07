export type ProjectCategory = "VR/AR" | "Video" | "AI" | "Making";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  partner: string;
  summary: string;
  status: "In progress" | "Released" | "Pilot";
  year: number;
}

// Replace these with real projects. Keeping data in a single file makes
// content updates easy — even non-developers can edit this.
export const projects: Project[] = [
  {
    slug: "anatomy-vr",
    title: "Walk-through anatomy in VR",
    category: "VR/AR",
    partner: "Nursing Faculty Cohort",
    summary:
      "An immersive cardiovascular module letting students step inside the heart, narrated by faculty and built to ISTE standards.",
    status: "In progress",
    year: 2025,
  },
  {
    slug: "ai-lesson-plans",
    title: "AI-assisted lesson planning",
    category: "AI",
    partner: "K–12 Community Partners",
    summary:
      "A workshop series and toolkit helping teachers integrate generative AI thoughtfully into existing lesson plans.",
    status: "Pilot",
    year: 2025,
  },
  {
    slug: "documentary-series",
    title: "Field-research documentary series",
    category: "Video",
    partner: "Environmental Studies",
    summary:
      "Short-form documentaries following undergraduates conducting fieldwork — produced and edited by EDXR students.",
    status: "Released",
    year: 2024,
  },
  {
    slug: "tactile-history",
    title: "Tactile history kits",
    category: "Making",
    partner: "Local School District",
    summary:
      "3D-printed and laser-cut artifact replicas paired with curriculum that brings history class into students' hands.",
    status: "Released",
    year: 2024,
  },
  {
    slug: "ar-campus-tour",
    title: "AR campus tour",
    category: "VR/AR",
    partner: "Admissions Office",
    summary:
      "An augmented-reality tour overlay built for prospective students and families — runs on any modern phone.",
    status: "In progress",
    year: 2025,
  },
  {
    slug: "ai-rubric-coach",
    title: "AI rubric coach",
    category: "AI",
    partner: "Writing Center",
    summary:
      "A privacy-respecting AI assistant that helps students self-assess drafts against course-specific rubrics.",
    status: "Pilot",
    year: 2025,
  },
];
