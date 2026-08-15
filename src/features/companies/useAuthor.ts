import { useEffect, useState } from 'react';
import { getAuthorById } from '../../lib/services/authorService';
import type { Author } from '../../types/author';

export const useAuthor = (authorId: string | undefined) => {
  const [data, setData] = useState<Author | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        setLoading(true);
        setError(null);
        const authorData = await getAuthorById(authorId);
        setData(authorData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch author');
      } finally {
        setLoading(false);
      }
    };
    fetchAuthor();
  }, [authorId]);

  return { data, loading, error };
};
