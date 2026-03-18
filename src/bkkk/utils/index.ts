/**
 * Utils Index
 * Central export file for all utility functions and data
 */

// Configuration
export { siteConfig, getEmptyStateMessage } from './siteConfig';

// Translation and Language
export { translations, getTranslation } from './translations';
export { LanguageProvider, useLanguage } from './languageContext';

// Types
export type { WPImage, WPScheduleItem, WPPost } from './types';

// Data - Exhibitions
export { exhibitions, exhibitionToWPPost, getExhibitionsWithStatus, getExhibitionBySlug, getExhibitionsByStatus, getCurrentExhibitions, getUpcomingExhibitions, getPastExhibitions } from './exhibitionsDataNew';
export type { Exhibition } from './exhibitionsDataNew';
export { exhibitionHelpers } from './exhibitionHelpers';

// Data - Moving Image
export { movingImagePrograms, getCurrentMovingImageProgram } from './movingImageData';
export { movingImageGalleries } from './movingImageGalleryData';

// Data - Residency
export { ARTISTS_DATA, getArtistWithContent } from './residencyData';
export { RESIDENCY_CREDITS } from './residencyCreditData';

// Data - Other
export { MOCK_POSTS_BILINGUAL, MOCK_POSTS, getMockPost, getMockPostsByType } from './mockDataBilingual';
export { PRESS_ITEMS } from './pressDataBilingual';
export { DIRECTORS, TEAM_GROUPS } from './teamDataBilingual';

// Detail Content
export type { DetailContent } from './detailContent';
export { 
  DETAIL_CONTENT,
  getDetailContent,
  getDetailsByCategory,
  getDetailContentByLanguage
} from './detailContent';

export type { DetailContentThai } from './detailContentThaiData';
export {
  DETAIL_CONTENT_THAI,
  getDetailContentThai
} from './detailContentThaiData';

// Search
export { getFullSearchData } from './searchData';
export type { SearchDocument } from './searchData';

// Date and Status Helpers
export { 
  determineStatus,
  determineStatusFromPeriod,
  isCurrentlyActive,
  isUpcoming,
  isPast,
  sortByStatusAndDate,
  getCurrentDate,
  parseDate
} from './dateStatusHelper';
export type { Status } from './dateStatusHelper';

// Assets
export * from './assets';

// Records (if used)
export * from './records';
