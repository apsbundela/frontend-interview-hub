import type { InterviewExperience } from '../../types/interviewExperience';
import experiences from '../data/experiences';

export async function getExperiencesByCompanyId(companyId: string): Promise<InterviewExperience[]> {
  return experiences.filter((exp) => exp.companyId === companyId);
}

export async function getExperienceById(id: string): Promise<InterviewExperience | undefined> {
  return experiences.find((exp) => exp.id === id);
}
