import { supabase } from '@/lib/supabase'
import { portfolioConfig } from '@/config/portfolioConfig'

const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const fetchProjects = async () => {
  if (!hasSupabase) return portfolioConfig.projects;
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', {
        ascending: true,
      })

    if (error || !data || data.length === 0) {
      return portfolioConfig.projects;
    }
    return data;
  } catch (error) {
    console.warn('Failed to fetch projects from Supabase, using mock fallback.', error);
    return portfolioConfig.projects;
  }
}

export const fetchCertificates = async () => {
  if (!hasSupabase) return portfolioConfig.certificates;
  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', {
        ascending: true,
      })

    if (error || !data || data.length === 0) {
      return portfolioConfig.certificates;
    }
    return data;
  } catch (error) {
    console.warn('Failed to fetch certificates from Supabase, using mock fallback.', error);
    return portfolioConfig.certificates;
  }
}

export const fetchTechStacks = async () => {
  if (!hasSupabase) return portfolioConfig.techStack;
  try {
    const { data, error } = await supabase
      .from('tech_stack')
      .select('*')
      .order('created_at', {
        ascending: true,
      })

    if (error || !data || data.length === 0) {
      return portfolioConfig.techStack;
    }
    return data;
  } catch (error) {
    console.warn('Failed to fetch tech stack from Supabase, using mock fallback.', error);
    return portfolioConfig.techStack;
  }
}