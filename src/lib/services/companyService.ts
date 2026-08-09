import companies from '../data/companies';
import type { Company } from '../../types/company';

export async function getCompanyById(companyId: string): Promise<Company | undefined> {
  return companies.find((c) => c.id === companyId);
}

export async function getAllCompanies(): Promise<Company[]> {
  return companies;
}
