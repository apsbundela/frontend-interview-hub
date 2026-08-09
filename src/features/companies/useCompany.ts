import { useEffect, useState } from 'react';
import { getCompanyById } from '../../lib/services/companyService';
import type { Company } from '../../types/company';

export const useCompany = (companyId: string) => {
  const [data, setData] = useState<Company | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setLoading(true);
        setError(null);
        const companyData = await getCompanyById(companyId);
        setData(companyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch company');
      } finally {
        setLoading(false);
      }
    };
    fetchCompany();
  }, [companyId]);

  return { data, loading, error };
};
