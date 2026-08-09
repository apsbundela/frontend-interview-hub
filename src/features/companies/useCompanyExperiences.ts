import { useEffect, useState } from 'react';
import type { InterviewExperience } from '../../types/interviewExperience';
import { getExperiencesByCompanyId } from '../../lib/services/experienceService';

export const useCompanyExperiences = (companyId: string) => {
  const [experiences, setExperiences] = useState<InterviewExperience[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getExperiencesByCompanyId(companyId);
        setExperiences(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch experiences');
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, [companyId]);

  return { experiences, loading, error };
};
