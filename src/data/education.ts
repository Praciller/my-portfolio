export type EducationItem = {
  institution: string;
  program: string;
  field?: string;
  period?: string;
  notes?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Chulalongkorn University",
    program: "Bachelor of Science",
    field: "Chemical Technology",
    period: "Aug 2017 - Jun 2021",
    notes: "Bangkok, Thailand",
  },
];
