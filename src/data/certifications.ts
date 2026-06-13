export type Certification = {
  name: string;
  issuer: string;
  issued?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Super AI Engineer Season 6: Foundation AI (Theory)",
    issuer: "Artificial Intelligence Association of Thailand",
    issued: "2026",
    credentialUrl:
      "https://assessment.aiat.or.th/certificate/42a33cde-b540-4ad0-b294-b81cc7da9a74",
  },
];
