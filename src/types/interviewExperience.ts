import type { Company } from './company';
import type { Author } from './author';
import type { InterviewSection } from './InterviewSection';

export interface InterviewExperience {
  id: string;
  companyId: Company['id'];
  authorId: Author['id'];
  experienceYears: string;
  role: string;
  sourcePublishedAt: string;
  sections: InterviewSection[];
  sourceUrl: string;
  embedUrl: string;
}
