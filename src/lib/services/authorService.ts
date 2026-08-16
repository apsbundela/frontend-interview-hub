import type { Author } from '../../types/author';
import { supabase } from '../supabase/client';

export async function getAuthorById(authorId: string | undefined): Promise<Author | undefined> {
  if (!authorId) return undefined;

  const { data, error } = await supabase
    .from('authors')
    .select('id, name, headline, linkedinUrl:linkedin_url, avatarUrl:avatar_url')
    .eq('id', authorId)
    .maybeSingle();
  if (error) throw error;
  return data ?? undefined;
}
