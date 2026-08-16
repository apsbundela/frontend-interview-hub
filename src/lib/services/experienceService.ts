import type { InterviewExperience } from '../../types/interviewExperience';
import { supabase } from '../supabase/client';

const EXPERIENCE_COLUMNS =
  'id, companyId:company_id, authorId:author_id, experienceYears:experience_years, role, sections, sourcePublishedAt:source_published_at, sourceUrl:source_url, embedUrl:embed_url';

export async function getExperiencesByCompanyId(companyId: string): Promise<InterviewExperience[]> {
  const { data, error } = await supabase
    .from('interview_experiences')
    .select(EXPERIENCE_COLUMNS)
    .eq('company_id', companyId);
  if (error) throw error;
  return data ?? [];
}

export async function getExperienceById(id: string): Promise<InterviewExperience | undefined> {
  const { data, error } = await supabase
    .from('interview_experiences')
    .select(EXPERIENCE_COLUMNS)
    .eq('id', id)
    .maybeSingle();
  if (error) throw error;
  return data ?? undefined;
}
