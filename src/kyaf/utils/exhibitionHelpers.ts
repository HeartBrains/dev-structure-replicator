// @ts-nocheck
/**
 * Exhibition Helper Functions
 * Implements status-first filtering pattern
 */

import { WPPost } from './types';
import { exhibitions, Exhibition, getExhibitionBySlug } from './exhibitionsDataNew';
import { getCurrentDate } from './dateHelpers';

/**
 * Convert Exhibition to WPPost format (for display)
 */
export function exhibitionToWPPost(
  exhibition: Exhibition,
  language: 'en' | 'th'
): WPPost {
  return {
    id: exhibition.id,
    slug: exhibition.slug,
    type: 'exhibition',
    title: exhibition.title[language],
    date: exhibition.dateDisplay[language],
    content: '',
    categories: exhibition.categories?.[language] || [],
    featuredImage: exhibition.featuredImage ? {
      sourceUrl: exhibition.featuredImage,
      altText: exhibition.title[language]
    } : undefined,
    gallery: exhibition.gallery,
    acf: {
      artist: exhibition.artist[language],
      curator: exhibition.curator[language],
      fromDate: exhibition.fromDate,
      toDate: exhibition.toDate,
      status: exhibition.status,
      listing_summary: exhibition.listingSummary?.[language],
      imageCredits: exhibition.imageCredits,
    }
  };
}

/**
 * Status-First Filtering: Current Exhibitions
 */
export function getCurrentExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return exhibitions
    .filter(ex => ex.status === 'current')
    .sort((a, b) => new Date(b.fromDate || 0).getTime() - new Date(a.fromDate || 0).getTime())
    .map(ex => exhibitionToWPPost(ex, language));
}

/**
 * Status-First Filtering: Upcoming Exhibitions
 */
export function getUpcomingExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return exhibitions
    .filter(ex => ex.status === 'upcoming')
    .sort((a, b) => new Date(a.fromDate || 0).getTime() - new Date(b.fromDate || 0).getTime())
    .map(ex => exhibitionToWPPost(ex, language));
}

/**
 * Status-First Filtering: Past Exhibitions
 */
export function getPastExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return exhibitions
    .filter(ex => ex.status === 'past')
    .sort((a, b) => new Date(b.fromDate || 0).getTime() - new Date(a.fromDate || 0).getTime())
    .map(ex => exhibitionToWPPost(ex, language));
}

/**
 * Get all exhibitions (for archives)
 */
export function getAllExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return exhibitions
    .sort((a, b) => new Date(b.fromDate || 0).getTime() - new Date(a.fromDate || 0).getTime())
    .map(ex => exhibitionToWPPost(ex, language));
}

/**
 * Get exhibition by slug
 */
export function getExhibitionBySlugWithLanguage(
  slug: string,
  language: 'en' | 'th' = 'en'
): WPPost | undefined {
  const exhibition = getExhibitionBySlug(slug);
  return exhibition ? exhibitionToWPPost(exhibition, language) : undefined;
}

/**
 * Get exhibitions by year
 */
export function getExhibitionsByYear(
  year: string,
  language: 'en' | 'th' = 'en'
): WPPost[] {
  return exhibitions
    .filter(ex => ex.year === year)
    .sort((a, b) => new Date(b.fromDate || 0).getTime() - new Date(a.fromDate || 0).getTime())
    .map(ex => exhibitionToWPPost(ex, language));
}

/**
 * Get featured/permanent exhibitions
 */
export function getPermanentExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return exhibitions
    .filter(ex => ex.toDate === 'Onwards')
    .sort((a, b) => new Date(b.fromDate || 0).getTime() - new Date(a.fromDate || 0).getTime())
    .map(ex => exhibitionToWPPost(ex, language));
}

/**
 * Search exhibitions by text
 */
export function searchExhibitions(
  query: string,
  language: 'en' | 'th' = 'en'
): WPPost[] {
  const lowerQuery = query.toLowerCase();
  
  return exhibitions
    .filter(ex => {
      const searchText = [
        ex.title[language],
        ex.artist[language],
        ex.curator[language],
        ex.listingSummary?.[language] || '',
        ex.tags || ''
      ].join(' ').toLowerCase();
      
      return searchText.includes(lowerQuery);
    })
    .sort((a, b) => new Date(b.fromDate || 0).getTime() - new Date(a.fromDate || 0).getTime())
    .map(ex => exhibitionToWPPost(ex, language));
}
