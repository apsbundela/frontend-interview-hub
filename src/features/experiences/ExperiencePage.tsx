import { useParams } from 'react-router-dom';
import { useExperience } from './useExperience';
import { useEffect, useState } from 'react';
import { Dot } from 'lucide-react';
import AuthorDetail from './components/AuthorDetail';

const ExperiencePage = () => {
  const { experienceId } = useParams();
  if (!experienceId) {
    return <div>Experience not found</div>;
  }
  const { experience } = useExperience(experienceId);
  const defaultActiveTab = experience?.sections[0].id;
  const [activeRound, setActiveRound] = useState<string | undefined>(defaultActiveTab);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    if (defaultActiveTab) {
      setActiveRound(defaultActiveTab);
    }
  }, [experience]);

  return (
    <div className="mx-auto flex max-w-[1040px] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start">
      {/* Role + Questions */}
      <div className="min-w-0 flex-1">
        <h2 className="font-display text-2xl font-bold text-text-primary">{experience?.role}</h2>
        <div className="mt-2 flex items-center gap-1 font-mono text-xs text-text-tertiary">
          <span>{experience?.experienceYears}</span>
          <Dot size={14} />
          <span className="text-success">Published: {experience?.sourcePublishedAt}</span>
        </div>

        {/* Tabs */}
        {experience?.sections && (
          <div className="mt-6 inline-flex gap-1 rounded-lg border border-border bg-surface p-1">
            {experience.sections.map((section) => {
              const isActive = activeRound === section.id;
              return (
                <h3
                  role="tab"
                  key={section.id}
                  onClick={() => setActiveRound(section.id)}
                  className={`cursor-pointer rounded-md px-4 py-2 font-body text-sm font-semibold transition ${
                    isActive
                      ? 'bg-accent text-accent-ink'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {section.title}
                </h3>
              );
            })}
          </div>
        )}

        {/* Active section content */}
        {experience?.sections &&
          experience.sections.map((section) => {
            const isActive = activeRound === section.id;
            if (!isActive) return null;
            const totalQuestions = section.questions.length;
            const showQuestions = !showAll ? section.questions.slice(0, 5) : section.questions;
            return (
              <div key={section.id} className="mt-5 rounded-lg border border-border bg-bg p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-text-primary">
                    {section.title}
                  </h4>
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent">
                    {totalQuestions} questions
                  </span>
                </div>
                <ol className="mt-3 flex flex-col">
                  {showQuestions.map((question, i) => (
                    <li
                      key={i}
                      className="flex gap-3 border-b border-border py-3 text-sm text-text-primary last:border-none"
                    >
                      <span className="w-5 shrink-0 font-mono text-xs text-text-tertiary">
                        {i + 1}
                      </span>
                      {question}
                    </li>
                  ))}
                </ol>
                {section.questions.length > 5 && (
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="mt-3 font-mono text-xs font-semibold text-accent hover:underline"
                  >
                    {showAll ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            );
          })}
      </div>
      <AuthorDetail experience={experience} />
    </div>
  );
};

export default ExperiencePage;
