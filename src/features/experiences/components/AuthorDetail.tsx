import type { InterviewExperience } from '../../../types/interviewExperience';
import { useAuthor } from '../../companies/useAuthor';
import { SquareArrowOutUpRight } from 'lucide-react';

interface AuthorDetailProps {
  experience: InterviewExperience | undefined;
}

const AuthorDetail = ({ experience }: AuthorDetailProps) => {
  const { data: author } = useAuthor(experience?.authorId);
  return (
    /* Author Detail + Post View */
    <aside className="w-full shrink-0 lg:w-[400px]">
      <div className="rounded-lg border border-border bg-bg p-4">
        <h3 className="font-display text-sm font-bold text-text-primary">Author</h3>
        <div className="mt-3 flex items-center gap-3">
          {author?.avatarUrl && (
            <img
              src={author.avatarUrl}
              alt={author.name}
              className="h-10 w-10 rounded-full border border-border-strong object-cover"
            />
          )}
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-text-primary">{author?.name}</p>
            <p className="truncate text-xs text-text-tertiary">{author?.headline}</p>
          </div>
        </div>
        <a
          href={author?.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 font-mono text-xs font-semibold flex items-center gap-2 text-accent hover:underline"
        >
          LinkedIn Profile
          <SquareArrowOutUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-bg p-4">
        <h3 className="font-display text-sm font-bold text-text-primary">Original LinkedIn Post</h3>
        <p className="mt-1 text-xs text-text-tertiary">
          This experience is shared by the author on LinkedIn.
        </p>
        <div className="mt-3 overflow-hidden rounded-lg border border-border">
          <iframe
            src={experience?.embedUrl}
            title="Embedded post"
            className="h-[400px] w-full border-0"
          ></iframe>
        </div>
      </div>
    </aside>
  );
};

export default AuthorDetail;
