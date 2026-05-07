export type WorkCategory = "VR/AR" | "Video" | "AI" | "Making";

export interface StudentWork {
  slug: string;
  title: string;
  student: string;
  role: string;
  cohort: string;
  category: WorkCategory;
  blurb: string;
}

// Replace with real student work. Recent grads' "where they are now" can
// go in `cohort` (e.g., "Class of '24 → Game Studio").
export const studentWork: StudentWork[] = [
  {
    slug: "molecule-walkthrough",
    title: "Molecule walkthrough",
    student: "Priya R.",
    role: "Lead developer",
    cohort: "Class of '25",
    category: "VR/AR",
    blurb:
      "A Quest experience letting chemistry students walk inside molecular structures and rotate bonds with hand tracking.",
  },
  {
    slug: "field-doc-short",
    title: "Field, documented",
    student: "Marcus T.",
    role: "Director / editor",
    cohort: "Class of '24 → Public Media",
    category: "Video",
    blurb:
      "A 9-minute short following an undergraduate biology team's first field season. Festival-selected.",
  },
  {
    slug: "rubric-prototype",
    title: "Rubric coach prototype",
    student: "Jamie L.",
    role: "Prompt engineer",
    cohort: "Class of '25",
    category: "AI",
    blurb:
      "Built and evaluated three prompting approaches for a writing-feedback assistant — used in our active pilot.",
  },
  {
    slug: "topo-models",
    title: "Topographic teaching models",
    student: "Dre J.",
    role: "Designer / fabricator",
    cohort: "Class of '23 → Architecture firm",
    category: "Making",
    blurb:
      "Stacked-layer topographic models cut on the laser, used in a local middle school's geography unit.",
  },
  {
    slug: "ar-historical-marker",
    title: "AR historical markers",
    student: "Alex W.",
    role: "iOS / AR developer",
    cohort: "Class of '24 → Tech Co.",
    category: "VR/AR",
    blurb:
      "A mobile AR companion for under-told local history sites — anchors content to physical markers around town.",
  },
  {
    slug: "interview-series",
    title: "Voices on campus",
    student: "Sara M.",
    role: "Producer",
    cohort: "Class of '25",
    category: "Video",
    blurb:
      "An interview series highlighting first-generation students' paths into research. Produced end-to-end at EDXR.",
  },
];
