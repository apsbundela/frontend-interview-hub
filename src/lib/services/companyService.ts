import type { Company } from '../../types/company';
import { supabase } from '../supabase/client';

export async function getCompanyById(companyId: string): Promise<Company | undefined> {
  const { data, error } = await supabase
    .from('companies')
    .select('id, name, description, logoUrl:logo_url')
    .eq('id', companyId)
    .maybeSingle();
  if (error) throw error;
  return data ?? undefined;
}

export async function getAllCompanies(): Promise<Company[]> {
  const { data, error } = await supabase
    .from('companies')
    .select('id, name, description, logoUrl:logo_url');
  if (error) throw error;
  return data ?? [];
}
