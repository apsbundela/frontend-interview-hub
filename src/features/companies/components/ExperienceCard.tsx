import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { InterviewExperience } from '../../../types/interviewExperience';
import { ROUTES } from '../../../app/routesPaths';
import { useAuthor } from '../useAuthor';

interface ExperienceCardProps {
  experience: InterviewExperience;
}

const getInitials = (role: string) =>
  role
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { data: author } = useAuthor(experience.authorId);
  const totalQuestions = experience.sections.reduce(
    (sum, section) => sum + section.questions.length,
    0
  );
  const href = ROUTES.EXPERIENCE.replace(':experienceId', experience.id);

  return (
    <Link
      to={href}
      className="group flex items-center gap-4 rounded-lg border border-border bg-bg p-4 transition hover:border-accent hover:shadow-[0_4px_12px_-2px_rgba(37,99,235,0.15)]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft font-display text-sm font-bold text-accent">
        {getInitials(experience.role)}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-display text-base font-bold text-text-primary">{experience.role}</p>
        <p className="mt-0.5 font-mono text-xs text-text-tertiary">{experience.experienceYears}</p>
        <p className="mt-1.5 text-sm text-text-secondary">
          Interview experience for {experience.role} role.
        </p>
        {author && (
          <div className="mt-2 flex items-center gap-2">
            {author.avatarUrl && (
              <img
                src={author.avatarUrl}
                alt={author.name}
                className="h-10 w-10 rounded-full border border-border-strong object-cover"
              />
            )}
            <span className="text-xs font-medium text-accent">{author.name}</span>
          </div>
        )}
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="rounded-full border border-success-soft-border bg-success-soft px-2 py-0.5 font-mono text-xs text-success">
          {experience.sourcePublishedAt}
        </span>
        <span className="flex items-center gap-1 font-mono text-xs text-text-tertiary">
          {totalQuestions} questions
          <ChevronRight size={14} className="text-text-tertiary transition-colors group-hover:text-accent" />
        </span>
      </div>
    </Link>
  );
};

export default ExperienceCard;
