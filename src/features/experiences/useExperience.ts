import { useEffect, useState } from 'react';
import type { InterviewExperience } from '../../types/interviewExperience';
import { getExperienceById } from '../../lib/services/experienceService';

export const useExperience = (experienceId: string) => {
  const [experience, setExperience] = useState<InterviewExperience>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        setLoading(true);
        setError(null);
        const experienceData = await getExperienceById(experienceId);
        setExperience(experienceData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch experience');
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, [experienceId]);

  return { experience, loading, error };
};
