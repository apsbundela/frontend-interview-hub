import authors from '../data/authors';
import type { Author } from '../../types/author';

export async function getAuthorById(authorId: string): Promise<Author | undefined> {
  return authors.find((a) => a.id === authorId);
}
