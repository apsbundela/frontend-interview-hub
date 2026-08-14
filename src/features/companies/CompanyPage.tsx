import { useParams } from 'react-router-dom';
import { Folder } from 'lucide-react';

import { useCompany } from './useCompany';
import { useCompanyExperiences } from './useCompanyExperiences';
import ExperienceCard from './components/ExperienceCard';

const CompanyPage = () => {
  const { companyId } = useParams<'companyId'>();

  if (!companyId) {
    return <div>Company not found</div>;
  }

  const { data: company, loading, error } = useCompany(companyId);
  const { experiences } = useCompanyExperiences(companyId);
  console.log(experiences);
  return (
    <div className="mx-auto max-w-[1040px] px-6 py-10">
      <div className="flex flex-col items-center gap-4 border-b border-border pb-8 text-center sm:flex-row sm:items-center sm:text-left">
        {/* icon */}
        <div className="flex h-24 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-accent-soft-border bg-accent-soft font-display text-xl font-bold text-accent">
          {company?.logoUrl ? (
            <img
              src={company.logoUrl}
              alt={`${company.name} logo`}
              className="h-full w-full object-contain p-3.5"
            />
          ) : (
            company?.name.charAt(0)
          )}
        </div>
        {/* name + Description + total experiance */}
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-bold text-text-primary">{company?.name}</h1>
          <p className="font-display text-s text-text-tertiary">{company?.description}</p>
          <div className="mt-3 flex flex-row gap-1.5 justify-center gap-4 sm:justify-start sm:items-center">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft">
              <Folder size={16} strokeWidth={1.75} className="text-accent" />
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-ink">
                {experiences.length}
              </span>
            </div>
            <span className="font-mono text-xs text-text-tertiary">
              Curated experience{experiences.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-display text-lg font-bold text-text-primary">Curated Experiences</h2>
        <p className="mt-0.5 text-sm text-text-secondary">Real interview experiences shared by developers</p>

        <div className="mt-4 flex flex-col gap-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
