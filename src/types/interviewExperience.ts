import type { Company } from './company';
import type { Author } from './author';

export interface InterviewExperience {
  id: string;
  companyId: Company['id'];
  authorId: Author['id'];
  round?: string;
  sourceUrl: string;
  questions: string[];
}
